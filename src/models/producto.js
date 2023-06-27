import { Schema, model} from "mongoose";

const productoSchema = new Schema({
nombreProducto: {
    type: String,
    minLength:2,
    maxLength: 100,
    required:true,
    unique: true, //PATRA QUE NO PERMITA GUARDAR DOS PRODICYTOS CON EL MISMO NOMBRE 

},
 precio: {
    type:Number,
    min:2,
    max: 10000,
    required:true
 },
 image:{
 type:String,
 required: true,
 },
 categoria:{
    type:String,
    required:true,
 }
});

const Producto = model('producto', productoSchema)

export default Producto