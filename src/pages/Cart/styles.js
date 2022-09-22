import styled from "styled-components";

export const BodyShape = styled.div`
    max-width: 1120px;
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 170px;
`;

export const MainContainer = styled.main`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

export const ZipCodeAndPayment = styled.div`
    width: 640px;
    height: 590px;
    margin-right: 32px;

    span {
        font-size: 18px;
        font-weight: bold;
        font-family: 'Baloo 2', cursive;
    }
`;

export const ZipCode = styled.div`

    background: #F3F2F2;
    margin-top: 15px;
    margin-bottom: 12px;
    border-radius: 8px;
    padding: 40px;

    form {
        margin-top: 32px;

        input {
            border: none;
            padding: 20px 12px;
            margin: 8px;
            background: #E6E5E5;
            border-radius: 5px;
        }

        input::placeholder {
            color: #8D8686;
        }
        input[name="zipCode"] {
            width: 200px;     
        }
        input[name="street"] {
            width: 520px;     
        }
        input[name="number"] {
            width: 170px;     
        }
        input[name="complement"] {
            width: 310px;     
        }
        input[name="district"] {
            width: 170px;     
        }
        input[name="city"] {
            width: 212px;     
        }
        input[name="state"] {
            width: 58px;     
        }
    }
`;

export const ZipCodeWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ZipCodeInternal = styled.div`
    margin-left: 8px;
`;

export const ZipCodeTitle = styled.div`
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    color: #403937;
    margin-bottom: 2px;
`;

export const ZipCodeDescription = styled.div`
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    color: #574F4D;
`;

export const Payment = styled.div`
    background: #F3F2F2;
    height: 130px;
    border-radius: 8px;
    padding: 40px;
`;

export const PaymentWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const PaymentInternal = styled.div`
    margin-left: 8px;
`;

export const PaymentTitle = styled.div`
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    color: #403937;
    margin-bottom: 2px;
`;

export const PaymentDescription = styled.div`
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    color: #574F4D;
`;

export const PaymentsMethods = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 32px;

    button {
        border: 0;
        height: 50px;
        width: 175px;
        border-radius: 8px;
        font-size: 12px;
        font-family: 'Roboto', sans-serif;
        background: #E6E5E5;
        color: #574F4D;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    button:hover {
        background: #EBE5F9;
        border: 1px solid #8047F8;
    }
`;

export const PaySpan = styled.div`
    margin-left: 8px;
`;

export const CoffeeWrapper = styled.div`
    span {
        font-size: 18px;
        font-weight: bold;
        font-family: 'Baloo 2', cursive;
        margin-bottom: 15px;
    }
`;

export const CoffeeContainer = styled.div`
    box-sizing: border-box;
    margin-top: 15px;
    border-top-left-radius: 6px;
    border-top-right-radius: 44px;
    border-bottom-left-radius: 44px;
    border-bottom-right-radius: 6px;
    background: #F3F2F2;
    width: 448px;
    padding: 40px;
`;

export const TotalWrapper = styled.div`
    margin-bottom: 24px;
    margin-top: 24px;
`;

export const TotalItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 13.5px;
`;

export const TotalDescription = styled.div`
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    color: #574F4D;
`;

export const TotalPrice = styled.div`
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    color: #574F4D;
`;

export const TotalDescriptionTitle = styled.div`
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    color: #403937;
    font-weight: bold;
`;

export const TotalPriceTitle = styled.div`
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    color: #403937;
    font-weight: bold;
`;

export const ConfirmButton = styled.button`
    border: 0;
    height: 46px;
    width: 100%;
    border-radius: 6px;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    background: #DBAC2C;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    :hover {
    background-color: rgba(219, 172, 44, 0.7);
}
`;

