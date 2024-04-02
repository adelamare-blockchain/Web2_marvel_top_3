// Librairies
import { useEffect, useRef, useState } from 'react';
import './App.css';
import styled from 'styled-components';

// Components
import Superhero from './components/Superheroes/Superhero/Superhero';
import Superheroes from './components/Superheroes/Superheroes';

// MAIN FUNCTION
export default function App() {
  // STATES
  // State 1 - favoriteSuperheroe
  const [favorite, setFavorite] = useState('');
  // State 2 - newSuperhero
  const [newSuperhero, setNewSuperhero] = useState({
    nom: 'Anonyme',
    description: '',
    photo: '',
  });

  // VARIABLES
  // Variable 1 - nom (useRef)
  const nom = useRef();
  // Variable 2 - description (useRef)
  const description = useRef();
  // Variable 3 - photo (useRef)
  const photo = useRef();

  // METHODES
  // Méthode 1 - handleSuperheroClicked
  const handleClicked = (nom) => {
    setFavorite(nom);
  };

  // Méthode 2 - handleSuperheroClicked
  const handleCreateSuperhero = (e) => {
    e.preventDefault();
    setNewSuperhero((prevState) => ({
      ...prevState,
      nom: nom.current.value,
      description: description.current.value,
      photo: photo.current.value,
    }));
  };

  // // Méthode 3 - Form (styled-components)
  // const Form = styled.div`
  //   border: 1px solid black;
  //   padding: 15px;
  //   background-color: ${newSuperhero.nom != 'Anonyme'
  //     ? 'green'
  //     : 'transparent'};
  //   &:hover {
  //     border: 1px solid #ed1d24;
  //   }

  //   @media (max-width: 500px) {
  //     &:hover {
  //       border: 1px solid orange;
  //     }
  //   }
  // `;

  // CYCLES
  // ComponentDidMount
  useEffect(() => {
    photo.current.focus();
  }, [
    newSuperhero.photo,
    newSuperhero.nom,
    newSuperhero.description,
  ]);

  // MAIN FUNCTION
  return (
    <main>
      <img
        alt='Logo Marvel'
        src='https://i.pinimg.com/originals/88/9d/7d/889d7ddef09c4a3049981708eb525ed5.png'
        className='mx-auto mt-10 w-28'
      />
      {/* SUPERHEROES */}
      <Superheroes>
        {/* SUPERHERO N°1 */}
        <Superhero
          nom='Iron Man'
          description={`Anthony « Tony » Stark, alias Iron Man est un super-héros
évoluant dans l'univers Marvel de la maison d'édition Marvel
Comics.`}
          details={`Anthony « Tony » Stark, alias Iron Man (litt. « l'Homme de fer » en français) est un super-héros évoluant dans l'univers Marvel de la maison d'édition Marvel Comics. Créé par le scénariste Stan Lee, développé par Larry Lieber et conçu par les dessinateurs Don Heck et Jack Kirby, le personnage de fiction apparaît pour la première fois dans le comic book Tales of Suspense (vol. 1) #39 en mars 1963, scénarisé par Larry Lieber et dessiné par Don Heck. À partir de 1968, le personnage a son propre comic, The Invincible Iron Man, publié par Marvel jusqu'en 1996 avec le no 332. Au début de sa carrière de super-héros, Tony Stark avait pour principale occupation de lutter contre les communistes dans le contexte de la guerre froide, de manière beaucoup plus systématique que les autres personnages de Marvel Comics. Ce cadre historique a progressivement disparu, au profit d'aventures de science-fiction. Le contexte de la série Iron Man a ensuite continué d'évoluer avec les années, le personnage affrontant en majorité des menaces de type technologique. Le corps d'Iron Man est celui d'un homme normal, sans pouvoir surnaturel ou surhumain, mais rendu surpuissant quand il revêt l'une des nombreuses armures de haute technologie conçues à l'aide des impressionnantes compétences scientifiques de Stark. L'armure, pouvant voler à des vitesses supersoniques, confère à Tony Stark une force et une résistance surhumaines et est équipée de multiples armes, capteurs et systèmes électroniques. Le personnage est adapté au cinéma à partir du film Iron Man (2008), lequel lance l'univers cinématographique Marvel et relance la carrière de son interprète, Robert Downey Jr..`}
          alt='Iron man photo'
          photo='./iron-man.jpg'
          films={['Iron Man 1', 'Iron Man 2', 'Iron Man 3']}
          isFavorite={favorite == 'Iron Man'}
          handleClicked={handleClicked}
        />
        {/* SUPERHERO N°2 */}
        <div className='superhero'>
          <Superhero
            nom='Loki'
            description={`Appartenant aux groupes des Aesir, Loki est le dieu de la malice, de la discorde et des illusions.`}
            details={`Loki est une divinité et un super-vilain évoluant dans l'univers Marvel de la maison d'édition Marvel Comics. Créé par les scénaristes Stan Lee et Larry Lieber, ainsi que le dessinateur Jack Kirby, le personnage de fiction apparaît pour la première fois dans le comic book Journey into Mystery #85 en octobre 1962. Le personnage est inspiré de son homologue de la mythologie nordique. Une première adaptation de Loki, différente de celle du personnage actuel, était apparue dans Venus (en) #6, publié par Timely Comics en août 1949. Loki tient le rôle du pire ennemi de son demi-frère Thor. À la base un super-vilain, il est parfois dépeint comme un anti-héros. Dieu de la tromperie et manipulateur hors pair, c'est un puissant sorcier qui a été adopté par Odin, Loki appartenant à la race des géants des glaces de Jötunheim. Le personnage a été adapté à l'univers cinématographique Marvel où il est interprété par l'acteur Tom Hiddleston.`}
            alt='Loki photo'
            photo='./loki.jpg'
            isFavorite={favorite == 'Loki'}
            handleClicked={handleClicked}
          />
        </div>
        {/* SUPERHERO N°3 */}
        <div className='superhero'>
          <Superhero
            nom='Captain America'
            description={` Steven « Steve » Rogers, alias Captain America est un
    super-héros évoluant dans l'univers Marvel de la maison
    d'édition Marvel Comics.`}
            details={`Steven « Steve » Rogers, alias Captain America est un super-héros évoluant dans l'univers Marvel de la maison d'édition Marvel Comics. Créé par le scénariste Joe Simon et le dessinateur Jack Kirby, le personnage de fiction apparaît pour la première fois dans le comic book Captain America Comics #1, paru en décembre 1940n 3 mais avec la date de mars 1941 inscrite sur la couverture2. Conçu à l'origine comme une figure patriotique américaine en réaction au régime nazi, le personnage devient actif avant même l'entrée en guerre officielle des États-Unis dans la Seconde Guerre mondiale, en décembre 1941. Dès le début de sa publication, il est perçu comme le porte-drapeau des valeurs démocratiques de son pays et comme un défenseur du monde libre contre les totalitarismes, notamment le Troisième Reich3. Doté d'une condition physique au summum du potentiel humain, Captain America est un combattant hors pair, un chef-né et un stratège militaire accompli. Il porte un costume reconnaissable entre tous, inspiré du drapeau américain et est équipé d'un bouclier quasi indestructible, composé d'un alliage d'acier et du fictif vibranium, qu'il utilise comme une protection ainsi que comme une arme. Depuis les années 1960, Captain America fait partie de l'équipe de super-héros les Vengeurs (Avengers, et ses diverses versions) dont il est devenu au fil des ans l’un des piliers. En 2011, Captain America est classé par le site de référence IGN en sixième position du « Top 100 Comic Book Heroes of All Time »4, en 2012 second dans leur classement du « Top 50 Avengers »5 et en 2014 second dans leur classement du « Top 25 best Marvel superheroes »6. Dans l'univers cinématographique Marvel, le personnage de Captain America est interprété par l'acteur Chris Evans à partir du film Captain America : First Avenger (2011) jusqu'à Avengers : Endgame (2019), à la fin duquel il charge le Faucon (interprété par Anthony Mackie) de poursuivre son œuvre, ce dernier se glissant dans ce rôle au terme de la série Falcon et le Soldat de l'Hiver (2021).`}
            alt='Captain America photo'
            photo='./captain-america.jpg'
            isFavorite={favorite == 'Captain America'}
            handleClicked={handleClicked}
          />
        </div>

        {/* NEW SUPERHERO (FORMULAIRE) */}
        <Superhero
          nom={newSuperhero.nom}
          description={
            newSuperhero.description != ''
              ? newSuperhero.description
              : undefined
          }
          photo={
            newSuperhero.photo != '' ? newSuperhero.photo : undefined
          }
        />

        {/* FORMULAIRE NEW SUPERHERO*/}
        <form className='p-[15px] bg-red-marvel text-white'>
          <h3 className='text-center uppercase font-semibold my-5'>
            Crée ton propre superhéros
          </h3>

          {/* IMAGE */}
          <div style={{ marginTop: 10 }}>
            <label htmlFor='photo' className='label'>
              Photo (URL)
            </label>
            <input
              id='photo'
              type='textArea'
              name='photo'
              className='input'
              ref={photo}
              style={{
                padding: 5,
                fontSize: 14,
                width: '100%',
                display: 'block',
              }}
            />
          </div>

          {/* NAME */}
          <div>
            <label htmlFor='nom' className='label'>
              Nom
            </label>
            <input
              id='nom'
              type='text'
              name='nom'
              className='input'
              ref={nom}
              style={{
                padding: 5,
                fontSize: 14,
                width: '100%',
                display: 'block',
              }}
            />
          </div>

          {/* DESCRIPTION */}
          <div style={{ marginTop: 5 }}>
            <label htmlFor='description' className='label'>
              Description
            </label>
            <input
              id='description'
              type='textArea'
              name='description'
              className='input'
              ref={description}
              style={{
                padding: 5,
                fontSize: 14,
                width: '100%',
                display: 'block',
              }}
            />
          </div>

          {/* BOUTON */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'end',
              marginTop: 5,
            }}
            onClick={(e) => handleCreateSuperhero(e)}>
            <button className='bg-red-900 text-white px-3 py-1 rounded mt-5 hover:bg-red-400 duration-150'>
              Modifier
            </button>
          </div>
        </form>
      </Superheroes>
    </main>
  );
}
