import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Card, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {

    state = { loggedIn: null };

    componentWillMount() {
        // Firebase initialization
        // Connect to specific bucket of data on server
         firebase.initializeApp({
            apiKey: 'AIzaSyCi1QtRkSaXLjY-fBs66EzNBeEcsYDnNc8',
            authDomain: 'auth-11b88.firebaseapp.com',
            databaseURL: 'https://auth-11b88.firebaseio.com',
            projectId: 'auth-11b88',
            storageBucket: 'auth-11b88.appspot.com',
            messagingSenderId: '407947763033'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (    
                         <CardSection>
                            <Button onPress={() => firebase.auth().signOut()}>
                                Log Lout
                            </Button>
                         </CardSection>
            );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size='large' />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}
