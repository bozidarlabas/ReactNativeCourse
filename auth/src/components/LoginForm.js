import React, { Component } from 'react';
import { Card, CardSection, Button, Input } from './common';

export default class LoginForm extends Component {

    state = {email: '', password: '' }; 

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        placeholder="user@gmail.com"
                        label="Email"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        secureTextEntry //equal to secureTextEntry={true}
                        placeholder="password"
                        label="Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>
                
                 <CardSection>
                     <Button>
                         Login
                     </Button>
                 </CardSection>
            </Card>
        );
    };
}