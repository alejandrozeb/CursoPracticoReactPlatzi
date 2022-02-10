/* 
Inicio Proyecto
Arquitectura basada en componentes, en unidades que se intercomunicara para crear funcionalidades

extension de archivo hace referencia a xml y js hace referencia a motores de plantillas.
transforma al codigo pertinente.

DOM vs virtual dom
Es una representacion del dom real cunado pase algun cambio el virtual dom se compra con el real dom asi los cambios solo se realizan en lugares especificos de la app y no renderizas toda la pagina.

Ciclo de vida
todas las app, componetes y los que creamos tienen un inicio y un final que afectan al virtual dom. asi podemos identificar nuestros eventos con elementos claves

estado
piexa de codigo que mantiene la comunicacion entre componentes y como los comonentes van interactuando.

eventos
Clicks, activar la pagina, overs con el raton.

hooks
Se usan todos estos recursos, se usan mejor para trabajar con los componentes. con un hook podemos crear cada uno de estos elemntos previos.

para instalar react
npm install react react-dom

src vive nuestra app
public archivos publicos

Babel
transpilador

webpack

loaders y plugin
babel loader htmlloader html-webpackplugin
npm install babel-loader html-loader html-webpack-plugin

npm install mini-css-extract-plugin css-loader style-loader sass -D

----------identificacndo  componentes------------

pages
containers send email 2, login 3, createAccount 4, create new password 5, 
components cards 6, linkperfil clase7, sidebar 8, ventas 9, ventas macro 10, lestf side 11,  

-----------atomic design------------------------------------
Permite trabajar con componentes
Atomos representacion de pequeños atomos
moleculas -> representan la union de un bloque con componentes
organismos -> son elementos claves como un header de ejemplo tinen componentes logo, buscador y otros.
templates-> asociano de organismos 
pages-> alfinal tenemos las paginas 

React se optimiza con este tipo de diseño por el dom virtual asi afectamos solo al compoonente o atomo.

el componente logo varia depeden de l tamño de vp

el header puede ser separado en componentes.

el carrito iugalmente puede ser separado en componentes

produc list es un template 

dibujar identificando los elementos.

-------------------------------------------------------------
pages rutas

--------------------tipos de componentes en react------
stateless permite trabajar con un estado
const buttom = ({text}) => <ButtomRed text={text}/>
text es un texto para llenar el componente o cambia

statefull
 const [name, setName] = useState('Hola Mundo');
 return(    
     <div>
      <h1>{name}<h1/>
     <div/>
 );
podemos cambiar con el setName

clase
extiende de un componente

Class App extends component{
    constructor(){
        super();
        this.state = {
            count=0;
        }
    }

    render(){
     return(
         <div>hola<div/>
     );
    }
}

high order 
reciben un componente y extiende su funcionalidad, son funciones

function ComponentWrapper(WarpperComponent){

    class Wrapper extends Component{
        render(){
            return <WrapperComponent {... this.props}/>
        }
    }
    return wrapper
}

-------------------------alias--------------------------
podemos crear diferentes alias para piezas claves del proyecto

npm install @babel/plugin-transform-runtime
para babel pueda usar async await
*/