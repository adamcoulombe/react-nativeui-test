import React from 'react';
import { StyleSheet, Text, View, Modal, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Button from 'apsl-react-native-button';
import styles from './Styles';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        }
    }
    static navigationOptions = {
        title: 'Welcome',
    }

    render() {
        return (
            <View style={styles.container}>
                    <Image
                        style={{
                            backgroundColor: '#ccc',
                            flex: 1,
                            resizeMode: 'cover',
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                        }}
                        source={require('./assets/bg.png')}
                ></Image>
                    <Text style={styles.title}>Welcome</Text>
                    <Text>Changes you make will automatically reload.</Text>
                    <Text>Shake your phone to open the developer menu.</Text>

                    <Button
                        onPress={() =>
                            this.props.navigation.navigate('Help', { name: 'Jane' })
                        }
                        title="Learn More"
                        style={styles.button}
                        accessibilityLabel="Learn more about this purple button"
                    />
                
            </View>
            
        );
    }
}
