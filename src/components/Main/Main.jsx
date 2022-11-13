import React, { useRef } from 'react';
import './Main.css';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import IndexTitle from '../IndexTitle/IndexTitle';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { motion } from 'framer-motion';

function Main({ loggedIn, login }) {
  const projectRef = useRef();
  const techsRef = useRef();
  const studentRef = useRef();

  return (
    <>
      <Header loggedIn={loggedIn} login={login} />
      <motion.main
        className="main"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Promo>
          <NavTab
            projectRef={projectRef}
            techsRef={techsRef}
            studentRef={studentRef}
          />
        </Promo>
        <AboutProject projectRef={projectRef}>
          <IndexTitle title={'О проекте'} />
        </AboutProject>
        <Techs techsRef={techsRef}>
          <IndexTitle title={'Технологии'} />
        </Techs>
        <AboutMe studentRef={studentRef}>
          <IndexTitle title={'Студент'} />
        </AboutMe>
      </motion.main>
      <Footer />
    </>
  );
}

export default Main;
