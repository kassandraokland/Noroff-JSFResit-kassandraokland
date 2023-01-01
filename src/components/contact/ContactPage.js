import Heading from "../layout/Heading";
import ContactForm from "./ContactForm";
import { Container } from "react-bootstrap";

export default function LoginPage() {
	return (
		<>
			<Container>
				<Heading content="Contact" />
				<ContactForm />
			</Container>
		</>
	);
}
