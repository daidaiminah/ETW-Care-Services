import { BrowserRouter as Router } from 'react-router-dom'
import { motion } from 'framer-motion';

// Components
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// Router
import AppRouter from './router'

const App = () => (
  <Router>
    <motion.div className="flex flex-col min-h-screen bg-light">
      <Navbar />
      <motion.div className="flex-grow">
        <AppRouter />
      </motion.div>
      <Footer />
    </motion.div>
  </Router>
);

export default App;
