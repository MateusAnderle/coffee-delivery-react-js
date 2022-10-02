import * as S from './styles';
import LogoSvg from '../../assets/Logo.svg';
import { ShoppingCart, MapPin , House, Package} from "phosphor-react";
import { NavLink } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';


export function Header(){
    const { loadLocalStorage } = useLocalStorage()

    const cartData = loadLocalStorage('@coffee-delivery:shop-cart');
    
    return (
        <S.Header>
            <img src={LogoSvg} alt="Logotipo ilustrando um copo de café" />
            <S.HeaderOptions>
                    <S.CurrentLocation>
                        <MapPin size={24} />
                        <span>Jaraguá do Sul, SC</span>
                    </S.CurrentLocation>

                <NavLink to="/" title="HomePage">
                    <S.HouseIcon 
                        onClick={() => {}}
                        numberToItensAtShopCart={!!cartData ? cartData.length : 0}
                    >
                        <House size={24} />
                    </S.HouseIcon>
                </NavLink>

                <NavLink to="/cart" title="Carrinho">
                    <S.CartIcon>
                        <ShoppingCart size={24} />
                    </S.CartIcon>
                </NavLink>

                <NavLink to="/delivery" title="Entrega">
                    <S.CartIcon>
                        <Package size={24} />
                    </S.CartIcon>
                </NavLink>
            </S.HeaderOptions>
        </S.Header>
    )
}