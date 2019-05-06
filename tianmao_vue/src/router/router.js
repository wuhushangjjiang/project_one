// import CateList from '@/components/CateList'
const Mall = () => import('@/view/Mall')
const Categroy = () => import('@/view/Categroy')
const Detail = () => import('@/view/Detail')

export default [
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
        path: '/detail/:id',
        name: 'detail',
        components: {
            default: Detail
        }
    }
]