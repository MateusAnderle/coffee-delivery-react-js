import { MapPinLine, CurrencyDollar, Money, Bank, CreditCard } from "phosphor-react";
import * as S from './styles';
import { useForm } from 'react-hook-form';
import { CoffeeList } from '../../components/CoffeeList';
import { Header } from '../../components/Header';
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useEffect, useState } from "react";

import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

export function Cart(){
    const { register, handleSubmit } = useForm();
    const [cartData, setCartData] = useState([]);
    const [pricesSum, setPricesSum] = useState(0);
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
    const { loadLocalStorage } = useLocalStorage()
    const navigate = useNavigate();

    const onSubmit = data => {
        navigate('/delivery', {
            state: data
        })
    }

    useEffect(()=>{
        setCartData(loadLocalStorage('@coffee-delivery:shop-cart'));
        if(cartData.length === 0) {
            return 
        } else {
            const extractData = cartData.map(item => parseFloat(item.currencyPrice.replace('R$', '')));
            const prices = extractData.reduce((a, b) => a + b);
            setPricesSum(prices)
        }  
    },[])

    useEffect(()=>{
        if(cartData.length === 0) {
            return 
        } else {
            const extractData = cartData.map(item => parseFloat(item.currencyPrice.replace('R$', '')));
            const prices = extractData.reduce((a, b) => a + b);
            setPricesSum(prices)
        }
    },[handleDelete])

    const totalItens = formatter.format(pricesSum)
    
    const totalCart = formatter.format(pricesSum + 3.50)

    function handleDelete({name}) {
        const newCartList = cartData.filter((item) => item.name !== name)
    
        setCartData(newCartList)
        localStorage.setItem(
          '@coffee-delivery:shop-cart',
          JSON.stringify(newCartList),
        )
    }

    return (
        <S.BodyShape>
            <Header/>

            <S.MainContainer>
                <S.ZipCodeAndPayment>
                    <span>Complete seu pedido</span>
                    <S.ZipCode>
                        <S.ZipCodeWrapper>
                            <MapPinLine size={24} color="#C47F17"/>
                            <S.ZipCodeInternal>
                                <S.ZipCodeTitle>
                                    Endere??o de entrega
                                </S.ZipCodeTitle>

                                <S.ZipCodeDescription>
                                    Informe o endere??o onde deseja receber seu pedido
                                </S.ZipCodeDescription>
                            </S.ZipCodeInternal>
                        </S.ZipCodeWrapper>

                        <S.Form onSubmit={handleSubmit(onSubmit)}>
                            <input placeholder='CEP' {...register("zipCode", {required: true})} />
                            <input placeholder='Rua' {...register("street", {required: true})} />
                            <input placeholder='N??mero' {...register("number", {required: true})} />
                            <input placeholder='Complemento' {...register("complement")} />
                            <input placeholder='Bairro' {...register("district", {required: true})} />
                            <input placeholder='Cidade' {...register("city", {required: true})} />
                            <input placeholder='UF' {...register("state", {required: true})} />
                        </S.Form>

                    </S.ZipCode>

                    <S.Payment>
                        <S.PaymentWrapper>
                            <CurrencyDollar size={24} color="#8047F8"/>
                            <S.PaymentInternal>
                                <S.PaymentTitle>
                                    Pagamento
                                </S.PaymentTitle>

                                <S.PaymentDescription>
                                O pagamento ?? feito na entrega. Escolha a forma que deseja pagar
                                </S.PaymentDescription>
                            </S.PaymentInternal>
                        </S.PaymentWrapper>

                        <S.PaymentsMethods>
                            <button> <CreditCard size={16} color="#8047F8"/><S.PaySpan>CART??O DE CR??DITO</S.PaySpan></button>
                            <button> <Bank size={16} color="#8047F8"/><S.PaySpan>CART??O DE D??BITO</S.PaySpan></button>
                            <button> <Money size={16} color="#8047F8"/><S.PaySpan>DINHEIRO</S.PaySpan></button>
                        </S.PaymentsMethods>
                    </S.Payment>
                </S.ZipCodeAndPayment>

                <S.CoffeeWrapper>
                    <span>Caf??s selecionados</span>
                    <S.CoffeeContainer>
                      
                    {cartData.length > 0 ? cartData.map(item => {
                        return (
                            <CoffeeList 
                                name={item.name}
                                price={item.price}
                                image={item.image}
                                counter={item.counter}
                                handleDelete={handleDelete}
                            />
                            )
                        }) : <S.TotalPriceTitle>Carrinho Vazio...</S.TotalPriceTitle>
                    } 
                        
                        <S.TotalWrapper>
                            <S.TotalItems>
                                <S.TotalDescription>Total de itens</S.TotalDescription>
                                <S.TotalPrice>{totalItens}</S.TotalPrice>
                            </S.TotalItems>

                            <S.TotalItems>
                                <S.TotalDescription>Entrega</S.TotalDescription>
                                <S.TotalPrice>R$ 3,50</S.TotalPrice>
                            </S.TotalItems>

                            <S.TotalItems>
                                <S.TotalDescriptionTitle>Total</S.TotalDescriptionTitle>
                                <S.TotalPriceTitle>{totalCart}</S.TotalPriceTitle>
                            </S.TotalItems>

                        </S.TotalWrapper>

                        
                        <S.ConfirmButton onClick={handleSubmit(onSubmit)}>CONFIRMAR PEDIDO</S.ConfirmButton>
                        

                    </S.CoffeeContainer>
                </S.CoffeeWrapper>

            </S.MainContainer>
        </S.BodyShape>
    )
}