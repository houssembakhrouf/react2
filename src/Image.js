import React from 'react'
import product from './products'

const Image = () => {
  return (
    <div>
        <img src={product.image} className="card-img-top  " alt='' />

    </div>
  )
}

export default Image