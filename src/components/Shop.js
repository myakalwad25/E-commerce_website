import React from 'react'
import './shop.css'
import Product_section from './Product_section'
export default function Error() {
  return (
    <div className='shop'>
      <div className="shop_header header"></div>
      <Product_section heading ={'New Arrival Products'} subheading={'New collections New Modern Design'} filter={'new_arrival'}/>
      <Product_section heading ={'Feature Products'} subheading={'Summer collections New Modern Design'} filter={'feature_product'}/>
    </div>
  )
}
