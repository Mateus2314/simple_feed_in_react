import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css'
// JSX = JavaScript + XML
import styles from './App.module.css'



const posts = [ 
  {
    id:1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/10038792?v=4',
      name: 'Mateus De La Fuente Cezar',
      role: 'Developer',
    },
    content: [
      { type: 'paragraph', content:'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-06-15 12:00:00'),
  },
  {
    id:2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/42516875?v=4',
      name: 'Nathalia De La Fuente Oliveira',
      role: 'Developer',
    },
    content: [
      { type: 'paragraph', content:'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-06-10 12:00:00'),
  },
];


function App() {


  return (
    <div>

      <Header />

      <div className={styles.wrapper}>

        <Sidebar  /> 

        <main>

         {posts.map(post => {
          return ( <Post 
          
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}


          /> )
         })}

        </main>

      </div>

    </div>
  )
}


export default App
