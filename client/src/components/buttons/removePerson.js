import React from 'react'
import { useMutation } from '@apollo/client'
import { filter } from 'lodash'
import { DeleteOutlined } from '@ant-design/icons'
import { GET_Persons, REMOVE_PERSON } from '../../queries'

const RemovePerson = ({ id, firstName, lastName }) => {
  const [removePerson] = useMutation(REMOVE_PERSON, {
    update(cache, { data: { removePerson } }) {
      const { persons } = cache.readQuery({ query: GET_Persons })
      cache.writeQuery({
        query: GET_Persons,
        data: {
          persons: filter(persons, c => {
            return c.id !== removePerson.id
          })
        }
      })
    }
  })

  const handleButtonClick = () => {
    let result = window.confirm('Are you sure you want to delete this person?')

    if (result) {
      removePerson({
        variables: {
          id
        },
        optimisticResponse: {
          __typename: 'Mutation',
          removePerson: {
            __typename: 'Person',
            id,
            firstName,
            lastName
          }
        }
      })
    }
  }

  return <DeleteOutlined key='delete' onClick={handleButtonClick} style={{ color: 'red' }} />
}

export default RemovePerson