import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
    const [pressCount, setPressCount] = useState(0);

    const Button = (props) => (
        <TouchableOpacity
            onPress={props.onPress}
            //style={[styles.Button, ...props.buttonStyle]}
            style={{
                backgroundColor: "black",
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,
                margin: 10,
                borderRadius: 10,
                width: 150,
                height: 50,
                ...props.buttonStyle,
            }}
        >
            <Text style={{ color: '#fff', }}>{props.text}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text>Bạn bấm nút {pressCount} lần  </Text>
            <Button
                text={'Press me'}
                onPress={() => setPressCount(pressCount + 1)}

            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    Button: {
        backgroundColor: '#000',
        borderRadius: 5,
        width: 100,
        height: 50,
        alignItems: 'center',
        marginTop: '5%',
    },
});
