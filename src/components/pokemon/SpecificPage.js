
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GetPokemon from "./PokemonDetail";

export default function HomePage({ children }) {
	return (
		<>
			<Container>
        		<Row>
          			<Col>
						<GetPokemon />
          			</Col>
        		</Row>
			</Container>
		</>
	);
}