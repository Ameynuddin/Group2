import React from 'react'
import { Row, Col, Card, CardImg, CardBody, CardTitle } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse'

function CardComponent({ imgSrc, title, description }) {
    const [open, setOpen] = useState(false);
    return (
        <Card>
            <CardImg top width="100%" src={imgSrc} alt="Card image cap" />
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                    View More
                </Button>
                <Collapse in={open}>
                    <div id="example-collapse-text">
                        {description}
                    </div>
                </Collapse>
            </CardBody>
        </Card>
    )
}

function Services() {
    return (
        <div>
            <Row className="mt-4">
                <Col md={4}>
                    <CardComponent
                        imgSrc="bg.jpg" style={{ width: '200px' }}
                        title="Industrial"
                        description="A leader in the heavy equipment business, offering a comprehensive range of heavy equipment products and services across Asia Pacific."
                    />
                </Col>
                <Col md={4}>
                    <CardComponent
                        imgSrc="bg2.jpg" style={{ width: '200px' }}
                        title="Motors"
                        description="One of the leading automotive groups in Asia Pacific and actively involved in all facets of the automotive business – from importation and assembly to distribution, retail and rental."
                    />
                </Col>
                <Col md={4}>
                    <CardComponent
                        imgSrc="bg3.jpg" style={{ width: '200px' }}
                        title="Technology"
                        description="A leading industrial enterprise operating in Automotive, Equipment, Manufacturing and Engineering and Aerospace sectors."
                    />
                </Col>
            </Row>
        </div>
    )
}

export default Services