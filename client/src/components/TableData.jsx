import Table from "react-bootstrap/Table";

function TableData(props) {
    return (
        <Table striped bordered hover size="sm" className="text-center">
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
                                    <a href="#edit">
                                        <i className="fa-solid fa-circle-info"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#delete">
                                        <i className="fa fa-trash text-danger"></i>
                                    </a>
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
