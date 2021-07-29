import React from 'react';
import './App.css';
import {Link} from  'react-router-dom';
import Shoes from './shoe.json';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';






export default function Product() {
    console.log(Shoes['air-jordan-1-valor-blue'].name)
    return (
        <div className='product-container'>
            <h1 id='h1'>Welcome to Product</h1>
          <div className='products'>
          <Grid container spacing={3}>
              {Object.keys(Shoes).map(keyName=>{
                  const shoe = Shoes[keyName]
                  console.log(shoe.name)
                  return(
                    <Grid item xs={12} sm={4} key={keyName} className= "product-container">
                    <Paper elevation={3}>
                      
                          <Link   to={`/productItem/${keyName}`}>
                              <h3 className='h3'>{shoe.name}</h3>
                              <img src={shoe.img1} alt='not found' height={500} width={490} /></Link>
                              </Paper>
                              

                          </Grid>
          
                  )
              })
              }
              </Grid>
              
          </div>
        </div>
    )
}



