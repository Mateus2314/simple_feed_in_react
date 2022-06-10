import { Header } from './components/Header'
import { Post } from './Post'

import './global.css'
// JSX = JavaScript + XML
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'


function App() {


  return (
    <div>

      <Header />

      <div className={styles.wrapper}>

        <Sidebar  /> 

        <main>

          <Post
            author="Mateus De La Fuente"
            content="Lorem ipsum dolor sit amet, consectetur adip"
          />
          <Post
            author="Nathalia De La Fuente"
            content="Lorem ipsum dolor sit amet, consectetur adip"
          />

        </main>

      </div>

    </div>
  )
}


export default App
