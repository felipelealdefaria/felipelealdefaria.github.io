import styled from "styled-components"

export const Menu = styled.header`
  width: 100%;
  height: auto;
  display: flex;
  padding: 10px 0;
  align-items: center;
  justify-content: space-around;
`
export const Logo = styled.img`
  width: 77px;
  height: auto;
  margin: 0 20px 0 0;
`

export const Col = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
`

export const Items = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`

export const Media = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 528px) {
    display: none;
  }
`

export const MobileDisplay = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  @media (min-width: 528px) {
    display: none;
  }
`

export const PhoneNumber = styled.a`
  cursor: pointer;
  margin-right: 10px;
  text-decoration: none;
  p:hover {
    text-decoration: underline;
    text-decoration-color: #7c5eff;
  }
  @media (min-width: 528px) {
    display: none;
  }
  @media (min-width: 1140px) {
    display: flex;
  }
`

export const Link = styled.a`
  color: #000;
  cursor: pointer;
  text-decoration: none;
  font-weight: normal;
  font-family: "Avenir";
  :hover {
    color: #7c5eff;
  }
`

export const Text = styled.p`
  margin: 5px;
  padding: 0;
  color: #1d2026;
  font-size: 18px;
  font-weight: normal;
  font-family: "Avenir";
  @media (max-width: 528px) {
    font-size: 14px;
  }
`
