import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { cloneElement, useState } from 'react';
import { Button, Image, ImageBackground, SafeAreaView, ScrollView, SectionList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
    const DATA = [
        {
            title: 'Title 1',
            data: ['Data Title 1', 'Data Title 1', 'Data Title 1',],
        },
        {
            title: 'Title 2',
            data: ['Data Title 2', 'Data Title 2', 'Data Title 2',],
        },
        {
            title: 'Title 3',
            data: ['Data Title 3', 'Data Title 3', 'Data Title 3',],
        },
        {
            title: 'Title 4',
            data: ['Data Title 4', 'Data Title 4', 'Data Title 4',],
        },
    ];
    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.title}>{item}</Text>
                    </View>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16,
    },
    item: {
        backgroundColor: 'black',
        padding: 20,
        marginVertical: 8,
        borderRadius: 20,
    },
    header: {
        fontSize: 32,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        color: 'white'
    },
});
