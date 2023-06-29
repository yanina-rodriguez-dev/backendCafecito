import { Router } from "express";


const router = Router()

// app.get('/productos', (req, res)=>{
//     res.send('Se hizo la peticion GET')
// })
router.route('/productos').get(app.get('/productos', (req, res)=>{
    res.send('Se hizo la peticion GET')
}))

export default Router