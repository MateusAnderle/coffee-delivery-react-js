import * as S from './styles';
import { ShoppingCart } from "phosphor-react";
import CoffeeExample from '../../assets/Coffee.png';

export function CoffeeCard(){
    return(
        <S.Container>
            
            <S.CoffeeImage src={CoffeeExample} />    

            <S.CoffeeStyle>
                Tradicional
            </S.CoffeeStyle>

            <S.CoffeeTitle>
                Expresso Tradicional
            </S.CoffeeTitle>

            <S.CoffeeDescription>
                O tradicional café feito com água quente e grãos moídos
            </S.CoffeeDescription>

            <S.BottomWrapper>

                <S.CoffePrice>
                    R$ 9,90
                </S.CoffePrice>

                <S.CoffeeUnits>
                    - 1 +
                </S.CoffeeUnits>

                <S.ButtonCart>
                    <ShoppingCart size={24}/>
                </S.ButtonCart>

            </S.BottomWrapper>

        </S.Container>
    )
}