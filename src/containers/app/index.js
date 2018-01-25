import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom';
import Home from '../home'

const App = () => (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home} />
            </div>
        </BrowserRouter>
);

export default App