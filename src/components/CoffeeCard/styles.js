import styled from "styled-components";

export const Container = styled.div`
    background: #F3F2F2;
    height: 310px;
    width: 247px;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
    border-top-left-radius: 6px;
    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;
    border-bottom-right-radius: 6px;
    margin: 0 16px 40px 16px;
`;

export const CoffeeImage = styled.img`
    margin-top: -40px;
    height: 100px;
    width: 100px;
`;

export const CoffeeStyle = styled.div`
    font-size: 10px;
    color: #C47F17;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    padding: 5px;
    background: #F1E9C9;
    border-radius: 10px;
    margin-top: 12px;
    margin-bottom: 16px;
`;

export const CoffeeTitle = styled.div`
    font-family: 'Baloo 2', cursive;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 8px;
`;

export const CoffeeDescription = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: #8D8686;
    margin-bottom: 33px;
    text-align: center;
`;

export const BottomWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
`;

export const CoffePrice = styled.div`
    font-family: 'Baloo 2', cursive;
    font-weight: bold;
    font-size: 24px;
`;

export const CoffeeUnits = styled.div`
    border: 0;
    height: 40px;
    width: 72px;
    border-radius: 8px;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    background: #EBE5F9;
    color: #4B2995;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
`;

export const ButtonCart = styled.button`
    border: 0;
    height: 40px;
    border-radius: 8px;
    background: #4B2995;
    color: #F3F2F2;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;
