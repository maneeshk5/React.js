import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ProductList from './ProductList';
import HelloWorld from './HelloWorld';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(<ProductList />, document.getElementById('content'));
ReactDOM.render(<HelloWorld />, document.getElementById('hContent'));

