;



function Cart({onCloseCart,items,onRemove =[]})  {
    
    return(

        <div className = 'shadowCart'>
            <div className = 'cart'>
               <div className ='d-flex justify-between'> 
                 <h2>
                         Корзина 
                 </h2>
           
                    <img  src = 'img/icons/close.svg' className = "close" rel = "закрыть"   height ={35} width = {35} onClick = {onCloseCart} />
               </div>
               
                 
             
               
              
              
                <div className ='BlockCart d-flex'> 
                 
     




           <div> 
                {items.map((items) => ( 
                <div className ='card'> 
                <img src = {items.imgUrl}  height = {100} width = {90}/>
                <span>
                    <p>{items.name}</p>
                    
                    <b>{items.price}</b>
              </span>
              <img  src = 'img/icons/close.svg' className = "close" 
              height ={25} width = {25} onClick = {() =>  onRemove(items.id)} />
        
           </div>
                 
                 
                
               ))}
                
                </div>
              
                    
                
                    
                </div>
                   
                    



            </div>
        

        </div>
        
          
    )
}

export default Cart;




















