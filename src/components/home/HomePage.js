import Heading from "../layout/Heading";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardList from "../pokemon/PokemonList";

export default function HomePage({ children }) {
	return (
		<>
			<Container>
        		<Row>
          			<Col>
						<Heading content="Pokemons" />
						<CardList />
          			</Col>
        		</Row>
			</Container>
		</>
	);
}

// md={5} xs="auto" className="m-5"