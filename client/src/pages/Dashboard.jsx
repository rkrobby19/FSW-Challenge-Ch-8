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
        isInsert: true,
        playerId: "",
        username: "",
        email: "",
        password: "",
        experience: "",
        addExp: 0,
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

    createHandle = () => {
        this.setState({
            isInsert: true,
        });

        this.handleShow();
    };

    handleOnChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        });
    };

    editHandle = async (data) => {
        this.setState({
            isInsert: false,
            username: data.username,
            email: data.email,
            password: data.password,
            experience: data.experience,
            playerId: data.id,
        });

        this.handleShow();
    };

    submitEdit = async () => {
        const data = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        };
        const resp = await fetch(
            `http://localhost:5000/api/players/${this.state.playerId}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );

        if (this.state.addExp !== 0) {
            const add = {
                exp: this.state.addExp,
            };
            const addResp = await fetch(
                `http://localhost:5000/api/players/exp/${this.state.playerId}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(add),
                }
            );
        }

        if (resp.status === 200) {
            this.setState({
                addExp: 0,
            });
            this.handleShow();
        }
    };

    deleteHandle = async (id) => {
        let choice = window.confirm(`are you sure to delete this player data?`);
        if (choice) {
            const resp = await fetch(
                `http://localhost:5000/api/players/${id}`,
                {
                    method: "DELETE",
                }
            );
            if (resp.status === 200) {
                window.alert(`Delete Player Success`);
                this.getAllPlayers();
            }
        }
    };

    componentDidMount() {
        this.getAllPlayers();
    }

    render() {
        return (
            <Container style={{ backgroundColor: "#eee" }}>
                <Stack gap={3}>
                    <Container>
                        <Button variant="success" onClick={this.createHandle}>
                            <i className="fa-solid fa-circle-plus"></i> New
                            Player
                        </Button>

                        <InsertModal
                            show={this.state.show}
                            handleClose={this.handleShow}
                            status={this.state.isInsert}
                            username={this.state.username}
                            email={this.state.email}
                            password={this.state.password}
                            experience={this.state.experience}
                            addExp={this.state.addExp}
                            onChangeFunc={this.handleOnChange}
                            submitEdit={this.submitEdit}
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
