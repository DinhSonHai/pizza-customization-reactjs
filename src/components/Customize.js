import React, { useState } from 'react';
import Cheese from '../assets/BaseCheese.png';
import Base from '../assets/PizzaBase.png';
import Olive from '../assets/Olive.png';
import Pineapple from '../assets/Pineapple.png';
import Mushroom from '../assets/Mushroom.png';
import Basil from '../assets/Basil.png';
import Tomato from '../assets/Tomato.png';

function Customize({ ingredients, setIngredients }) {
  const onChange = (e, name) => {
    console.log(e)
    let newIngredients = JSON.parse(JSON.stringify(ingredients));
    newIngredients[name] = e;
    setIngredients(newIngredients);
    localStorage.setItem("ingredients", JSON.stringify(newIngredients));
  }
  return (
    <div style={{ display: 'flex' }}>
      {/* {JSON.stringify(ingredients)} */}
      <div style={{ border: '2px solid black', flex: '1' }}>
        <div style={{ maxHeight: '500px', maxWidth: '500px', position: 'relative' }}>
          <img src={Cheese} alt='Cheese' height='100%' width='100%' className='ingredients'/>
          <img src={Olive} alt='Olive' height='100%' width='100%' className='ingredients'/>
          <img src={Pineapple} alt='Pineapple' height='100%' width='100%' className='ingredients'/>
          <img src={Mushroom} alt='Mushroom' height='100%' width='100%' className='ingredients'/>
          <img src={Basil} alt='Basil' height='100%' width='100%' className='ingredients'/>
          <img src={Tomato} alt='Tomato' height='100%' width='100%' className='ingredients'/>
          <img 
            src={Base} 
            alt='PizzaBase' 
            height='100%' 
            width='100%' 
            //className='ingredients'
          />
        </div>
      </div>
      <div style={{ border: '2px solid black', flex: '1' }}>
        <label className="container-checkbox">
          Cheese
          <input type="checkbox" checked={ingredients["cheese"]} onChange={(e) => onChange(e.currentTarget.checked, 'cheese')}></input>
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Olive
          <input type="checkbox" checked={ingredients["olive"]} onChange={(e) => onChange(e.currentTarget.checked, 'olive')}></input>
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Pineapple
          <input type="checkbox" checked={ingredients["pineapple"]} onChange={(e) => onChange(e.currentTarget.checked, 'pineapple')}></input>
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Mushroom
          <input type="checkbox" checked={ingredients["mushroom"]} onChange={(e) => onChange(e.currentTarget.checked, 'mushroom')}></input>
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Basil
          <input type="checkbox" checked={ingredients["basil"]} onChange={(e) => onChange(e.currentTarget.checked, 'basil')}></input>
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Tomato
          <input type="checkbox" checked={ingredients["tomato"]} onChange={(e) => onChange(e.currentTarget.checked, 'tomato')}></input>
          <span className="checkmark"></span>
        </label>
      </div>
    </div>
  )
};

export default Customize;
