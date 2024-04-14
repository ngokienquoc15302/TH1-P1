import { StatusBar } from 'expo-status-bar';
import { cloneElement, useState } from 'react';
import { Button, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
    const [name, setName] = useState("");
    return (
        <View style={styles.container}>
            <Text>Nhập gì gì đó</Text>
            <TextInput
                style={styles.TextInput}
                placeHolder="Quoc Beo"
                placeholderTextColor="gray"
                onChangeText={(text) => setName(text)}
                value={name}
            />
            <Button
                title='Accept'
                onPress={() => {
                    alert(`Hello, ${name}!`)
                    setName("");
                }} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    TextInput: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'black',
        width: "50%",
        height: "2%",
        backgroundColor: '#fff',
    },
});
