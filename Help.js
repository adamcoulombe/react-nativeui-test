import React from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import styles from './Styles';

export default class Help extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        }
    }
    static navigationOptions = {
        title: 'Help',
    }
    onPressLearnMore() {
        this.setState({
            modalVisible: true
        })
    }
    closeModal() {
        this.setState({
            modalVisible: false
        })
    }
    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.title}>Open up App.js to start working on your app!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>

                <Button
                    onPress={() => this.onPressLearnMore()}
                    title="Learn More"
                    style={styles.button}
                    accessibilityLabel="Learn more about this purple button"
                />
                <Modal
                    visible={this.state.modalVisible}
                    animationType={'slide'}
                    onRequestClose={() => this.closeModal()}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.innerContainer}>
                            <Text>This is content inside of modal component</Text>
                            <Button
                                onPress={() => this.closeModal()}
                                title="Close modal"
                            >
                            </Button>
                        </View>
                    </View>
                </Modal>
            </View>

        );
    }
}
