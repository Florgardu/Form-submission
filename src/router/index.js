import { createWebHistory, createRouter } from 'vue-router'
import Formulario from '../components/Formulario.vue'
import UsuariosRegistrados from '../components/UsuariosRegistrados.vue'
import Inicio from '../components/Inicio.vue'


const routes = [
    {path: '/usuariosRegistrados', name: 'UsuariosRegistrados', component: UsuariosRegistrados},
    {path: '/formulario' , name: '', component: Formulario},
    {path: '/' , name: '', component: Inicio}

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;