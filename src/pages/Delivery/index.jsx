import LogoSvg from '../../assets/Logo.svg';
import { ShoppingCart, MapPin, MapPinLine, CurrencyDollar, Money, Bank, CreditCard } from "phosphor-react";
import * as S from './styles';
import { useForm } from 'react-hook-form';

export function Delivery(){
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <S.BodyShape>
            <S.Header>
                <img src={LogoSvg} alt="Logotipo ilustrando um copo de café" />
                <S.HeaderOptions>
                    <S.CurrentLocation>
                        <MapPin size={24} />
                        <span>Jaraguá do Sul, SC</span>
                    </S.CurrentLocation>

                    <S.CartIcon>
                        <ShoppingCart size={24} />
                    </S.CartIcon>
                </S.HeaderOptions>
            </S.Header>

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

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input placeholder='CEP' {...register("zipCode", {required: true})} />
                            <input placeholder='Rua' {...register("street", {required: true})} />
                            <input placeholder='Número' {...register("number", {required: true})} />
                            <input placeholder='Complemento' {...register("complement")} />
                            <input placeholder='Bairro' {...register("district", {required: true})} />
                            <input placeholder='Cidade' {...register("city", {required: true})} />
                            <input placeholder='UF' {...register("state", {required: true})} />
                        </form>

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
                        Aqui vai o resumo do pedido XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                    </S.CoffeeContainer>
                </S.CoffeeWrapper>

            </S.MainContainer>
        </S.BodyShape>
    )
}