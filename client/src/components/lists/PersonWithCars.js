import React, { useEffect } from 'react'
import { Card, List } from 'antd'
import { useQuery } from '@apollo/client'
import {useParams, Link} from 'react-router-dom'
import { GET_PERSON_WITH_CARS } from '../../queries';

const getStyles = () => ({
    list: {
      display: 'flex',
      justifyContent: 'center'
    },
    GridStyle: {
      display:"flex",
      gap: "0.5rem",
      marginBottom:"5px"
    },
    
    card: {
        margin: "10px",
        backgroundColor:"#0E334A",
        color:"#FF5F55"
      },
      cardInner:{
        margin: "10px",
        color:"#FF5F55" 
      }
  })

export const Users = () =>{
    useEffect(()=>refetch(),[])
    let {id} = useParams();
    const styles = getStyles()
    const { loading, error, data, refetch } = useQuery(GET_PERSON_WITH_CARS, {variables: {id:id}})
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  const firstName = data.personWithCars.person.firstName
  const lastName = data.personWithCars.person.lastName
  

  return (
    <>
    <div>
      <li>
            <Link to="/">Go Back to HomePage</Link>
        </li>
      </div>
      <List grid={{ gutter: 20, column: 1 }} style={styles.list}>
    <Card title = {`${firstName} ${lastName}`} style={styles.card} bordered={false} >
    {data.personWithCars.personCars.map(({ id, make, model, year, price, personId }) => (
        <div style = {{display:"flex", flexDirection:"row", gap:"1rem"}}>
            <List.Item key={id}>
         <Card style={styles.cardInner}>
              <div style = {styles.GridStyle}>
                <div>{make}</div >
                <div>{model}</div >
                <div>{price}</div >
                <div>{year}</div >
               </div>
              <div>Person Id: {personId}</div>
          </Card>
        </List.Item>
        </div>
      ))}
    </Card>
    </List>
    </>
  )
  }