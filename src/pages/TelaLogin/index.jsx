import React from "react";
import styles from "./style"
import { View, Text, TextInput, TouchableOpacity} from "react-native";
import * as Animatable from "react-native-animatable"


export default function TelaLogin() {
    return (
        <View style={styles.container}>

            <Animatable.View animation="fadeInLeft" delay={600} style={styles.saudacao}>
                <Text style={styles.titulo}>Bem-vindo</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerConteudo}>

                <Text style={styles.textoInput}>E-mail:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Digite seu E-mail..."
                  
                />
                
                <Text style={styles.textoInput}>Senha:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Digite sua senha..."
                  
                />

                <TouchableOpacity style={styles.botton}>
                    <Text styles={styles.textLogin}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.cadastro}>
                    <Text style={styles.buttonCadastro}>Não possui uma conta? Cadastre-se</Text>   
                </TouchableOpacity>




            </Animatable.View>

        </View>
    )
}