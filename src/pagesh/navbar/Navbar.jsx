import { Link, NavLink } from "react-router-dom";
import "../home/Home.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserData, userLogout } from "../../redux/Actions/UserActions";
import { FaCartArrowDown } from "react-icons/fa";
import { getCartData } from "../../redux/Actions/CardActions";
import "./Navbar.css"
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';



function Navbar({ name, ...props }) {
  let userLogin = useSelector((state) => state.UserReducers.logindetails);
  console.log(userLogin);


  let cartRecord = useSelector((state) => state.CartReducers.cartRecord)
  console.log("hyy");

  console.log(cartRecord);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
  }, [])
  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      dispatch(getCartData(userData.id))

    }
  }, [])
  let logoutuser = () => {
    dispatch(userLogout())
    window.location = "/"
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top " style={{ backgroundColor: "#F2F0DF" }}>
        <div className="container ">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0  fw-medium">

              <div className="dropdown nav-item">
                <a className="btn nav-link  " href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Home
                </a>
                <ul className="dropdown-menu box-1 box-2 hrd" aria-labelledby="dropdownMenuLink">
                  <li><a className="dropdown-item hrd" href="#" style={{ background: " rgba(177, 111, 111, 0.3)" }}>
                    Action
                  </a>
                  </li>
                  <li><a className="dropdown-item" href="#" style={{ background: " rgba(177, 111, 111, 0.3)" }}>
                    Another action
                  </a>
                  </li>
                  <li><a className="dropdown-item" href="#" style={{ background: "  rgba(177, 111, 111, 0.3)" }}>
                    Something else here
                  </a>

                  </li>
                </ul>

              </div>

              <div className="dropdown nav-item">
                <a className="btn nav-link  " href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Services
                </a>

                <ul className="dropdown-menu box-1 box-2" aria-labelledby="dropdownMenuLink">
                  <li><a className="dropdown-item" href="#" style={{ background: " rgba(177, 111, 111, 0.3)" }}>
                    SEO
                  </a>
                  </li>
                  <li><a className="dropdown-item" href="#" style={{ background: " rgba(177, 111, 111, 0.3)" }}>
                    PPC & Paid
                  </a>
                  </li>
                  <li><a className="dropdown-item" href="#" style={{ background: " rgba(177, 111, 111, 0.3)" }}>
                    Paid
                  </a>

                  </li>
                </ul>

              </div>

              <div className="dropdown nav-item">
                <a className="btn nav-link  " href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  contact us
                </a>

                <ul className="dropdown-menu box-1 box-2" aria-labelledby="dropdownMenuLink">
                  <li><a className="dropdown-item" href="#" style={{ background: " rgba(177, 111, 111, 0.3)" }}>
                    Action
                  </a>
                  </li>
                  <li><a className="dropdown-item" href="#" style={{ background: " rgba(177, 111, 111, 0.3)" }}>
                    Another action
                  </a>
                  </li>
                  <li><a className="dropdown-item" href="#" style={{ background: "  rgba(177, 111, 111, 0.3)" }}>
                    Something else here
                  </a>

                  </li>
                </ul>

              </div>

              <div className="dropdown nav-item">
                <a className="btn nav-link  " href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  History
                </a>

                <ul className="dropdown-menu box-1 box-2" aria-labelledby="dropdownMenuLink">
                  <li><a className="dropdown-item" href="#" style={{ background: "  rgba(177, 111, 111, 0.3)" }}>
                    Action
                  </a>
                  </li>
                  <li><a className="dropdown-item" href="#" style={{ background: "  rgba(177, 111, 111, 0.3)" }}>
                    Another action
                  </a>
                  </li>
                  <li><a className="dropdown-item" href="#" style={{ background: "  rgba(177, 111, 111, 0.3)" }}>
                    Something else here
                  </a>

                  </li>
                </ul>

              </div>


            </ul>


          </div>
          <nav>
            <form>
              {userLogin.username ?
                userLogin.username
                :
                <Link to="/SingUp">    <button className=" singup page-main  rounded-pill" type="button">SingUp</button></Link>

              }

              {userLogin.username ?
                <button className=" singup page-main  rounded-pill" type="button" onClick={() => logoutuser()}>Logout</button>
                :
                <Link to="/SingIn"><button className=" singup page-main  rounded-pill" type="button">SingIn</button></Link>
              }

              {userLogin.username ?
                <NavLink to={"/Carts/"}>   <button type="button" onClick={handleShow} style={{ border: "none", backgroundColor: "transparent", position: "relative" }}>
                  <FaCartArrowDown style={{ fontSize: "34px", marginLeft: "30px" }} />
                  <p style={{ position: "absolute", top: "-12px", left: "55px", backgroundColor: "black", color: "white", border: "1px solid black", borderRadius: "50%", width: "22px" }}>
                    {cartRecord.length}</p></button></NavLink> &&
                <Link to="/RoomList"><button className=" singup page-main  rounded-pill" type="button">RoomList</button></Link>
                : ""}
              {/* <Offcanvas className="header offcanvas-end" show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton className="canvas">
                  <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
             
                 
                </Offcanvas.Body>
              </Offcanvas>
              <Carts /> */}



            </form>
          </nav>
        </div>
      </nav>

    </>
  )
}
export default Navbar;