// Librairies
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Superhero.module.css';

// MAIN FUNCTION
export default function SuperHero({
  nom,
  description = "Pas de description pour l'instant",
  details = 'Aucun détail',
  films = ['Aucun film pour ce super-héros'],
  photo = './blank-profile.jpg',
  isFavorite,
  handleClicked = () => {},
  ...props
}) {
  // STATES
  // State 1 - showDetails
  const [showDetails, setShowDetails] = useState(false);
  // State 1 - showDetails
  const [showModals, setShowModals] = useState(false);

  // METHODES
  // Méthode 1 - handleNameClicked
  const handleNameClicked = (e) => {
    e.stopPropagation();
    setShowModals(true);
  };

  // CYCLES
  // ComponentDidMount
  useEffect(() => {
    if (showModals) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showModals]);

  // RENDU JSX
  return (
    <div
      className={`${styles.superhero} ${
        isFavorite && styles.favoriteSuperhero
      }
      }`}
      onClick={() => handleClicked(nom)}>
      {/* MODAL */}
      {showModals &&
        createPortal(
          <div
            style={{
              background: 'rgba(0, 0, 0, 0.9)',
              position: 'absolute',
              bottom: 0,
              right: 0,
              top: 0,
              left: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onClick={(e) => {
              e.stopPropagation();
              setShowModals(false);
            }}>
            <div style={{ padding: 30, background: 'white' }}>
              <b>Informations</b>
              <ul>
                <li>Taille : 1,85</li>
                <li>Couleur des cheveux : Noirs</li>
                <li>Couleur des yeux : Bleus</li>
              </ul>
            </div>
          </div>,
          document.body
        )}

      {/* CARTE */}
      <img alt={`${nom} photo`} src={photo} />
      <h2
        onClick={(e) => handleNameClicked(e)}
        className='text-xl font-bold'>
        {nom}
      </h2>
      <p>{description}</p>

      {/* DETAILS */}
      <div
        className={`font-bold mb-[10px] inline-block ${
          showDetails && 'text-blue-950'
        } hover:text-red-marvel cursor-pointer`}
        onClick={(e) => {
          e.stopPropagation();
          setShowDetails((prevState) => !prevState);
        }}>
        {showDetails ? 'Masquer les détails' : 'En savoir plus'}
      </div>
      {showDetails && (
        <div style={{ whiteSpace: 'pre-line' }}>{details}</div>
      )}

      {/* FILMS */}
      <div style={{ marginTop: '10px' }}>
        <b>Films :</b>
        <ul>
          {films.map((film) => (
            <li key={film}>{film}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
