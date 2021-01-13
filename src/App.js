import React from 'react';
import Search from "./components/Search";
import {Provider} from 'react-redux';
import store from "./store/createStore";
import Results from "./components/Results";


function App() {
  return (
    <Provider store={store}>
        <Search/>
        <Results/>
    </Provider>
  );
}

export default App;
