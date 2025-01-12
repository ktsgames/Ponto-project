import { StyleSheet } from 'react-native'

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
        backgroundColor: "#0a5c5a",
        borderRadius: 50,
        paddingVertical: 8,
        width: "80%",
        alignSelf: "center",
        bottom: "30%",
        alignItems: "center",
        alignContent: "center"
     },

     
     buttonLogin: {
        fontSize: 20,
        textAlign: "center",
        color: "#fff"
     }

})

export default Styles;