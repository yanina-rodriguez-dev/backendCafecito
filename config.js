import 'dotenv/config'  //para quew node pueda reconocer el archivo process


//Mongo no reconoce el objeto procees para que node lo reconozca
export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/cafecito_db'// YA PUSE LA BARRA DESPUES DE LA BARRA VA EL NOMBR DE LA BASE DE DASTOS
