import News from './../pages/News/index'
import Collection from './../pages/Collection/index'
import About from './../pages/About/index'
import Home from './../pages/Home/index'
import Product from './../pages/Product/index'

const publicLink = [
    {
        path: '/news',
        component: News,
        title: 'News',
    },

    {
        path: '/product',
        component: Product,
        title: 'Product',
    },
    {
        path: '/',
        component: Home,
        title: <img src="./Layer1.png" alt="logo" />,
    },
    {
        path: '/collection',
        component: Collection,
        title: 'Collection',
    },
    {
        path: '/about',
        component: About,
        title: 'About',
    },
]
const privateLink = []

export { publicLink, privateLink }
