/**
 * Created by danielhollcraft on 4/8/17.
 */
import React, {
  PropTypes,
} from 'react';

import Helmet from "react-helmet"
import {Col, Row, Grid} from 'react-bootstrap'
import { config } from 'config'

import {
  ProfileHeader,
  Background,
} from '../../components'

import './index.scss'
import Index from './index'

const PortfolioTemplate = ({route}) => {
  const projectDataArray = route.childRoutes.map(r => r.page.data);

  return (
    <div className="portfolio-wrapper">
      <Helmet
        title="Daniel Hollcraft | Portfolio"
        meta={[
          {"name": "description", "content": "Blog"},
          {"name": "keywords", "content": "sample, something"},
        ]}
      />
      <Background color="#2e3250"/>
      <Grid>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} >
            <ProfileHeader/>
            <Index projectDataArray={projectDataArray}/>
          </Col>
        </Row>
      </Grid>
    </div>
  )
};

PortfolioTemplate.propTypes = {};
PortfolioTemplate.defaultProps = {};

export default PortfolioTemplate;
