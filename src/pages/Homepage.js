import React from 'react'
import pizzas from '../pizzasdata'

export default function Homepage() {
  return (
    <div>
        <h1>{pizzas.length}</h1>
    </div>
  )
}
