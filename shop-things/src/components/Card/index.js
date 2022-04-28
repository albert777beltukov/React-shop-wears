import cardStyles from './Card.module.scss';
import React from 'react';

function Card({imgUrl,name,price,addItem})  {
    const [color, setColor] = React.useState(true);

    const [add, setAdd] = React.useState(true);

    const onClickAdd = () => {
        setAdd(!add);
        addItem({imgUrl,name,price});
    };

    

    const onClickHeart = () => {
        setColor(!color);
    };



    return(

         <div className = {cardStyles.cardBlock} >
             <div className =  {cardStyles.heart}>
              <img src={color? "img/icons/heart.svg" : "img/icons/heart-color.svg"} 
              onClick = {onClickHeart} alt="heart" height ={30} width = {30}  /> 
              <img className = {cardStyles.add} src={add? "img/icons/add.svg" : "img/icons/add-color.svg"} 
              onClick = {onClickAdd} alt="add" height ={50} width = {50}  /> 
            
             </div>

             <img src={imgUrl}  height ={200} width = {170} />

             <div className = {cardStyles.textButton}>
             <p> {name} </p>
             <b>{price}</b> 
             </div>
             
                
             
         </div> 
    )
}

export default Card;
