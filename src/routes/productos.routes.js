import { Router } from "express";
import { obtenerProductos } from "../controllers/productos.controller";
import { check } from "express-validator";


const router = Router();

// app.get('/productos', (req, res)=>{
//     res.send('Se hizo la peticion GET')
// })
router
  .route("/productos")
  .get(obtenerProductos)
  .post(
    [
      check("nombreProducto")
        .notEmpty()
        .withMessage("El nombre del producto es obligatorio")
        .isLength({ min: 2, max: 100 })
        .withMessage(
          "El nombre del producto debe tener entre 2 a 100 caracteres"
        ),
      check("precio")
        .notEmpty()
        .withMessage("El precio es un dato obligatorio")
        .isNumeric()
        .withMessage("El precio debe ser un numero")
        .custom((value) => {
          if (value >= 1 && value <= 10000) {
            return true;
          } else {
            throw new Error("El precio debe estar entre 1 y 10000");
          }
        }),
        check('imagen')
        .notEmpty()
        .withMessage('La url de la imagen es una es un dato obligatorio')
        .matches (/"%(?<=src=\")([^\"])+(png|jpg|gif)%i"/)
        .withMessage("DEBE SER UNA URL DE IMAGEN VALIDA"),
check('categoria')
    .notEmpty()
    .withMessage('La cat es obligatoria')
    .isIn(['bebida caliente', 'bebida fria', 'dulce', 'salado'])
     .withMessage('Debe ingresar una categoria valida')
    ], 

    crearProducto
  );

router
  .route("/productos/:id")
  .get(obtenerProductos)
  .delete(borrarProducto)
  .put(editarProducto);

export default router;
