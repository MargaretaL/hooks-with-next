import React, { useRef } from 'react'

// Primarily used to allow access directly to an element in the DOM


const ImageToggleOnMouseOver = ({primaryImg, secondaryImg}) => {

    const imageRef = useRef(null);

    return <div>
        <img src={primaryImg} alt="" onMouseOver={() => {imageRef.current.src=secondaryImg}} 
        onMouseOut={() => {imageRef.current.src=primaryImg}} ref={imageRef}
        />      
        Hej
    </div>
}

export default ImageToggleOnMouseOver;