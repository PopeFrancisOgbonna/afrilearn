import React from "react";
import Styled from "styled-components";
import { FaEnvelope,  FaFacebook,  FaInstagram,  FaLinkedin,  FaMapMarker, FaPhoneAlt,FaStar, FaTwitter, FaYoutube } from "react-icons/fa";
import {BsChat} from "react-icons/bs";

const Footer = () =>{

  return(
    <FooterDiv>
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <p>
            African actively leverages genius tutors, animators, and developers to 
            provide affordable, world-class education for Africans, anywhere.
          </p>
        </div>
        <div className="col-md-3 col-sm-6">
          <ul>
            <li>About</li>
            <li>Media</li>
            <li>Careers</li>
            <li>Our Team</li>
            <li>Partnership</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-6">
          <h6>Contact</h6>
          <div className="afri-info">
            <FaEnvelope className="icons"/><p>hello@myafrilearn.com</p>
          </div>
          <div className="afri-tel">
            <FaPhoneAlt className="icons" /><p>+234 802 785 5262 <br/>+234 805 154 4949</p>
          </div>
          <div className="afri-address">
            <FaMapMarker className="icons"/>
            <p>6 Gbemisola street,<br/>Allen Avenue Ikeja,<br/>Lagos Nigeria.</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <h6>Key Stats</h6>
          <p>Registered Students <br/>
            <span className="fig">6,476+</span>
          </p>
          <p>Rich & Ready Class Notes <br/>
            <span className="fig">3,624+</span>
          </p>
          <p>Practical Questions <br/>
            <span className="fig">19,412+</span>
          </p>
        </div>
        <hr />
        <div className="afri-footer" >
          <p className="company">
          <FaStar className="logo"/> Afrilearn
          </p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p className="social-icons">
            <FaInstagram />
            <FaTwitter /> <FaFacebook />
            <FaLinkedin /> <FaYoutube />
          </p>
          <BsChat className="chat"/>
        </div>
      </div>
    </FooterDiv>
  )
}
export default Footer;

const FooterDiv = Styled.div `
  background: #000;
  color:#fff;
  padding:40px 25px 20px 25px;

  ul{
    list-style:none;
  }
  ul li{
    cursor: pointer;
  }
  ul li:hover{
    color:#33a803;
  }
  .afri-tel, .afri-address, .afri-info{
    display:flex;
    gap: 5px;
  }
  .afri-tel .icons{
    font-size: 1.4rem;
    margin:0;
  }
  .icons{
    color:  #33a805;
    font-size: 1.2rem;
  }
  .afri-tel p{
    line-height: 15px;
  }
  hr{
    border: 2px solid #fff;
  }
  .afri-footer{
    display: flex;
    align-items: center;
    justify-content:space-between;
    position: relative;
    padding: 0 5px 10px 5px;
  }
  .company{
    font-size:24px;
    font-weight:600;
    cursor: pointer;
  }

  

  .social-icons{
    display: flex;
    gap: 5px;
  }
  .chat{
    padding: 4px;
    font-size: 2.1em;
    background:#33a803;
    border-radius:50%;
    cursor:pointer;
    position: absolute;
    right:0;
    bottom: -4px;
  }

  @media screen and (max-width:600px){
    .afri-footer{
      flex-direction: column;
      padding: 0;
      align-items: flex-start;
    }
  }
`;