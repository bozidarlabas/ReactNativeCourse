import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm'

export default class App extends Component {

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
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    };
}

