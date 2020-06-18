import React from 'react';

import Header from '../Header/index';
import Main from '../Main/index';
import Footer from '../Footer/index';

import { Grid } from './styles';

const Layout: React.FC = () => {
  return (
    <Grid>
      <Header />
      <Main />
      <Footer />
    </Grid>
  );
}

export default Layout;