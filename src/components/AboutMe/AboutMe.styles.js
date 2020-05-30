import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  @media (max-width: 960px) {
    width: 100%;
    display: flex;
    padding: 10px 0;
    justify-content: center;
  }
`

export const Row = styled.div`
  width: 100%;
  display: flex;
  max-width: 1542px;
  align-items: flex-start;
  justify-content: space-around;
  @media (max-width: 960px) {
    width: 90%;
    display: block;
    margin: 30px 0;
  }
  @media (max-width: 1140px) {
    align-items: center;
  }
`

export const Col = styled.div`
  width: 40%;
  /* display: flex; */
  align-items: center;
  :nth-last-child(1) {
    display: flex;
    justify-content: center;
  }
  @media (max-width: 960px) {
    width: 100%;
    display: block;
    margin: 30px 0;
  }
`

export const Text = styled.p`
  margin: 60px 5px 5px 5px;
  padding: 0;
  color: #1d2026;
  font-size: 22px;
  text-align: justify;
  line-height: 1.8;
  font-weight: normal;
  font-family: "Avenir";
  @media (max-width: 528px) {
    font-size: 16px;
    margin: 45px 0 0 0;
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

export const PictureMe = styled.img`
  margin: 0;
  width: 100%;
  @media (max-width: 528px) {
    width: 100%;
    height: auto;
  }
`
