import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
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
import Board from './pages/Board';
import Registrations from './pages/Registrations';
import JuniorClasses from './pages/JuniorClasses';
import JuniorTournaments from './pages/JuniorTournaments';
import AdultClasses from './pages/AdultClasses';
import Leagues from './pages/Leagues';
import ClubChamps from './pages/ClubChamps';
import Satellite from './pages/Satellite';
import Policies from './pages/Policies';
import Shop from './pages/Shop';
import CommunityAccess from './pages/CommunityAccess';
import PhaseII from './pages/PhaseII';
import HeartlandChallenge from './pages/HeartlandChallenge';
import Calendar from './pages/Calendar';
import RegisterForClasses from './pages/RegisterForClasses';
import JuniorRegister from './pages/JuniorRegister';
import AdultRegister from './pages/AdultRegister';
import JoinOurTeam from './pages/JoinOurTeam';

import JuniorTennis from './pages/JuniorTennis';
import AdultTennis from './pages/AdultTennis';
import Community from './pages/Community';
import AboutUs from './pages/AboutUs';
import GeneralInfo from './pages/GeneralInfo';
import EventsMain from './pages/EventsMain';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/foundation" element={<Foundation />} />
          <Route path="/contact" element={<Contact />} />

          {/* New Landing Pages */}
          <Route path="/junior-tennis" element={<JuniorTennis />} />
          <Route path="/adult-tennis" element={<AdultTennis />} />
          <Route path="/community" element={<Community />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/general-info" element={<GeneralInfo />} />
          <Route path="/events" element={<EventsMain />} />

          {/* Junior Tennis */}
          <Route path="/junior-classes" element={<JuniorClasses />} />
          <Route path="/junior-tournaments" element={<JuniorTournaments />} />

          {/* Adult Tennis */}
          <Route path="/adult-classes" element={<AdultClasses />} />
          <Route path="/leagues" element={<Leagues />} />
          <Route path="/club-champs" element={<ClubChamps />} />

          {/* Community */}
          <Route path="/satellite" element={<Satellite />} />

          <Route path="/classes" element={<GroupClasses />} />
          <Route path="/private-lessons" element={<PrivateLessons />} />
          <Route path="/adaptive" element={<Adaptive />} />
          <Route path="/outreach" element={<Outreach />} />
          <Route path="/team" element={<Team />} />
          <Route path="/board" element={<Board />} />
          <Route path="/registrations" element={<Registrations />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/community-access" element={<CommunityAccess />} />
          <Route path="/phase-ii" element={<PhaseII />} />
          <Route path="/heartland-challenge" element={<HeartlandChallenge />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/register-for-classes" element={<RegisterForClasses />} />
          <Route path="/junior-register" element={<JuniorRegister />} />
          <Route path="/adult-register" element={<AdultRegister />} />
          <Route path="/join-our-team" element={<JoinOurTeam />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

