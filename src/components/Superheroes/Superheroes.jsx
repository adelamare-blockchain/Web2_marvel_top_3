// Librairies
import styles from './Superheroes.module.css';

// Components

export default function Superheroes({ children }) {
  return (
    <>
      <h2 className='text-3xl text-white mt-3 uppercase font-semibold'>
        Top 3 Marvel's superheroes
      </h2>
      <div className={styles.superheroes}>{children}</div>
    </>
  );
}
