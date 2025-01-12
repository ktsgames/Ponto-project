import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image,
    TouchableOpacity
 } from "react-native";
import Styles from "./styles";

import * as Animatable from "react-native-animatable"
import { useNavigation } from "@react-navigation/native";


export default function TelaInicial() {
    const navigation = useNavigation();
    return (
        <View style={Styles.container}>

            
             <View style={Styles.containerImg}>
                
                <Image
                   animation="flipInY"
                   source={require("../../assets/LogoTeste.png")}
                   style={Styles.img}
                   resizeMode="contain"
                />

                
             </View>

             <Animatable.View delay={900} animation="fadeInUp" style={Styles.containerTexto}>
                <Text style={Styles.titulo1}>Gerencie seu ponto!</Text>
                <Text style={Styles.titulo2}>Faça Login para começar</Text>


                <TouchableOpacity 
                  style={Styles.login}
                  onPress={() => navigation.navigate("TelaLogin")}
                 >
                    <Text style={Styles.buttonLogin}>Entrar</Text>
                    
                </TouchableOpacity>


               

             </Animatable.View>
        </View>
    )
}


