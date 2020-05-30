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
  align-items: flex-end;
  justify-content: space-around;
  @media (max-width: 960px) {
    width: 90%;
    display: block;
    margin: 30px 0;
  }
`

export const Col = styled.div`
  width: 40%;
  /* display: flex; */
  align-items: center;
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

export const BoxText = styled.div`
  z-index: 1;
  width: 100%;
  /* height: 300px; */
  background: #efefef;
  /* margin: 60px 0 0 10px; */
  border-radius: 10px;
`

export const BoxRelative = styled.div`
  z-index: -1;
  width: 90%;
  height: 90%;
  position: relative;
  top: 40px;
  right: 10px;
  background: #9177ff;
  border-radius: 10px;
`

export const BoxIcon = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  img {
    width: 40%;
    height: auto;
    margin: 0;
    padding: 0;
    @media (max-width: 528px) {
      width: 50%;
    }
  }
`

export const RowIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 20px 0;
`
