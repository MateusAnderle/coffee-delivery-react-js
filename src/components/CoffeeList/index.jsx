import * as S from './styles';
import CoffeeExample from '../../assets/Coffee.png';
import { Trash } from "phosphor-react";

export function CoffeeList(){
    return (
        <S.Container>
            <S.CoffeeImage src={CoffeeExample} />  

            <S.DescriptionWrapper>
                <S.Header>
                    <S.Title>Expresso Tradicional</S.Title>
                    <S.Price>R$ 9,90</S.Price>
                </S.Header>


                <S.Footer>

                    <S.Counter>- 1 +</S.Counter>

                    <S.Remove>
                        <Trash size={16} color="#8047F8"/>
                        <S.Subtitle>REMOVER</S.Subtitle>
                    </S.Remove>
                                    
                </S.Footer>

            </S.DescriptionWrapper>
        </S.Container>
    )
}