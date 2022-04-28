import Card from "./components/Card";
import Header from "./components/Header";
import Cart from "./components/Cart";
import React from "react";
import axios from "axios";


function App() {
  let [items,setItems] =  React.useState([]);


React.useEffect(() => {
    axios.get('https://6118d5149bcfb400171688f4.mockapi.io/Items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://6118d5149bcfb400171688f4.mockapi.io/Cart').then((res) => {
      setCartItems(res.data);
    });
  }, []);

  const onRemoveItem = (id) => {
    console.log(id);
      axios.delete(`https://6118d5149bcfb400171688f4.mockapi.io/Cart/${id}`) ;
      setCartItems ((prev) => prev.filter(items => items.id !== id));
  }; 
  
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue,setSearchValue] = React.useState('');
  
  
  const onAddToCart = (items) => {
    axios.post('https://6118d5149bcfb400171688f4.mockapi.io/Cart', items) ;
    setCartItems (prev =>[...prev, items]);
    
} 
    return (
             
        <div className ="wrapper clear">    
        
                       
         {cartOpened ? <Cart items = {cartItems} onRemove = {onRemoveItem}  onCloseCart = {() => setCartOpened(false)}/> : null}
             <Header  onClickCart = {() => setCartOpened(true)} />
            
         <body>
           
         <div className = "search">
            <form>
             <input type = "text" value = {searchValue} placeholder = "Поиск..." onChange ={(event) => setSearchValue(event.target.value)} /> 
            { searchValue && <img src = 'img/icons/close.svg' onClick ={()=>setSearchValue('')} className = "closeSearch"  height ={25} width = {25}  />}
           <button type = "submit">
          
           </button>
           
             </form>
              </div> 
              
           
           
            <div className ="container-cards justify-center ">
           
               {items
               .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
               .map((item, index) => (
                 <Card
                 key = {index}
                 imgUrl ={item.imgUrl}
                 name = {item.name}
                 price = {item.price}
                 addItem = {(items) => onAddToCart(items)}

                 />
               ))}
            </div>

         </body>

        </div>  

    );
}

export default App;
