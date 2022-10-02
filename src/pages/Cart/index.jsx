import { MapPinLine, CurrencyDollar, Money, Bank, CreditCard } from "phosphor-react";
import * as S from './styles';
import { useForm } from 'react-hook-form';
import { CoffeeList } from '../../components/CoffeeList';
import { Header } from '../../components/Header';
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useEffect, useState } from "react";

export function Cart(){
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const [cartData, setCartData] = useState([]);
    const [pricesSum, setPricesSum] = useState([]);

    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    useEffect(()=>{
        const { loadLocalStorage } = useLocalStorage()
        setCartData(loadLocalStorage('@coffee-delivery:shop-cart'));
        const realData = loadLocalStorage('@coffee-delivery:shop-cart');
        const extractData = realData.map(item => parseFloat(item.currencyPrice.replace('R$', '')));
        const prices = extractData.reduce((a, b) => a + b);
        setPricesSum(prices)
    },[])
 
    const totalItens = formatter.format(pricesSum)
    
    const totalCart = formatter.format(pricesSum + 3.50)

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
                                    Endereço de entrega
                                </S.ZipCodeTitle>

                                <S.ZipCodeDescription>
                                    Informe o endereço onde deseja receber seu pedido
                                </S.ZipCodeDescription>
                            </S.ZipCodeInternal>
                        </S.ZipCodeWrapper>

                        <S.Form onSubmit={handleSubmit(onSubmit)}>
                            <input placeholder='CEP' {...register("zipCode", {required: true})} />
                            <input placeholder='Rua' {...register("street", {required: true})} />
                            <input placeholder='Número' {...register("number", {required: true})} />
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
                                O pagamento é feito na entrega. Escolha a forma que deseja pagar
                                </S.PaymentDescription>
                            </S.PaymentInternal>
                        </S.PaymentWrapper>

                        <S.PaymentsMethods>
                            <button> <CreditCard size={16} color="#8047F8"/><S.PaySpan>CARTÃO DE CRÉDITO</S.PaySpan></button>
                            <button> <Bank size={16} color="#8047F8"/><S.PaySpan>CARTÃO DE DÉBITO</S.PaySpan></button>
                            <button> <Money size={16} color="#8047F8"/><S.PaySpan>DINHEIRO</S.PaySpan></button>
                        </S.PaymentsMethods>
                    </S.Payment>
                </S.ZipCodeAndPayment>

                <S.CoffeeWrapper>
                    <span>Cafés selecionados</span>
                    <S.CoffeeContainer>
                        
                    {cartData.map(item => {
                        return (
                            <CoffeeList 
                                name={item.name}
                                price={item.price}
                                image={item.image}
                                counter={item.counter}
                            />
                            )
                        })
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

                        <S.ConfirmButton>CONFRIMAR PEDIDO</S.ConfirmButton>

                    </S.CoffeeContainer>
                </S.CoffeeWrapper>

            </S.MainContainer>
        </S.BodyShape>
    )
}