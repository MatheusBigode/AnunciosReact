import {styles} from './styles';
import { Text, TextInput, View, TouchableOpacity, Image} from 'react-native';

export function Cadastro() {
    return(
        <View style={styles.container}>
            <View style={styles.divWelcome}>
                <Image source={require('../../../assets/logo.png')} style={styles.logo} />

                <Text style={styles.textWelcome}>Boas vindas!</Text>

                <Text style={styles.intro}>
                    Crie sua conta e use o espaço para comprar itens 
                    variados e vender seus produtos
                </Text>
            </View>

            <View style={styles.info}>
                <Image source={require('../../../assets/cadastro.png')} style={styles.profile} />

                <View style={styles.inputs}>
                    <TextInput
                        style={styles.name}
                        placeholder='Nome'
                        placeholderTextColor="#b1adb2"
                        >    
                    </TextInput>

                    <TextInput
                        style={styles.email}
                        placeholder='E-mail'
                        placeholderTextColor="#b1adb2"
                        >    
                    </TextInput>

                    <TextInput
                        style={styles.phone}
                        placeholder='Telefone'
                        placeholderTextColor="#b1adb2"
                        >    
                    </TextInput>

                    <TextInput
                        style={styles.password}
                        placeholder='Senha'
                        placeholderTextColor="#b1adb2"
                        >    
                    </TextInput>

                    <TextInput
                        style={styles.passwordConf}
                        placeholder='Confirmar senha'
                        placeholderTextColor="#b1adb2"
                        >    
                    </TextInput>

                    <TouchableOpacity style={styles.create}>
                        <Text style={{textAlign: 'center',  color: 'white'}}>Criar</Text>
                    </TouchableOpacity>
                </View>
                

                <View style={styles.divLogin}>
                    <Text style={styles.textLogin}>Já tem uma conta?</Text>

                    <TouchableOpacity style={styles.login}>
                        <Text style={{textAlign: 'center',  color: 'black'}}>Ir para o login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}