import Vue from 'vue';
import VueRouter from 'vue-router';

import MenuPrincipal from '../components/MenuPrincipal';  // asumiendo que hicimos este componente
import Segundo from '../components/Segundo';

Vue.use(VueRouter);    // instalamos explícitamente el router

export default new VueRouter({
    routes: [
        {
            path: '/', 
            component: MenuPrincipal
        },
        {
            path: '/segundo', 
            component: Segundo
        }
    ]
})
