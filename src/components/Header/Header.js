import React, { useState } from "react"
import { Item } from "./Item"
import { MenuMobile } from "./MenuMobile"
import {
  FacebookFilled,
  LinkedinFilled,
  MenuOutlined,
  GithubOutlined,
} from "@ant-design/icons"
import {
  Menu,
  Col,
  Items,
  Logo,
  PhoneNumber,
  Text,
  Media,
  Link,
  MobileDisplay,
} from "./Header.styles"

const Header = () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Menu>
        <Col>
          <Link href="#home">
            <Logo
              src="/images/felipe-leal-logo.png"
              alt="Felipe Leal Logo"
              title="Felipe Leal"
            />
          </Link>
          <Media>
            <Items>
              <Item title="Home" href="#home" />
              <Item title="About" href="#about" />
              <Item title="Work" href="#work" />
              <Item title="Contact" href="#contact" />
            </Items>
          </Media>
        </Col>
        <Col style={{ justifyContent: "flex-end" }}>
          <Media>
            <PhoneNumber href="tel:+5531997610524" title="Phone Number">
              <Text>Call me: </Text>
              <Text style={{ color: "#7c5eff" }}>+55 31 9 9761-0524</Text>
            </PhoneNumber>
            <Link
              href="https://www.facebook.com/lealluisf"
              title="Facebook"
              target="_blank"
            >
              <FacebookFilled style={{ fontSize: 20 }} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/lealluisf/"
              title="Linkedin"
              target="_blank"
            >
              <LinkedinFilled
                style={{ fontSize: 20, marginRight: 10, marginLeft: 10 }}
              />
            </Link>
            <Link
              href="https://github.com/felipelealdefaria"
              title="Github"
              target="_blank"
            >
              <GithubOutlined style={{ fontSize: 20 }} />
            </Link>
          </Media>
          <MobileDisplay>
            <MenuOutlined
              onClick={() => setVisible(!visible)}
              style={{ fontSize: 20, color: "#7c5eff" }}
            />
          </MobileDisplay>
        </Col>
      </Menu>
      {visible && <MenuMobile onClick={() => setVisible(false)} />}
    </>
  )
}

export default Header
