import React, { useState } from 'react';
import collapseFerme from '../assets/Vector (7).png';
import collapseOuvert from '../assets/Vector (9).png';

function ValeurApropos() {
  const arrayValeur = ['Fiabilité', 'Respect', 'Service', 'Sécurité'];
  const arrayDescription = [
    'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
    'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à lhôte quau locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.',
  ];
  const [collapsedStates, setCollapsedStates] = useState(new Array(arrayValeur.length).fill(true));
  const [currentDescription, setCurrentDescription] = useState('');

  const toggleCollapse = (index) => {
    const newCollapsedStates = [...collapsedStates];
    newCollapsedStates[index] = !newCollapsedStates[index];
    setCollapsedStates(newCollapsedStates);
    setCurrentDescription(arrayDescription[index]);
  };

  return (
    <div id="container-valeur">
      {arrayValeur.map((element, index) => (
        <div className="valeur-container" key={index}>
          <div className="style-valeur" onClick={() => toggleCollapse(index)}>
            {element}
            {collapsedStates[index] ? (
              <img src={collapseFerme} alt="collapse fermé" />
            ) : (
              <img src={collapseOuvert} alt="collapse ouvert" />
            )}
          </div>
          {collapsedStates[index] && (
            <div className="valeur-texte">
              <p>{currentDescription}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ValeurApropos;
