import React from "react";
import "./About.css";

function About() {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6">
          <h2 className="mb-4">Who We Are</h2>
          <p>
            At [Your E-commerce Brand], we're more than just an online store -
            we're a community of passionate individuals dedicated to providing
            you with the best shopping experience possible.
          </p>
          <p>
            Our journey began with a simple mission: to bring you the latest
            trends, highest quality products, and unbeatable prices, all in one
            place. With a curated selection of items handpicked by our team of
            experts, we strive to make every purchase a delightful discovery.
          </p>
        </div>
        <div className="col-lg-6">
          <img
            src="about.jpg"
            alt="About Us"
            className="img-fluid rounded"
          />
        </div>
      </div>
      <hr className="my-5" />
      <div className="row">
        <div className="col">
          <h2 className="mb-4">Our Promise</h2>
          <p>
            At [Your E-commerce Brand], customer satisfaction is our top
            priority. We stand behind every product we sell and are committed to
            providing you with exceptional service every step of the way.
          </p>
          <p>
            From our easy-to-navigate website to our secure checkout process,
            we've designed every aspect of your shopping experience with you in
            mind. Plus, with fast shipping and hassle-free returns, you can shop
            with confidence, knowing that your satisfaction is guaranteed.
          </p>
          <p>
            Join us on our journey to redefine online shopping. Discover the
            difference at [Your E-commerce Brand] today!
          </p>
        </div>
      </div>
      <hr className="my-5" />
      <div className="row">
        <div className="col">
          <h2 className="mb-4">What Our Customers Say</h2>
          <div className="card mb-3">
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>
                  Absolutely love the products! Fast shipping and excellent
                  customer service.
                </p>
                <footer className="blockquote-footer">John Doe</footer>
              </blockquote>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>
                  Highly recommend [Your E-commerce Brand] to everyone. Will
                  definitely buy again!
                </p>
                <footer className="blockquote-footer">Jane Smith</footer>
              </blockquote>
            </div>
          </div>
          {/* Add more customer reviews here */}
        </div>
      </div>
    </div>
  );
}

export default About;