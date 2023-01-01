import Heading from "../layout/Heading";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardList from "./GrassTypesList";

export default function HomePage({ children }) {
	return (
		<>
			<Container>
        		<Row>
          			<Col>
						<Heading content="Grass Pokemons" />
						<CardList />
          			</Col>
        		</Row>
			</Container>
		</>
	);
}