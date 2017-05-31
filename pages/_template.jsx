import React, { PropTypes } from 'react'
import {
  NavigationBar,
  Footer
} from '../components'
import { Grid } from 'react-bootstrap'
import { rhythm } from '../utils/typography'
import './index.scss'

const Base = ({children}) => (
  <div className="base-layout">
    <NavigationBar/>
    <Grid className="content">
      {children}
    </Grid>
    <Footer/>
  </div>
);

Base.propTypes = {
  children: PropTypes.object,
};

export default Base;