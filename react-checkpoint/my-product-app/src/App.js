import React from "react";
import { Card, Container } from "react-bootstrap";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";


const firstName = "John"; // Change this to an empty string "" to test the fallback message

const App = () => {
  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <Card style={{ width: "18rem", textAlign: "center" }}>
        <Card.Body>
          <Image />
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Text>
            <Price />
            <Description />
          </Card.Text>
        </Card.Body>
      </Card>

      <h3 className="mt-3">
        {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
      </h3>

      {firstName && (
        <img
          src="https://via.placeholder.com/150"
          alt="User"
          className="mt-2"
        />
      )}
    </Container>
  );
};

export default App;
