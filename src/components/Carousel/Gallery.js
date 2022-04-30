import React from 'react'
import { Carousel } from '3d-react-carousal';

const callback = function(index){
  console.log("callback",index);
}

const Gallery = ({ slides }) => {
  return (
    <Carousel slides={slides} arrows={false} autoplay={true} interval={2500} onSlideChange={callback}/>
  )
}

export default Gallery
