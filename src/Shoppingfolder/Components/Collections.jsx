import React from 'react'


const Collections = (props) => {
    const {title, image1, image2, image3, image4, image5, image6, price1, price2, price3, price4, price5, price6}=props.gentsFashion
    
  return (
    <div className='collectionSection w-screen'>
          <h2>{title}</h2>
         <div className='menImages flex  gap-2 w-[118.6px] md:flex md:gap-2 md:w-[246.6px] '>
            <img src={image1} alt="Loading" />
            <img src={image2} alt="Loading" />
            <img src={image3} alt="Loading" />
            <img src={image4} alt="Loading" />
            <img src={image5} alt="Loading" />
            <img src={image6} alt="Loading" />
        </div>
       
    
    
     
    </div>
  )
}

export default Collections
