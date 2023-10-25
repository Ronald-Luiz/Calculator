import styled, { createGlobalStyle } from 'styled-components';
import { useState } from 'react';


const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
`;

const H1 = styled.h1`
color:white;
`;

const Calculator = styled.main`
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
`;


const DivPai = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
background-color:#424242;
border-radius:15px;
width:360px;
height:250px;
`;

const DivDisplay = styled.div`
display:flex;
justify-content:center;
align-items:center;

p{
    display:flex;
    justify-content:center;
    width:200px;
    height:20px;
    margin-bottom:5px;
    background-color:#008787;
    color:white;
    border:2px solid black;
}
`;

const DivButtons = styled.div`
    display:flex;
    justify-content:center;
    background-color:#010101;
    border-radius:12px;
    width:300px;
    flex-wrap:wrap;

    .Numbers{
        display:flex;
        justify-content:center;
        flex-wrap:wrap;
    }

    .Operators{
        display:flex;
        justify-content:center;
        flex-wrap:wrap;
    }
`;


const Button = styled.button`
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: 'Press Start 2P';
    border-radius:8px;
    width:50px;
    height:30px;
    margin:5px;

    &:hover{
        cursor:pointer;
        transform:scale(110%);
        transition:1s;
    }
`;

export default function calculator() {

    const [display, setDisplay] = useState('')

    const Click = (value) => {
        if (value === '=') {
            try {
                setDisplay(eval(display));
            } catch (error) {
                setDisplay('Error');
            }

        } else if (value === 'AC') {
            setDisplay('');
        } else {
            setDisplay(display + value);
        }
    };

    const Numbers = [
        '1', '2', '3',
        '4', '5', '6',
        '7', '8', '9',
        '0', '.', 'AC',
    ];
    const Operators = ['+', '-', '*', '/', '='];

    return (
        <>
            <GlobalStyle />
            <Calculator>
                <DivPai>
                    <H1>Calculator</H1>
                    <DivDisplay>
                        <p>{display}</p>
                    </DivDisplay>
                    <DivButtons>
                        <div className='Numbers'>
                            {Numbers.map((number) => (
                                <Button key={number} onClick={() => Click(number)}>
                                    {number}
                                </Button>
                            ))}
                        </div>
                        <div className='Operators'>
                            {Operators.map((operator) => (
                                <Button key={operator} onClick={() => Click(operator)}>
                                    {operator}
                                </Button>
                            ))}
                        </div>
                    </DivButtons>
                </DivPai>

            </Calculator>
        </>
    )
}