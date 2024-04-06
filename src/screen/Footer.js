import React from 'react'
import FooterIcon from "../assets/images/footericon.svg"
import { CiInstagram } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer-sec'>
            <div>
                <div className='footer-main-card'>
                    <div className="footer-card">
                        <div>
                            <img src={FooterIcon} alt="" />
                            <div className='social-icons'>
                                <CiInstagram size={23} className='social-icon' />
                                <FaFacebookF size={23} className='social-icon' />
                                <FaLinkedinIn size={23} className='social-icon' />
                            </div>
                        </div>
                    </div>

                    <div className="footer-card">
                        <div className="card-content-footer">
                            <ol className="unordered-list">
                                <li>Expertise</li>
                                <li className='mt-3'>Design</li>
                                <li>Specialist Expertise</li>
                                <li>Commercial Advice</li>
                                <li>Traffic & Transport</li>
                            </ol>
                        </div>
                    </div>

                    <div className="footer-card">
                        <div className="card-content-footer">
                            <ol className="unordered-list">
                                <li>Sectors</li>
                                <li className='mt-3'>Road</li>
                                <li>Tunner</li>
                                <li>Bridge</li>
                                <li>Others +</li>
                            </ol>
                        </div>
                    </div>

                    <div className="footer-card-no-line">
                        <div className="card-content-footer">
                            <ol className="unordered-list">
                                <li>Our Business</li>
                                <li>Work With Us</li>
                                <li>Projects</li>
                                <li>News</li>
                            </ol>
                        </div>
                    </div>


                    <div className="footer-card-no-line">
                        <div className="card-content-footer">
                            <ol className="unordered-list">
                                <li>Our Capabilities</li>
                                <li>Engineers</li>
                                <li>Contact</li>
                            </ol>
                        </div>
                    </div>
                </div>

            </div>


            <div className='footer-sec-bootom'>
                <div>
                    <p>&#169; 2021 Case International. All right reserved.</p>
                </div>
                <div className='tmandc'>
                    <div className='ml-left'>
                        <p>Terms & Condition</p>
                    </div>
                    &nbsp;
                    <div>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer