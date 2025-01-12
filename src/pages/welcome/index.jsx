import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image,
    TouchableOpacity
 } from "react-native";
import { styles } from "../../../styles";


export default function Welcome() {
    return (
        <View style={Styles.container}>

            
             <View style={Styles.containerImg}>
                <Text>NoPonto</Text>
                <Image
                   source={require("../../assets/LogoTeste.png")}
                   style={Styles.img}
                   resizeMode="contain"
                />
                
             </View>

             <View style={Styles.containerTexto}>
                <Text style={Styles.titulo1}>Gerencie seu ponto!</Text>
                <Text style={Styles.titulo2}>Faça Lohin para começar</Text>


                <TouchableOpacity style={Styles.login}>
                    <Text style={Styles.buttonLogin}>Entrar</Text>
                    
                </TouchableOpacity>


                <TouchableOpacity style={Styles.cadastrar}>
                    <Text style={Styles.buttonLogin}>Cadastrar</Text>
                    
                </TouchableOpacity>

             </View>
        </View>
    )
}


const Styles = StyleSheet.create ({
     container : {
        flex: 1,
        backgroundColor: "#38a69d",
     },
     
     containerImg : {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
     },


     img: {
        width: "60%", 
     },

     containerTexto : {
        flex: 1,
        backgroundColor: "white",
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        paddingStart:"5%",
        paddingEnd: "5%" 
     },

     titulo1: {
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 28,
        marginBottom: 13
     },

     titulo2: {
        color: "grey",
        
     },

     login: {
        position: "absolute",
        backgroundColor: "red",
        borderRadius: 50,
        paddingVertical: 8,
        width: "60%",
        alignSelf: "center",
        bottom: "47%",
        alignItems: "center",
        alignContent: "center"
     },

     cadastrar: {
        position: "absolute",
        backgroundColor: "red",
        borderRadius: 50,
        paddingVertical: 8,
        width: "60%",
        alignSelf: "center",
        bottom: "32%",
        alignItems: "center",
        alignContent: "center"
     },

     buttonLogin: {
        textAlign: "center"
     }

})