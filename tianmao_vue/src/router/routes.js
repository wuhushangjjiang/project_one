import JdFooter from '@/components/JdFooter'
const Mall = () => import('@/view/Mall')
const Categroy = () => import('@/view/Categroy')
const Detail = () => import('@/view/Detail')
const Mine = () => import('@/view/Mine')
const Register = () => import('@/view/Register')
const Home = () => import('@/view/Home')
const Login = () => import('@/view/Login')
const JdCart = () => import('@/view/JdCart')

export default [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        components: {
            default: Home,
            jdfooter: JdFooter
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/mall',
        name: 'mall',
        components: {
            default: Mall,
            jdfooter: JdFooter
        },
        children: [
            {
                path: 'search/:id',
                name: 'mall/search',
                component: Categroy,
                jdfooter: JdFooter
            }
        ]
    },
    {
        path: '/detail/:id',
        name: 'detail',
        components: {
            default: Detail
        }
    },
    {
        path: '/mine',
        name: 'mine',
        components: {
            default: Mine,
            jdfooter: JdFooter
        }
    },
    {
        path: '/register',
        name: 'register',
        components: {
            default: Register
        }
    },
    {
        path: '/cart',
        name: 'cart',
        components: {
            default: JdCart
        }
    }
]