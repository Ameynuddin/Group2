import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function Home() {
  return (
    // 3 cards, each of which has image, title and description
    <div>
        <Carousel>
        <Carousel.Item>
          <img src='bg.jpg' style={{ width: '100%' }} />
          <Carousel.Caption>
            <h3>Industrial</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='bg2.jpg' style={{ width: '100%' }} />
          <Carousel.Caption>
            <h3>Motors</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='bg3.jpg' style={{ width: '100%' }} />
          <Carousel.Caption>
            <h3>Technology</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Home