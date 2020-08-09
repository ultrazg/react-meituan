import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import './resource/css/icon.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import UseListView from './demo/UseListView';
import UseListView2 from './demo/UseListView2';
import DetailView from './views/detailview/DetailView';
import MapView from './views/mapview/MapView';
import SearchView from './views/searchview/SearchView';

ReactDOM.render((
  <Router>
    <Switch>
      <Route path='/' exact component={App} />
      <Route path='/detail/:id' component={DetailView} />
      <Route path='/location' component={MapView} />
      <Route path='/search' component={SearchView} />
      <Route render={() => <h3>404 Not Found</h3>} />
      {/* <UseListView /> */}
      {/* <UseListView2 /> */}
    </Switch>
  </Router>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();