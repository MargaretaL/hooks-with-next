import React, { useRef } from 'react'
import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver'
import ImageTogglerOnScroll from '../src/ImageTogglerOnScroll'

// Primarily used to allow access directly to an element in the DOM


const ImageChangeOnMouseOver = () => {
    return <div>
         <ImageToggleOnMouseOver primaryImg="/static/pic/car-climb-clouds-679072.mindre.jpg" alt=""
            secondaryImg="static\pic\IMG_20190504_185301.jpg" />
        Hej 
        {/* <ImageTogglerOnScroll primaryImg="/static/pic/IMG_20190504_153146.jpg" alt=""
            secondaryImg="static\pic\IMG_20190504_185301.jpg" />
        Hej */}
    </div>
}

export default ImageChangeOnMouseOver;