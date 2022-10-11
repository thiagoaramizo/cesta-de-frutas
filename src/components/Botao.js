import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native"; 

const Botao = ( {children, onPress} ) => {

    return (
            <TouchableOpacity style={styles.botao} onPress={onPress}>
                <Text style={styles.textoBotao}>{children}</Text>
            </TouchableOpacity>       
    )
}

const styles = StyleSheet.create({
    botao: {
        backgroundColor: "#F23005",
        padding: 16,
        borderRadius: 6,
    },
    textoBotao: {
        width: "100%",
        textAlign: "center",
        color: "#fff",
        fontSize: 18,
    }
})

export default Botao