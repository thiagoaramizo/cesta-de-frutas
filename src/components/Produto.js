import React from "react";
import { Text, StyleSheet, View, Dimensions, Alert } from "react-native"; 
import Botao from "./Botao";
import Fazenda from "./Fazenda";

const width = Dimensions.get('screen').width

const Produto = ( { nome, fazenda, descricao, preco, botao } ) => {

    const handleButton = () => {
        Alert.alert(
            "Adicionar ao carrinho",
            `Adicionar ${nome} ao carrinho?`,
            [
              {
                text: "Adicionar",
                onPress: () => Alert.alert(`${nome} adicionada ao carrinho`)
              },
              {
                text: "Cancelar",
                onPress: () => {}
              },
            ]
          );
    }

    return (
            <View style={styles.cesta}>
                <Text style={styles.nome}>{nome}</Text>
                <Fazenda {...fazenda}></Fazenda>
                <Text style={styles.descricao}>{descricao}</Text>
                <Text style={styles.preco}>R$ {preco},00</Text>
                <Botao onPress={handleButton}>{botao}</Botao>
            </View>
        
    )
}

const styles = StyleSheet.create({
    cesta: {
        backgroundColor: "#fff",
        paddingVertical: 20,
        paddingHorizontal: 16,
        marginVertical: -20,
        marginHorizontal: 8,
        borderRadius: 8,

    },
    nome: {
        color: "#F23005",
        fontSize: 30,
        lineHeight: 46,
        fontWeight: "bold",
    },
    descricao: {
        color: "#444",
        fontSize: 16,
        lineHeight: 20,
        marginVertical: 10
    },
    preco: {
        color: "#F23005",
        fontSize: 30,
        lineHeight: 46,
        fontWeight: "bold",
        marginBottom: 20
    },
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

export default Produto