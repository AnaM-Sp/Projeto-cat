/*
1. Pegar todos os itens

2. Filtrar por tipo (gato acessorio)

3.Filtrar itens pelo nome 

*/

type gatoType = 'gato' | 'acessorio'

type gato ={
    type: 'gato' | 'acessorio'
    image: string,
    name: string,
    color: string,
    sex: 'Masculino' | 'Feminino' | 'N/A'
}

const data: gato[] =[

    {
        type: 'gato',
        image: 'abissinio.jpg',
        name: 'Gato abissinio',
        color: 'Creme, Canela e Chocolate',
        sex: 'Masculino'
    },
    {
        type: 'gato',
        image: 'American Curl.jpg',
        name: 'Gato American Curl',
        color: 'Tigrado, Branco, Preto, Tricolor',
        sex: 'Masculino'
    },
    {
        type: 'acessorio',
        image: 'ArranhadorGatos.webp',
        name: 'Arranhador de Gatos',
        color: 'Preto e creme',
        sex: 'N/A'
        
    },
    {
        type: 'gato',
        image: 'azulrusso.png',
        name: 'Gato Azul Russo',
        color: 'azul-acinzentada',
        sex: 'Masculino'
    },
    {
        type: 'gato',
        image: 'bengal.jpg',
        name: 'Gato Bengal',
        color: 'Amarelo',
        sex: 'Masculino'
    },
    {
        type: 'gato',
        image: 'birmanês.jpg',
        name: 'Gato Birmanês',
        color: 'Branco',
        sex: 'Feminino'
    },
    {
        type: 'gato',
        image: 'Bobtail Japones.jpeg',
        name: 'Gato Bobtail Japones',
        color: 'Branco e Amarelo',
        sex: 'Masculino'
    },
    {
        type: 'gato',
        image: 'Bombaim.jpg',
        name: 'Gato Bombaim',
        color: 'Preto',
        sex: 'Masculino'
    },
    {
        type: 'acessorio',
        image: 'ColeiraGato.webp',
        name: 'Coleira de Gato',
        color: 'Ciano',
        sex: 'N/A'
        
    },
    {
        type: 'acessorio',
        image: 'ComedouroGato.webp',
        name: 'Comedouro de Gato',
        color: 'creme',
        sex: 'N/A'
        
    },
    {
        type: 'gato',
        image: 'Cornish Rex.jpg',
        name: 'Gato Cornish Rex',
        color: 'Manchado, Preto e Alaranjado',
        sex: 'Masculino'
    },
    {
        type: 'gato',
        image: 'mainecoon.jpg',
        name: 'Maine-Coon',
        color: 'Branco',
        sex: 'Masculino'
    },
    {
        type: 'gato',
        image: 'Oriental Shorthair.jpg',
        name: 'Gato Oriental Shorthair',
        color: 'Preto e Branco',
        sex: 'Masculino'
    },
    {
        type: 'gato',
        image: 'pelocurtoameicano.jpg',
        name: 'Gato Pelo curto americano',
        color: 'Branco, Preto e Amarelo',
        sex: 'Masculino'
    },
    {
        type: 'gato',
        image: 'persa.jpg',
        name: 'Gato Persa',
        color: 'Amarelo e Preto',
        sex: 'Masculino'
    },
    {
        type: 'gato',
        image: 'Ragdoll.jpg',
        name: 'Gato Ragdoll',
        color: 'Vermelho',
        sex: 'Masculino'
    },
    {
        type: 'gato',
        image: 'Sagrado da Birmânia.jpg',
        name: 'Gato Da Birmânia',
        color: 'Branco e Preto',
        sex: 'Masculino'
    },
    {
        type: 'gato',
        image: 'siames.jpg',
        name: 'Gato Siames',
        color: 'Verde e Branco',
        sex: 'Masculino'
    },
    {
        type: 'gato',
        image: 'Somali.jpeg',
        name: 'Gato Somali',
        color: 'Vermelho e Azul',
        sex: 'Masculino'
    },
    {
        type: 'gato',
        image: 'sphynx.jpg',
        name: 'Gato-Sphynx',
        color: 'Laranja',
        sex: 'Masculino'
    },
    {
        type: 'acessorio',
        image: 'SanitarioGato.webp',
        name: 'Sanitario de Gatos',
        color: 'Cinza',
        sex: 'N/A'
    },

]

export const gato ={
    /*vamos retornar todos os iyens para exibir na pagina principal 
    essa função vai retornar data que é onde estão nossos itens*/
    getAll:() =>{
        return data
    },

    getFromType: (type: gatoType): gato[] =>{
        return data.filter(item => {
            

            if(item.type == type){
                return true
            }else{
                return false
            
            }
            
        })
    },

    getFromName:(name: string): gato[] =>{
        return data.filter(item =>{

            if(item.name.toLowerCase().indexOf(name.toLowerCase()) > -1){
                return true
            }  else  {
                return false
            }
        })
    }
}