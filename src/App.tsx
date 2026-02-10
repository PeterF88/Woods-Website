import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Programs from './pages/Programs';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Foundation from './pages/Foundation';
import Contact from './pages/Contact';
import GroupClasses from './pages/GroupClasses';
import PrivateLessons from './pages/PrivateLessons';
import Adaptive from './pages/Adaptive';
import Outreach from './pages/Outreach';
import Team from './pages/Team';
import Registrations from './pages/Registrations';

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
          <Route path="/classes" element={<GroupClasses />} />
          <Route path="/private-lessons" element={<PrivateLessons />} />
          <Route path="/adaptive" element={<Adaptive />} />
          <Route path="/outreach" element={<Outreach />} />
          <Route path="/team" element={<Team />} />
          <Route path="/registrations" element={<Registrations />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

