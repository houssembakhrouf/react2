import React from 'react'
import product from './products'

const Name = () => {
  return (
    <div>
         <h5 className="card-title text-primary">{product.name}</h5>
    </div>
  )
}

export default Name