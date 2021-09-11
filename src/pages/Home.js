import React from "react";
import Styled from "styled-components";
import {TiGroup} from "react-icons/ti";
import { FaGrinAlt,FaAward,FaBomb,FaRocket, FaUserAlt,FaRegEdit, FaRegHandshake,FaChartLine,FaTrophy, } from "react-icons/fa";
import Images from "../util/img";


const Home = () => {

  return (
    <HomeDiv className="container-fluid">
      <div className="row hero">
        <div className="title col-md-8">
          <h1>Africa's best-loved e-learning brand.</h1>
          <p className="lead">Delivering affordable, world-class education for African's, anywhere.</p>
        </div>
        <div className="slider col-md-4">
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={Images.slide1} className="d-block w-100" alt="slide-photos" />
              </div>
              <div className="carousel-item">
                <img src={Images.slide2} className="d-block w-100" alt="slide-photos" />
              </div>
              <div className="carousel-item">
                <img src={Images.slide3} className="d-block w-100" alt="slide-photos" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 about">
          <h2>About Us</h2>
          <p className="lead about-txt">
            African actively leverages genius tutors, animators, and developers to
            provide affordable, world-class education for Africans, anywhere.
          </p>
          <img className="img-fluid" src={Images.tutorialImg} alt=""/>
        </div>
        <div className="col-md-6 value">
          <h2>Our Values</h2>
          
          <div className="value-list">
            <FaGrinAlt className="icons"/>
            <div>
              <h4>Fun...</h4>
              <p>
                We are supper dedicated on pleasure, joy and fufilment. On purpose, we work to deliver awesome content
                and experiences that make learning fun, engaging yet highly effective.
              </p>
            </div>
          </div>
          <div className="value-list">
            <FaAward className="icons"/>
            <div>
              <h4>Excellence...</h4>
              <p>
                We habitually chun out life changing education products with superior value and outstanding features 
                that deliver transformative results, raising high-flying learners.
              </p>
            </div>
          </div>
          <div className="value-list">
            <FaBomb className="icons"/>
            <div>
              <h4>Disruption...</h4>
              <p>
                We passionately spearhead radical shifts in Africa's edtech sector by creating new approaches to
                solve Africa's education challenges.
              </p>
            </div>
          </div>
          <div className="value-list">
            <FaUserAlt className="icons"/>
            <div>
              <h4>Customer Obsession...</h4>
              <p>
                We emphatically listen to customers and consumers for insights to consistently
                improve, enhance, and deliver the best experiences possible across the global edtech space.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-center">Our Journey</h2>
      <div className="j-div">
        <div className="journey j-right"> 
          <FaRegEdit className="icons" /> 
          <p>Apr 2019</p>
          <div className="card">
            <p>We're incoporated as African International Limited</p>
          </div>
        </div>
        <div className="journey j-left"> 
          <div className="card">
            <p>We got selected for the <span>Orange Corners Business Incubation</span></p>
          </div>
          <p>Feb 2020</p>
          <FaRegHandshake className="icons" /> 
        </div>
        <div className="journey j-right"> 
          <FaTrophy className="icons" /> 
          <p>Mar 2020</p>
          <div className="card">
            <p>We emerge 1st of 20 200 businesses in friends of <span>Prof. Osinbanjo SME Competition</span></p>
          </div>
        </div>
        <div className="journey j-left"> 
          <div className="card">
            <p>Our MVP <span>ClassNotes.ng launches. listed #1 Education Platform in Nigeria</span></p>
          </div>
          <p>Apr 2020</p>
          <FaChartLine className="icons" />
        </div>
        <div className="journey j-right"> 
          <FaTrophy className="icons" /> 
          <p>Jun 2020</p>
          <div className="card">
            <p>We won the <span>Netherland's Business Innovation Fund</span></p>
          </div>
        </div>
        <div className="journey j-left"> 
          <div className="card">
            <p>We lunched <span>Exambly Mobile App</span>and <span>Web </span>
            to wide adoption by private and public schools across Nigeria.</p>
          </div>
          <p>Nov 2020</p>
          <FaRocket className="icons" /> 
        </div>
        <div className="journey j-right"> 
          <FaTrophy className="icons" /> 
          <p>Dec 2020</p>
          <div className="card">
            <p>We won the U.S Chamber <span>Digital Innovation Award</span></p>
          </div>
        </div>
        <div className="journey j-left"> 
          <div className="card">
            <p>We got selected for UK-Nigeria Tech Hub's <span>Top 10 Accelerator</span></p>
          </div>
          <p>Mar 2021</p>
          <FaRegHandshake className="icons" /> 
        </div>
        <div className="journey j-right"> 
          <FaRegHandshake className="icons" /> 
          <p>Apr 2021</p>
          <div className="card">
            <p>We got selected for the <span>Future of Work Africa 2021 Accelerator </span>by village Capital & IFC</p>
          </div>
        </div>
        <div className="journey j-left"> 
          <div className="card">
            <p>We African activates <span>Boards of Directors</span></p>
          </div>
          <p>May 2021</p>
          <TiGroup className="icons" /> 
        </div>
      </div>
      <h2 className="text-center">Our Team</h2>
      <div className="team-members text-center">
        <div className="card">
          <img src={Images.profile1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Isaac Oladipupo</h5>
            <p className="card-text">Co-founder</p>
          </div>
        </div>
        <div className="card">
          <img src={Images.profile2} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Gabriel Olatunji Legend</h5>
            <p className="card-text">Co-founder</p>
          </div>
        </div>
        <div className="card">
          <img src={Images.profile3} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Chijioke Okwuosa</h5>
            <p className="card-text">Lead Technical</p>
          </div>
        </div>
        <div className="card">
          <img src={Images.profile4} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Oluyemisi Oluwadare</h5>
            <p className="card-text">Associate Digital Tutor</p>
          </div>
        </div>
        <div className="card">
          <img src={Images.profile1} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Segun Shofola</h5>
            <p className="card-text">Associate Video Production</p>
          </div>
        </div>
        <div className="card">
          <img src={Images.profile1} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Feyikemi Alaka</h5>
            <p className="card-text">Associate Product Design & communication</p>
          </div>
        </div>
      </div>
      <h2 className="text-center">Our Board</h2>
      <div className="board-members text-center">
        <div className="card">
          <img src={Images.profile1} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Sunday Olorunsheyi</h5>
            <p className="card-text">Co-founder, Pertinence Group</p>
          </div>
        </div>
        <div className="card">
          <img src={Images.profile1} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Olushola Adeola</h5>
            <p className="card-text">ED, Designing Futures</p>
          </div>
        </div>
        <div className="card">
          <img src={Images.profile3} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Chude Jideonwo</h5>
            <p className="card-text">Founder, Joy Inc.</p>
          </div>
        </div>
        <div className="card">
          <img src={Images.profile1} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Titi Akinsanmi</h5>
            <p className="card-text">Policy Lead Google</p>
          </div>
        </div>
        <div className="card">
          <img src={Images.profile2} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Mary Akpobome</h5>
            <p className="card-text">COO Imperium Capital Partners Plc</p>
          </div>
        </div>
        <div className="card">
          <img src={Images.profile4} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Ngozi Ayanru</h5>
            <p className="card-text">Managing Partner Really Invest</p>
          </div>
        </div>
      </div>
    </HomeDiv>
  )
}
export default Home;

const HomeDiv = Styled.div`

  .hero{
    background: url(${Images.bg});
    background-repeat: norepeat;
    background-size:cover;
    background-position: center;
  }
  .title{
    padding:6% 15px;
    text-align: center;
    color:#fff;
  }
  h2{
    color:#33a805;
    font-weight: 700;
    margin: 30px 0 0 0;
  }
  h4{
    font-weight: 700;
  }
  .about{
    padding: 2% 3%;
    background:#eee;
  }
  .about img{
    
    border:4px solid #000;
  }
  .about-txt{
    margin:25px 0;
  }

  .value{
    padding:2% 3%;
  }
  .value-list{
    display: flex;
    gap: 20px;
    margin: 25px 0 0 0;
  }
  .icons{
    color:#33a805;
    font-size: 2.5rem;
  }

  .team-members, .board-members{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
    gap: 20px 30px;
    padding: 2% 3%;
    margin: 3% 0;
  }
  .team-members .card-text, .board-members .card-text{
    color: #33a805;
    font-size:18px;
    font-weight: 400;
  }
  .card{
    max-width: 18rem;
    box-shadow: 0 0 12px #989998;
    margin: 0 auto;
  }
  .team-members .card img, .board-members .card img{
    height: 250px;
  }

  .j-div{
    margin: 2% auto;
    padding: 25px;
    width: 80%;
  }
  .j-right{
    position: relative;
    left: 48.7%;
  }
  .j-left{
    position: relative;
    left: 11.5%;
  }
  
  .journey{
    display: flex;
    gap: 10px;
    align-items: center;
    width: max-content;
  }
  .journey .card{
    width: 380px !important;
    padding:10px 14px 5px 14px;
    font-size: 12px;
    
  }
  .journey .card span{
    font-weight:700;
  }
  .journey .icons{
    border:1px solid #33a805;
    padding:5px;
    background: #33a805;
    color:#fff;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  @media screen and (max-width:780px){
    .j-div{
      width:100%;
    }
    .j-left, .j-right{
      margin: 10% auto;
    }
    .journey{
      flex-direction: column;
    }
    .j-right{
      left: 0;
    }
    .j-left{
      position: relative;
      left: 0;
      display: grid;
      gap:6px;
      grid-template-areas: 
        "icon"
        "date"
        "card";
        place-items: center;
      grid-template-rows: repeat(auto-fit,1fr);
    }
    .j-left .icons{
      grid-area: icon;
    }
    .j-left p{
      grid-area: date;
    }
    .j-left .card{
      grid-area: card;
    }
  }
`;