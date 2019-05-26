import Home from './../pages/Home.jsx';
import Portfolio from './../pages/Portfolio.jsx';
import Showcase from './../pages/Showcase.jsx';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/Portfolio',
    component: Portfolio,
  },
  {
    path: '/Showcase',
    component: Showcase,
  }
];

export default routes;