import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  color: #1d2026;
  font-size: 68px;
  line-height: 1.2;
  font-weight: bolder;
  font-family: "Avenir";
  @media (max-width: 528px) {
    font-size: 48px;
    line-height: 1.1;
  }
  @media (max-width: 375px) {
    font-size: 40px;
    line-height: 1.1;
  }
`

export const Text = styled.p`
  margin: 5px;
  padding: 0;
  top: -205px;
  right: -167px;
  width: fit-content;
  position: relative;
  color: #1d2026;
  font-size: 18px;
  font-weight: normal;
  font-family: "Avenir";
  @media (max-width: 528px) {
    font-size: 14px;
    top: -139px;
    right: -117px;
    width: fit-content;
    position: relative;
    line-height: 1.45em;
  }
  @media (max-width: 375px) {
    font-size: 11px;
    top: -112px;
    right: -98px;
    width: fit-content;
    position: relative;
    line-height: 1.45em;
  }
`
export const CircleOutline = styled.img`
  left: 0;
  bottom: 0;
  z-index: -1;
  position: absolute;
  @media (max-width: 528px) {
    width: 25%;
  }
  @media (max-width: 375px) {
    width: 20%;
  }
`

export const Circle = styled.img`
  top: 10%;
  right: 0;
  /* width: 20%; */
  z-index: -1;
  position: absolute;
  @media (max-width: 528px) {
    width: 20%;
  }
  @media (max-width: 375px) {
    width: 17%;
  }
`
