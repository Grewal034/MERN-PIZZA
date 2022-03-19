import React, {useState} from 'react'

export default function Pizza({pizza}) {
    const [ quantity , setQuantity ] = useState(1);
    const [ varient , setvarient ] = useState('small');
  return (
    <div>
        <h1>{pizza.name}</h1>
        <img src={pizza.image} className="img-fluid" style ={{height: '200px' , width:'200px'} }/>

        <div className="flex-container">
            <div className='w-100'>
                <p>Varients</p>
                <select value = {varient} onChange={(e)=>{setvarient(e.target.value)}}>
                {pizza.varients.map(varient =>{
                    return <option>{varient}</option>
                } )}
                </select>
            </div>
            <div className='w-100'>
                <p>Quantity</p>
                <select value = {quantity} onChange={(e)=>{setvarient(e.target.value)}}>
                   {[...Array(10).keys()].map((x, i)=>{
                     return <option value = {i+1}>{i+1}</option>  // creating 10 quantities for each pizza
                   })}
                </select>
            </div>
            
        </div>

        <div className="flex-container">
            <div>
                   <h1>Price: {pizza.prices[0][varient] * quantity}</h1>
            </div>
            <div>
                   <button className="btn btn-primary">Add to Cart</button>
            </div>
        </div>
    </div>
  )
}
