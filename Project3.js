import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
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
            <Button
                text="Say Hello"
                onPress={() => alert("Hello")}
            />
            <Button
                text="Say Goodbye"
                onPress={() => alert("Goodbye")}
                buttonStyle={{ backgroundColor: "red" }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

});
