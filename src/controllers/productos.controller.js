import { validationResult } from "express-validator";
import Producto from "../models/producto";

export const obtenerProductos = (req, res) => {
  res.send("Se realizo la peticion get");
};

export const crearProducto = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (errors.isEmpty === false) {
        return res.status(400).json({
            errores:errors.array()
        })
    } else {
    }
    // console.log(req.body);-
    const productoNuevo = new Producto(req.body) | m0;
    await productoNuevo.save();
    res.status(201).json({
      mensaje: "El producto se creo correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error alcrear el producto",
    });
  }
};
