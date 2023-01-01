import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function CardList() {
	const [cards, setCards] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const http = useAxios();

	useEffect(function () {

		async function getData() {
			try {
				const response = await http.get("/v2/cards");
				console.log("response", response);
				setCards(response.data.data);
                console.log(response.data);
			} catch (error) {
				console.log(error);
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}

		getData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading) return <div>Loading posts...</div>;

	if (error) return <div>{}</div>;

    return (
        <Row xxs="auto" xs="auto" sm={2} md={3} lg={4} xl={5} className="g-4 m-5 cards">
            {cards.map((data) => {
                return (
                    <Col key={data.id}>
                        <Card bg="light" border="light">
                            <img src={data.images.small} alt="Pokemon card." />
                            <Card.Subtitle className="m-2">{data.name}</Card.Subtitle>
                            <Button>
                                <Link to={`cards/${data.id}`}>View</Link>
                            </Button>
                        </Card>
                    </Col>
                )
            } )}
        </Row>

    );
}


// {cards.filter(data => data.types = "Grass").map(filteredData => (

/**        <ul className="cards">
            {cards.map((data) => {
                return (
                    <li key={data.id}>
                        <img src={data.images.small} alt="Pokemon card." />
                        <Button>
                            <Link to={`cards/${data.id}`}>View {data.name}</Link>
                        </Button>
                    </li>
                )
            } )}
        </ul> */

//<div style={{background: url({data.images.small})}}></div>