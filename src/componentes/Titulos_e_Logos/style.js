import { StyleSheet } from "react-native";

const styles = StyleSheet.create({



// <<<<<<==================== css tela Login/cadastro abaixo ========================>>>>>>>





  // serve para estilizar a caixa que contem o titulo da pagina de login
  boxTitle: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: -10, 
    marginBottom:19,
    marginTop:0,
  },
  // serve para estilizar o titulo da pagina de login
  textoTitle: {
    color: "#2E9371",
    fontSize: 24,
    fontWeight: "bold",
   
  },
  // essa estilização serve para a caixa que contém a imagem logo, (calendario com a vacina)
  imagenLogo: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10, 
  },




// <<<<<<==================== css tela home abaixo ========================>>>>>>>

// vai servir para estilizar a amrgem superior
MargemSuperior:{
  backgroundColor:"#2E9371",
  marginTop:-35,
  marginBottom:40,
  height:45,

},


// vai servir para estilizar a caixa (View ) da imagem da tela home
caixaimagenHome:{
alignItems:'center'

  },
// vai servir para a imagem home
imagenHome: {
  width: 400, // ajuste a largura conforme necessário
  height: 400, // ajuste a altura conforme necessário
  resizeMode: 'contain', // para garantir que a imagem mantenha suas proporções
  margin: 10 // margem opcional para dar espaçamento ao redor da imagem
},


  // vai servir para estilizar caixa de texto que compoe os dois <text/>
CaixaTextoNomeHOme:{
    color: "#2E9371",
    

 },
 // vai servir para estilizar a caiza que contem todos os texto na parte superior da tela home
 boxTexto: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical:10, 
    paddingHorizontal: 10, // Adiciona espaçamento horizontal
    marginBottom:19,
    marginTop:0,
    backgroundColor:"#66C7D0"

},
//vai servir para estilizar a caixa de texto que compoe o nome: Olá beltrano(nome do usuario)
TextoNomeHOme:{
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize:32,

  },
  // serve estilizar o restante do texto,
  textoHome:{
      fontSize:24,
      color: "#FFFFFF",
  },
  // vai servir para estilizar a margem inferior
  Margeminferior:{
    backgroundColor:"#2E9371",
    height:47,
    marginTop:56,
    flex:1
    

  
  },










});

export default styles;
