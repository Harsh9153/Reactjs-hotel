import "./Category.css"
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function Category(props) {
    return (
        <>
            <Container style={{ marginTop: "40px" }}>
                <Row className="justify-content-md-center">
                    <Col md="auto" className='d-flex align-items-center'>
                        {props.cat.map((v, i) => {
                            return (
                                <Button variant="outline-secondary" style={{ marginLeft: "10px" }} onClick={() => props.catproduct(v)}>{v}</Button>
                            )
                        })}
                        <Form.Select aria-label="Default select example" onChange={(e) => props.pr(e)}>
                            <option style={{ width: "50px" }} >-- Select-one--</option>
                            <option value="ascending">Low to high</option>
                            <option value="descending">High to Low</option>
                        </Form.Select>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Category;