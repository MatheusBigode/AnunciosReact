import {styles} from './styles';
import { Text, TextInput, View, TouchableOpacity, FlatList, Image, Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

export function Login () {
    return(
        <View style={styles.container}>
            
            <Image source={require('../../../assets/logo.png')} style={styles.logo} />
            
            <View> 
                <Text style={styles.brandName}>
                    marketspace
                </Text>
                <Text style={styles.slogan}>
                    Seu espaço de compra e venda
                </Text>
            </View>
            
            <View style={styles.login}>
                <Text style={styles.loginText}>
                    Acesse sua conta
                </Text>

                <View styles={styles.inputs}>
                    <TextInput
                    style={styles.email}
                    placeholder='E-mail'
                    placeholderTextColor="#b1adb2"
                    >    
                    </TextInput>

                    
                    <TextInput
                    style={styles.password}
                    placeholder='Senha'
                    placeholderTextColor="#b1adb2"
                    >
                    </TextInput>
                    
               
                    <TouchableOpacity style={styles.enter}>
                        <Text style={{textAlign: 'center',  color: 'white'}}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.noAccess}>
                <Text style={styles.signInText}>Ainda não tem acesso?</Text>

                <TouchableOpacity style={styles.signIn}>
                        <Text style={{textAlign: 'center',  color: 'black'}}>Criar uma conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

}