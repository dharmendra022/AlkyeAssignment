import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import TopImge from "../assets/images/Untitled.svg";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Logo from "../assets/images/Logo.svg"
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Men from "../assets/images/man.svg"
import Bucket from "../assets/images/bucket.svg"
import BraGraph from "../assets/images/bar.svg"
import Img1 from "../assets/photogallery/img1.png"
import Img2 from "../assets/photogallery/img2.png"
import Img3 from "../assets/photogallery/img3.png"
import Img4 from "../assets/photogallery/img4.png"
import Img5 from "../assets/photogallery/img5.png"
import Lug from "../assets/photogallery/lug.png"
import Group3 from "../assets/photogallery/group3.png"
import TwoDot from "../assets/photogallery/twodot.svg"
import Greenwomen from "../assets/photogallery/greenwomen.svg"
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Map from "../assets/images/map.svg"
import Footer from './Footer';
import Network from "../assets/images/network.svg"
import Membersip from "../assets/images/memberhip.svg"

const Home = () => {
    return (
        <div className="home-container">
            <div className="header">
                <Navbar expand="lg" className="custom-navbar">
                    <Container className='custom-container'>
                        <Navbar.Brand href="#">Projects</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                                <Nav.Link href="#expertise">EXPERTISE</Nav.Link>
                                <Nav.Link href="#about">ABOUT US</Nav.Link>
                                <Nav.Link href="#people">PEOPLE</Nav.Link>
                                <Nav.Link href="#logo" className="logo-link">
                                    <img src={Logo} alt="Logo" className="navbar-logo" />
                                </Nav.Link>
                            </Nav>
                            <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}>
                                <Nav.Link href="#expertise">CARRIERS</Nav.Link>
                                <Nav.Link href="#people">AU</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div className="carousel-container first-cont">
                <Carousel data-bs-theme="dark" indicators={false}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={TopImge}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h5>Home / Why work with us</h5>
                            <h1>Headline #1</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={TopImge}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h5>Home / Why work with us</h5>
                            <h1>Headline #2</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={TopImge}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h5>Home / Why work with us</h5>
                            <h1>Headline #3</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className="carousel-controls">
                    <div className="left-carousel-control">
                        <FaChevronLeft />
                    </div>
                    <div className="right-carousel-control">
                        <FaChevronRight />
                    </div>
                </div>
            </div>

            <div className='flex'>
                <div className="stay-card-first">
                    <p>01</p>
                    <div className="card-content">
                        <p>We stay connected</p>
                        <FaChevronRight className='stay-icon' />
                    </div>
                </div>

                <div className="stay-card">
                    <p>02</p>
                    <div className="card-content">
                        <p>We stay connected</p>
                        <FaChevronRight className='stay-icon' />
                    </div>
                </div>

                <div className="stay-card">
                    <p>03</p>
                    <div className="card-content">
                        <p>We stay connected</p>
                        <FaChevronRight className='stay-icon' />
                    </div>
                </div>
            </div>
            <div className='flex sec-third'>
                <div className='sec-third-left'>
                    <h1>We <span id='stay-text'>stay connected</span></h1>
                    <div className="image-text-container">
                        <div className='flex mt-4 bucket-icon'>
                            <img src={Bucket} alt="Bucket" />
                            <h5>Quarterly Business Updates</h5>
                        </div>
                        <p className='mt-3 ml-5'>We strive to stay connected as a team through communication and collaboration. This materialises every quarter through our Quarterly Business Update events. These gatherings are immersive sessions where every team
                            member, regardless of rank or tenure, comes together to contribute to our overarching business strategy, and stay connected. They are opportunities to learn from our seasoned leaders and to also share personal insights and achievements that can steer our collective future. In an ever-evolving engineering landscape, staying connected isn’t just a benefit—it’s essential.</p>

                        <div className='flex mt-5 bucket-icon'>
                            <img src={Network} alt="Bucket" />
                            <h5>Industry Events & Networking</h5>
                        </div>

                        <div className='flex mt-5 bucket-icon'>
                            <img src={Membersip} alt="Bucket" />
                            <h5>Associations Memberships</h5>
                        </div>
                    </div>
                </div>
                <div className='sec-third-right'>
                    <div className="carousel-container">
                        <Carousel data-bs-theme="dark" indicators={false}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 s-t-r-img"
                                    src={Men}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 s-t-r-img"
                                    src={Men}
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 s-t-r-img"
                                    src={Men}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                        <div className="carousel-controls">
                            <div className="left-carousel-control">
                                <FaChevronLeft />
                            </div>
                            <div className="right-carousel-control">
                                <FaChevronRight />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='sec-four' >
                <div className='sec-four-text'>
                    <div className='sec-four-left'>
                        <p>We believe in <span id='stay-text'> diversity & inclusion</span></p>
                    </div>
                    <div className='sec-four-right'>
                        <p>At CaSE we do not just accept difference — we celebrate it, we support it, and we thrive on it for the benefit of our employees, our services, our industry and our community. We are proud to be an equal opportunity
                            employer. Guided by our values and beliefs, we foster an inclusive workplace culture where employees thrive because of their differences, not in spite of them.</p>
                        <p>Our values and beliefs, we foster an inclusive workplace culture where employees thrive because of their differences, not in spite of them Our Commitment to reinventing the standard. With more than 20 nationalities represented in our global workforce, we firmly believe that our ability to deliver high-quality results is fueled by our active efforts to embed diversity and inclusion. We recognise, respect, and strive to create an environment where employees can excel and feel a true sense of belonging. </p>
                        <h4>Some of our strategic initiatives include:</h4>
                    </div>
                </div>
                <div className='bar-graph'>
                    <img src={BraGraph} alt='BarGraph' />
                </div>
            </div>

            <div className='sec-five'>
                <Row>
                    <Col lg={4} md={12} className='mb-4 mb-lg-0'>
                        <img
                            src={Img1}
                            className='w-100 shadow-1-strong rounded mb-4'
                            alt='Boat on Calm Water'
                            style={{ height: "281px" }}
                        />
                        <img
                            src={Img4}
                            className='w-100 shadow-1-strong rounded mb-4'
                            alt='Wintry Mountain Landscape'
                            style={{ height: "610px" }}
                        />
                    </Col>

                    <Col lg={4} md={12} className='mb-4 mb-lg-0'>
                        <div className='w-100 shadow-1-strong rounded mb-4'>
                            <img
                                src={Img2}
                                className='w-100 rounded-top'
                                alt='Boat on Calm Water'
                                style={{ height: "281px" }}
                            />
                            <div className="px-2">
                                <p className='gallery-mid-text'>We <span id='stay-text'> celebrate success</span></p>
                                <p className='gallery-mid-p'>At CaSE we understand that every achievement, big or small, is a result of the hard work and dedication of our team members. We take pride in celebrating these moments because they underscore the commitment and effort put into each project.</p>
                                <p className='gallery-mid-p'>Some of our favorite events on the calendar include our coveted Melbourne Cup event and our always amazing Christmas Party. In-between, our team celebrate together during team cycling events, regular team dinners and social morning teas to celebrate milestones and special days. Taking the time to celebrate wins is our way of showing gratitude and ensuring everyone knows their efforts make a difference.</p>
                            </div>
                        </div>
                        <img
                            src={Img5}
                            className='w-100 shadow-1-strong rounded mb-4'
                            alt='Waves at Sea'
                            style={{ height: "235px" }}
                        />
                    </Col>

                    <Col lg={4} className='mb-4 mb-lg-0'>
                        <img
                            src={Img3}
                            className='w-100 shadow-1-strong rounded mb-4'
                            alt='Mountains in the Clouds'
                            style={{
                                height: "920px",
                                objectFit: "cover"
                            }}
                        />
                    </Col>
                </Row>
            </div>

            <div className='sec-six'>
                <Row>
                    <Col lg={6} md={12} className='mb-4 mb-lg-0'>
                        <div className='sec-six-left'>
                            <h3>Employee <span id='stay-text'>Appreciation Program</span></h3>
                            <p>Our Employee Appreciation Program is tailored to honor the ongoing commitment and efforts of our long-serving team members. Our 5 Year Club
                                and 10 Year Club are special milestones within this program, celebrating employees who have dedicated half a decade or a full decade to our
                                company mission. Each year, members of these clubs are invited to annual events held at select, memorable locations, reflecting our gratitude and
                                recognition of their unwavering dedication. It's our way of saying thank you and ensuring that every significant chapter in our collective journey is
                                celebrated with the grandeur it deserves
                            </p>

                        </div>
                    </Col>
                    <Col lg={6} md={12} className='mb-4 mb-lg-0'>
                        <img
                            src={Lug}
                            className='w-100 shadow-1-strong rounded mb-4'
                            alt='Boat on Calm Water'
                            style={{ height: "340px" }}
                        />
                    </Col>
                </Row>
            </div>

            <div className='sec-seven'>
                <Row>
                    <Col lg={4} md={12} className='mb-4 mb-lg-0'>
                        <img
                            src={Img1}
                            className='w-100 shadow-1-strong rounded mb-4'
                            alt='Boat on Calm Water'
                            style={{ height: "281px" }}
                        />

                    </Col>
                    <Col lg={4} md={12} className='mb-4 mb-lg-0'>
                        <img
                            src={Img1}
                            className='w-100 shadow-1-strong rounded mb-4'
                            alt='Boat on Calm Water'
                            style={{ height: "281px" }}
                        />

                    </Col>
                    <Col lg={4} md={12} className='mb-4 mb-lg-0'>
                        <img
                            src={Group3}
                            className='w-100 shadow-1-strong rounded mb-4'
                            alt='Boat on Calm Water'
                            style={{ height: "281px" }}
                        />
                    </Col>
                </Row>
            </div>


            <div className='sec-eight'>
                <div className='sec-eight-inner-card'>
                    <Row>
                        <Col lg={12} className='mb-4 mb-lg-0'>
                            <div className="carousel-container">
                                <Carousel data-bs-theme="dark" indicators={false}>
                                    <Carousel.Item>
                                        <Row>
                                            <Col lg={4} md={12}>
                                                <img
                                                    src={Greenwomen}
                                                    className='w-100 shadow-1-strong rounded mb-4'
                                                    alt='Boat on Calm Water'
                                                    style={{ height: '281px' }}
                                                />
                                            </Col>
                                            <Col lg={8} md={12}>
                                                <div>
                                                    <img src={TwoDot} className='sec-8-img' />
                                                    <div>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales turpis et lacinia fermentum.
                                                            Curabitur vestibulum at arcu sed blandit. In consequat euismod purus nec imperdiet.
                                                        </p>
                                                        <p>Title
                                                            <br />
                                                            Name
                                                        </p>
                                                        <p><FaRegArrowAltCircleRight size={34} className='sec-8-img' />&nbsp; Read my story</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Carousel.Item>
                                    {/* Add more Carousel.Item for additional content */}

                                    <Carousel.Item>
                                        <Row>
                                            <Col lg={4} md={12}>
                                                <img
                                                    src={Greenwomen}
                                                    className='w-100 shadow-1-strong rounded mb-4'
                                                    alt='Boat on Calm Water'
                                                    style={{ height: '281px' }}
                                                />
                                            </Col>
                                            <Col lg={8} md={12}>
                                                <div>
                                                    <img src={TwoDot} className='sec-8-img' />
                                                    <div>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales turpis et lacinia fermentum.
                                                            Curabitur vestibulum at arcu sed blandit. In consequat euismod purus nec imperdiet.
                                                        </p>
                                                        <p>Title
                                                            <br />
                                                            Name
                                                        </p>
                                                        <p><FaRegArrowAltCircleRight size={34} className='sec-8-img' />&nbsp; Read my story</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <Row>
                                            <Col lg={4} md={12}>
                                                <img
                                                    src={Greenwomen}
                                                    className='w-100 shadow-1-strong rounded mb-4'
                                                    alt='Boat on Calm Water'
                                                    style={{ height: '281px' }}
                                                />
                                            </Col>
                                            <Col lg={8} md={12}>
                                                <div>
                                                    <img src={TwoDot} className='sec-8-img' />
                                                    <div>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales turpis et lacinia fermentum.
                                                            Curabitur vestibulum at arcu sed blandit. In consequat euismod purus nec imperdiet.
                                                        </p>
                                                        <p>Title
                                                            <br />
                                                            Name
                                                        </p>
                                                        <p><FaRegArrowAltCircleRight size={34} className='sec-8-img' />&nbsp; Read my story</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Carousel.Item>
                                </Carousel>
                                <div className="carousel-controls">
                                    <div className="left-carousel-control">
                                        <FaChevronLeft />
                                    </div>
                                    <div className="right-carousel-control">
                                        <FaChevronRight />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

            <div className='sec-nine'>
                <div className='sec-nine-inner'>
                    <p className='sec-nine-para-tag'>As a <span id='stay-text'>  global business,</span> we encourage you to contact </p>
                    <p className='sec-nine-para-tag'>us no matter where you are located in the world. </p>
                    <p>Browse our job opportunities across the globe.</p>
                    <p className='open-rolls mt-4'> <span id='stay-text'>OPEN ROLES </span> <FaArrowRight className='open-roll-icon' /></p>
                </div>
            </div>

            <div className='w-100 text-center map-sec'>
                <img src={Map} />
            </div>
            <Footer />
        </div >
    );
};

export default Home;
