import React from "react";
import { Text, StyleSheet, View, Image, FlatList } from "react-native"; 

const Item = ( {item: {nome, imagem } } ) => {

    return (
        <View style={styles.card}>
            <View style={styles.item}>
                <Image source={imagem} style={styles.itemImagem}/>
                <Text style={styles.itemNome} >{nome}</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        paddingVertical: 20,
        paddingHorizontal: 16,
        marginTop: 10,
        marginHorizontal: 8,
        borderRadius: 8,

    },
    item: {
        marginVertical: 10,
        flexDirection: "row",
    },
    itemImagem: {
        width: 50,
        height: 50,
    },
    itemNome: {
        fontSize: 18,
        lineHeight: 50,
        paddingLeft: 10,
    }
})

export default Item