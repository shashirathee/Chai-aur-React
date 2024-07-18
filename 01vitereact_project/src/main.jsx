import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
function MyApp(){
    return(<div>
        <h1>
            Constom App!
        </h1>
    </div>)
}

const anotherElement = (
    <a href="https://google.com" target='_blank'>
        visit to google
    </a>
)

const reactElement = React.createElement(
    'a',
    {href: 'http://google.com', target: '_blank' },
    'click me to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
   <App/>

)
