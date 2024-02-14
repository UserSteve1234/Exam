import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import AllComponents from './components/AllComponents.jsx'
import { context, initialState, globalReducer } from './store'
import { useReducer } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';


function App() {
  const [state, dispatch] = useReducer(globalReducer, initialState)

  const value = {
    store: state,
    setStore: dispatch
  }

  return (
    <div className="App">



      <BrowserRouter>
        <React.StrictMode>
          <I18nextProvider i18n={i18n}>
            <context.Provider value={value}>
              <AllComponents />
            </context.Provider>
          </I18nextProvider>
        </React.StrictMode>
      </BrowserRouter>
    </div>
  );
}

export default App;
