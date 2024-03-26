import React, { useRef } from 'react';
import { Image, Text, TextInput, StyleSheet, TouchableOpacity, View, FlatList } from 'react-native';


function Login(): React.JSX.Element {

    return (



        <View style={styles.container}>

            <View style={styles.login}>
                <View   >

                   
                <Image source={require('./assets/images/marca.png')} style={styles.marca} />

                    <TextInput></TextInput>
                </View>

            </View>





            <View style={styles.campos}>
            <Text style={styles.loginText}>Login</Text>
                <View  >

                    <Text style={styles.text}>Email</Text>

                    <TextInput style={styles.input}></TextInput>
                </View>



                <View  >

                    <Text style={styles.text}>Senha</Text>

                    <TextInput style={styles.input}></TextInput>
                    <TouchableOpacity><Text style={styles.EsqSenha}>Esquesseu a senha?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.entrar}><Text style={styles.entrarText}>Entrar</Text></TouchableOpacity>

                    <View style={styles.icons}>
                        <TouchableOpacity style={styles.loginRedesSocias}><Image source={require('./assets/images/IconGoogle.png')} style={styles.google} /><Text style={styles.textGoogle}>Continue com Google</Text></TouchableOpacity>

                        <TouchableOpacity style={styles.loginRedesSocias}><Image source={require('./assets/images/IconInstagram.png')} style={styles.instagram} /><Text style={styles.textInstagram}>Continue com Instagram</Text></TouchableOpacity>

                    </View>





                </View>

            </View>











        </View>









    );
}



const styles = StyleSheet.create({

    container: {
        flex: 1,

        backgroundColor: 'yellow'
    },

    login: {
        borderWidth: 1,
        borderBlockColor: '#6A5ACD',
        backgroundColor: '#6A5ACD',
        width: 'auto',
        height: 200

    },

    campos: {
        borderWidth: 1,
        width: 'auto',
        height: 600,
        borderRadius: 40,
        marginTop: -20,
        backgroundColor: 'white'
    },
    input: {
        backgroundColor: '#F5F5F5',
        height: 50,
        borderRadius: 50,
        width: 350,
        marginLeft: 20
    },
    text: {
        marginLeft: 40,
        marginVertical: 10
    },
    entrar: {
        borderWidth: 10,
        backgroundColor: 'black',
        width: 350,
        marginVertical: 30,
        marginLeft: 20,
        borderRadius: 50,
        height: 50
    },
    entrarText: {
        color: 'white',
        fontSize: 20,
        marginLeft: 140
    },
    loginRedesSocias: {
        borderWidth: 10,
        backgroundColor: 'black',
        width: 350,
        marginVertical: 1,
        marginLeft: 20,
        borderRadius: 50,
        height: 50
    },
    instagram: {
        width: 50,
        height: 50,
        marginVertical: -10
    },
    google: {

        width: 50,
        height: 50,
        marginVertical: -10
    },
    textInstagram: {
        color: '#F5F5F5',
        marginVertical: -30,
        marginLeft: 60,
        fontSize: 20,
    },
    textGoogle: {
        color: '#F5F5F5',
        marginVertical: -30,
        marginLeft: 60,
        fontSize: 20,
    },
    EsqSenha: {
        color: 'black',
        marginLeft: 230,
        lineHeight: 40
    },
    icons:{
        marginVertical:80
    },
    loginText:{
        fontSize:40,
        marginLeft:150,
        color:'black',
        fontWeight:'bold'
    },
    marca:{
        height:200,
        width:200,
        marginLeft:110,
        marginVertical:-10
    }





});
export default Login;