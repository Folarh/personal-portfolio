import React from 'react'

export default function SKillList({img, stack}) {
  return (
    <div className='skills__images__img'>
    <img src={img} alt="htmllogo"/>
    <p>{stack}</p>
</div>
    
  )
}
