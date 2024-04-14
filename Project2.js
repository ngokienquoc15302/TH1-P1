import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
    return (
        <View style={styles.container}>
            <Button
                title='Button 1'
                onPress={() => alert("Hello 1")}
            />
            <TouchableOpacity
                style={styles.Button}
                onPress={() => alert('Hello 2')}
            >
                <Text style={styles.Text}>Button 2</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Button: {
        backgroundColor: '#000',
        borderRadius: 5,
        width: 100,
        height: 50,
        alignItems: 'center',
        marginTop: '5%',
    },
    Text: {
        color: 'white',
        fontSize: 18,
    },
});
