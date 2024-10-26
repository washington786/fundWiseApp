import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import React from 'react';

const MainButton = ({ title, onPress, customStyles }) => {
    return (
        <TouchableOpacity style={[styles.button, customStyles]} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default MainButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#06AFE2',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 25,
        alignItems: 'center',
        width: 350,
        height: 50,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
