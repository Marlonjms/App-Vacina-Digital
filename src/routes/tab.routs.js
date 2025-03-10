import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet } from 'react-native';


import { Title, ImageLogo } from '../componentes/Titulos_e_Logos';
import Cadastro from '../pages/PaginaCadrastoUser';
import Home from '../pages/paginaHome';
import FormPaginaLogin from '../componentes/FormLogin';
import cadastar_consultar from '../pages/PaginaConsultar_cadastrar_vacina';
import dadosusuario from "../pages/Dados_do_usuario/index"



const Stack = createStackNavigator();

function Login() {
    return (
      <View style={styles.containe}>
        <Title/>
        <ImageLogo />
        <FormPaginaLogin />
      </View>
    );
  }


export default function TabRoutes() {
  return (
   
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="cadastar_consultar"
          component={cadastar_consultar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="dados_do_usuario"
          component={dadosusuario}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
  
  );
}




const styles = StyleSheet.create({
  containe: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop:80,
    
  }

  
});
