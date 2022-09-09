import './PageNotFound.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function PageNotFound() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <motion.section
      className="not-found"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="not-found__title">404</h2>
      <p className="not-found__paragraph">Страница не найдена</p>
      <button type="button" className="not-found__button" onClick={goBack}>
        Назад
      </button>
    </motion.section>
  );
}

export default PageNotFound;
