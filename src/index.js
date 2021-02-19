import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter';
import * as serviceworker from './serviceworker'


 ReactDOM.hydrate(<Counter />, document.getElementById('root'));


serviceworker.unregister()