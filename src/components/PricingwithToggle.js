import React from 'react';
import { Container } from './styled/Container.styled';
import {
    Attribution,
    AttributionA,
    Hstack,
    LearnButton,
    Pricecard,
    StyledFormControl,
    Styledpricingtoggle,
    Toggle
} from './styled/Pricingtoggle.styled';
import { FormLabel, Switch } from '@chakra-ui/react';
import Datas from '../data.json';

export const PricingwithToggle = () => {
    const [toggleActive, setToggleactive] = React.useState(false);
    const toggleHandler = () => {
        setToggleactive(!toggleActive);
    }
  return (
    <Container>
        <Styledpricingtoggle>
            <Toggle>
                <p>
                    Our Pricing
                </p>
                <StyledFormControl display='flex' alignItems='center'>
                    <FormLabel htmlFor='annualy' mb='0'>
                        Annualy
                    </FormLabel>
                    <Switch onChange={toggleHandler} size='lg' id='switch-plan' defaultChecked className='switchaxe'/>
                    <FormLabel htmlFor='monthly' mb='0'>
                        &nbsp;&nbsp;Monthly
                    </FormLabel>
                </StyledFormControl>
            </Toggle>
            {Datas.map((data)=>{
            return(
                <Pricecard
                    key={data.level}
                    $gridarea={data.gridarea}
                    $warna_price={data.color_price}
                    $warna_other={data.color_other}
                    $bgcolor={data.bgcol}
                    $bordrads={data.bordrads}
                    $paddesk={data.padd_desktop}
                    $paddtab={data.padd_tablet}
                >
                    <p className='p_level'>
                        {data.level}
                    </p>
                    <Hstack>
                        <p className='p_dollar'>$</p>
                        {toggleActive?
                            (<p className='p_price'>
                                {data.annualprice}
                            </p>) :
                            (<p className='p_price'>
                                {data.monthlyprice}
                            </p>)
                        }
                    </Hstack>
                    <p className='p_capacity'>
                        {data.capacity}
                    </p>
                    <p className='p_userallowed'>
                        {data.userallowed}
                    </p>
                    <p className='p_sendupto'>
                        {data.sendupto}
                    </p>
                    <LearnButton
                        $bgbutton={data.bgcolor_button}
                        $butcolor={data.color_button}
                        $hovercol={data.color_other}
                        $hoverbgbutt={data.bgcol}
                    >
                        <p>
                            Learn more
                        </p>
                    </LearnButton>
                </Pricecard>
                )}
            )}
            <Attribution>
                <AttributionA>
                    <p>Challenge by<a href="https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC/hub" rel="noreferrer" target="_blank">&nbsp;Frontend Mentor | Pricing with Toggle.</a></p>
                </AttributionA>
                <AttributionA>
                    <p>&nbsp;&nbsp;Coded by <a href="https://www.linkedin.com/in/rikiwendri/">&nbsp;Riki Wendri</a></p>
                </AttributionA>
            </Attribution>
        </Styledpricingtoggle>
    </Container>
  )
}
