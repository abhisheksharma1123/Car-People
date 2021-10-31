import React from 'react'
import { useQuery } from '@apollo/client'
import { List, Card } from 'antd'

import { GET_CARS } from '../../queries'
import RemoveCar from '../buttons/removeCar'


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
  card:{
    color:"#FF5F55"
  }
})

const Cars = ({pid}) => {
  const styles = getStyles()

  const { loading, error, data } = useQuery(GET_CARS)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  

  return (
    <>
    
    <List grid={{ gutter: 20, column: 1 }} style={styles.list}>
      {data.cars.filter(({personId}) => personId === pid).map(({ id, make, model, year, price, personId }) => (
        <List.Item key={id}>
          <Card style={styles.card} actions={[
            <RemoveCar id={id} model={model} price={price} make={make} year={year} personId={personId} />
          ]}>
              <div style = {styles.GridStyle}>
                <div>{make}</div >
                <div>{model}</div >
                <div>{price}</div >
                <div>{year}</div >
                </div>
                <div>Person Id: {personId}</div>
          </Card>
        </List.Item>
      ))}
    </List>
    </>
  )
}

export default Cars