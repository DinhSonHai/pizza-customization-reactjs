import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';

import Cheese from '../assets/BaseCheese.png';
import Base from '../assets/PizzaBase.png';
import Olive from '../assets/Olive.png';
import Pineapple from '../assets/Pineapple.png';
import Mushroom from '../assets/Mushroom.png';
import Basil from '../assets/Basil.png';
import Tomato from '../assets/Tomato.png';

function Customize({ ingredients, setIngredients }) {
  const history = useHistory();
  const onChange = (e, name) => {
    let newIngredients = JSON.parse(JSON.stringify(ingredients));
    newIngredients[name] = e;
    setIngredients(newIngredients);
    localStorage.setItem("ingredients", JSON.stringify(newIngredients));
  }
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ border: '2px solid black', flex: '1' }}>
        <div style={{ maxHeight: '500px', maxWidth: '500px', position: 'relative' }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ 
              scale: ingredients["cheese"] ? 1 : 0, 
            }}
            transition={{ duration: 0.3 }}
            className="cheese z1">
              <img src={Cheese} alt='Cheese' height='100%' width='100%'/>
          </motion.div>


          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              y: ingredients["olive"] ? 100 : -100,
              opacity: ingredients["olive"] ? 1 : 0, 
            }}
            transition={{ duration: 1 }}
            className="ingredients z4">
              <img src={Olive} alt='Olive' height='100%' width='100%'/>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              y: ingredients["pineapple"] ? 100 : -100,
              opacity: ingredients["pineapple"] ? 1 : 0, 
            }}
            transition={{ duration: 1 }}
            className="ingredients z3">
              <img src={Pineapple} alt='Pineapple' height='100%' width='100%'/>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              y: ingredients["mushroom"] ? 100 : -100,
              opacity: ingredients["mushroom"] ? 1 : 0, 
            }}
            transition={{ duration: 1 }}
            className="ingredients z4">
              <img src={Mushroom} alt='Mushroom' height='100%' width='100%'/>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              y: ingredients["basil"] ? 100 : -100,
              opacity: ingredients["basil"] ? 1 : 0, 
            }}
            transition={{ duration: 1 }}
            className="ingredients z4">
              <img src={Basil} alt='Basil' height='100%' width='100%'/>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              y: ingredients["tomato"] ? 100 : -100,
              opacity: ingredients["tomato"] ? 1 : 0, 
            }}
            transition={{ duration: 1 }}
            className="ingredients z4">
              <img src={Tomato} alt='Tomato' height='100%' width='100%'/>
          </motion.div>

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
        <button onClick={() => history.push("/checkout")}>Proceed to Checkout</button>
        {JSON.stringify(ingredients)}
      </div>
    </div>
  )
};

export default Customize;
