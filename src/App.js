import React from 'react';
import logo from './logo.svg';
import './App.css';
import NotesApp from './notes-app/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { mainReducer } from './reducer';
const title = 'Notes App';

const store = createStore(mainReducer);
function App() {
  return (
    <Provider store={store}>
      <div>
        <nav className="app-header layout-row align-items-center justify-content-center">
          <div className="layout-row align-items-center">
            <img alt="" src={logo} className="logo" />
            <h4 id="app-title" data-testid="app-title" className="app-title">
              {title}
            </h4>
          </div>
        </nav>
        <NotesApp />
      </div>
    </Provider>
  );
}

export default App;
