import React from 'react'
import stele  from "../imgfayl/img.module.scss"
function Img() {
  return (
    <div style={{backgroundImage:`url(/headerImg.png)` , height:"629px", margin:"auto", maxWidth:"1440px"}}>
      <div  className={stele.warappertext}>
       <div>
        <p>/ Start / Categories <br />
          / Headphones and audio for gaming</p>
          <h1>HEADPHONES AND AUDIO <br /> FOR GAMING</h1>
       </div>
      </div>
    </div>
  )
}

export default Img
