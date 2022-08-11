import React from 'react';
import Header from "../Header/Header";
import './Page.css'
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import IndexTitle from "../IndexTitle/IndexTitle";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";

function Page() {
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
            </div>
        </div>
    );
}

export default Page;
