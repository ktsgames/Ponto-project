import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   

    container: {
        flex: 1,
        backgroundColor: "#447390"
    },

    saudacao: {
        marginTop: "14%",
        marginBottom: "8%",
        paddingStart: "5%"
    },
    
    titulo: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#fff",
    },

    containerConteudo: {
       
        backgroundColor: "white",
        flex: 1,
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        paddingStart: "5%",
        paddingEnd: "5%"
    },


    textoInput: {
         fontSize: 20,
         marginTop: 28,
    },

    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 14
    },

    botton: {
        backgroundColor: "#38a69d",
        width: "100%",
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textLogin: {
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center"
    },

    cadastro: {
        marginTop: 14,
        alignSelf: "center",
    },

    buttonCadastro: {
        color: "grey",
    }



})










export default styles;