import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import routes from "./utils/routes";

const Holder = styled.section`
  min-height: 100vh
  max-width: 100vw;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;

const Content = styled.section`
  margin-bottom: 100px;
  position: relative;
  padding: 5rem;
  :before {
    background: rgba(224, 224, 224, 0.75);
    content: '';
    height: 100%;
    left: 50%;
    position: absolute;
    top: 0;
    width: 1px;
    z-index: -1;
  }
`;

function App() {
  return (
    <Holder>
      <Router>
        <Header />
        <Content>
          {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
          ))}
        </Content>
        <Footer />
      </Router>
    </Holder>
  )
}

export default App;
