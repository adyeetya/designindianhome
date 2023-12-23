import React from 'react'
const Display = () => {

  return (
    <>
    <div className="wrapper">
    
      <div className="img-area">
        <div className="single-img">
          <img src="images/bannernew.png" alt="" />
        </div>
        <div className="single-img">
          <video controls src="video/vid1.mp4" alt="" />
        </div>
        <div className="single-img">
          <img src="video/vid2.mp4" alt="" />
        </div>
       
        <div className="single-img">
          <img src="images/banner1.png" alt="" />
        </div>
      
      
      </div>
    </div>
    
  </>
  
  )
  }

export default Display
