import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import FormError from "../common/FormError";
import { BASE_URL } from "../../constans/api";
import AuthContext from "../../context/AuthContext";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { TelephoneFill } from "react-bootstrap-icons";
import { PersonFill } from "react-bootstrap-icons";
import { Col } from "react-bootstrap";
import Row from "react-bootstrap/Row";

const url = BASE_URL + "/v2/cards";

const schema = yup.object().shape({
	name: yup.string()
		.required("Name is required."),
	phoneNumber: yup.string()
        .matches(/^[0-9()-]+$/, { message : `Only numbers or + signs are valid` })
		.required({ message : "Phone number is required" }),
    dropdown: yup.string()
        .required({ message : "Selecting an option is required" }),
    textarea: yup.string()
        .required({ message : "Message required" }),
});

/**	
	password: yup.string()
	.matches(`("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})")`)
	.required("Please enter your password"), */


export default function ContactForm() {
	const [submitting, setSubmitting] = useState(false);
	const [loginError, setLoginError] = useState(null);

	const { handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(schema),
	});

	const [, setAuth] = useContext(AuthContext);

	async function onSubmit(data) {

		setSubmitting(true);
		setLoginError(null);
		   
		console.log(data);

		try {
			const response = await axios.post(url, data);
			console.log("response", response.data);

			setAuth(response.data);
		} catch (error) {
			console.log("error", error);
			setLoginError(error.toString());
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<>
		  	<Form onSubmit={handleSubmit(onSubmit)} className="mt-3">
		  		{loginError && <FormError>{loginError}</FormError>}
                <Row xs="auto" sm={2}>
                    <Col>
					<Form.Group className="mb-3" controlId="formBasicName" disabled={submitting}>
			  			<InputGroup className="mb-3" controlid="formName">
							<InputGroup.Text id="basic-addon1"><PersonFill /></InputGroup.Text>
							<Form.Control 
							aria-label="name" 
							type="name"
							placeholder="Enter name" 
							name="name" />
			  			</InputGroup>
						{errors.name && <FormError>{errors.name.message}</FormError>}
					</Form.Group>
	
					<Form.Group className="mb-3" controlId="formBasicNumber" disabled={submitting}>
			  			<InputGroup className="mb-3" controlid="formPassword">
							<InputGroup.Text  id="basic-addon1"><TelephoneFill /></InputGroup.Text>
							<Form.Control 
							aria-label="Phone number" 
							type="number" 
							placeholder="Phone number" 
							name="phoneNumber" />
			  			</InputGroup> 
						{errors.phoneNumber && <FormError>{errors.phoneNumber.message}</FormError>}
				</Form.Group>

                <Form.Group className="mb-3" controlId="formBasicSelect" disabled={submitting}>
                    <Form.Label>What do you want to contact us about?</Form.Label>
                    <Form.Select>
                        <option>Open this select menu</option>
                        <option value="enquiry">Enquiry</option>
                        <option value="complaint">Complaint</option>
                        <option value="compliment">Compliment</option>
                        <option value="general-message">General message</option>
                    </Form.Select>
					{errors.dropdown && <FormError>{errors.dropdown.message}</FormError>}
				</Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTextarea" disabled={submitting}>
                    <InputGroup>
                        <InputGroup.Text>Message</InputGroup.Text>
                        <Form.Control as="textarea" aria-label="Message area" />
                    </InputGroup>
					{errors.textarea && <FormError>{errors.textarea.message}</FormError>}
				</Form.Group>
                </Col>
                </Row>
	
		  		<Button type="submit" className="mb-3"> 
			  		{submitting ? "Submitting..." : "Submit"}
		  		</Button>
			</Form>
		</>
	);
}