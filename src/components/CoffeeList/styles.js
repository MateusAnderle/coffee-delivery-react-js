import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom-width: 1px;
    border-bottom-color: #E6E5E5;
    border-bottom-style: solid;
    padding-bottom: 24px;
    margin-bottom: 24px;
`;

export const CoffeeImage = styled.img`
    height: 64px;
    width: 64px;
`;

export const DescriptionWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    margin-left: 20px;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
`;

export const Title = styled.div`
    font-size: 16px;
    color: #403937;
    font-family: 'Roboto', sans-serif;
`;

export const Price = styled.div`
    font-size: 16px;
    color: #574F4D;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
`;

export const Footer = styled.div`
    display: flex;
    align-items: center;
`;

export const Counter = styled.div`
    border: 0;
    height: 32px;
    width: 72px;
    border-radius: 8px;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    background-color: #E6E5E5;
    color: #4B2995;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
`;

export const Remove = styled.button`
    display: flex;
    border: none;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-around;
    width: 91px;
    height: 32px;
    background-color: #E6E5E5;
    border-radius: 8px;
    padding: 5px;
    margin-left: 8px;
`;

export const Subtitle = styled.div`
    font-size: 12px;
    color: #574F4D;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
`;
