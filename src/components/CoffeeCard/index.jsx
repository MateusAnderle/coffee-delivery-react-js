import * as S from './styles';
import { ShoppingCart, Plus, Minus } from "phosphor-react";
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export function CoffeeCard({ id, image, coffeeStyle, name, description, price, handleCartSubmit}){
    const [counter, setCounter] = useState(1);

    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
    const currencyPrice = formatter.format(price * counter)

    function handleDecrease(){
        const newCount = counter - 1

        if (newCount <= 0) {
        toast.warn('Quantidade mínima: 1')
        return
        }
        setCounter(newCount)
    }

    function handleIncrease(){
        const newCount = counter + 1

        if (newCount >= 100) {
        toast.warn('Quantidade máxima: 99')
        return
        }

        setCounter(newCount);
    }

    return(
        <S.Container>
            
            <S.CoffeeImage src={image} alt={name} />  
                <ToastContainer theme='light'/>
            <S.CoffeeStyle>
                {coffeeStyle}
            </S.CoffeeStyle>

            <S.CoffeeTitle>
                {name}
            </S.CoffeeTitle>

            <S.CoffeeDescription>
                {description}
            </S.CoffeeDescription>

            <S.BottomWrapper>

                <S.CoffePrice>
                    {currencyPrice}
                </S.CoffePrice>

                <S.CoffeeUnits>
                    <button type="button" onClick={handleDecrease}>
                        <Minus size={16} color="#4B2995"/>
                    </button>

                        <input type="number"
                            value={counter}               
                            min={1}
                            max={99}
                        />
                        
                    <button type="button" onClick={handleIncrease}>
                        <Plus size={16} color="#4B2995"/>
                    </button>
                </S.CoffeeUnits>

                <S.ButtonCart>
                    <button type="button" onClick={() => handleCartSubmit({name, counter, setCounter, image, currencyPrice})}>
                    <ShoppingCart size={24} color="#FFFFFF"/>
                    </button>
                </S.ButtonCart>

            </S.BottomWrapper>

        </S.Container>
    )
}