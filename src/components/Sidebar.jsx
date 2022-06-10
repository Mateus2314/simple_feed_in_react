import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';

import cover_image from '../assets/cover_image.svg';

export function Sidebar(){

  return (
    <aside className={styles.sidebar}>

      <img src={cover_image} />

      <div className={styles.profile} > 

      <img src="https://avatars.githubusercontent.com/u/10038792?v=4">

      </img>
      
      <strong>Mateus De La Fuente Cezar </strong>
      <span> Web Development </span>
      
      </div>

      <footer>
        <a href="#" > 

        <PencilLine size={20} />
        Perfil Editor </a>
      </footer>



    </aside>
  );

}