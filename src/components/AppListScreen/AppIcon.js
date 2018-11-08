import React, { Component } from 'react';
import { View, Text, Alert, TouchableNativeFeedback } from 'react-native';
import { Icon } from 'react-native-elements';

export default class AppIcon extends Component {
    render() {
        return (
            <TouchableNativeFeedback
                useForeground
                onPress={() => Alert.alert('App')}
                background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
            >
                <View
                    style={{ width: 80, alignItems: 'center', marginBottom: 10 }}
                >
                    <Icon 
                        raised
                        reverse
                        name='star'
                        type='font-awesome'
                        size={30}
                        color='white'
                        reverseColor='#3498db'
                    />

                    <Text>{this.props.appName}</Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
}
