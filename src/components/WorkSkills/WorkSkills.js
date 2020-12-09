import React from "react"
import {
  Container,
  Row,
  Col,
  Text,
  Title,
  Underline,
  BoxIcon,
  RowIcons,
} from "./WorkSkills.styles"

const WorkSkills = () => {
  return (
    <Container id="work">
      <Row>
        <Col>
          <Title>
            work
            <br />
            and skills
          </Title>
          <Underline />
          <Text>
            I have worked with technology since 2016 and have developed
            websites and applications for different market sectors.
            I have <b>worked on national and international projects</b>.
            Today, my development stack is more focused on JavaScript
            frameworks, <b>but I am always open to new challenges</b>.
          </Text>
        </Col>
        <Col>
          <RowIcons>
            <BoxIcon>
              <img
                src="/images/icon-html5.svg"
                alt="Icon HTML5"
                title="HTML5"
              />
            </BoxIcon>
            <BoxIcon>
              <img src="/images/icon-css3.svg" alt="Icon CSS3" title="CSS5" />
            </BoxIcon>
            <BoxIcon>
              <img
                src="/images/icon-js-square.svg"
                alt="Icon JavaScript"
                title="JavaScript ES6"
              />
            </BoxIcon>
            <BoxIcon>
              <img
                src="/images/icon-typescript.svg"
                alt="Icon TypeScript"
                title="TypeScript"
                style={{ borderRadius: 10 }}
              />
            </BoxIcon>
          </RowIcons>

          <RowIcons>
            <BoxIcon>
              <img
                src="/images/icon-react.svg"
                alt="Icon React and ReactNative"
                title="React and React Native"
              />
            </BoxIcon>
            <BoxIcon>
              <img
                src="/images/icon-graphql.svg"
                alt="Icon GraphQl"
                title="GraphQL"
              />
            </BoxIcon>
            <BoxIcon>
              <img
                src="/images/icon-vuejs.svg"
                alt="Icon VueJs"
                title="VueJs"
              />
            </BoxIcon>
            <BoxIcon>
              <img
                src="/images/icon-nodejs.svg"
                alt="Icon NodeJs"
                title="NodeJs"
              />
            </BoxIcon>
          </RowIcons>

          <RowIcons>
            <BoxIcon>
              <img src="/images/icon-php.svg" alt="Icon PHP" title="PHP" />
            </BoxIcon>
            <BoxIcon>
              <img
                src="/images/icon-laravel.svg"
                alt="Icon Laravel"
                title="Laravel"
              />
            </BoxIcon>
            <BoxIcon>
              <img
                src="/images/icon-adobexd.svg"
                alt="Icon Adobe XD"
                title="Adobe XD"
              />
            </BoxIcon>
            <BoxIcon>
              <img
                src="/images/icon-git.svg"
                alt="Icon Git"
                title="Git and Github"
              />
            </BoxIcon>
          </RowIcons>

          <RowIcons>
            <BoxIcon>
              <img
                src="/images/icon-gatsby.svg"
                alt="Icon Gatsby"
                title="Gatsby"
              />
            </BoxIcon>
            <BoxIcon>
              <img
                src="/images/icon-next-js.svg"
                alt="Icon Next.Js"
                title="Next.Js"
              />
            </BoxIcon>
            <BoxIcon>
              <img
                src="/images/icon-postgresql.svg"
                alt="Icon Postgres"
                title="PostgreSQL"
              />
            </BoxIcon>
            <BoxIcon>
              <img
                src="/images/icon-docker.svg"
                alt="Icon Docker"
                title="Docker"
              />
            </BoxIcon>
          </RowIcons>
        </Col>
      </Row>
    </Container>
  )
}

export default WorkSkills
