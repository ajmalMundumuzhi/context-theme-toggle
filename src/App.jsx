import { renderToReadableStream } from 'react-dom/server'
import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import Content from './components/Content'
import Header from './components/Header'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'

function App() {
  return (
    <ThemeProvider>
      <Content />
      <Header />
      <Navbar />
      <SideBar />  
    </ThemeProvider>
  )
}

export default App
