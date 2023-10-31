import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Map from "./Map";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e6e5e5;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
`;

function Contact() {
  const ref = useRef();
  const [success, setSuccess] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rkddd8i",
        "template_7fsutjr",
        ref.current,
        "ytfLdYqsLU5WA_zvi"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          setSuccess(true);
        },
        function (error) {
          console.log("FAILED...", error);
          setSuccess(false);
        }
      );

    {
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }
  };

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={submitHandler}>
            <Title>Contact Me</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea placeholder="Message" rows={10} name="message" />
            <Button type="submit">Send</Button>

            {success && (
              <span style={{ color: "white", textAlign: "center" }}>
                Message has been sent successfully!
              </span>
            )}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
}

export default Contact;
