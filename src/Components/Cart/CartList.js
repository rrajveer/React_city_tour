import React, { Component } from 'react'
import CartItem from './CartItem';
import { CartConsumer } from '../Context'
export default class CartList extends Component {
  
    render() {
        
        return (
            <React.Fragment>
               <div className="container">
                   <div className="row">
                       <div className="d-flex flex-wrap ">
                        
                   <CartConsumer>
                  {(value)=>{
                      return value.cityData.map(data =>{
                          //console.log(value); 
                          return <CartItem key={data.id} data={data} />
                      })
                       
                  }}
                </CartConsumer>
                </div>
                   </div>
               </div>
         
            </React.Fragment>    
            
        )
    }
}
