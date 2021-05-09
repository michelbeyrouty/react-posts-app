import React, { Suspense } from 'react';
import Amplify from 'aws-amplify';

import RouteConfigComponent from './app.routes';
import CustomProvider from 'assets/theme/CustomProvider';
import { LoadingPanel } from 'components/atoms';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsconfig from '../aws-exports';
import MainWrapper from 'Layouts';
import Header from 'components/header';

Amplify.configure(awsconfig);

const Root: React.FC = () => {
  return (
    <CustomProvider>
      <Suspense fallback={<LoadingPanel />}>
        <Header />
        <MainWrapper>
          <RouteConfigComponent />
        </MainWrapper>
      </Suspense>
    </CustomProvider>
  );
};

export default withAuthenticator(Root);
