import styled, { keyframes } from "styled-components";

export const Title = styled.h1`
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 2.0625rem;
    font-weight: 700;
`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 20px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`

export const Input = styled.input`
    color: #45525b;
    border: 1px solid #D5D8DE;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 400;
    height: 60px;
    margin: 5px 0;
    width: 350px;
    text-align:center;
    &:focus {
    outline: none;
}
`;

export const SubTitle = styled.p`
    font-family: 'Noto Sans Symbols', sans-serif;
    text-align: center;
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.3;
`

export const Link = styled.a`
    font-family: 'Noto Sans';
    color: #4088CB;
    text-decoration: none;
`

export const Newsletter = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 10px;
`

export const IconNewsletter = styled.img`
`

const typingAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

export const TypewriterText = styled.div`
  overflow: hidden;
  white-space: nowrap;
  width: 0;
  animation: ${typingAnimation} 2s steps(30, end) 1s forwards;
`;

