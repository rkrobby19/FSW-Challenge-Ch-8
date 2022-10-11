import ResultTable from "../components/ResultTable";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

const Dashboard = () => {
    return (
        <div className="container" style={{ backgroundColor: "#eee" }}>
            <Stack gap={3}>
                <div>
                    <Button variant="success">New Player</Button>
                </div>

                <div>
                    <ResultTable />
                </div>
            </Stack>
        </div>
    );
};

export default Dashboard;
