import { StatusBar } from 'expo-status-bar';
import { cloneElement, useState } from 'react';
import { Button, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
    const Square = ({ text, bgColor = "aqua" }) => (
        <View style={[styles.Box, { backgroundColor: bgColor }]}>
            <Text> {text} </Text>
        </View>
    );
    const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    return (
        <ScrollView style={styles.container}>
            {data.map((item, index) => (
                <Square key={item} text={'Square ' + (index + 1)} />
            ))}
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'

    },
    Box: {
        borderRadius: 5,
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },
});
