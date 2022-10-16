import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchForm from "../components/SearchForm";
import { Component } from "react";
import TableData from "../components/TableData";

const queryString = require("query-string");

class Search extends Component {
    state = {
        players: [],
        username: "",
        email: "",
        exp: "",
        lvl: "",
    };

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        });
    };

    handleSearch = async () => {
        const data = {
            username: this.state.username,
            email: this.state.email,
            exp: this.state.exp,
            lvl: this.state.lvl,
        };

        const stringified = queryString.stringify(data);
        const resp = await fetch(
            `http://localhost:5000/api/players?${stringified}`
        );
        const playersData = await resp.json();

        this.setState({
            players: playersData.message,
        });

        if (resp.status === 200) {
            this.setState({
                username: "",
                email: "",
                exp: "",
                lvl: "",
            });
        }

        this.componentDidMount();
    };

    componentDidMount() {}

    render() {
        return (
            <Container className="my-container">
                <Row>
                    <Col>
                        <Card bg="light">
                            <Card.Body>
                                <Card.Title className="text-center">
                                    <h2>
                                        <i class="fa-solid fa-user add-space"></i>
                                        Search Player
                                    </h2>
                                </Card.Title>
                                <SearchForm
                                    handleOnChange={this.handleChange}
                                    handleSearch={this.handleSearch}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={8}>
                        <Container>
                            <TableData players={this.state.players} />
                        </Container>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Search;
