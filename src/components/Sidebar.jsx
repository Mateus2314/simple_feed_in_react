
import styles from './Sidebar.module.css';

import cover_image from '../assets/cover_image.svg';

export function Sidebar(){

  return (
    <aside className={styles.sidebar}>

      <img src={cover_image} />

      <div className={styles.profile} > 
      
      <strong>Mateus De La Fuente Cezar </strong>
      <span> Web Development </span>
      
      </div>

      <footer>
        <a href="#" > 
        Perfil Editor </a>
      </footer>



    </aside>
  );

}