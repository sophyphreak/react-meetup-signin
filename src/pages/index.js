import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Basic from '../components/basic';
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Basic />
  </Layout>
);

export default IndexPage;
