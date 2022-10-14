import Container from "react-bootstrap/Container";
import TableData from "../components/TableData";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { Component } from "react";
import InsertModal from "../components/InsertModal";

class Dashboard extends Component {
    state = {
        players: [],
        show: false,
    };

    handleShow = () => {
        this.setState({
            show: !this.state.show,
        });
        this.getAllPlayers();
    };

    getAllPlayers = async () => {
        const resp = await fetch(`http://localhost:5000/api/players`);
        const data = await resp.json();

        this.setState({
            players: data.message,
        });
    };

    editHandle = (data) => {
        window.alert(`edit button`);
    };

    deleteHandle = (id) => {
        window.alert(`iam delete button id=${id}`);
    };

    componentDidMount() {
        this.getAllPlayers();
    }

    render() {
        return (
            <Container style={{ backgroundColor: "#eee" }}>
                <Stack gap={3}>
                    <Container>
                        <Button variant="success" onClick={this.handleShow}>
                            <i className="fa-solid fa-circle-plus"></i> New
                            Player
                        </Button>

                        <InsertModal
                            show={this.state.show}
                            handleClose={this.handleShow}
                        />
                    </Container>

                    <Container>
                        <TableData
                            players={this.state.players}
                            editHandle={this.editHandle}
                            deleteHandle={this.deleteHandle}
                        />
                    </Container>
                </Stack>
            </Container>
        );
    }
}

export default Dashboard;
