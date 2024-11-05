import { Request, Response } from 'express'
import { createMenuObjects } from '../helpers/createMenuObjects'
//importando a model
import {gato} from '../models/gato'

export const home = (req:Request, res:Response)=>{
    let list = gato.getAll()
    res.render('pages/pages', {
        menu:createMenuObjects('all'),
        banner:{
            title:'Todos os gatos e acessórios',
            background:'FundogG.jpg'
        },
        list
    })
}

export const gatos = (req:Request, res:Response)=>{
    let list = gato.getFromType('gato')
    res.render("pages/pages", {
        menu:createMenuObjects('gatos'),
        banner:{
            title:'Gato abissino',
            background:'abissínio.jpg'
        },
        list
    })
}
export const acessorios = (req:Request, res:Response)=>{
    let list = gato.getFromType('acessorio')
    res.render("pages/pages", {
        menu:createMenuObjects('acessorios'),
        banner:{
            title:'Coleira',
            background:'ColeiraGato.webp'
        },
        list
    })
}