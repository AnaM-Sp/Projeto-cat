import {Router} from 'express'
import * as PageController from '../controllers/pageController'
import * as SearchController from '../controllers/searchController'

const router = Router()

router.get('/',PageController.home)
router.get('/gatos',PageController.gatos)
router.get('/acessorios',PageController.acessorios)

router.get('/search',SearchController.search)

export default router