import Card from "react-bootstrap/Card";
import ResultTable from "../components/ResultTable";
import SearchForm from "../components/SearchForm";

const Search = () => {
    return (
        <div className="d-flex container" style={{ backgroundColor: "#eee" }}>
            <div className="col-lg-4">
                <Card>
                    <Card.Body>
                        <Card.Title>Advanced Search</Card.Title>
                        <SearchForm />
                    </Card.Body>
                </Card>
            </div>
            <div className="col-lg-8">
                <div className="container">
                    <ResultTable />
                </div>
            </div>
        </div>
    );
};

export default Search;
