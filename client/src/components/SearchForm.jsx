import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function SearchForm() {
    return (
        <Form>
            <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalUsername"
            >
                <Form.Label column sm={4}>
                    Username
                </Form.Label>
                <Col sm={8}>
                    <Form.Control type="string" placeholder="Username" />
                </Col>
            </Form.Group>

            <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalEmail"
            >
                <Form.Label column sm={4}>
                    Email
                </Form.Label>
                <Col sm={8}>
                    <Form.Control type="email" placeholder="Email" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalExp">
                <Form.Label column sm={4}>
                    Exp
                </Form.Label>
                <Col sm={8}>
                    <Form.Control type="number" placeholder="Exp" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalLvl">
                <Form.Label column sm={4}>
                    Lvl
                </Form.Label>
                <Col sm={8}>
                    <Form.Control type="number" placeholder="Lvl" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Search</Button>
                </Col>
            </Form.Group>
        </Form>
    );
}

export default SearchForm;
