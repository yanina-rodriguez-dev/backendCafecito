import express from 'express';
import cors from 'cors'; 
import morgan from 'morgan';
import path from 'path';
import 'dotenv/config'; 
import 'dotenv/config';
import './src/database/dbConnection';

//usar un puerto 
const app =express();


app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), ()=>{
    console.log('Estoy en el puerto'+app.get('port'))
})

//middlewares: funciones pequeñas que se ejecutan antes de las rutas  son para tareas especificas
app.use(cors());//permitior conexiones remotas en mi backend (usa cors) 
app.use(express.json())////permite  a mi app recibir objetos de tipo json en los request 
app.use(morgan('dev')) //me muestra en la consola informacion extra de las solicitudes get-post - put etc
console.log(__dirname); // la variable __dirname siempre devuelve l ruta absoluta de donde vive el 
app.use(express.static( path.join(__dirname, '/public')))// esto nos permite poder ejecutar los archivos de mi proyecto en la ruta raiz
//ej: http


//rutas