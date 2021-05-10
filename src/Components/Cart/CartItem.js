import React, { Component } from 'react';
import { CartConsumer } from '../Context'
import styled from 'styled-components';

export default class CartItem extends Component {
   
    render() {
        // console.log(this.props.data);
       const { id, title,img, subtitle,info,showInfo} = this.props.data;
        //console.log(this.props.data.showInfo);
       
        return (   
        <CartWrapper className="col-9 mx-auto col-md-5 col-lg-3 my-5">
             <CartConsumer>
           {value =>(
            <div className="card">
           
                <div className="img-container ">
                <img className="img-fluid img-responsive" src={img}
                   alt="Naturepic" style={{height:"200px" , width:"100%"}}/>
                   
                <span className="close-btn">
                    <i className="fas fa-window-close" onClick={()=>value.removeCartHandler(id)}/>
                </span>
                      
             </div>

               {/* Cart-Footer */}
       
         
      
             <div className="cart-footer mt-1 ">
                <h5 className="text-title text-uppercase">{title}</h5>
                  <p className="text-subtitle">{subtitle}</p>
                  
                              
                       <p className="mt-0 pt-0"> info{" "}
                              <span className="drop-down-icon">
                                <i className="far fa-caret-square-down" onClick={()=>value.showInfoHandler(id)}/> 
                                {console.log(this.props.data.showInfo)}

                                {showInfo ? <p>{info}</p>:""} 
                                </span>
                                
                        </p>
                  
                             
                            
                </div>
             </div>
          )}
         </CartConsumer>
    

         

           

        </CartWrapper>
            
        
        )
    }
}
const CartWrapper = styled.div`
cursor:pointer;

.card{
    border-color:transparent;
    transition: all 1s linear;
    background:var(--mainGrey);
    border-radius: 1rem 1rem 0rem 0rem;

}
.card-footer{
    border-top:transparent;
    background:transparent;
    transition: all 1s linear;
}

&:hover  {
    .card{
    border: 0.04rem solig rgba(0,0,0,0.2);
    box-shadow: 2px 2px 5px 5px rgba(0,0,0,0.2);
}
 .card-footer{
     background: rgb(211,211,211,0.2);
 }

}

.img-container{
    position:relative;
    overflow:hidden;
    border-radius: 1rem 1rem 0rem 0rem;
}
.close-btn{
    position:absolute;
    display:block;
    top:1rem;
    color:var(--mainGreen);
    right:1rem;
    transition:all 0.5s linear;
    opacity:0;
}
.drop-down-icon{
       margin:0.2rem;
    color:var(--mainGreen);
    
}

.card-img-top{
    transition: all 1s linear;
}

.img-container:hover .card-img-top{

    transform:scale(1.2)
}


.img-container:hover .close-btn{
    opacity:1;

}


`;