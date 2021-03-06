import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import SignInForm from '../containers/signInForm/signInForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SignInForm />
  </Layout>
);

export default IndexPage;
