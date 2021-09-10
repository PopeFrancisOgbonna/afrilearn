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
              <h4>Fun...</h4>
              <p>
                We are supper dedicated on pleasure, joy and fufilment. On purpose, we work to deliver awesome content
                and experiences that make learning fun, engaging yet highly effective.
              </p>
            </div>
          </div>
          <div className="value-list">
            <FaBomb className="icons"/>
            <div>
              <h4>Fun...</h4>
              <p>
                We are supper dedicated on pleasure, joy and fufilment. On purpose, we work to deliver awesome content
                and experiences that make learning fun, engaging yet highly effective.
              </p>
            </div>
          </div>
          <div className="value-list">
            <FaUserAlt className="icons"/>
            <div>
              <h4>Fun...</h4>
              <p>
                We are supper dedicated on pleasure, joy and fufilment. On purpose, we work to deliver awesome content
                and experiences that make learning fun, engaging yet highly effective.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-center">Our Journey</h2>
      <div className="j-div">
        <div className="journey j-right"> 
          <FaRegEdit className="icons" /> 
          <p>2019</p>
          <div className="card">We're incoporated as African International Limited</div>
        </div>
        <div className="journey j-left"> 
          <div className="card">We're incoporated as African International Limited</div>
          <p>2019</p>
          <FaRegHandshake className="icons" /> 
        </div>
        <div className="journey j-right"> 
          <FaTrophy className="icons" /> 
          <p>2019</p>
          <div className="card">We're incoporated as African International Limited</div>
        </div>
        <div className="journey j-left"> 
          <div className="card">We're incoporated as African International Limited</div>
          <p>2019</p>
          <FaChartLine className="icons" />
        </div>
        <div className="journey j-right"> 
          <FaTrophy className="icons" /> 
          <p>2019</p>
          <div className="card">We're incoporated as African International Limited</div>
        </div>
        <div className="journey j-left"> 
          <div className="card">We're incoporated as African International Limited</div>
          <p>2019</p>
          <FaRocket className="icons" /> 
        </div>
        <div className="journey j-right"> 
          <FaTrophy className="icons" /> 
          <p>2019</p>
          <div className="card">We're incoporated as African International Limited</div>
        </div>
        <div className="journey j-left"> 
          <div className="card">We're incoporated as African International Limited</div>
          <p>2019</p>
          <FaRegHandshake className="icons" /> 
        </div>
        <div className="journey j-right"> 
          <FaRegHandshake className="icons" /> 
          <p>2019</p>
          <div className="card">We're incoporated as African International Limited</div>
        </div>
        <div className="journey j-left"> 
          <div className="card">We're incoporated as African International Limited</div>
          <p>2019</p>
          <TiGroup className="icons" /> 
        </div>
      </div>
      <h2 className="text-center">Our Team</h2>
      <div className="team-members">
        <div class="card">
          <img src={Images.profile1} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card">
          <img src={Images.profile2} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card">
          <img src={Images.profile3} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card">
          <img src={Images.profile4} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card">
          <img src={Images.profile1} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card">
          <img src={Images.profile1} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
      <h2 className="text-center">Our Board</h2>
      <div className="board-members">
        <div class="card">
          <img src={Images.profile1} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card">
          <img src={Images.profile1} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card">
          <img src={Images.profile3} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card">
          <img src={Images.profile1} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card">
          <img src={Images.profile4} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card">
          <img src={Images.profile2} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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

  .about{
    padding: 2% 3%;
    background:#7697a17a;
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
  .card{
    width: 18rem;
    box-shadow: 0 0 12px #989998;
  }
  .card img{
    height: 250px;
  }

  .j-div{
    margin: 2% auto;
    padding: 25px;
    width: 55%;
  }
  .j-right{
    margin: 3% 0 0 50%;
  }
  .j-left{
    margin: 0 50% 3% 0;
  }
  
  .journey{
    display: flex;
    gap: 10px;
    align-items: center;
    width: max-content;
  }
  @media screen and (max-width:780px){
    .j-div{
      width:100%;
    }
    .j-left, .j-right{
      margin: 10% auto;
    }
  }
`;