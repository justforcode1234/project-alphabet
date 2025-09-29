import { createRouter,createWebHistory } from "vue-router";

import DefaultLayout from "../layouts/DefaultLayout.vue";
import LearnView from "../pages/LearnView.vue";
import CharactersView from "../pages/CharactersView.vue";
import CharacterPracticeView from "../pages/CharacterPracticeView.vue";
import PracticeView from "../pages/PracticeView.vue";

const routes=[
    {
        path:'/',
        component:DefaultLayout,
        children:[
            {path:'',name:'home',component:LearnView},
            {path:'learn',name:'learn',component:LearnView},
            {path:'characters',name:'characters',component:CharactersView},
            {path:'practice',name:'practice',component:PracticeView},
            {path:'character-practice',name:'charactersPractice',component:CharacterPracticeView},
        ]
    }
]

const router=createRouter({
    history:createWebHistory(),
    routes,
})

export default router