import React from 'react'
import { useQuery } from '@apollo/client'
import { List } from 'antd'

import { GET_Persons } from '../../queries'
import { Person } from '../../list/Person'
import AddPerson from '../forms/AddPerson'
import AddCar from '../forms/AddCar'


const getStyles = () => ({
  list: {
    display: 'flex',
    justifyContent: 'center'
  }
})

const Persons = () => {
  const styles = getStyles()

  const { loading, error, data } = useQuery(GET_Persons)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <div className="App">
    <h1 style = {{textAlign:"center", color: '#FF5F55'}}>People Car Management Panel</h1>
    <AddPerson/>
    <AddCar/>
    <List grid={{ gutter: 20, column: 1 }} style={styles.list}>
      {data.persons.map(({ id, firstName, lastName }) => (
        <List.Item key={id}>
          <div style={{display:"flex"}}>
          <Person firstName={firstName} lastName = {lastName} pid ={id}/>
          </div>
        </List.Item>
        
      ))}
    </List>
    </div>
  )
}

export default Persons