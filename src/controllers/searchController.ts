import { Request, Response } from 'express'
import { gato } from '../models/gato'
import { createMenuObjects } from '../helpers/createMenuObjects'

export const search = (req:Request, res:Response)=>{

    let query: string = req.query.q as string
    let list = gato.getFromName(query)
    res.render('pages/pages',{
        menu:createMenuObjects(''),
        list
    })

}