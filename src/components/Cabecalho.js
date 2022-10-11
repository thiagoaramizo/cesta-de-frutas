import React from "react";
import { Text, StyleSheet, Image, Dimensions, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import cabecalho from "../../assets/frutas.jpg"; 

const width = Dimensions.get('screen').width

const Cabecalho = ( {titulo }) => {

    return (
        <View style={styles.container}>
            <Image source={cabecalho}  style={styles.imagem}/>
            <LinearGradient colors={['rgba(234,29,44,1)', 'rgba(234,29,44,0)', 'rgba(234,29,44,1)']} style={[styles.imagem, styles.degrade]}>
            </LinearGradient>
            <Text style={styles.titulo}> {titulo} </Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        position: "relative"
    },
    imagem: {
        width: "100%",
        height: 1000 / 1500 * width,
        
    },
    degrade: {
        position: "absolute",
        top: 0
    },
    titulo: {
        width: "100%",
        textAlign: "center",
        position: "absolute",
        top: 20,
        fontSize: 30,
        lineHeight: 46,
        fontWeight: "bold",
        color: "#fff",
        textShadowColor: "#000",
        textShadowOffset: { width: 0, height: 0},
        textShadowRadius: 10
    }
})

export default Cabecalho