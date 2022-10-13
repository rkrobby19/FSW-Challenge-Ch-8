import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchForm from "../components/SearchForm";
import { Component } from "react";
import TableData from "../components/TableData";

class Search extends Component {
    state = {
        players: [],
    };
    render() {
        return (
            <Container style={{ backgroundColor: "#eee" }}>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <h2>Search Player</h2>
                                </Card.Title>
                                <SearchForm />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={8}>
                        <TableData players={this.state.players} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Search;
