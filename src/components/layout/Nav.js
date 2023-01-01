
import { Link} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function NavLayout() {

	return (
		<Navbar bg="dark" expand="lg">
			<Container>
				<Link to="/">
					<Navbar.Brand className="logo">Pokemon Cards</Navbar.Brand>
				</Link>
				<Nav>
					<Link to="/" className="m-2">Home</Link>
					<Link to="cards/grass" className="m-2">Grass Types</Link>
					<Link to="contact" className="m-2">Contact</Link>
				</Nav>
			</Container>
		</Navbar>
	);
}

export default NavLayout;