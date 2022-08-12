import React from 'react';
import './App.css';
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import IndexTitle from "../IndexTitle/IndexTitle";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";

function App() {
    return (
        <div className="page">
            <div className="page__container">
                <Header/>
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
                <Footer/>
            </div>
        </div>
    );
}

export default App;
