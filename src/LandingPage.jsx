import React from "react";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">

      
      <section className="top-section">
      <section className="slider_section">
        <div id="customCarousel1" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">

         
            <div className="carousel-item active">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-7 col-lg-6">
                    <div className="detail-box">
                      <h1>Fast Food Restaurant</h1>
                      <p>
                        Doloremque, itaque aperiam facilis rerum, commodi,
                        temporibus sapiente ad mollitia laborum quam quisquam
                        esse error unde.
                      </p>
                      <div className="btn-box">
                        <a href="/home" className="btn1">HOME</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

  
            <div className="carousel-item">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-7 col-lg-6">
                    <div className="detail-box">
                      <h1>Freshly Made Every Day</h1>
                      <p>
                        Enjoy delicious meals crafted with care and served hot
                        just for you. Fast, fresh, and full of flavor!
                      </p>
                      <div className="btn-box">
                        <a href="#" className="btn1">Order Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>


          <div className="container">
            <ol className="carousel-indicators">
              <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
              <li data-target="#customCarousel1" data-slide-to="1"></li>
            </ol>
          </div>
        </div>
      </section>
      </section>


      <section className="offer_section layout_padding-bottom">
        <div className="offer_container">
          <div className="container">
            <div className="row">

              <div className="col-md-6">
                <div className="box">
                  <div className="img-box">
                    <img style={{height:"400px"}} src="https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=465" alt="Tasty Thursdays" />
                  </div>
                  <div className="detail-box">
                    <h5>Tasty Thursdays</h5>
                    <h6><span>20%</span> Off</h6>
                    <a href="#">Order Now</a>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="box">
                  <div className="img-box">
                    <img style={{height:"400px"}} src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870" alt="Pizza Days" />
                  </div>
                  <div className="detail-box">
                    <h5>Pizza Days</h5>
                    <h6><span>15%</span> Off</h6>
                    <a href="#">Order Now</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default LandingPage;
