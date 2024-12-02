import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Scene } from '@/components/3d/Scene';
import { GamePage } from '@/pages/GamePage';
import { ThemeProvider } from '@/components/ThemeProvider';

function App() {
  return (
    <Router>
    <ThemeProvider>
      <Routes>
        <Route path="/game" element={<GamePage />} />
        <Route
          path="/"
          element={
            <>
              <Scene />
              <Header />
              <main>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Contact />
              </main>
              <Footer />
            </>
          }
        />
      </Routes>
    </ThemeProvider>
  </Router>
  );
}

export default App;