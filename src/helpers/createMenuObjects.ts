import { acessorios } from "../controllers/pageController"

type menuOptions = ''| 'all' | 'gatos' | 'acessorios'

export const createMenuObjects = (activeMenu:menuOptions) =>{

let returnObject = {
    all: false,
    gatos: false,
    acessorios: false,
}
if(activeMenu !== ''){
    returnObject[activeMenu] = true 
}
    return returnObject

}