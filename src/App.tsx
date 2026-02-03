import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Programs } from './pages/Programs';
import { Pricing } from './pages/Pricing';
import { About } from './pages/About';
import { Foundation } from './pages/Foundation';
import { Contact } from './pages/Contact';
import { Placeholder } from './pages/Placeholder';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/foundation" element={<Foundation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Placeholder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
