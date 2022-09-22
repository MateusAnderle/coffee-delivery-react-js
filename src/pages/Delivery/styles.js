import styled from "styled-components";

export const BodyShape = styled.div`
    max-width: 1120px;
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
    margin-bottom: 50px;
`;

export const Main = styled.main`
    width: 100%;
`;

export const TitleContainer = styled.div`
    margin-bottom: 40px;
`;

export const Title = styled.div`
    font-family: 'Baloo 2', cursive;
    font-size: 32px;
    font-weight: bold;
    color: #C47F17;
    margin-bottom: 4px;
`;

export const Subtitle = styled.div`
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    color: #403937;
    font-weight: 400;
`;

export const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const Content = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #DBAC2C;
    border-radius: 6px 36px;
`;

export const IconContainer = styled.div`
    flex: 1;
    margin: 40px;
`;

export const IconCard = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    margin-bottom: 32px;
`;

export const IconSeparator = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    padding: 8px;
    border-radius: 50%;
`;

export const IconWrapper = styled.div``;

export const IconTitle = styled.div`
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    color: #574F4D;
`;

export const IconDescription = styled.div`
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    color: #574F4D;
`;

export const ImageWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.img`
    height: 293px;
    width: 492px;
`;
