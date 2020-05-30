import React from "react"
import { Row } from "antd"
import { Title, Text, Container, CircleOutline, Circle } from "./Main.styles"

const Main = () => {
  return (
    <Container id="home">
      <CircleOutline
        src="/images/outline-circle.png"
        alt="purple-outline-circle"
        title="purple-outline-circle"
      />
      <Row>
        <Title>
          Hello
          <span
            style={{
              fontSize: 68,
              color: "#9177FF",
              margin: 0,
              padding: 0,
              lineHeight: 0,
            }}
          >
            .{" "}
          </span>
          <br /> I am <br /> Felipe Leal
        </Title>
        <Text>
          Web &amp; <br />
          Mobile <br />
          Developer
        </Text>
      </Row>
      <Circle
        src="/images/circle.png"
        alt="purple-circle"
        title="purple-circle"
      />
    </Container>
  )
}

export default Main
