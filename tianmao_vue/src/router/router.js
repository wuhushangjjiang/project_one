// import CateList from '@/components/CateList'
const Mall = () => import('@/view/Mall')
const Categroy = () => import('@/view/Categroy')

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
    }
]