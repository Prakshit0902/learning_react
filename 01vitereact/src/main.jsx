import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>This is custom MyApp Function</h1>
        </div>
    )
}

const reactElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank'
    },
    children : 'click me to visit google '
}

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)

const correctReactElement = React.createElement('a',{
    href:'https://google.com',
    target:'_blank'
},'made by React.createElement')


createRoot(document.getElementById('root')).render(
    // <App />
    // for this below step also it will work fine but it is suggested not to do this due to some optimization issues in the below code
    // MyApp()
    // so call it as follows  
    // <MyApp/>

    // nothing happens
    // reactElement


    // this works fine too 
    // anotherElement
    // this is the correct way to inject created element using react 
    // correctReactElement


    <App/>

)


