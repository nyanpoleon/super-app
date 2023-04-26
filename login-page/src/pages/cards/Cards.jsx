import { useState } from 'react'
import React from 'react'
import '../Category.css'
function Cards({title, image, onSelect}) {
  const [selected, setSelected] = useState(false)

  const handleSelect = () => {
    setSelected(!selected)
    onSelect({title, selected: !selected})
  }
  return (
    <div className='card'>
        <div className='card-title'>
            <h3>{title}</h3>
        </div>
        <div>
            <img className='card-image' src={image} alt={title} />
        </div>
    </div>
  )
}

export default Cards