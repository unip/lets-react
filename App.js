import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const colors = {
    blue: '#2196F3',
    red: '#F44336',
    yellow: '#FFFF00',
    green: '#64DD17',
    gray: '#EEEEEE'
};

const colorAccent = colors.blue;

const text = {
    title: 'NotifApp',
    subTitle: 'KemKominfo Internal Notification App',
    introButtonText: 'Get Notified!'
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    h1: {
        color: colorAccent, 
        fontSize: 50, 
        fontWeight: '600',
    }
});

export default class MainActivity extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar hidden />
                <View
                    style={[styles.container, {
                        paddingRight: 10,
                        paddingLeft: 10,
                        flex: 4,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }]}
                >
                    <Text style={styles.h1}>{text.title}</Text>
                    <Text>{text.subTitle}</Text>
                </View>
                <View
                    style={[styles.container, {
                        flex: 1,
                        justifyContent: 'flex-end'
                    }]}
                >
                    <Button 
                        raised
                        backgroundColor={colorAccent}
                        title={text.introButtonText} 
                    />
                </View>
            </View>
        );
    }
}

// AppRegistry.registerComponent('LetsReact', () => HelloWorldApp);
