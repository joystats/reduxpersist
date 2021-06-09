import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Product from './components/pages/Products'
import NotFound from './components/pages/NotFound'

function App() {
  return (
    <BrowserRouter>
		<Switch>
			<Route path="/" exact component={Home}/>
			<Route path="/about" component={About}/>
			<Route path="/products" exact component={Product}/>
			<Route exact component={NotFound}/>
		</Switch>
    </BrowserRouter>
  );
}

export default App;
