import React from 'react';
import ReactDOM from 'react-dom';

import {GifExpertApp} from './GifExpertApp';
import './index.css';

 ReactDOM.render(
  <GifExpertApp defaultCategories= { ['cats' , 'programing']}/>,
   document.getElementById('root')
 );
