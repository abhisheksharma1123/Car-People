import React from 'react'
import { Link } from 'react-router-dom'

const getStyles = () => ({
    notFound:{
        textAlign:"center",
        background:"black",
        position:"absolute",
        width:"100%",
        top:"40%"
    },
    h1:{
        color:"white"
    }
})
    


export const notFound = () =>{
    const styles = getStyles()
    return (
      <div style={styles.notFound}>
      <h1 style = {styles.h1}>Sorry the page your are looking for is not found !!</h1>
      <div>
      <li>
            <Link to="/">Go Back to HomePage</Link>
        </li>
      </div>
      </div>
      
    )
  }
 