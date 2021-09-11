import React  from "react";
import Styled from "styled-components";
import {FaStar} from "react-icons/fa";

const Navbar = () =>{

    return(
        <Nav>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
              <div className="container-fluid">
                <a className="navbar-brand" href="/"><FaStar className="logo"/>Afrilearn</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse narv-c" id="navbarContent">
                  
                 
                    <form className="d-flex ">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                      {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                    </form>
                    <ul class="nav navbar-nav">
                      <li class="active "><a className="links" href="/">About</a></li>
                      <li ><a className="btn auth-btn" href="/login">Login</a></li>
                      <li><a className="btn auth-btn" href="/register">Register</a></li> 
                    </ul>
                    {/* <a href="/" className="link" >About </a>
                    <div><button className="btn btn-md auth-btn">SignIn</button></div>
                    <div><button className="btn btn-md auth-btn">Login</button></div> */}
                </div>
              </div>
            </nav>
        </Nav>
    )
}
export default Navbar;

const Nav = Styled.div `
  .navbar{
    // background: #242425;
  }
  .navbar a{
    color: #03c03c;
  }
  .logo{
    color:gold;
  }
  .links{
    text-decoration:none;
    color:#fff !important;
    margin: auto 5px;
    padding: 5px 0 !important;
  }
  .narv-c form{
    margin-left:auto !important;
    margin-right: 10px;
  }
  .auth-btn{
    background: green;
    color:#fff !important;
    margin: auto 5px;
    padding: 5px 10x
  }
  @media screen and (max-width:780px){
    .narv-c form{
      margin: 12px 0 !important;
    }
    .auth-btn{
      margin: 10px 0 0 0;
    }
  }
`;