import styled from "styled-components";

export const BodyShape = styled.div`
    max-width: 1120px;
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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
    justify-content: flex-start;
    flex-wrap: wrap;
`;
