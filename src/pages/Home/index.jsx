import * as S from './styles'
import IntroImage from '../../assets/IntroImage.svg';
import { ShoppingCart, Package, Clock, Coffee } from "phosphor-react";
import { CoffeeCard } from '../../components/CoffeeCard';
import { Header } from '../../components/Header';
import { coffeeData } from '../../data';
import { useState } from 'react';

export function Home() {
    const [orderedCoffee, setOrderedCoffee] = useState([]);

    function handleCartSubmit({title, counter}){

        if ( counter == 0) {
            const filterAndReset = orderedCoffee.filter(order => {
                return order.title !== title;
            })

            setOrderedCoffee(filterAndReset);

            return
        }
/*
        const compareOrders = orderedCoffee.filter(order => {
            return (
                if (order.title == title){
                    pagar antigo indice do array que tinha o counter anterior 
                }
                
        })
        setOrderedCoffee(compareOrders);
*/



        setOrderedCoffee([...orderedCoffee, {title: title, counter: counter}])
    }


    console.log(orderedCoffee)


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
                    {coffeeData.map(item => {
                        return (
                            <CoffeeCard 
                                image={item.photo}
                                coffeeStyle={item.style}
                                title={item.title}
                                description={item.description}
                                price={item.price}
                                handleCartSubmit={handleCartSubmit}
                            />
                            )
                        })
                    } 
                </S.MainContent>
            </S.MainContainer>

        </S.BodyShape>
    )
  }
  