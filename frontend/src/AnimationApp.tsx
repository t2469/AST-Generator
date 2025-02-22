import React from 'react';
import { Routes, Route, useLocation} from 'react-router-dom';
import { AnimatePresence, motion} from 'framer-motion';
import ASTTree from './pages/ASTPage.tsx'
import LoginPage from './pages/LoginPage'
import SearchPage from './pages/SearchPage.tsx'
import UploadPage from './pages/UploadPage.tsx'

const pageVariants = {
    initial: {
        opacity: 0,
        position: 'absolute',
        width: '100%',
        x: '-50%',
    },
    in: {
        opacity: 1,
        position: 'absolute',
        width: '100%',
        x: '0%',
    },
    out: {
        opacity: 0,
        position: 'absolute',
        width: '100%',
        x: '50%',
    },
  };
  
  const pageTransition = {
    type: 'tween',
    ease: 'easeInOut',
  };

const AnimApp: React.FC = () => {
    const location = useLocation();
  return (
    <div className="page-container">
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route 
                path="/"
                element={
                    <motion.div
                    className="page"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                    >
                    <ASTTree />
                    </motion.div>
                    } />
                <Route path="/search" element={
                    <motion.div
                    className="page"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                    >
                    <SearchPage />
                    </motion.div>
                } />
                <Route path="/upload" element={
                    <motion.div
                    className="page"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                    >
                    <UploadPage />
                    </motion.div>
                } />
                <Route path="/login" element={
                    <motion.div
                    className="page"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                    >
                    <LoginPage />
                    </motion.div>
                } />
            </Routes>
        </AnimatePresence>
    </div>
  );
};

export default AnimApp;