import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableNativeFeedback } from 'react-native';
import GridView from 'react-native-super-grid';
import IconBadge from 'react-native-icon-badge';
import { Icon } from 'react-native-elements';
import ActionButton from 'react-native-action-button';
import VectorIcon from 'react-native-vector-icons/Ionicons';

export default class Example extends Component {
  static navigationOptions = {
    title: 'App List',
    headerLeft: null
  };

  render() {
    const apps = [
      { name: 'foo', color: '#1abc9c', icon: 'cash-multiple' },
      { name: 'bar', color: '#e74c3c', icon: 'account-supervisor-circle' },
      { name: 'baz', color: '#3498db', icon: 'auto-fix' },
      { name: 'dee', color: '#f1c40f', icon: 'bullseye-arrow' },
    ];

    return (
        <View style={{ flex: 1 }}>
            <GridView
                itemDimension={80}
                items={apps}
                style={styles.gridView}
                renderItem={app => (
                    <TouchableNativeFeedback
                        background={TouchableNativeFeedback.SelectableBackground()}
                        onPress={() => this.props.navigation.navigate('NotifList')}
                    >
                        <View style={styles.itemContainer}>
                            <IconBadge
                                MainElement={
                                    <Icon
                                        reverse
                                        type='material-community'
                                        name={app.icon}
                                        size={30}
                                        color={app.color}
                                    />
                                }
                                BadgeElement={
                                    <Text>3</Text>
                                }
                                IconBadgeStyle={{
                                    width: 30,
                                    height: 30,
                                    backgroundColor: '#fff',
                                }}
                            />
                            <Text style={styles.itemName}>{app.name}</Text>
                        </View>
                </TouchableNativeFeedback>
                )}
            />

            <ActionButton 
                fixNativeFeedbackRadius
                buttonColor="rgba(231,76,60,1)"
            >
                <ActionButton.Item 
                    buttonColor='#9b59b6' title="New Task" 
                    onPress={() => console.log('notes tapped!')}
                >
                    <VectorIcon name="md-create" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
                    <VectorIcon name="md-notifications-off" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
                    <VectorIcon name="md-done-all" style={styles.actionButtonIcon} />
                </ActionButton.Item>
            </ActionButton>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    gridView: {
        paddingVertical: 25,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemName: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
    },
    itemCode: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});
