import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {

    return (
        <View style={styles.container}>
            <View style={styles.ViewStyle}>
                <Text style={{ color: '#fff' }}>Hello World</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ViewStyle: {
        width: 100,
        height: 100,
        backgroundColor: 'aqua',
        alignItems: 'center',
        justifyContent: 'center',
    },

});
