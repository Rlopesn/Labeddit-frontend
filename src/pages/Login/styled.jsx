import styled, { keyframes } from "styled-components";

export const Section = styled.section`
    display: grid;
    gap: 20px;
`
export const Banner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Title = styled.p`
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 1rem;
    font-weight: 300;
    line-height: 2;
`

export const Form = styled.form`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    
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

export const SectionLogin = styled.div`
    display: grid;
    grid-template-columns: repeat(3 auto);
    gap: 15px;
`;



export const ButtonAccount = styled.button`
    display: flex;
    background:#fff;
    justify-content: center;
    align-items: center;
    color: rgba(2,104,227,1);
    border-radius:30px;
    font-family: 'Noto Sans Symbols', sans-serif;;
    font-size: 1.125rem;
    font-weight: 700;
    border: 1px solid  rgba(2,104,227,1);
    text-decoration: none;
    width: 350px;
    height: 51px;
    &:active{
            transform: scale(0.90);
            transition: all ease .5s;
        }
`

