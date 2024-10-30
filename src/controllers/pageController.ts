import { Request, Response } from 'express'
import { createMenuObjects } from '../helpers/createMenuObjects'

export const home = (req:Request, res:Response)=>{
    res.render('pages/pages', {
        menu:createMenuObjects('all'),
        banner:{
            title:'Todos os gatos e acessórios',
            background:'FundogG.jpg'
        }
    })
}

export const gatos = (req:Request, res:Response)=>{
    res.render("pages/pages", {
        menu:createMenuObjects('gatos'),
        banner:{
            title:'Gato abissino',
            background:'abissínio.jpg'
        }
    })
}
export const acessorios = (req:Request, res:Response)=>{
    res.render("pages/pages", {
        menu:createMenuObjects('acessorios'),
        banner:{
            title:'Coleira',
            background:'ColeiraGato.webp'
        }
    })
}
export const pesquisePorRaca = (req:Request, res:Response)=>{
    
}