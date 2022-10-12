import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function InsertModal(props) {
    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create New Player</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group
                            as={Row}
                            className="mb-3"
                            controlId="username"
                        >
                            <Form.Label column sm={3}>
                                Username
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    type="string"
                                    placeholder="Username"
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="email">
                            <Form.Label column sm={3}>
                                Email
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group
                            as={Row}
                            className="mb-3"
                            controlId="password"
                        >
                            <Form.Label column sm={3}>
                                Password
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group
                            as={Row}
                            className="mb-3"
                            controlId="experience"
                        >
                            <Form.Label column sm={3}>
                                Experience
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control type="number" placeholder="0" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Col sm={{ span: 9, offset: 3 }}>
                                <Button type="submit">Create</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.handleClose}>
                        Create
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    );
}

export default InsertModal;
