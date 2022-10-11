import Table from "react-bootstrap/Table";

function ResultTable() {
    return (
        <Table striped bordered hover size="sm">
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
                <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default ResultTable;
