import React from 'react'
import { Card } from 'antd'
import { Link } from 'react-router-dom';
import Cars from '../components/lists/Cars';
import RemovePerson from "../components/buttons/removePerson"

const getStyles = () => ({
    card: {
      width: '500px',
      margin: "10px",
      backgroundColor:"#0E334A"
    }
  })

  export const Person = ({firstName, lastName, pid}) => {
      const styles = getStyles();
     
      return(
    <>
        <Card  actions={[
            <RemovePerson id={pid} firstName={firstName} lastName={lastName} />
          ]} style={styles.card}>
          <div style={{color:"#FF5F55",textAlign:"center", marginBottom:"5px"}}>{firstName} {lastName}</div>
            <Cars pid={pid}/>
          <div ><Link style={{color:"#FF5F55", border:"2px solid #FF5F55", padding:"5px"}} to={`/person/${pid}`}>Learn More</Link></div>
        </Card>
    </>
      )
   
  }
