import React from 'react'

function Footer() {
  return (
    <>
      <footer className='bg-light mt-5'>
        <div className="row container m-5 p-5">

          <div className="col-sm" ><h4>Shop</h4>
            <p className='mt-4'>Men</p>
            <p>Women</p>
            <p>Kids</p>
          </div>
          <div className="col-sm"><h4>Sites & Stores</h4>
            <p className='mt-4'>About Us</p>
            <p>Store Locator</p>
            <p>Contact Us</p>
            <div className='fs-5'>
              <i class="fa-brands fa-facebook mx-2"></i>
              <i class="fa-brands fa-instagram mx-2"></i>
              <i class="fa-solid fa-phone mx-2"></i>
            </div>

          </div>
          <div className="col-sm">
            <h6 className='mt-4'>Get the latest updates from our stores</h6>
            <input className='mt-3' type="text" placeholder='Email ID' />
            <button style={{ width: "40px" }} className='ms-3 btn-info'><i class="fa-solid fa-arrow-right"></i></button>


          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer