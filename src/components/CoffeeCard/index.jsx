import * as S from './styles';
import { ShoppingCart, Plus, Minus } from "phosphor-react";
import { useState } from 'react';

export function CoffeeCard({ id, image, coffeeStyle, name, description, price, handleCartSubmit}){
    const [counter, setCounter] = useState(0);

    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
    const currencyPrice = formatter.format(price)

    function handleDecrease(){
        if(counter === 0) {
            return
        } else {
            setCounter(counter - 1);
        }
    }

    function handleIncrease(){
        setCounter(counter + 1);
    }

    return(
        <S.Container>
            
            <S.CoffeeImage src={image} alt={name} />  

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
                    <button type="button" onClick={() => handleCartSubmit({title, counter})}>
                    <ShoppingCart size={24} color="#FFFFFF"/>
                    </button>
                </S.ButtonCart>

            </S.BottomWrapper>

        </S.Container>
    )
}