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
            I'm a 23-year-old Brazilian. I was born in Arcos, Minas Gerais,
            and I currently reside in Dois Vizinhos, Paraná. I am about to complete
            a degree in <b>Software Engineering</b> from the <b>Federal Technological University
            of Paraná (UTFPR)</b>. I work with web and mobile programming, and I am interested
            in very diverse areas of programming languages. ​​I am always looking to expand
            my knowledge and improve, both personally and professionally.
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
