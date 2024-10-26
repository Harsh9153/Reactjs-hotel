import { FaStar } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { Link } from "react-router-dom";
import Details from "../details/Details";
import "./Products.css"

function Products(props) {
    return (

        <>
            <Container style={{ marginTop: "40px" }}>
                <Row>
                    {props.pro.filter((v, i) => {
                        if (props.sea == "") {
                            return v;
                        } else if (v.title.toLocaleLowerCase().match(props.sea)) {
                            return v;
                        }
                    }).map((v, i) => {



                        return (
                            <Col xs={4} >
                                <Card style={{ width: "324px" }} className="shadow-sm p-3 mb-2 cards-main bg-white ">
                                    <Card.Img variant="top" src={v.image} style={{ padding: "15px" }} height={250} />
                                    <Card.Body>
                                        <Card.Title style={{ fontSize: "17px" }}><Link to={"/Details/" + v.id}> {v.title}</Link> </Card.Title>
                                        <Card.Text style={{ fontSize: "12px" }}>
                                            {v.dates}
                                        </Card.Text>
                                        <h3 style={{ fontSize: "19px" }} >₹{v.price}</h3>


                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}

                </Row>

            </Container>
        </>
    )
}
export default Products;