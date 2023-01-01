import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"

export default function GetPokemon() {
	const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const http = useAxios();
	const navigate = useNavigate();

	let { id } = useParams();

	if (!id) {
		navigate("/");
	}

	const url = "/v2/cards/" + id;

	useEffect(
		function () {
			async function GetDetails() {
				try {
					const response = await http.get(url);
					console.log("response", response.data);
					setPokemon(response.data.data);;
				} catch (error) {
					console.log(error);
					setError(error.toString());
				} finally {
					setLoading(false);
				}
			}

			GetDetails();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);

    if (loading) return <div>Loading posts...</div>;

	if (error) return <div>{}</div>;


	return (
        <>
            <Container>
                <Row xs="auto" sm={2} md={3}>
                    <Col>
                    <Card bg="light" border="light">
                            <img src={pokemon.images.small} alt="Pokemon card." />
                            <Card.Subtitle className="m-2">{pokemon.name}</Card.Subtitle>
                            <Button>
                                <Link to={`cards/${pokemon.id}`}>View</Link>
                            </Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
	);
}

/**                <div style={{ backgroundImage: `url(${profile.banner ? profile.banner : defaultBanner})` }} className="bannerImage" id="banner"></div>
                <Row>
                    <Col>
                        <div style={{ backgroundImage: `url(${profile.avatar ? profile.avatar : defaultAvatar})` }} className="profileImage m-3" id="avatar"></div>
                    </Col>
                    <Col className="m-3">
                        <SubHeading content={`@${profile.name}`} className="pt-3" />
                        <p className="text-muted">{profile.email}</p>
                    </Col>
                </Row> */