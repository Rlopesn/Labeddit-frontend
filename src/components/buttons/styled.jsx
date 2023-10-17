import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    background: linear-gradient(180deg, rgba(24,174,254,1) 0%, rgba(10,128,236,1) 50%, rgba(2,104,227,1) 100%);
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius:30px;
    font-family: 'Noto Sans Symbols', sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 5px;
    border: none;
    text-decoration: none;
    text-transform: capitalize;
    width: 350px;
    height: 51px;
    &:active{
            background: linear-gradient(180deg, rgba(2,104,227,1) 40%, rgba(10,128,236,1) 100%,  rgba(24,174,254,1) 0%);
            transform: scale(0.90);
            transition: all ease .5s;
        }
`

export const ButtonPost = styled.button`
    display: flex;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius:12px;
    font-family: 'Noto Sans Symbols', sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 5px;
    border: none;
    text-decoration: none;
    text-transform: capitalize;
    width: 100%;
    height: 51px;
    &:active{
            background: linear-gradient(180deg, rgba(2,104,227,1) 40%, rgba(10,128,236,1) 100%,  rgba(24,174,254,1) 0%);
            transform: scale(0.90);
            transition: all ease .5s;
        }
`