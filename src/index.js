import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route , Switch} from 'react-router-dom'
import Home from './pages/Home'
import Upload from './pages/Upload'
import Header from './components/Header'
import "core-js/stable"
import "regenerator-runtime/runtime"
import './App.css'

const App = () => {
  return (
    <HashRouter>
      <Header/>
      <Switch>
        <Route path = "/upload" component={Upload}/>
        <Route path = "/" component={Home}/>
      </Switch>
    </HashRouter>
  );
}

export default App


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, function(err) {
  if (err) {
    console.error(err)
  } else {
    console.log(`Running on port ${PORT}`)
}
}