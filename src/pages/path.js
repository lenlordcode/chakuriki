import { createRouter, createWebHashHistory } from 'vue-router'
import error from "@/pages/404.vue";
import Federation from '@/pages/federation/Federation.vue'
import FederationStructure from "@/pages/federationStructure/FederationStructure.vue";
import News from "@/pages/news/News.vue";
import NewsDetail from "@/pages/news/NewsDetail.vue";
import NewsEdit from "@/pages/news/NewsEdit.vue";
import ImportantInfo from "@/pages/important-info/ImportantInfo.vue";
import Calendar from "@/pages/calendar/Calendar.vue";
import Results from "@/pages/results/Results.vue";
import Docs from "@/pages/docs/Docs.vue";
import ChakurikiArticles from "@/pages/chakurikiArticles/СhakurikiArticles.vue";
import Requisites from "@/pages/requisites/Requisites.vue";
import Contacts from "@/pages/contacts/Contacts.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/news',
            component: News,
        },
        {
            path: '/news/edit',
            component: NewsEdit,
        },
        {
            path: '/news/:id',
            component: NewsDetail,
        },
        {
            path: '/federation',
            component: Federation,
        },
        {
            path: '/federation-structure',
            component: FederationStructure,
        },
        {
            path: '/important-info',
            component: ImportantInfo,
        },
        {
            path: '/calendar',
            component: Calendar,
        },
        {
            path: '/results',
            component: Results,
        },
        {
            path: '/docs',
            component: Docs,
        },
        {
            path: '/chakuriki-articles',
            component: ChakurikiArticles,
        },
        {
            path: '/requisites',
            component: Requisites,
        },
        {
            path: '/contacts',
            component: Contacts,
        },
        {
            path: '/:pathMatch(.*)*',
            component: error,
        }
    ]
})