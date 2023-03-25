import styled from "styled-components";
import bgbottom from '../images/bg-bottom.svg';
import bgtop from '../images/bg-top.svg';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
    //Primary:
    --Gradient: linear-gradient(to right, hsl(236, 72%, 79%),hsl(237, 63%, 64%));
    //Neutral:
    --Very-Light-Grayish-Blue: hsl(240, 78%, 98%);
    --Light-Grayish-Blue: hsl(234, 14%, 74%);
    --Grayish-Blue: hsl(233, 13%, 49%);
    --Dark-Grayish-Blue: hsl(232, 13%, 33%);
    font-size: 15px;
    font-family: 'Montserrat', sans-serif;
    --bold: 700;
    *{
        margin:0;
    }
    display:flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: var(--Very-Light-Grayish-Blue);
    background-image: url(${bgbottom}),url(${bgtop});
    background-size: 25%, contain;
    background-repeat: no-repeat;
    background-position: bottom 0% left 0%, top 0% right 0%;
    @media screen and (max-width:600px) {
        background-position: bottom 0% left 0%, top -50px right -190px;
    }
`