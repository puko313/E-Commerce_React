import React from 'react'
import { ThemeConsumer } from '../context/ThemeContexts';

export default function CartItem ({item,value}) {
    const {id, title, img, price, total, count} = item;
    const {increment,decrement,removeItem} = value;
    return (
        <ThemeConsumer>
        {({ theme }) => (
        <div className="row my-2 text-capitalize text-center">
           <div className="col-10 mx-auto col-lg-2">
              <img src={img} style={{width:"5rem" , height:"5rem"}}className="img-fluid" alt="product"/>
           </div>
           <div className={theme ? "col-10 mx-auto col-lg-2 text-light" : "col-10 mx-auto col-lg-2"} >
               <span className={theme ? "d-lg-none text-light" : "d-lg-none"}>product : </span>{title}
           </div>
           <div className={theme ? "col-10 mx-auto col-lg-2 text-light" : "col-10 mx-auto col-lg-2"}>
                <span className={theme ? "d-lg-none text-light" : "d-lg-none"}>price : </span>{price}
           </div>

            {/**/} 
            <div className={theme ? "col-10 mx-auto col-lg-2 text-light" : "col-10 mx-auto col-lg-2"} >
                <div className="cart-icon" onClick={()=>removeItem(id)}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
            <div className={theme ? "col-10 mx-auto col-lg-2 text-light" : "col-10 mx-auto col-lg-2"} >
                <strong>item total : $ {total}</strong>
            </div>
        </div>
         )}
         </ThemeConsumer>
    )
}
