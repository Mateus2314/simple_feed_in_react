
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';


export function Comment() {


  return (
    <div className={styles.comment}>

      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/10038792?v=4" />
      <div className={styles.commentBox}>

        <div className={styles.commentContent}>

          <header>
            <div className={styles.authorAndTime}>

              <strong>Mateus De La Fuente Cezar</strong>
              <time title='14 de junho às 14h40' dateTime="2022-06-14 14:40:10"> Cerca de 1h atras </time>

            </div>

            <button title='Deletar'> <Trash size={20} ></Trash> </button>

          </header>
          <p>
            Muito bom Devon, parabéns!! 👏👏
          </p>
        </div>

        <footer>

          <button >
            <ThumbsUp />
            Aplaudir <span>24</span>
          </button>

        </footer>

      </div>

    </div>
  )

}