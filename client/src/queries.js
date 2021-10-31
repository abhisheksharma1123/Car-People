import { gql } from '@apollo/client'

export const GET_Persons = gql`
  {
    persons {
        id
        firstName
        lastName
      }
  }
`
export const GET_CARS = gql`
  {
    cars {
        id
        year
        make
        price
        personId
        model
      }
  }
`
export const GET_PERSON_WITH_CARS = gql`
query Query($id: String!) {
    personWithCars(id: $id) {
      person {
        id
        firstName
        lastName
      }
      personCars {
        id
        year
        make
        price
        personId
        model
      }
    }
  }
`
export const ADD_Person = gql`
  mutation AddCar($id: String!, $firstName: String!, $lastName: String!) {
    addPerson(id: $id, firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`

export const ADD_CAR = gql`
mutation AddCar($id: String!, $year: Int!, $make: String!,$price: Float!, $personId: String!, $model: String!){
addCar(id: $id, year: $year, make: $make, price: $price, personId: $personId, model: $model) {
    id
    year
    make
    price
    personId
    model
    }
  }
`
export const REMOVE_PERSON = gql`
mutation RemovePerson($id: String!) {
    removePerson(id: $id) {
        id
        firstName
        lastName
    }
  }
`
export const REMOVE_CAR = gql`
mutation RemoveCar($id: String!) {
    removeCar(id: $id) {
      id
      year
      make
      price
      personId
      model
    }
  }
`
export const UPDATE_PERSON = gql`
mutation UpdatePerson($id: String!, $firstName: String!, $lastName: String!) {
    updatePerson(id: $id, firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`

export const UPDATE_CAR = gql`
mutation UpdateCar($id: String!, $year: Int!, $make: String!, $price: Float!, $personId: String!, $model: String!) {
    updateCar(id: $id, year: $year, make: $make, price: $price, personId: $personId, model: $model) {
      model
      id
      make
      year
      price
      personId
    }
  }
`