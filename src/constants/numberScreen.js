import { squareSvg1, squareSvg2 } from "../assets/img";

const NumbersInfo1 = () => (
    <>Всего <br /> трейдеров</>
);

const NumbersInfo2 = () => (
    <>Всего сделок <br /> выполнено</>
);

export const squareNumbersArr = [
    {
        src: squareSvg1,
        alt: 'square_svg',
        numbers: 21.5,
        numUnit: 'K+',
        numbersInfo: <NumbersInfo1 />
    },
    {
        src: squareSvg1,
        alt: 'square_svg2',
        numbers: 325,
        numUnit: 'M+',
        numbersInfo: <NumbersInfo2 />
    }
];
