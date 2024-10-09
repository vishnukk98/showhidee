import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
          <MDBNavbar light bgColor='info'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://i.pinimg.com/originals/50/ea/e6/50eae65aa1b3d9ea135ece2a38191b0f.gif'
              height='30'
              alt=''
              loading='lazy'
            />
            SHOW-HIDE
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header
