import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StatusBar, 
    StyleSheet, 
    TextInput, 
    KeyboardAvoidingView, 
    TouchableOpacity
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    h1: {
        color: '#3498db', 
        fontSize: 50, 
        fontWeight: '600',
    },
    formTitle: {
        fontSize: 24,
        fontWeight: '400',
        textAlign: 'center',
        marginBottom: 20
    },
    input: {
        height: 40,
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0.1)',
        paddingHorizontal: 10,
        marginHorizontal: 15,
        marginBottom: 10,
        borderRadius: 5
    },
    buttonContainer: {
        height: 60,
        paddingVertical: 10,
        backgroundColor: '#2ecc71',
        marginHorizontal: 15,
        justifyContent: 'center',
        borderRadius: 5
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        fontWeight: '100'
    }
});

export default class MainActivity extends Component {
    render() {
        return (
            <KeyboardAvoidingView 
                behavior='padding'
                style={{ flex: 1 }}
            >
                <StatusBar hidden />
                <View
                    style={[styles.container, {
                        paddingRight: 10,
                        paddingLeft: 10,
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }]}
                >
                    <Text style={styles.h1}>NotifApp</Text>
                    <Text>KemKominfo Internal Notification App</Text>
                </View>
                <View
                    style={[styles.container, {
                        flex: 1,
                        justifyContent: 'flex-end'
                    }]}
                >
                    <Text style={styles.formTitle}>Please Login</Text>
                    <TextInput
                        key='username'
                        style={styles.input}
                        placeholder='Username or Email'
                        placeholderTextColor='rgba(0,0,0,0.3)'
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='email-address'
                        onSubmitEditing={() => this.passwordInput.focus()}
                        returnKeyType='next'
                    />
                    <TextInput
                        key='password'
                        style={styles.input}
                        placeholder='Password'
                        placeholderTextColor='rgba(0,0,0,0.3)'
                        ref={(input) => this.passwordInput = input}
                        secureTextEntry
                    />
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Notify Me!</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

// AppRegistry.registerComponent('LetsReact', () => HelloWorldApp);
