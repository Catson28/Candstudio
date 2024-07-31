import NewPage from '../../components/pages/Aplicacao/NewPage';
import HomePage from '../../components/pages/Aplicacao/HomePage';
import LoginPage from '../../components/pages/Aplicacao/LoginPage';
import MarketingNarrow from '../../components/pages/Aplicacao/MarketingNarrow';
import JustifiedNav from '../../components/pages/Aplicacao/JustifiedNav';
import Carousel from '../../components/pages/Aplicacao/Carousel';
import ContactPage from '../../components/pages/Aplicacao/ContactPage.tsx';
import Fluid from '../../components/pages/Aplicacao/Fluid';
import HeroPage from '../../components/pages/Aplicacao/HeroPage.tsx';

const AppRoutes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/carousel',
    element: <Carousel />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/fluid',
    element: <Fluid />,
  },
  {
    path: '/justified-nav',
    element: <JustifiedNav />,
  },
  {
    path: '/hero',
    element: <HeroPage />,
  },
  {
    path: '/marketing-narrow',
    element: <MarketingNarrow />,
  },
  {
    path: '/new',
    element: <NewPage />,
  }
];

export default AppRoutes;
