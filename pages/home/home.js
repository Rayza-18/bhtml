/*
//import firebase from './main';
//import firebase from 'firebase/app';// NÃO DAR PRA USAR NÉ
import 'firebase/auth';
import api from './src/services/api';
export default {

  contructor(props){
    super(props):
    this.state = {
      book:[]
    }
  },
  componentDidMount(){
const response = await api.get('/book');
this.setState({
  book: response.data
});
  },
 // name: 'HomeApp', (ROTA NÃO QUER PEGAR)
  data() {
    return {
      sidebar: false,
      
      books: [
        {
          title: "Dev",
          author: "Rayza",
          description: "historia de como vira um dev",
          image: "..." ,
        },
        {
          title: "Matematica",
          author: "Carla",
          description: "introdução a matematica",
          image: "..."
        },
        {
          title: "Programação",
          author: "Silva",
          description: "logica para programação",
          image: "..."
        },
        {
          title: "Codar ou não codar",
          author: "Simplicio",
          description: "entenda a filosofia logica",
          image: "..."
        },
        {
          title: "C",
          author: "Carla",
          description: "comece da base",
          image: "..."
        },
        {
          title: "Dev III",
          author: "Carla",
          description: "IA a nova velha amiga",
          image: ""
        },
        {
          title: "Dev III",
          author: "Carla",
          description: "IA a nova velha amiga",
          image: ""
        },
        {
          title: "Dev III",
          author: "Carla",
          description: "IA a nova velha amiga",
          image: ""
        },
        
      
      ],
      modalLeitura: false,
      modalEdicao: false,
      modalPerfil:false,
      livroSelecionado: null,
      novoLivro: {
        title: "",
        author: "",
        description: "",
        image: ""
      }
    };
  },
  methods:{
    toggleSidebar() {
      this.sidebar = !this.sidebar;
    },
    sair(){
window.location.href="./login.html";
      alert("esta pegando");
    },
    perfil(){
        window.location.href="./perfil.html";
    },
    fecharModalLeitura() {
      this.modalLeitura = false;
      this.livroSelecionado = null;
    },
    fecharModalPerfil() {
      this.modalPerfil = false;
      this.livroSelecionado = null;
    },
    home(){
      window.location.href="App.vue";
      console.log("esta pegando");
    },
    ler(){
      alert("esta pegando");

    },
    lerLivro(book) {
      this.livroSelecionado = book;
      this.modalLeitura = true;
    },
    
      editarLivro(book) {
      this.livroSelecionado = { ...book }; // Cria uma cópia do livro para edição
      this.modalEdicao = true;
    },
    fecharModalEdicao() {
      this.modalEdicao = false;
      this.livroSelecionado = null;
    },
    salvarEdicao() {
      alert('Atualização Salva')
      this.modalEdicao = false;
      this.livroSelecionado = null;
    },
    adicionarLivro() {
      if (this.novoLivro.title && this.novoLivro.author && this.novoLivro.description && this.novoLivro.image) {
        this.books.push({ ...this.novoLivro });
        this.fecharModalAdicionar();
        this.novoLivro = { title: "", author: "", description: "", image: "" }; // Reseta os campos do formulário
      } else {
        alert('Por favor, preencha todos os campos!');
      }
    } ,
    },
    remover(){
      alert("esta pegando");
    },
    mylivros(){
      alert("esta pegando");
    },
    livros(){
      alert("esta pegando");
    },
  }
const styles = StyleSheet.create({
  template:{
   flex:1
} 
});*/

function home(){
    window.location.href="./home.html";
    console.log("esta pegando");
}
function perfil(){
    window.location.href="../../perfil.html";
    console.log("esta pegando");
}

// Quando o usuário clicar no botão, abre o modal
function lerLivro(){
console.log("esta pegando");

}
function abrirPerfil(){
console.log("esta pegando");
Perfil.style.display = "block";
}


 function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.querySelector('.content').style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.querySelector('.content').style.marginLeft= "0";
}

chamaLivrosEnd();
const livros =[{
  type: 'livros',
  titulo: 'Dev',
  subtitulo: 'Como ser um dev',
  autor:'Rayza carla',
  descricao:'incentivo ao avanço tecnológico, assim como a estrutura atual'
},
{
  type: 'livros',
  titulo: 'Dev',
  subtitulo: 'Como ser um dev',
  autor:'Rayza carla',
  descricao:'incentivo ao avanço tecnológico, assim como a estrutura atual'
},
{
  type: 'livros',
  titulo: 'Dev',
  subtitulo: 'Como ser um dev',
  autor:'Rayza carla',
  descricao:'incentivo ao avanço tecnológico, assim como a estrutura atual'
},
{
  type: 'livros',
  titulo: 'Dev',
  subtitulo: 'Como ser um dev',
  autor:'Rayza carla',
  descricao:'incentivo ao avanço tecnológico, assim como a estrutura atual'
},
{
  type: 'livros',
  titulo: 'Dev',
  subtitulo: 'Como ser um dev',
  autor:'Rayza carla',
  descricao:'incentivo ao avanço tecnológico, assim como a estrutura atual'
},
{
  type: 'livros',
  titulo: 'Dev',
  subtitulo: 'Como ser um dev',
  autor:'Rayza carla',
  descricao:'incentivo ao avanço tecnológico, assim como a estrutura atual'
},
{
  type: 'livros',
  titulo: 'Dev',
  subtitulo: 'Como ser um dev',
  autor:'Rayza carla',
  descricao:'incentivo ao avanço tecnológico, assim como a estrutura atual'
},
{
  type: 'livros',
  titulo: 'Dev',
  subtitulo: 'Como ser um dev',
  autor:'Rayza carla',
  descricao:'incentivo ao avanço tecnológico, assim como a estrutura atual'
}
]
function chamaLivrosEnd(livros){
  setTimeout(() =>{
  addLivros(livros);
},1000)
}
function addLivros(livros){
const bookItens = document.getElementById('LivrosItens');

LivrosItens.forEach(LivrosItens=> {
  const cardLivros = document.createElement('li');
  cardLivros.classList.add(livros.type);

  const titulo = document.createElement('h1')
  titulo.innerHTML = cardLivros.title;
  livros.appendChild(titulo)
  bookItens.appendChild(cardLivros);
});
}

