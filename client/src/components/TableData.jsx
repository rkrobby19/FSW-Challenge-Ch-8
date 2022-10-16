import Button from "react-bootstrap/esm/Button";
import Table from "react-bootstrap/Table";

function TableData(props) {
    return (
        <Table
            striped
            bordered
            hover
            size="sm"
            className="text-center my-table"
            variant="dark"
        >
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Experience</th>
                    <th>Level</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {props.players.map((player) => (
                    <tr key={player.id}>
                        <td>{player.username}</td>
                        <td>{player.email}</td>
                        <td>{player.experience}</td>
                        <td>{player.lvl}</td>
                        <td>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <Button
                                        variant="outline-primary"
                                        onClick={() => {
                                            props.editHandle(player);
                                        }}
                                    >
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button
                                        variant="outline-danger"
                                        onClick={() => {
                                            props.deleteHandle(player.id);
                                        }}
                                    >
                                        <i className="fa-solid fa-trash text-ligt"></i>
                                    </Button>
                                </li>
                            </ul>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default TableData;
