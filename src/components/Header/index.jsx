import * as S from './styles';
import LogoSvg from '../../assets/Logo.svg';
import { ShoppingCart, MapPin } from "phosphor-react";


export function Header(){
    return (
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
    )
}