import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0 0 0;
  @media (max-width: 528px) {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px 0;
  }
`

export const Row = styled.div`
  width: 100%;
  display: flex;
  max-width: 1542px;
  align-items: flex-end;
  justify-content: space-around;
  @media (max-width: 528px) {
    width: 90%;
    display: block;
    margin: 30px 0 0 0;
  }
`

export const Col = styled.div`
  width: 40%;
  /* display: flex; */
  align-items: center;
  margin-bottom: 65px;
  @media (max-width: 528px) {
    width: 100%;
    display: block;
    margin: 30px 0 0 0;
  }
`

export const Text = styled.a`
  margin: 0;
  padding: 0;
  display: block;
  color: #1d2026;
  font-size: 18px;
  cursor: pointer;
  font-weight: normal;
  font-family: "Avenir";
  text-decoration: none;
  :hover {
    color: #7c5eff;
  }
  @media (max-width: 528px) {
    margin: 0;
    font-size: 14px;
    text-align: justify;
  }
`

export const Title = styled.h2`
  margin: 5px 5px 5px 0;
  padding: 0;
  color: #1d2026;
  font-size: 48px;
  font-weight: bolder;
  font-family: "Avenir";
  @media (max-width: 528px) {
    font-size: 28px;
    line-height: 1.1;
  }
`

export const TextInfo = styled.h3`
  margin: 5px 5px 25px 0;
  padding: 0;
  color: #1d2026;
  font-size: 48px;
  font-weight: bolder;
  font-family: "Avenir";
  line-height: 1.45;
  z-index: 1;
  @media (max-width: 528px) {
    font-size: 32px !important;
    margin-bottom: 0 !important;
  }
  @media (max-width: 960px) {
    font-size: 38px;
    margin-bottom: 80px;
  }
`

export const Underline = styled.div`
  width: 100px;
  height: 8px;
  background: #9177ff;
  border-radius: 10px;
  @media (max-width: 528px) {
    width: 50px;
    height: 4px;
  }
`

export const View = styled.div`
  margin: 60px 5px 5px 5px;
`

export const CircleOutlineFooter = styled.img`
  right: 0;
  margin: 0;
  z-index: -1;
  position: absolute;
  @media (max-width: 528px) {
    width: 30% !important;
  }
  @media (max-width: 960px) {
    width: 20%;
  }
`
