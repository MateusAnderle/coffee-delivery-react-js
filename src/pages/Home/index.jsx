import * as S from './styles'
import IntroImage from '../../assets/IntroImage.svg';

import { ShoppingCart, Package, Clock, Coffee } from "phosphor-react";
import { CoffeeCard } from '../../components/CoffeeCard';
import { Header } from '../../components/Header';

export function Home() {
    return (
        <S.BodyShape>
            <Header/>

            <S.IntroContainer>
                <S.IntroContent>
                    <S.IntroTexts>
                        <S.IntroTitle>
                            Encontre o café perfeito para qualquer hora do dia
                        </S.IntroTitle>

                        <S.IntroDescription>
                            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora!
                        </S.IntroDescription>
                    </S.IntroTexts>


                    <S.IntroTopics>
                        <S.TopicWrapper>
                            <span style={{background: "#C47F17"}}> <ShoppingCart size={16} color='#FFF' /> </span>
                            <S.Topics>Compra simples e segura</S.Topics>
                        </S.TopicWrapper>

                        <S.TopicWrapper>
                            <span style={{background: "#574F4D"}}> <Package size={16} color='#FFF' /> </span>
                            <S.Topics>Embalagem mantém o café intacto</S.Topics>
                        </S.TopicWrapper>

                        <S.TopicWrapper>
                            <span style={{background: "#DBAC2C"}}> <Clock  size={16} color='#FFF' /> </span>
                            <S.Topics>Entrega rápida e rastreada</S.Topics>
                        </S.TopicWrapper>

                        <S.TopicWrapper>
                            <span style={{background: "#8047F8"}}> <Coffee  size={16}color='#FFF' /> </span>
                            <S.Topics>O café chega fresquinho até você</S.Topics>
                        </S.TopicWrapper>

                    </S.IntroTopics>
                </S.IntroContent>

                <img src={IntroImage} alt="Copo de café com tampa" />
            </S.IntroContainer>

            <S.MainContainer>
                <S.MainTitle>
                    Nossos cafés
                </S.MainTitle>

                <S.MainContent>
                    <CoffeeCard />
                    <CoffeeCard />
                    <CoffeeCard />
                    <CoffeeCard />
                    <CoffeeCard />
                    <CoffeeCard />
                    <CoffeeCard />
                    <CoffeeCard />
                    <CoffeeCard />
                    <CoffeeCard />
                </S.MainContent>
            </S.MainContainer>

        </S.BodyShape>
    )
  }
  