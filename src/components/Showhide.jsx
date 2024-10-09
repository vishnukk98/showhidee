import React, { useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';

function Showhide() {
    const[showText,setShowText]=useState(false)

    function textShow(){
        setShowText(true)
    }
    function textHide(){
        setShowText(false)
    }
  return (
    <div>
          <div className="container text-center border border-2 border-success mt-3 w-50 "style={{ height: '650px' }}>
        
        <img
        src='https://cdn.dribbble.com/users/185824/screenshots/2106331/message.gif'
        className="img-fluid custom-height"
        />
{showText && <p className='mb-4' style={{bottom:"80px"}}>HELLO</p>}
<div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)' }}>
    <MDBBtn className='me-1 mt-3 mb-2 ' color='success' onClick={textShow}>
        SHOW
      </MDBBtn>
      <MDBBtn className='me-1 mt-3 mb-2' color='danger' onClick={textHide}>
        HIDE
      </MDBBtn>
      
     
      
       

        </div>
        </div>
    </div>
  )
}

export default Showhide
