import './App.css';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      {/* <div style={{height:'300px', width: '100%'}}>
        <div className="col-lg-7"><img className="img-fluid rounded mb-4 mb-lg-0" src="https://galwaybayfm.ie/wp-content/uploads/2023/03/ATU-Galway.jpg" alt="..." /></div>
      </div> */}
      <div className="container px-4 px-lg-5">
        {/* Image and Description Section */}
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          {/* Image */}
          <div className="col-lg-7"><img className="img-fluid rounded mb-4 mb-lg-0" src="https://i.pinimg.com/originals/29/63/18/29631874baef3217ab5407da9c8ce3e5.jpg" alt="..." /></div>
          {/* Text */}
          <div className="col-lg-5">
            <h1 className="font-weight-light">The ATU Better Health App</h1>
            <p>
              To improve your health, we offer a variety of services to help you live a healthier lifestyle.

            </p>
            <div>
              <a className="btn btn-primary" href="shopproducts" style={{ margin: '10px' }}>Sign Up</a>
              <a className="btn btn-primary" href="shopproducts">Login</a>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="card text-white bg-secondary my-5 py-4 text-center">
          <div className="card-body"><h3 className="text-white m-0">See the features of our store below!</h3></div>
        </div>

        {/* Cards Section */}
        <div className="row gx-4 gx-lg-5">
          {/* Product Info Card */}
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title">What we have to offer</h2>
                <p className="card-text">See our store.</p>
              </div>
              <div className="card-footer"><a className="btn btn-primary btn-sm" href="shopproducts">Browse</a></div>
            </div>
          </div>
          {/* About Us Card */}
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title">About Us</h2>
                <p className="card-text">To learn more about our shop, our products, and our history, click here!</p>
              </div>
              <div className="card-footer"><a className="btn btn-primary btn-sm" href="/about">More Info</a></div>
            </div>
          </div>
          {/* Login Card */}
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title">Login</h2>
                <p className="card-text">Staff Login</p>
              </div>
              <div className="card-footer"><a className="btn btn-primary btn-sm" href="/login">Click here to login!</a></div>
            </div>
          </div>

        </div>
      </div>
      <div style={{ margin: '200px' }}></div>
    </div>

  );
}

export default App;
