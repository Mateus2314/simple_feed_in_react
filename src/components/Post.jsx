import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(props) {

  console.log(props);

  return (

    <article className={styles.post} >

      <header>
        <div className={styles.author}>
          
          <Avatar src="https://avatars.githubusercontent.com/u/10038792?v=4" />

          <div className={styles.authorInfo}>

            <strong>Mateus De La Fuente Cezar</strong>
            <span> Web Developer </span>
          </div>

        </div>

        <time title='13 de junho às 14h40' dateTime="2022-06-13 14:40:10"> Publicado a 1h </time>

      </header>

      <div className={styles.content}>

        <p> Fala galeraa 👋 </p>

        <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p> 👉{' '}<a href="">jane.design/doctorcare </a>  </p>

        <p>
          <a href=""> #novoprojeto </a>{' '}
          <a href=""> #nlw         </a>{' '}
          <a href=""> #rocketseat </a>{' '}
        </p>


      </div>

      <form className={styles.commentForm}>
        <strong>Deixe o seu feedback </strong>

        <textarea placeholder='Deixe o comentario'>

        </textarea>


        <footer>

          <button type='submit'>Publicar</button>


        </footer>

      </form>

      <div className={styles.commentList}>
        <Comment></Comment>
        <Comment></Comment>
        <Comment></Comment>

      </div>

    </article>
  )

}
