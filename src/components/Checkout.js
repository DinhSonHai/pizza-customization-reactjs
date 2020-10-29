import React from 'react'

export default function Checkout({ ingredients }) {
  return (
    <div style={{ display: 'flex' }}>
      <div>
        <h1>My Ingredients</h1>
        { Object.keys(ingredients).map((ingredient) => {
          return (ingredients[ingredient] && <p>{ ingredient[0].toUpperCase() }{ ingredient.substr(1) }</p> )
        })}
      </div>
    </div>
  )
}
