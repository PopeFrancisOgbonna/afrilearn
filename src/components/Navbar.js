import React  from "react";
import Styled from "styled-components";
import {FaStar} from "react-icons/fa";

const Navbar = () =>{

    return(
        <Nav>
            <nav className="navbar navbar-expand-lg ">
              <div className="container-fluid">
                <a className="navbar-brand" href="/"><FaStar className="logo"/>Afrilearn</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse narv-c" id="navbarSupportedContent">
                  
                 
                    <form className="d-flex ">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                      {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                    </form>
                    <a href="/" className="link" >About </a>
                    <div><button className="btn btn-md auth-btn">SignIn</button></div>
                    <div><button className="btn btn-md auth-btn">Login</button></div>
                </div>
              </div>
            </nav>
        </Nav>
    )
}
export default Navbar;

const Nav = Styled.div `
  .navbar{
    background: #242425;
  }
  .navbar a{
    color: #03c03c;
  }
  .logo{
    color:gold;
  }
  .link{
    text-decoration:none;
    color:#fff !important;
    margin: 0 5px;
  }
  .narv-c form{
    margin-left:auto !important;
    margin-right: 10px;
  }
  .auth-btn{
    background: green;
    color:#fff;
    margin: 0 5px;
  }
`;