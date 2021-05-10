import React, { Component } from 'react';
import { cityData } from '../data';

const CartContext = React.createContext();

 class CartProvider extends Component {
    state={
        cityData:[],
        cityInfo:[],
        // showInfo:false,
    }
    componentDidMount(){
        this.setCityData();
       
    }
    
    setCityData = () =>{
        let tempData =[];
        cityData.forEach(data =>{
            const singleCity={...data};
            tempData=[...tempData,singleCity];
        })
        this.setState(()=>{
           return{ cityData:tempData };
        })
    }

    getItem = (id) =>{
        const data= this.state.cityData.find(item=> item.id === id);
        return data;
    }
    showInfoHandler = (id) =>{
       const city = this.getItem(id);
       city.showInfo= !city.showInfo;  //Flip the value
       this.setState(()=>{
           return{  }; 
          
       })
     
      
    }
    removeCartHandler =(id) =>{
          const  TempCart = [...this.state.cityData];
          const sortedCart = TempCart.filter(item => item.id !== id);
          this.setState(()=>{
              return {cityData:sortedCart}
          })
          
          
    }
   
    render() {
        console.log(this.state.showInfo);
        return (
            
            <CartContext.Provider
              value={{
             ...this.state,
             showInfoHandler:this.showInfoHandler,
             removeCartHandler:this.removeCartHandler,
              }}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}

const CartConsumer = CartContext.Consumer;

export {CartProvider,CartConsumer};