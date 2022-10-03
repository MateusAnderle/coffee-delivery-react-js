import * as S from './styles';
import { Trash, Minus, Plus } from "phosphor-react";
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useLocalStorage } from '../../hooks/useLocalStorage';


export function CoffeeList({name, price, image, counter, handleDelete}){
    const [counterList, setCounterList] = useState(1);
    const [orderedCoffee, setOrderedCoffee] = useState([]);
    const { saveToLocalStorage } = useLocalStorage()

        

    function handleDecrease(){
        const newCount = counterList - 1
        if (newCount <= 0) {
        toast.warn('Quantidade mínima: 1')
        return
        }
        setCounterList(newCount)
    }

    function handleIncrease(){
        const newCount = counterList + 1
        if (newCount >= 100) {
        toast.warn('Quantidade máxima: 99')
        return
        }
        setCounterList(newCount);
    }

    function handleLocalStorage(){
        setOrderedCoffee([...orderedCoffee, {name: name, counter: counterList, image: image}])
        saveToLocalStorage(orderedCoffee, '@coffee-delivery:shop-cart')
    }

    useEffect(()=>{
        setCounterList(counter);
    },[])

    return (
        <S.Container>
            <S.CoffeeImage src={image} />  
            <ToastContainer theme='light'/>
                <S.DescriptionWrapper>
                    <S.Header>
                        <S.Title>{name}</S.Title>
                        <S.Price>{price}</S.Price>
                    </S.Header>


                    <S.Footer>
                        <S.CoffeeUnits>
                        <button type="button" onClick={handleDecrease}>
                            <Minus size={16} color="#4B2995"/>
                        </button>

                            <input type="number"
                                value={counterList}            
                                min={1}
                                max={99}
                                onChange={handleLocalStorage}
                            />
                            
                        <button type="button" onClick={handleIncrease}>
                            <Plus size={16} color="#4B2995"/>
                        </button>
                    </S.CoffeeUnits>

                        <S.Remove onClick={() => handleDelete({name})}>
                            <Trash size={16} color="#8047F8"/>
                            <S.Subtitle>REMOVER</S.Subtitle>
                        </S.Remove>
                                        
                    </S.Footer>

                </S.DescriptionWrapper>
        </S.Container>
    )
}