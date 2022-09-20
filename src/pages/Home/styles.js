import styled from "styled-components";

export const BodyShape = styled.div`
    max-width: 1120px;
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

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

export const HeaderOptions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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

export const IntroContainer = styled.div`
    height: 544px;
    width: 100%;
    display: flex;
    align-items: center;

    img {
        height: 360px;
        margin-left: 50px;
    }
`;

export const IntroContent = styled.div`
    flex: 1;
`;

export const IntroTexts = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 66px;
`;

export const IntroTitle = styled.span`
    font-size: 48px;
    font-weight: bold;
    font-family: 'Baloo 2', cursive;
    line-height: 62.4px;
    margin-bottom: 16px;
`;

export const IntroDescription = styled.span`
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    line-height: 26px;
`;

export const IntroTopics = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px 5px;
`;

export const TopicWrapper = styled.div`
    display: flex;
    align-items: center;

    span{
        border-radius: 100%;
        height: 32px;
        width: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const Topics = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #574F4D;
    margin-left: 12px;
`;

export const MainContainer = styled.main`
    width: 100%;
`;

export const MainTitle = styled.div`
    font-size: 32px;
    font-weight: bold;
    font-family: 'Baloo 2', cursive;
    margin-bottom: 34px;
`;

export const MainContent = styled.div`
    display: flex;
    justify-content: center;
    background: #CCC;
    height: 1645px;
`;
