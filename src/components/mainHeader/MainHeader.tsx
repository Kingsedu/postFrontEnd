import { MdPostAdd, MdMessage } from 'react-icons/md';

import classes from './MainHeader.module.css';
import { OncreateHandle } from '../../..';

function MainHeader({ onCreatePost } : OncreateHandle) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <button className={classes.button} onClick={onCreatePost}>
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  );
}

export default MainHeader;