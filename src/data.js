import Mocaccino from './assets/Coffees/Coffee-1.png';
import Arabe from './assets/Coffees/Coffee-2.png';
import ExpressoAmericano from './assets/Coffees/Coffee-3.png';
import Latte from './assets/Coffees/Coffee-4.png';
import ChocolateQuente from './assets/Coffees/Coffee-5.png';
import Irlandes from './assets/Coffees/Coffee-6.png';
import ExpressoCremoso from './assets/Coffees/Coffee-7.png';
import Capuccino from './assets/Coffees/Coffee-8.png';
import Cubano from './assets/Coffees/Coffee-9.png';
import ExpressoGelado from './assets/Coffees/Coffee-10.png';
import Macchiato from './assets/Coffees/Coffee-11.png';
import Havaiano from './assets/Coffees/Coffee-12.png';
import CafeComLeite from './assets/Coffees/Coffee-13.png';
import ExpressoTradicional from './assets/Coffees/Coffee-14.png';

export const coffeeData = [
    {
        photo: ExpressoTradicional,
        style: ['Tradicional'],
        title: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: "R$ 11,90",
    },
    {
        photo: ExpressoAmericano,
        style: ['Tradicional'],
        title: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: "R$ 8,90",
    },
    {
        photo: ExpressoCremoso,
        style: ['Tradicional'],
        title: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        price: "R$ 9,90",
    },
    {
        photo: ExpressoGelado,
        style: ['Tradicional', 'Gelado'],
        title: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: "R$ 7,90",
    },
    {
        photo: CafeComLeite,
        style: ['Tradicional', 'Com leite'],
        title: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: "R$ 12,90",
    },
    {
        photo: Latte,
        style: ['Tradicional', 'Com leite'],
        title: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: "R$ 10,90",
    },
    {
        photo: Capuccino,
        style: ['Tradicional', 'Com leite'],
        title: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: "R$ 7,90",
    },
    {
        photo: Macchiato,
        style: ['Tradicional', 'Com leite'],
        title: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        price: "R$ 9,90",
    },
    {
        photo: Mocaccino,
        style: ['Tradicional', 'Com leite'],
        title: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        price: "R$ 8,90",
    },
    {
        photo: ChocolateQuente,
        style: ['Especial', 'Com leite'],
        title: 'Chocolate quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        price: "R$ 11,90",
    },
    {
        photo: Cubano,
        style: ['Especial', 'Alcoólico', 'Gelado'],
        title: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: "R$ 14,90",
    },
    {
        photo: Havaiano,
        style: ['Especial'],
        title: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: "R$ 9,90",
    },
    {
        photo: Arabe,
        style: ['Especial'],
        title: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: "R$ 8,90",
    },
    {
        photo: Irlandes,
        style: ['Especial', 'Alcoólico'],
        title: 'Irlândes',
        description: 'Bebida a base de café, uísque irlândes, açúcar e chantilly',
        price: "R$ 9,90",
    },
]