import React from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {Wrapper} from './styled'
import {Header} from 'semantic-ui-react'

const uiConfig = {
    // redirect flow rather than Popup signin flow
    signInFlow: 'redirect',
    // display Google auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    signInSuccessUrl: '/profile',
  };

const LoginPage = () => {
    return (
        <Wrapper>
            <Header>PLEEASE LOG IN</Header>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </Wrapper>
    )
}

export default LoginPage
