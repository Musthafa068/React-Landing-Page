import React from 'react'
import Header from './components/Header'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from './components/Footer';
import Carousel from 'react-bootstrap/Carousel';

function App() {
  return (
    <>
      <Header />

      <div className='container-fluid'>


        <Carousel>
          {/* First Slide */}
          <Carousel.Item>
            <img className="d-block w-100" src="https://www.westside.com/cdn/shop/files/Ahsaas-Web_385513ca-bcc0-4e8c-9be2-46329f8491b1.gif?v=1730270251" alt="First slide" />

            <Carousel.Caption>
              <h3>Shop Cargo</h3>
              <p>Check out our latest cargo collection!</p>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Second Slide */}
          <Carousel.Item>
            <img className="d-block w-100" src="https://www.westside.com/cdn/shop/files/C3_03_1920X900_SHOP_CARGO_1681e38c-223f-4c88-8609-450d63b82cbd.jpg?v=1730268831" alt="First slide" />
            <Carousel.Caption>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Third Slide */}
          <Carousel.Item>
            <img className="d-block w-100" src="https://www.westside.com/cdn/shop/files/C3_01_1920X900_TEEN_GIRLS.jpg?v=1731659159" alt="First slide" />
            <Carousel.Caption>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>



        <div className='container-fluid row mt-2'>
          <div style={{ flexWrap: "wrap" }} className='col-lg-12 col-sm-6 col-md-4 d-flex justify-content-center m-5 p-5'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://www.westside.com/cdn/shop/files/300995652GREY_1.jpg?v=1730897593&width=493" />
              <Card.Body>
                <Card.Title>WES Formals</Card.Title>
                <Card.Text>
                  WES Formals Navy Checkered Relaxed-Fit Cotton Shirt
                  <p>₹ 999.00</p>
                </Card.Text>
                <Button variant="dark">Buy Now</Button>
              </Card.Body>
            </Card>

            <Card className='ms-3' style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://www.westside.com/cdn/shop/files/300988322BEIGE_1.jpg?v=1731601442&width=493" />
              <Card.Body>
                <Card.Title>WES Casuals</Card.Title>
                <Card.Text>
                  WES Casuals Beige Cargo-Style Relaxed-Fit Mid-Rise Joggers
                  <p>₹ 1,699.00</p>
                </Card.Text>
                <Button variant="dark">Buy Now</Button>
              </Card.Body>
            </Card>

            <Card className='ms-3' style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://www.westside.com/cdn/shop/files/300986972BEIGE_1.jpg?v=1728024036&width=493" />
              <Card.Body>
                <Card.Title>Wes Casuals</Card.Title>
                <Card.Text>
                  WES Casuals Beige Mid-Rise Relaxed-Fit Cotton Blend Chinos
                  <p>₹ 1,699.00</p>
                </Card.Text>
                <Button variant="dark">Buy Now</Button>
              </Card.Body>
            </Card>

            <Card className='ms-3' style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://www.westside.com/cdn/shop/files/300990666BLACK_1.jpg?v=1728568031&width=493" />
              <Card.Body>
                <Card.Title>Nuon</Card.Title>
                <Card.Text>
                  Nuon Black Relaxed-Fit Mid-Rise Cotton Blend Chinos
                  <p>₹ 1,499.00</p>
                </Card.Text>
                <Button variant="dark">Buy Now</Button>
              </Card.Body>
            </Card>

          </div>
        </div>
        <div className='container-fluid row'>

          <div style={{ flexWrap: "wrap" }} className='col-lg-12 col-sm-6 col-md-4 d-flex  justify-content-center m-5 p-5'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://www.westside.com/cdn/shop/files/300976257BLACK_1.jpg?v=1712311969&width=493" />
              <Card.Body>
                <Card.Title>Wunderlove</Card.Title>
                <Card.Text>
                  Wunderlove Black Ribbed Straight-Fit Supersoft Pants
                  <p>₹ 1499.00</p>
                </Card.Text>
                <Button variant="dark">Buy Now</Button>
              </Card.Body>
            </Card>

            <Card className='ms-3' style={{ width: '18rem' }}>
              <Card.Img style={{ height: "357px", marginTop: "25px" }} variant="top" src="https://www.westside.com/cdn/shop/files/Boys_1000X1380_PX_daa8a931-9e6b-472e-b044-a14b1c89a8d6.jpg?v=1731647028&width=500" />
              <Card.Body>
                <Card.Title> Y&F
                </Card.Title>
                <Card.Text>
                  Y&F Kids Off-White Text Design Fleece Jacket
                  <p>₹ 1499.00</p>
                </Card.Text>
                <Button variant="dark">Buy Now</Button>
              </Card.Body>
            </Card>

            <Card className='ms-3' style={{ width: '18rem' }}>
              <Card.Img style={{ height: "357px", marginTop: "25px" }} variant="top" src="https://www.westside.com/cdn/shop/files/Kids_250x_321_px_fcd34fcf-d436-49cc-b13c-74306a87aee3.jpg?v=1731657690&width=2000" />
              <Card.Body>
                <Card.Title> Y&F</Card.Title>
                <Card.Text>
                  Y&F Kids Off-White Quilted Puffer Jacket
                  <p>₹ 1,799.00</p>
                </Card.Text>
                <Button variant="dark">Buy Now</Button>
              </Card.Body>
            </Card>

            <Card className='ms-3' style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://www.westside.com/cdn/shop/files/300999790OLIVE_1.jpg?v=1731565796&width=493" />
              <Card.Body>
                <Card.Title>Ascot</Card.Title>
                <Card.Text>
                  Ascot Light Beige Relaxed-Fit Faux Suede Jacket
                  <p>₹ 2,599.00</p>
                </Card.Text>
                <Button variant="dark">Buy Now</Button>
              </Card.Body>
            </Card>

          </div>
        </div>

      </div>

      <Footer />

    </>
  )
}

export default App 





// import React from 'react'
// import Header from './components/Header'
// import Button from 'react-bootstrap/Button'
// import Card from 'react-bootstrap/Card'
// import Footer from './components/Footer'
// import Carousel from 'react-bootstrap/Carousel'

// function App() {
//   return (
//     <>
//       <Header />

//       <div className='container-fluid'>
//         {/* Carousel Section */}
//         <Carousel className='mb-4'>
//           <Carousel.Item>
//             <img
//               className='d-block w-100 img-fluid'
//               src='https://www.westside.com/cdn/shop/files/Ahsaas-Web_385513ca-bcc0-4e8c-9be2-46329f8491b1.gif?v=1730270251'
//               alt='First slide'
//             />
//             <Carousel.Caption>
//               <h3>Shop Cargo</h3>
//               <p>Check out our latest cargo collection!</p>
//             </Carousel.Caption>
//           </Carousel.Item>

//           <Carousel.Item>
//             <img
//               className='d-block w-100 img-fluid'
//               src='https://www.westside.com/cdn/shop/files/C3_03_1920X900_SHOP_CARGO_1681e38c-223f-4c88-8609-450d63b82cbd.jpg?v=1730268831'
//               alt='Second slide'
//             />
//             <Carousel.Caption>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             </Carousel.Caption>
//           </Carousel.Item>

//           <Carousel.Item>
//             <img
//               className='d-block w-100 img-fluid'
//               src='https://www.westside.com/cdn/shop/files/C3_01_1920X900_TEEN_GIRLS.jpg?v=1731659159'
//               alt='Third slide'
//             />
//             <Carousel.Caption>
//               <p>
//                 Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//               </p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>

//         {/* Cards Section */}
//         <div className='container'>
//           <div className='row g-3 mt-5'>
//             {/* Card 1 */}
//             <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
//               <Card className='h-100'>
//                 <Card.Img
//                   variant='top'
//                   src='https://www.westside.com/cdn/shop/files/300995652GREY_1.jpg?v=1730897593&width=493'
//                 />
//                 <Card.Body>
//                   <Card.Title>WES Formals</Card.Title>
//                   <Card.Text>
//                     WES Formals Navy Checkered Relaxed-Fit Cotton Shirt
//                     <p>₹ 999.00</p>
//                   </Card.Text>
//                   <Button variant='dark'>Buy Now</Button>
//                 </Card.Body>
//               </Card>
//             </div>

//             {/* Card 2 */}
//             <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
//               <Card className='h-100'>
//                 <Card.Img
//                   variant='top'
//                   src='https://www.westside.com/cdn/shop/files/300988322BEIGE_1.jpg?v=1731601442&width=493'
//                 />
//                 <Card.Body>
//                   <Card.Title>WES Casuals</Card.Title>
//                   <Card.Text>
//                     WES Casuals Beige Cargo-Style Relaxed-Fit Mid-Rise Joggers
//                     <p>₹ 1,699.00</p>
//                   </Card.Text>
//                   <Button variant='dark'>Buy Now</Button>
//                 </Card.Body>
//               </Card>
//             </div>

//             {/* Card 3 */}
//             <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
//               <Card className='h-100'>
//                 <Card.Img
//                   variant='top'
//                   src='https://www.westside.com/cdn/shop/files/300986972BEIGE_1.jpg?v=1728024036&width=493'
//                 />
//                 <Card.Body>
//                   <Card.Title>WES Casuals</Card.Title>
//                   <Card.Text>
//                     WES Casuals Beige Mid-Rise Relaxed-Fit Cotton Blend Chinos
//                     <p>₹ 1,699.00</p>
//                   </Card.Text>
//                   <Button variant='dark'>Buy Now</Button>
//                 </Card.Body>
//               </Card>
//             </div>

//             {/* Card 4 */}
//             <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
//               <Card className='h-100'>
//                 <Card.Img
//                   variant='top'
//                   src='https://www.westside.com/cdn/shop/files/300990666BLACK_1.jpg?v=1728568031&width=493'
//                 />
//                 <Card.Body>
//                   <Card.Title>Nuon</Card.Title>
//                   <Card.Text>
//                     Nuon Black Relaxed-Fit Mid-Rise Cotton Blend Chinos
//                     <p>₹ 1,499.00</p>
//                   </Card.Text>
//                   <Button variant='dark'>Buy Now</Button>
//                 </Card.Body>
//               </Card>
//             </div>

//             {/* Card 5 */}
//             <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
//               <Card className='h-100'>
//                 <Card.Img
//                   variant='top'
//                   src='https://www.westside.com/cdn/shop/files/300976257BLACK_1.jpg?v=1712311969&width=493'
//                 />
//                 <Card.Body>
//                   <Card.Title>Wunderlove</Card.Title>
//                   <Card.Text>
//                     Wunderlove Black Ribbed Straight-Fit Supersoft Pants
//                     <p>₹ 1,499.00</p>
//                   </Card.Text>
//                   <Button variant='dark'>Buy Now</Button>
//                 </Card.Body>
//               </Card>
//             </div>

//             {/* Card 6 */}
//             <div className='col-lg-3 col-md-4 col-sm-6 col-12 '>
//               <Card className='h-100'>
//                 <Card.Img style={{ height: "370px", marginTop: "30px" }}
//                   variant='top'
//                   src='https://www.westside.com/cdn/shop/files/Boys_1000X1380_PX_daa8a931-9e6b-472e-b044-a14b1c89a8d6.jpg?v=1731647028&width=500'
//                 />
//                 <Card.Body>
//                   <Card.Title>Y&F</Card.Title>
//                   <Card.Text>
//                     Y&F Kids Off-White Text Design Fleece Jacket
//                     <p>₹ 1,499.00</p>
//                   </Card.Text>
//                   <Button variant='dark'>Buy Now</Button>
//                 </Card.Body>
//               </Card>
//             </div>

//             {/* Card 7 */}
//             <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
//               <Card className='h-100'>
//                 <Card.Img
//                   variant='top'
//                   src='https://www.westside.com/cdn/shop/files/Kids_250x_321_px_fcd34fcf-d436-49cc-b13c-74306a87aee3.jpg?v=1731657690&width=2000'
//                 />
//                 <Card.Body>
//                   <Card.Title>Y&F</Card.Title>
//                   <Card.Text>
//                     Y&F Kids Off-White Quilted Puffer Jacket
//                     <p>₹ 1,799.00</p>
//                   </Card.Text>
//                   <Button variant='dark'>Buy Now</Button>
//                 </Card.Body>
//               </Card>
//             </div>

//             {/* Card 8 */}
//             <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
//               <Card className='h-100'>
//                 <Card.Img
//                   variant='top'
//                   src='https://www.westside.com/cdn/shop/files/300999790OLIVE_1.jpg?v=1731565796&width=493'
//                 />
//                 <Card.Body>
//                   <Card.Title>Ascot</Card.Title>
//                   <Card.Text>
//                     Ascot Light Beige Relaxed-Fit Faux Suede Jacket
//                     <p>₹ 2,599.00</p>
//                   </Card.Text>
//                   <Button variant='dark'>Buy Now</Button>
//                 </Card.Body>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   )
// }

// export default App
