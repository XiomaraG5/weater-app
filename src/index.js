import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux'
import AppRouter from './routes/AppRouters';
import { store } from './redux/store/store';
import mapboxgl from "mapbox-gl";
import "./styles/index.css"

mapboxgl.accessToken="pk.eyJ1IjoieGlvbWcxNTcwIiwiYSI6ImNsMDc3YmszcDBpNjgzcnJ1YW8zeGZuOWIifQ.RJnqEyce8d5qq92AJfKDZQ"
if(!navigator.geolocation){
  alert("your browser does not have the geolocation option")
  throw new Error("your browser does not have the geolocation option")
}
ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);

