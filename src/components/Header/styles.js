import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 32px 0;

    img {
        height: 40px;
    }
`;

export const HeaderOptions = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: sticky;
`;

export const CurrentLocation = styled.button`
    border: 0;
    height: 40px;
    border-radius: 8px;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    background: #EBE5F9;
    color: #4B2995;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
`;

export const HouseIcon = styled.button`
    border: 0;
    height: 40px;
    width: 40px;
    border-radius: 8px;
    background: #F1E9C9;
    color: #C47F17;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin-left: 12px;
    cursor: pointer;

    &::after {
        content: '${(props) => props.numberToItensAtShopCart}';
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: ${(props) =>
        props.numberToItensAtShopCart === 0 ? 'none' : 'flex'};
        position: absolute;
        bottom: 28px;
        right: 43px;
        background: red;
        color: white;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 0.75rem;
    }
`;

export const CartIcon = styled.button`
    border: 0;
    height: 40px;
    width: 40px;
    border-radius: 8px;
    background: #F1E9C9;
    color: #C47F17;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin-left: 12px;
    cursor: pointer;
`;