import React from "react"
import {
  Container,
  Row,
  Col,
  View,
  Text,
  Title,
  Underline,
  TextInfo,
  CircleOutlineFooter,
} from "./Contact.styles"
import {
  WhatsAppOutlined,
  MailOutlined,
  LinkedinOutlined,
  FacebookOutlined,
  GithubOutlined,
} from "@ant-design/icons"

const Contact = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Title id="contact">contact</Title>
            <Underline />
            <View>
              <Text
                href="https://www.linkedin.com/in/lealluisf/"
                title="Linkedin"
                target="_blank"
              >
                <LinkedinOutlined style={iconsSize} />
                in/lealluisf
              </Text>
              <Text
                href="https://www.facebook.com/lealluisf"
                title="Facebook"
                target="_blank"
              >
                <FacebookOutlined style={iconsSize} />
                fb.me/lealluisf
              </Text>
              <Text href="tel:+5531997610524" title="Whatsapp">
                <WhatsAppOutlined style={iconsSize} />
                +55 31 99761-0524
              </Text>
              <Text
                href="https://github.com/felipelealdefaria"
                title="Github"
                target="_blank"
              >
                <GithubOutlined style={iconsSize} />
                github.com/felipelealdefaria
              </Text>
              <Text href="mailto:felipelealdefaria@gmail.com" title="Email">
                <MailOutlined style={iconsSize} />
                felipelealdefaria@gmail.com
              </Text>
            </View>
          </Col>
          <Col>
            <TextInfo>
              Thanks for
              <br /> the visit.
              <br /> I will wait for
              <br /> your contact.
            </TextInfo>
          </Col>
          <CircleOutlineFooter
            src="/images/circle-footer.png"
            alt="purple-circle"
            title="purple-circle"
          />
        </Row>
      </Container>
    </>
  )
}

export default Contact

const iconsSize = {
  fontSize: 25,
  marginRight: 10,
  marginTop: 15,
}
