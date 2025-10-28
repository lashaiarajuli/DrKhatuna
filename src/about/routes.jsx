import {MainInfo} from './nav/Main';
import {Education} from './nav/Education';
import {Experience} from './nav/Experience';

export const routes = [
    {
        path:'/about/main',
        element: <MainInfo />
    },
    {
        path:'/about/education',
        element: <Education />
    },
    {
        path:'/about/experience',
        element: <Experience />
    }
]