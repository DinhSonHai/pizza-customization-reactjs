import React from 'react';
import Cheese from '../assets/BaseCheese.png';
import Base from '../assets/PizzaBase.png';
import Olive from '../assets/Olive.png';
import Pineapple from '../assets/Pineapple.png';
import Mushroom from '../assets/Mushroom.png';
import Basil from '../assets/Basil.png';
import Tomato from '../assets/Tomato.png';

function Customize() {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ border: '2px solid black', flex: '1' }}>
        <div style={{ maxHeight: '500px', maxWidth: '500px', position: 'relative' }}>
          <img src={Cheese} alt='PizzaBase' height='100%' width='100%' className='ingredients'/>
          <img src={Olive} alt='PizzaBase' height='100%' width='100%' className='ingredients'/>
          <img src={Pineapple} alt='PizzaBase' height='100%' width='100%' className='ingredients'/>
          <img src={Mushroom} alt='PizzaBase' height='100%' width='100%' className='ingredients'/>
          <img src={Basil} alt='PizzaBase' height='100%' width='100%' className='ingredients'/>
          <img src={Tomato} alt='PizzaBase' height='100%' width='100%' className='ingredients'/>
          <img 
            src={Base} 
            alt='PizzaBase' 
            height='100%' 
            width='100%' 
            //className='ingredients'
          />
        </div>
      </div>
      <div style={{ border: '2px solid black', flex: '1' }}>Checkbox</div>
    </div>
  )
};

export default Customize;
