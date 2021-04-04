import React, { useState } from 'react'
import { AiFillCaretDown, AiFillCaretUp} from "react-icons/ai";
import SlideItems from './items'; 
import './styles.css'

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextImg = () =>{
    setCurrent( current === length -1 ? 0 : current + 1)
  }

  const previousImg = () =>{
    setCurrent( current === 0 ? length - 1 : current -1)
  }

  if(!Array.isArray(slides) || slides.length <= 0) {
    // TODO: add default image
    return null;
  }
 

  return (
    <section className='slider'>
      <AiFillCaretDown className='down-arrow' onClick={previousImg}/>
      <AiFillCaretUp className='up-arrow' onClick={nextImg}/>
      {SlideItems.map((slide, index) =>{
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
            >
              {index === current && (
                <img src={slide.url} alt='add alt txt' className='image'/>  
              )}
            </div>
        
      )})}
    </section> 
  )
}

export default ImageSlider