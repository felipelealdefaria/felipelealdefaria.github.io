import styled from "styled-components"

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

export const BoxMenu = styled.div`
  left: 0;
  width: 100%;
  /* height: 80vh; */
  z-index: 100;
  padding: 20px 0;
  position: absolute;
  text-align: center;
  background-color: #fff;
  -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.18);
  -moz-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.18);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.18);
  @media (min-width: 529px) {
    display: none;
  }
`

export const LinkMenu = styled.a`
  color: #000;
  font-size: 20px;
  display: block;
  cursor: pointer;
  font-weight: normal;
  font-family: "Avenir";
  text-decoration: none;
  :hover {
    color: #7c5eff;
  }
`

export const Divider = styled.div`
  width: 100%;
  height: 0.1px;
  background: #e9e9e9;
  border-radius: 20px;
  margin: 15px 0 20px 0;
`

export const FlexIcons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 35px 0 0 0;
`
