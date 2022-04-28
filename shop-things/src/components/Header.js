function Header(props)  {
    return(

        <header className = 'd-flex justify-center'> 
         
        
       <div >
          <img src = '/img/icons/logo1.svg' rel = "логотип"  height ={200} width = {550}  className = 'logoMain' />
        </div>
         
        <img src = 'img/icons/cart.svg' rel = "корзина" onClick = {props.onClickCart} className = 'cart-header' height = {50} width = {50} />
        <img src = 'img/icons/heart-color.svg' rel = "избранное"  className = 'heart-header' height = {50} width = {50} />
        

  
  
     </header>
         

    )
}

export default Header;