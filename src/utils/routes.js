import Home from './../pages/Home.jsx';
import FrontEnd from './../pages/FrontEnd.jsx';
import Portfolio from './../pages/Portfolio.jsx';
import Showcase from './../pages/Showcase.jsx';

import Portfolios from './../pages/Portfolios/index.js'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/FrontEnd',
    component: FrontEnd,
  },
  {
    path: '/Portfolio',
    exact: true,
    component: Portfolio,
  },
  {
    path: '/Portfolio/BYF',
    component: Portfolios.BYF,
  },
  {
    path: '/Portfolio/Gatwick',
    component: Portfolios.Gatwick,
  },
  {
    path: '/Portfolio/Mitsubishi',
    component: Portfolios.Mitsubishi,
  },
  {
    path: '/Portfolio/MMID',
    component: Portfolios.MMID,
  },
  {
    path: '/Portfolio/NHS',
    component: Portfolios.NHS,
  },
  {
    path: '/Portfolio/Peroni',
    component: Portfolios.Peroni,
  },
  {
    path: '/Portfolio/Tescos',
    component: Portfolios.Tescos,
  },
  {
    path: '/Portfolio/VirginHolidays',
    component: Portfolios.VirginHolidays,
  },
  {
    path: '/Portfolio/Waitrose',
    component: Portfolios.Waitrose,
  },
  {
    path: '/Showcase',
    component: Showcase,
  }
];

export default routes;