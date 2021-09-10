import React from "react";
import Styled from "styled-components";


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
      </div>
    </FooterDiv>
  )
}
export default Footer;

const FooterDiv = Styled.div `
  background: #000;
  color:#fff;
  padding:30px 25px;

  ul{
    list-style:none;
  }
`;