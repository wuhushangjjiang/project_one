// import CateList from '@/components/CateList'
const Mall = () => import('@/view/Mall')
const Categroy = () => import('@/view/Categroy')
const Home =()=>import('@/view/Home')
const JdFooter =() =>import('@/components/JdFooter')
const JdHeader =() =>import('@/components/JdHeader')
const Login = () =>import('@/view/Login')
export default [
    {
        path:'/',
        redirect:'/home'
    },
    {
        path: '/home',
        name: 'home',
        components: {
            default:Home,
            jdfooter:JdFooter,
            jdheader:JdHeader,
        }
    },
    {
        path: '/mall',
        name: 'mall',
        components: {
            default: Mall
        },
        children: [
            {
                path: 'search',
                component: Categroy
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component:Login
    }
]