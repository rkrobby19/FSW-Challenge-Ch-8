import { Component } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

class SearchForm extends Component {
    render() {
        return (
            <Form>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={4}>
                        Username
                    </Form.Label>
                    <Col sm={8}>
                        <Form.Control
                            id="username"
                            type="string"
                            placeholder="Username"
                            onChange={this.props.handleOnChange}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={4}>
                        Email
                    </Form.Label>
                    <Col sm={8}>
                        <Form.Control
                            id="email"
                            type="email"
                            placeholder="Email"
                            onChange={this.props.handleOnChange}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={4}>
                        Exp
                    </Form.Label>
                    <Col sm={8}>
                        <Form.Control
                            id="exp"
                            type="number"
                            placeholder="Exp"
                            onChange={this.props.handleOnChange}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={4}>
                        Lvl
                    </Form.Label>
                    <Col sm={8}>
                        <Form.Control
                            id="lvl"
                            type="number"
                            placeholder="Lvl"
                            onChange={this.props.handleOnChange}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 8, offset: 4 }}>
                        <Button
                            onClick={() => {
                                this.props.handleSearch();
                            }}
                        >
                            <i class="fa-sharp fa-solid fa-magnifying-glass add-space "></i>
                            Search
                        </Button>
                    </Col>
                </Form.Group>
            </Form>
        );
    }
}

export default SearchForm;
