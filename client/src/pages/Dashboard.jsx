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
        this.setState({ show: !this.state.show });
        this.getAllPlayers();
    };

    getAllPlayers = async () => {
        const resp = await fetch(`http://localhost:5000/api/players`);
        const data = await resp.json();

        this.setState({
            players: data.message,
        });
    };

    componentDidMount() {
        this.getAllPlayers();
    }

    render() {
        return (
            <div className="container" style={{ backgroundColor: "#eee" }}>
                <Stack gap={3}>
                    <div>
                        <Button variant="success" onClick={this.handleShow}>
                            <i class="fa-solid fa-circle-plus"></i> New Player
                        </Button>

                        <InsertModal
                            show={this.state.show}
                            handleClose={this.handleShow}
                        />
                    </div>

                    <div>
                        <TableData players={this.state.players} />
                    </div>
                </Stack>
            </div>
        );
    }
}

export default Dashboard;
