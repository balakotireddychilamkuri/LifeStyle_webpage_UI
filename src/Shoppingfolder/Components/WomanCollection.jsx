import React from 'react'

const WomanCollection = (props) => {

    const {title, image1, image2, image3, image4, image5, image6, price1, price2, price3, price4, price5, price6}=props.ladiesFashion
  return (

    <div>

     <h1>{title}</h1>
        <div className='bannerbox ' >
            <img src="assets/LadiesBanner.gif" alt=""  className='w-screen'/>
        </div>
    

     <div className='womenImages flex gap-2'>
     <h1><img src={image1} alt="Loading" /></h1>
     <h1><img src={image2} alt="Loading" /></h1>
     <h1><img src={image3} alt="Loading" /></h1>
     <h1><img src={image4} alt="Loading" /></h1>
     <h1><img src={image5} alt="Loading" /></h1>
     <h1><img src={image6} alt="Loading" /></h1>
     </div>
    </div>
       
  )
}

export default WomanCollection
