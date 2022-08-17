import React from 'react';
import './Main.css'
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import IndexTitle from "../IndexTitle/IndexTitle";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Main() {
    return (
        <>
            <Header/>
            <main className="main">
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
            </main>
            <Footer/>
        </>
    )
}

export default Main;
