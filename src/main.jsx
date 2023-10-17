import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyled } from './GlobalStyled.jsx'
import { ResetStyled } from './ResetStyled.jsx'
import LabedditProvider from './components/global/contextGlobal.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <LabedditProvider>
    <ResetStyled/>
    <GlobalStyled/>
    <App />
  </LabedditProvider>,
)
