import React from "react"
import {
  FacebookFilled,
  LinkedinFilled,
  GithubOutlined,
  MailOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons"
import {
  Link,
  BoxMenu,
  LinkMenu,
  Divider,
  FlexIcons,
} from "./MenuMobile.styles"

function MenuMobile(props) {
  return (
    <BoxMenu>
      <LinkMenu onClick={props.onClick} title="Home" href="#home">
        Home
      </LinkMenu>
      <Divider />
      <LinkMenu onClick={props.onClick} title="About" href="#about">
        About
      </LinkMenu>
      <Divider />
      <LinkMenu onClick={props.onClick} title="Work" href="#work">
        Work
      </LinkMenu>
      <Divider />
      <LinkMenu onClick={props.onClick} title="Contact" href="#contact">
        Contact
      </LinkMenu>
      <Divider />
      <FlexIcons>
        <Link
          href="https://www.facebook.com/lealluisf"
          title="Facebook"
          target="_blank"
          onClick={props.onClick}
        >
          <FacebookFilled style={{ fontSize: 25 }} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/lealluisf/"
          title="Linkedin"
          target="_blank"
          onClick={props.onClick}
        >
          <LinkedinFilled
            style={{ fontSize: 25, marginRight: 10, marginLeft: 10 }}
          />
        </Link>
        <Link
          href="https://github.com/felipelealdefaria"
          title="Github"
          target="_blank"
          onClick={props.onClick}
        >
          <GithubOutlined style={{ fontSize: 25 }} />
        </Link>
        <Link
          href="tel:+5531997610524"
          title="Whatsapp"
          target="_blank"
          onClick={props.onClick}
        >
          <WhatsAppOutlined
            style={{ fontSize: 25, marginRight: 10, marginLeft: 10 }}
          />
        </Link>
        <Link
          href="mailto:felipelealdefaria@gmail.com"
          title="Email"
          target="_blank"
          onClick={props.onClick}
        >
          <MailOutlined style={{ fontSize: 25 }} />
        </Link>
      </FlexIcons>
    </BoxMenu>
  )
}

export default MenuMobile
