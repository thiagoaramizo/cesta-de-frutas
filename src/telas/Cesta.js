import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native"; 
import Cabecalho from "../components/Cabecalho";
import Item from "../components/Itens";
import Produto from "../components/Produto";


const Cesta = ({cabecalho, detalhes, itens}) => {

    return (
        <FlatList 
            data={itens.lista}
            renderItem={Item}
            keyExtractor={ ({nome}) => nome }
            ListHeaderComponent = { () => {
                return <>
                    <Cabecalho {...cabecalho}></Cabecalho>
                    <Produto {...detalhes}></Produto>
                    <Text style={styles.titulo}>{itens.titulo}</Text>
                </>
            }}
        />
        
    )
}

const styles = StyleSheet.create({
    titulo: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 30,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
})


export default Cesta