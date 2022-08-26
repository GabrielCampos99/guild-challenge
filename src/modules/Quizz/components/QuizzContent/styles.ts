import styled from "styled-components";

export const Wrapper = styled.div`
    justify-content: center;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    height: 100vh;
    display: flex;
    flex-direction: column;
    
    padding: 1.6rem;
  
`

export const Content = styled.div`
    min-height: 53.3rem;
    max-height: 70rem;
    max-width: 50rem;
    display: flex;
        flex-direction: column;
        justify-content: space-between;
  
`

export const Header = styled.h1`
    margin-top: 1rem;
    font-size: 2.4rem;
    text-align: center;
`

export const Text = styled.h2`
    font-size: 1.6rem;
    font-weight: 300;
    text-align: center;
`

export const TextFinalized = styled.h2`
    font-size: 1.6rem;
    font-weight: 300;
`

export const ButtonBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
`

export const ItemList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 16px;

    .final-statement {
        display: flex;
        gap: 10px;
    }
`

export const Button = styled.button`
    font-size: 2.4rem;
    font-weight: 300;
    text-decoration: none;
    text-transform: uppercase;
    border: none;
    background-color: transparent;
    margin-bottom: 1rem;
    padding: 1rem;
    transition: all .1s;
    color: rgba(52, 52, 52, 1);
    
    &:link {
        text-decoration: none;
    }

    &:hover {
        color: rgba(52, 52, 52, .7);
        cursor: pointer;
    }
`