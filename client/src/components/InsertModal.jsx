import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Component } from "react";

class InsertModal extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        experience: "",
    };

    submitHandle = async () => {
        const data = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            exp: this.state.experience,
        };
        // console.log(data);
        const resp = await fetch(`http://localhost:5000/api/players`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (resp.status === 201) {
            this.props.handleClose();
        }
    };

    onChangeHandle = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        });
    };

    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        {this.props.status ? (
                            <Modal.Title>Create New Player</Modal.Title>
                        ) : (
                            <Modal.Title>Edit Player</Modal.Title>
                        )}
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={3}>
                                    Username
                                </Form.Label>
                                <Col sm={9}>
                                    {this.props.status ? (
                                        <Form.Control
                                            type="string"
                                            placeholder="Username"
                                            id="username"
                                            onChange={this.onChangeHandle}
                                        />
                                    ) : (
                                        <Form.Control
                                            type="string"
                                            placeholder="Username"
                                            id="username"
                                            defaultValue={this.props.username}
                                            onChange={this.props.onChangeFunc}
                                        />
                                    )}
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={3}>
                                    Email
                                </Form.Label>
                                <Col sm={9}>
                                    {this.props.status ? (
                                        <Form.Control
                                            type="email"
                                            placeholder="Email"
                                            id="email"
                                            onChange={this.onChangeHandle}
                                        />
                                    ) : (
                                        <Form.Control
                                            type="email"
                                            placeholder="Email"
                                            id="email"
                                            defaultValue={this.props.email}
                                            onChange={this.props.onChangeFunc}
                                        />
                                    )}
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={3}>
                                    Password
                                </Form.Label>
                                <Col sm={9}>
                                    {this.props.status ? (
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            id="password"
                                            onChange={this.onChangeHandle}
                                        />
                                    ) : (
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            id="password"
                                            defaultValue={this.props.password}
                                            onChange={this.props.onChangeFunc}
                                        />
                                    )}
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={3}>
                                    Experience
                                </Form.Label>
                                <Col sm={9}>
                                    {this.props.status ? (
                                        <Form.Control
                                            type="number"
                                            placeholder="0"
                                            id="experience"
                                            onChange={this.onChangeHandle}
                                        />
                                    ) : (
                                        <Form.Control
                                            type="number"
                                            placeholder="0"
                                            id="experience"
                                            defaultValue={this.props.experience}
                                            onChange={this.props.onChangeFunc}
                                            disabled
                                        />
                                    )}
                                </Col>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="secondary"
                            onClick={this.props.handleClose}
                        >
                            Close
                        </Button>
                        {this.props.status ? (
                            <Button
                                variant="primary"
                                onClick={this.submitHandle}
                            >
                                Create
                            </Button>
                        ) : (
                            <Button
                                variant="primary"
                                onClick={() => {
                                    this.props.submitEdit();
                                }}
                            >
                                Save Changes
                            </Button>
                        )}
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default InsertModal;
