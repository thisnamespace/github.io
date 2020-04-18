import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import routes from "./utils/routes";

const Holder = styled.section`
  min-height: 100vh
  max-width: 100vw;    
  color: #5b5b5b;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  font-size:  16px;
  @import url('https://fonts.googleapis.com/css?family=Bungee+Shade&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Fredericka+the+Great&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Monoton&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Shadows+Into+Light+Two&display=swap');
  font-family: 'Roboto', sans-serif;
  &:before {
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

const Content = styled.section`
  margin-bottom: 100px;
  position: relative;
`;

function App() {
  console.log(routes)
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
