import styled from "styled-components";
import { FormControl } from '@chakra-ui/react';

export const Vstack = styled.div`
    display: flex;
    flex-direction: column;
`
export const Hstack = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
export const Styledpricingtoggle = styled.div`
    display: grid;
    min-height: 100vh;
    width: 80%;
    grid-template-columns: repeat(3,auto);
    grid-template-rows: auto 3% auto 3% auto;
    grid-template-areas:
        'toggle toggle toggle'
        '. prof .'
        'basic prof master'
        '. prof .'
        'footer footer footer'
        ;
    @media screen and (max-width:1025px) {
       width:90%;
       margin:20px;
    }
    @media screen and (max-width:600px) {
        min-height: 100vh;
        grid-template-columns: 100%;
        grid-template-rows: repeat(5,auto);
        grid-template-areas:
            'toggle'
            'basic'
            'prof'
            'master'
            'footer'
            ;
        grid-gap: 2em;
        margin:30px 20px 10px;
    }
`
export const Toggle = styled(Vstack)`
    grid-area:toggle;
    font-size:2.2em;
    font-weight:var(--bold);
    color:var(--Grayish-Blue);
    text-align:center;
    padding:0 0 5% 0;
    p{
        margin:6% auto 3%;
    }
    @media screen and (max-width:1025px) {
        padding:0 0 7% 0;
    }
`
export const StyledFormControl = styled(FormControl)`
    justify-content: center;
    color:var(--Light-Grayish-Blue);
    .switchaxe{
        :hover{
            opacity:0.6;
        }
    }
`
export const Pricecard = styled(Vstack)`
    grid-area: ${(ga)=> ga.$gridarea};
    color:${(col)=>col.$warna_other};
    background: ${(bg) => bg.$bgcolor};
    background-repeat: no-repeat;
    border-top-left-radius: ${(bordrad)=>bordrad.$bordrads.desktop.topleft};
    border-top-right-radius: ${(bordrad)=>bordrad.$bordrads.desktop.topright};
    border-bottom-left-radius: ${(bordrad)=>bordrad.$bordrads.desktop.bottomleft};
    border-bottom-right-radius: ${(bordrad)=>bordrad.$bordrads.desktop.bottomright};
    text-align: center;
    padding: ${(padd)=>padd.$paddesk};
    box-shadow: 0 10px 20px -2px rgba(0,0,0,0.15);
    .p_level{
        font-size:1.2em;
        font-weight: var(--bold);
    }
    .p_dollar{
        font-size:2.8em;
        color:${(col)=>col.$warna_price};
    }
    .p_price{
        font-size:4.8em;
        color:${(col)=>col.$warna_price};
    }
    .p_capacity{
        font-size:1em;
        padding:4% 0;
        margin:3% 8%;
        border-top:1px solid var(--Light-Grayish-Blue);
        border-bottom:1px solid var(--Light-Grayish-Blue);
    }
    .p_userallowed{
        font-size:1em;
        padding:1% 0;
    }
    .p_sendupto{
        font-size:1em;
        padding:4% 0;
        margin:3% 8%;
        border-top:1px solid var(--Light-Grayish-Blue);
        border-bottom:1px solid var(--Light-Grayish-Blue);
    }
    @media screen and (max-width:1025px) {
        padding:${(padd)=>padd.$paddtab};
        .p_dollar{
            font-size:2.4em;
        }
        .p_price{
            font-size:3.4em;
        }
    }
`
export const LearnButton = styled.button`
    width: auto;
    height: auto;
    font-size: .9em;
    letter-spacing: .1em;
    text-transform: uppercase;
    border-radius:8px;
    color: ${(butcol) => butcol.$butcolor};
    background: ${(col)=>col.$bgbutton};
    margin:7% 8% 0;
    p{
        padding: 4% 0;
    }
    :hover{
        color: ${(hov)=>hov.$hovercol};
        background: ${(bg) => bg.$hoverbgbutt};
        border:1px solid ${(col)=>col.$warna_price};
    }
    :active{
        transform: scale(.98);
        transition: all 0.3s ease-in-out;
    }
`
//Styled for attribution:
export const Attribution = styled.div`
    grid-area: footer;
    display: flex;
    margin: 20px auto 10px;
    text-align: center;
    justify-content: center;
    align-items: flex-end;
    @media screen and (max-width:600px){
        flex-direction: column;
        margin: 10px auto 10px;
    }
`
export const AttributionA = styled(Attribution)`
    p{
        font-size: .7rem;
        color: var(--Grayish-Blue);
    }
    a {
        color: var(--Light-Grayish-Blue);
    }
`