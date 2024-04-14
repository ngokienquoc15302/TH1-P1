import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
    const Square = ({ text, bgColor = "aqua" }) => (
        <View style={[styles.Box, { backgroundColor: bgColor }]}>
            <Text> {text} </Text>
        </View>
    );
    return (
        <View style={styles.container}>
            <Square text={"Square 1"} />
            <Square text={"Square 2"} bgColor='red' />
            <Square text={"Square 3"} bgColor='green' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',

    },
    Box: {
        borderRadius: 5,
        width: 100,
        height: 50,
    },
});
