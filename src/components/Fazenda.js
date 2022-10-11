import React from "react";
import { Text, StyleSheet, Image, View } from "react-native"; 

const Fazenda = ( {nomeFazenda, logoFazenda} ) => {

    return (
        <>
            <View style={styles.fazenda}>
                <Image style={styles.imagemFazenda} source={logoFazenda} />
                <Text style={styles.nomeFazenda}> {nomeFazenda} </Text>
            </View>
        </>
        
    )
}

const styles = StyleSheet.create({
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
        borderColor: "#ccc",
        borderBottomWidth: 0.5,
    },
    imagemFazenda: {
        width: 32,
        height: 32
    },
    nomeFazenda: {
        color: "#000",
        fontSize: 16,
        lineHeight: 26,
        paddingLeft: 12
    }
})

export default Fazenda