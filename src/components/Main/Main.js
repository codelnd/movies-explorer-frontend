import React from 'react';
import './Main.css'
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import IndexTitle from "../IndexTitle/IndexTitle";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";

function Main() {
    return (
        <>
            <Promo>
                <NavTab/>
            </Promo>
            <AboutProject>
                <IndexTitle
                    title={'О проекте'}
                />
            </AboutProject>
            <Techs>
                <IndexTitle
                    title={'Технологии'}
                />
            </Techs>
            <AboutMe>
                <IndexTitle
                    title={'Студент'}
                />
            </AboutMe>
        </>
    )
}

export default Main;
