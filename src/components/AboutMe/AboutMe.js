import React from "react"
import {
  Container,
  Row,
  Col,
  Text,
  Title,
  Underline,
  PictureMe,
} from "./AboutMe.styles"

const AboutMe = () => {
  return (
    <Container id="about">
      <Row>
        <Col>
          <Title>about me</Title>
          <Underline />
          <Text>
            I'm Brazilian, I'm 22 years old. Born in Arcos, Minas Gerais, I
            currently reside in Dois Vizinhos, Paraná, where I am about to
            complete a degree in <b>Software Engineering</b> from the{" "}
            <b>Federal Technological University of Paraná (UTFPR)</b>. I work
            with web and mobile programming, I am interested in the most diverse
            areas and programming languages ​​and I am always looking for
            knowledge and improvements, both personal and professional.
          </Text>
        </Col>
        <Col>
          <PictureMe
            src="/images/about-me.png"
            alt="Luis Felipe Leal - @lealluisf"
            title="Luis Felipe Leal - @lealluisf"
          />
        </Col>
      </Row>
    </Container>
  )
}

export default AboutMe
