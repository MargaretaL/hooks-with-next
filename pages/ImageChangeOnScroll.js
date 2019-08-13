
import React, { useRef } from 'react'
import ImageTogglerOnScroll from '../src/ImageTogglerOnScroll'

// Primarily used to allow access directly to an element in the DOM


const ImageChangeOnScroll = () => {
    return <div>
    <div>
        <ImageTogglerOnScroll primaryImg="/static/pic/car-climb-clouds-679072.mindre.jpg" alt=""
            secondaryImg="IMG_20190504_153146.jpg" />
        Hej
    </div>
        <div>
            <ImageTogglerOnScroll primaryImg="/static/pic/IMG_20190504_153146.jpg" alt=""
                secondaryImg="static\pic\IMG_20190504_185301.jpg" />
            Hej
    </div>
    <div>
        <ImageTogglerOnScroll primaryImg="/static/pic/car-climb-clouds-679072.mindre.jpg" alt=""
            secondaryImg="IMG_20190504_153146.jpg" />
        Hej
    </div>
        <div>
            <ImageTogglerOnScroll primaryImg="/static/pic/IMG_20190504_153146.jpg" alt=""
                secondaryImg="static\pic\IMG_20190504_185301.jpg" />
            Hej
    </div>
    <div>
        <ImageTogglerOnScroll primaryImg="/static/pic/car-climb-clouds-679072.mindre.jpg" alt=""
            secondaryImg="IMG_20190504_153146.jpg" />
        Hej
    </div>
        <div>
            <ImageTogglerOnScroll primaryImg="/static/pic/IMG_20190504_153146.jpg" alt=""
                secondaryImg="static\pic\IMG_20190504_185301.jpg" />
            Hej
    </div>
    </div>
}

export default ImageChangeOnScroll;