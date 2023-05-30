import AboutM from "./About/AboutM";
import BlogM from "./Blog/BlogM";
import ContactM from "./Contact/ContactM";
import HomM from "./Home/HomM";
import PortfolioM from "./Portfolio/PortfolioM";
import Error from "./Error/ErrorM"

export let myRout = [
    {
        id:1,
        path:"/",
        element:<HomM/>
    },
    {
        id:2,
        path:"home",
        element:<HomM/>
    },
    {
        id:3,
        path:"about",
        element:<AboutM/>
    },
    {
        id:4,
        path:"portfolio",
        element:<PortfolioM/>
    },
    {
        id:5,
        path:"contact",
        element:<ContactM/>
    },
    {
        id:6,
        path:"blog",
        element:<BlogM/>
    },
    {
        id:7,
        path:"*",
        element: <Error/>
    }
]