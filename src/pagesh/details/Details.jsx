import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Details.css"
import { FaStar } from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';
import { SiStockx } from "react-icons/si";
import { FiChevronsRight } from "react-icons/fi";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import { AddtoCart } from "../../redux/Actions/CardActions";
import { ToastContainer, toast } from 'react-toastify';






function Details() {

    let pro = useParams();
    let [singlePro, setSinglePro] = useState({});
    let userLogin = useSelector((state) => state.UserReducers.logindetails);
    console.log(userLogin);
    let dispatch = useDispatch();


    useEffect(() => {
        setTimeout(() => {
            single()
        }, 1000)
    }, setSinglePro)


    let single = () => {
        Axios.get("http://localhost:5000/roomList/" + pro.id)
            .then((res) => {
                // console.log(res.data);
                setSinglePro(res.data);

            })
            .catch((err) => {
                console.log(err);
            })
    }

    let addtoCartSystem = async (e) => {
        e.preventDefault();

        let cartDetails = {
            quantity: e.target.quantity.value,
            productId: pro.id,
            userId: userLogin.id
        }

        let Checkcart = await Axios.get(`http://localhost:5000/roomList?productId=${pro.id}&userId=${userLogin.id}`)

        if (Checkcart.data.length == 0) {
            dispatch(AddtoCart(cartDetails))

        }
        else {
            toast.error("Product already into cart !!")
        }


    }
    return (
        <>
            <div>
                {/* <h3>{singlePro.title}</h3> */}
                <div className="container-xxl">
                    <Row>
                        <Col md="auto" className="mt-5">
                            <div className="det-img">
                                <img src={singlePro.image} height={450} width={450} alt="" />
                            </div>


                        </Col>
                        <Col className="mt-5 det-info">
                            <div className="det-title">
                                <div className="ti">
                                    <h1>{singlePro.category}</h1>
                                    <h2 className="title">{singlePro.title}</h2>
                                    <Badge bg="success" style={{ fontSize: "15px" }}>{singlePro.rating ? singlePro.rating.rate : ""}<FaStar style={{ paddingBottom: "3px", paddingLeft: "3px", fontSize: "15px" }} /> 5</Badge>
                                    <h3>${singlePro.price}</h3>
                                    {singlePro.rating ? singlePro.rating.count > 250 ?
                                        <p style={{ color: "green", fontSize: "19px" }}> <FiChevronsRight style={{ marginBottom: "3px", marginRight: "5px", fontSize: "24px" }} />Available </p> :
                                        <p style={{ color: "red" }}><SiStockx style={{ marginBottom: "3px", marginRight: "5px" }} />Out of stock </p> : ""}
                                    <p>{singlePro.description}</p>
                                </div>
                                <div className="btn-buy">
                                    <form method="post" onSubmit={(e) => addtoCartSystem(e)}>
                                        <div className="qua">
                                            <h4>Quantity:-</h4>
                                            <Form.Select name="quantity">

                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                                <option value="4">Four</option>
                                                <option value="5">Five</option>
                                            </Form.Select>
                                        </div>
                                        {userLogin.username ?
                                            <button className="btnn shadow"><TiShoppingCart style={{ fontSize: "22px", marginBottom: '5px' }} /> Book-Now </button>
                                            :
                                            <Link to={"/SingIn"}><button className="btnn shadow"><TiShoppingCart style={{ fontSize: "22px", marginBottom: '5px' }} /> Book-Now</button></Link>

                                        }
                                        <Link to={"/"}><button className="btnn shadow" style={{ marginLeft: "18px" }}>Back-To-Home</button></Link>



                                    </form>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </div>
                <ToastContainer />
            </div>
        </>
    )
}
export default Details;