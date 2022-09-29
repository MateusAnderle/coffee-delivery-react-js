import * as S from './styles'
import { Header } from "../../components/Header";
import Illustration from '../../assets/Illustration.png';
import { MapPin, CurrencyDollar, Clock } from "phosphor-react";


export function Delivery(){
    return (
        <S.BodyShape>
            <Header/>
                <S.Main>
                    <S.TitleContainer>
                        <S.Title>Uhu! Pedido confirmado</S.Title>
                        <S.Subtitle>Agora é só aguardar que logo o café chegará até você</S.Subtitle>
                    </S.TitleContainer>

                    <S.ContentWrapper>
                        <S.Content>
                            <S.IconContainer>

                                <S.IconCard>
                                    <S.IconSeparator style={{backgroundColor: "#8047F8"}}>
                                        <MapPin size={20} color='#FFF' />
                                    </S.IconSeparator>
                                    <S.IconWrapper>
                                        <S.IconTitle>
                                            <strong>Entrega em Rua João Daniel Martinelli, 102</strong>
                                        </S.IconTitle>
                                        <S.IconDescription>
                                            Farrapos - Porto Alegre, RS
                                        </S.IconDescription>
                                    </S.IconWrapper>
                                </S.IconCard>

                                <S.IconCard>
                                    <S.IconSeparator style={{backgroundColor: "#DBAC2C"}}>
                                        <Clock size={20} color='#FFF' />
                                    </S.IconSeparator>
                                    <S.IconWrapper>
                                        <S.IconTitle>
                                            Previsão de entrega
                                        </S.IconTitle>
                                        <S.IconDescription>
                                            <strong>20 min - 30 min</strong>
                                        </S.IconDescription>
                                    </S.IconWrapper>
                                </S.IconCard>

                                <S.IconCard>
                                    <S.IconSeparator style={{backgroundColor: "#C47F17"}}>
                                        <CurrencyDollar size={20} color='#FFF' />
                                    </S.IconSeparator>
                                    <S.IconWrapper>
                                        <S.IconTitle>
                                            Pagamento na entrega
                                        </S.IconTitle>
                                        <S.IconDescription>
                                            <strong>Cartão de crédito</strong>
                                        </S.IconDescription>
                                    </S.IconWrapper>
                                </S.IconCard>

                            </S.IconContainer>
                        </S.Content>
                        <S.ImageWrapper>
                            <S.Image src={Illustration}/>
                        </S.ImageWrapper>
                    </S.ContentWrapper>
                </S.Main>
        </S.BodyShape>
    )
}