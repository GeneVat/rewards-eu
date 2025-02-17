import React, { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file

const states = new Map([
  ['Albania', { consent: 18, gambling: 18, marriage: 18, drinkingAlcohol: 18, license: 18, dropout: 15, supervised:18,}],
['Andorra', { consent: 18, gambling: 18, marriage: 18, drinkingAlcohol: 18, license: 18, dropout: 15, supervised:18,}],
['Austria', { consent: 18, gambling: 18, marriage: 18, drinkingAlcohol: 16, license: 17, dropout: 15, supervised:17,}],
['Belgium', { consent: 18, gambling: 21, marriage: 18, drinkingAlcohol: 16, license: 18, dropout: 18, supervised:18,}],
['Bosnia and Herzegovina', { consent: 18, gambling: 18, marriage: 18, drinkingAlcohol: 18, license: 18, dropout: 15, supervised:18,}],
['Bulgaria', { consent: 18, gambling: 18, marriage: 18, drinkingAlcohol: 18, license: 18, dropout: 15, supervised:18,}],
['Croatia', { consent: 18, gambling: 18, marriage: 18, drinkingAlcohol: 18, license: 18, dropout: 15, supervised:18,}],
['Cyprus', { consent: 18, gambling: 18, marriage: 18, drinkingAlcohol: 18, license: 18, dropout: 15, supervised:18,}],
['Czechia', { consent: 18, gambling: 18, marriage: 18, drinkingAlcohol: 18, license: 18, dropout: 16, supervised:18,}],
['Denmark', { consent: 18, gambling: 18, marriage: 18, drinkingAlcohol: 18, license: 18, dropout: 16, supervised:17,}],
['Estonia', { consent: 18, gambling: 18, marriage: 18, drinkingAlcohol: 18, license: 18, dropout: 15, supervised:16,}],
['Finland', { consent: 18, gambling: 18, marriage: 18, drinkingAlcohol: 18, license: 18, dropout: 16, supervised:17,}],
['France', { consent: 18, gambling: 18, marriage: 18, drinkingAlcohol: 18, license: 18, dropout: 16, supervised:15,}],
['Germany', { consent: 18, gambling: 21, marriage: 18, drinkingAlcohol: 16, license: 18, dropout: 18, supervised:18,}],
['Greece', { consent: 18, gambling: 21, marriage: 18, drinkingAlcohol: 18, license: 18, dropout: 15, supervised:17,}],
['Hungary', { consent: 18, gambling: 18, marriage: 18, drinkingAlcohol: 18, license: 18, dropout: 16, supervised:17,}],
['Iceland', { consent: 18, gambling: 18, marriage: 18, drinkingAlcohol: 18, license: 18, dropout: 16, supervised:18,}],
['Ireland', { consent: 18, gambling: 18, marriage: 18, drinkingAlcohol: 18, license: 18, dropout: 16, supervised:18,}],
['Italy', { consent: 16, gambling: 18, marriage: 18, drinkingAlcohol: 18, license: 18, dropout: 16, supervised:17,}],
['Kosovo', { consent: 16, gambling: 18, marriage: 18, drinkingAlcohol: 18, license: 18, dropout: 15, supervised:18,}],
['Latvia', { consent: 18, gambling: 18, marriage: 18, drinkingAlcohol: 18, license: 18, dropout: 15, supervised:18,}],
['Liechtenstein', { consent: 18, gambling: 18, marriage: 18, drinkingAlcohol: 16, license: 18, dropout: 15, supervised:18,}],
['Lithuania', { consent: 18, gambling: 21, marriage: 18, drinkingAlcohol: 18, license: 18, dropout: 16, supervised:15,}],
['Luxembourg', { consent: 18, gambling: 18, marriage: 18, drinkingAlcohol: 16, license: 18, dropout: 18, supervised:18,}],
['Malta', { consent: 18, gambling: 18, marriage: 18, drinkingAlcohol: 18, license: 18, dropout: 16, supervised:18,}],
['Moldova', { consent: 18, gambling: 18, marriage: 18, drinkingAlcohol: 18, license: 18, dropout: 16, supervised:18,}],
['Monaco', { consent: 18, gambling: 18, marriage: 18, drinkingAlcohol: 18, license: 18, dropout: 16, supervised:18,}],
['Montenegro', { consent: 18, gambling: 18, marriage: 18, drinkingAlcohol: 18, license: 18, dropout: 16, supervised:16,}],
['Netherlands', { consent: 18, gambling: 18, marriage: 18, drinkingAlcohol: 18, license: 18, dropout: 15, supervised:17,}],
['North Macedonia', { consent: 18, gambling: 18, marriage: 18, drinkingAlcohol: 18, license: 18, dropout: 18, supervised:16,}],
['Norway', { consent: 18, gambling: 18, marriage: 18, drinkingAlcohol: 18, license: 18, dropout: 16, supervised:18,}],
['Poland', { consent: 18, gambling: 18, marriage: 18, drinkingAlcohol: 18, license: 18, dropout: 15, supervised:18,}],
['Portugal', { consent: 18, gambling: 18, marriage: 18, drinkingAlcohol: 18, license: 18, dropout: 18, supervised:18,}],
['Romania', { consent: 18, gambling: 18, marriage: 18, drinkingAlcohol: 18, license: 18, dropout: 16, supervised:18,}],
['San Marino', { consent: 18, gambling: 18, marriage: 18, drinkingAlcohol: 16, license: 18, dropout: 16, supervised:18,}],
['Serbia', { consent: 18, gambling: 18, marriage: 18, drinkingAlcohol: 18, license: 18, dropout: 14, supervised:17,}],
['Slovakia', { consent: 18, gambling: 18, marriage: 18, drinkingAlcohol: 18, license: 18, dropout: 16, supervised:17,}],
['Slovenia', { consent: 18, gambling: 18, marriage: 18, drinkingAlcohol: 18, license: 18, dropout: 15, supervised:18,}],
['Spain', { consent: 18, gambling: 18, marriage: 18, drinkingAlcohol: 18, license: 18, dropout: 16, supervised:18,}],
['Sweden', { consent: 18, gambling: 20, marriage: 18, drinkingAlcohol: 18, license: 18, dropout: 16, supervised:16,}],
['Switzerland', { consent: 18, gambling: 18, marriage: 18, drinkingAlcohol: 16, license: 18, dropout: 15, supervised:18,}],
['Ukraine', { consent: 18, gambling: 18, marriage: 18, drinkingAlcohol: 18, license: 18, dropout: 17, supervised:18,}],
['England', { consent: 18, gambling: 18, marriage: 18, drinkingAlcohol: 16, license: 17, dropout: 16, supervised:18,}],
['Scotland', { consent: 18, gambling: 18, marriage: 16, drinkingAlcohol: 16, license: 17, dropout: 16, supervised:18,}],
['Wales', { consent: 18, gambling: 18, marriage: 18, drinkingAlcohol: 16, license: 17, dropout: 16, supervised:18,}],
['Northern Ireland', { consent: 17, gambling: 18, marriage: 18, drinkingAlcohol: 18, license: 17, dropout: 16, supervised:18,}],
]);

const stateAbbreviations = {
'Albania': 'AL',
'Andorra': 'AD',
'Austria': 'AT',
'Belgium': 'BE',
'Bosnia and Herzegovina': 'BA',
'Bulgaria': 'BG',
'Croatia': 'HR',
'Cyprus': 'CY',
'Czechia': 'CZ',
'Denmark': 'DK',
'Estonia': 'EE',
'Finland': 'FI',
'France': 'FR',
'Germany': 'DE',
'Greece': 'GR',
'Hungary': 'HU',
'Iceland': 'IS',
'Ireland': 'IE',
'Italy': 'IT',
'Kosovo': 'XK',
'Latvia': 'LV',
'Liechtenstein': 'LI',
'Lithuania': 'LT',
'Luxembourg': 'LU',
'Malta': 'MT',
'Moldova': 'MD',
'Monaco': 'MC',
'Montenegro': 'ME',
'Netherlands': 'NL',
'North Macedonia': 'MK',
'Norway': 'NO',
'Poland': 'PL',
'Portugal': 'PT',
'Romania': 'RO',
'San Marino': 'SM',
'Serbia': 'RS',
'Slovakia': 'SK',
'Slovenia': 'SI',
'Spain': 'ES',
'Sweden': 'SE',
'Switzerland': 'CH',
'Ukraine': 'UA',
'England': 'ENG',
'Scotland': 'SCT',
'Wales': 'WLS',
'Northern Ireland': 'NIR',

};

const renderMap = (filteredStates, homeState, filterKey) => {
  const stateAbbrArray = [
    ['AL', 'AD', 'AT', 'BE', 'BA', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IS', 'IE', 'IT', 'XK', 'LV', 'LI', 'LT', 'LU', 'MT', 'MD', 'MC', 'ME', 'NL', 'MK', 'NO', 'PL', 'PT', 'RO', 'SM', 'RS', 'SK', 'SI', 'ES', 'SE', 'CH', 'UA', 'ENG','SCT','WLS','NIR']
  ];

  return (
    <div className="map-grid-container">
      <div className="map-grid">
        {stateAbbrArray.map((row, rowIndex) => (
          <div className="map-row" key={rowIndex}>
            {row.map(stateAbbr => {
              const stateName = Object.keys(stateAbbreviations).find(key => stateAbbreviations[key] === stateAbbr);
              const isHighlighted = filteredStates.has(stateName);
              const isHomeState = stateName === homeState;
              const isBlackout = states.get(stateName)?.[filterKey] === 999;
              let className = 'state';

              if (isBlackout) className += ' blackout';
              else if (isHomeState && isHighlighted) className += ' home-highlight';
              else if (isHomeState) className += ' home';
              else if (isHighlighted) className += ' highlight';

              return (
                <span key={stateAbbr} className={className}>
                  {stateAbbr}
                </span>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

const CategoryMap = ({ title, filterKey, inputValue, homeState }) => {
  const filteredStates = Array.from(states.entries()).filter(([name, data]) => data[filterKey] <= Number(inputValue));
  return (
    <>
      <div className="category-header">
        <h2>{title}</h2>
      </div>
      {renderMap(new Set(filteredStates.map(([name]) => name)), homeState, filterKey)}
    </>
  );
};

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [homeState, setHomeState] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [darkMode, setDarkMode] = useState(true); // Enable dark mode by default
  const [language, setLanguage] = useState('en'); // Default language is English

  useEffect(() => {
    document.body.classList.add('dark-mode');
  }, []);

  const handleChange = (event) => {
    const value = event.target.value;
    if (value === '' || (Number(value) >= 0 && Number(value) <= 99)) {
      setInputValue(value);
    }
  };

  const handleHomeStateChange = (event) => {
    const value = event.target.value;
    setHomeState(value);
    setSuggestions(value.length > 0 ? Object.keys(stateAbbreviations).filter(state => state.toLowerCase().startsWith(value.toLowerCase())) : []);
  };

  const handleSuggestionClick = (suggestion) => {
    setHomeState(suggestion);
    setSuggestions([]);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const labels = {
     "en": {
        "title": "Unlocked Countries",
        "ageInput": "Enter your age",
        "homeStateInput": "Enter your country",
        "categories": {
          "supervised": "Supervised Driving",
          "license": "Driving License",
          "dropout": "Dropout",
          "marriage": "Marriage",
          "consent": "Consent",
          "gambling": "Gambling",
          "drinkingAlcohol": "Drinking"
        }
      },
      "nl": {
        "title": "Ontgrendelde Landen",
        "ageInput": "Voer je leeftijd in",
        "homeStateInput": "Voer je land in",
        "categories": {
          "supervised": "Begeleid Rijden",
          "license": "Rijbewijs",
          "dropout": "Dropout",
          "marriage": "Huwelijk",
          "consent": "Toestemming",
          "gambling": "Gokken",
          "drinkingAlcohol": "Alcohol drinken"
        }
      },
      "fr": {
        "title": "Pays Déverrouillés",
        "ageInput": "Entrez votre âge",
        "homeStateInput": "Entrez votre pays",
        "categories": {
          "supervised": "Conduite Supervisée",
          "license": "Permis de Conduire",
          "dropout": "Décrochage",
          "marriage": "Mariage",
          "consent": "Consentement",
          "gambling": "Jeux d'argent",
          "drinkingAlcohol": "Consommation d'alcool"
        }
      },
      "de": {
        "title": "Freigeschaltete Länder",
        "ageInput": "Gib dein Alter ein",
        "homeStateInput": "Gib dein Land ein",
        "categories": {
          "supervised": "Begleitetes Fahren",
          "license": "Führerschein",
          "dropout": "Schulabbruch",
          "marriage": "Ehe",
          "consent": "Zustimmung",
          "gambling": "Glücksspiel",
          "drinkingAlcohol": "Alkoholkonsum"
        }
      },
      "it": {
        "title": "Paesi Sbloccati",
        "ageInput": "Inserisci la tua età",
        "homeStateInput": "Inserisci il tuo paese",
        "categories": {
          "supervised": "Guida Supervisata",
          "license": "Patente di Guida",
          "dropout": "Abbandono Scolastico",
          "marriage": "Matrimonio",
          "consent": "Consenso",
          "gambling": "Gioco d'Azzardo",
          "drinkingAlcohol": "Bere Alcol"
        }
      },
      "da": {
        "title": "Oplåste Lande",
        "ageInput": "Indtast din alder",
        "homeStateInput": "Indtast dit land",
        "categories": {
          "supervised": "Superviseret Kørsel",
          "license": "Kørekort",
          "dropout": "Dropout",
          "marriage": "Ægteskab",
          "consent": "Samtykke",
          "gambling": "Spil",
          "drinkingAlcohol": "Alkoholforbrug"
        }
      },
      "el": {
        "title": "Ξεκλείδωμενες Χώρες",
        "ageInput": "Εισάγετε την ηλικία σας",
        "homeStateInput": "Εισάγετε τη χώρα σας",
        "categories": {
          "supervised": "Εποπτευόμενη Οδήγηση",
          "license": "Άδεια Οδήγησης",
          "dropout": "Αποχώρηση",
          "marriage": "Γάμος",
          "consent": "Συναίνεση",
          "gambling": "Τυχερά Παιχνίδια",
          "drinkingAlcohol": "Κατανάλωση Αλκοόλ"
        }
      },
      "pt": {
        "title": "Países Desbloqueados",
        "ageInput": "Digite sua idade",
        "homeStateInput": "Digite seu país",
        "categories": {
          "supervised": "Condução Supervisionada",
          "license": "Carteira de Habilitação",
          "dropout": "Abandono Escolar",
          "marriage": "Casamento",
          "consent": "Consentimento",
          "gambling": "Jogos de Azar",
          "drinkingAlcohol": "Consumo de Álcool"
        }
      },
      "es": {
        "title": "Países Desbloqueados",
        "ageInput": "Ingresa tu edad",
        "homeStateInput": "Ingresa tu país",
        "categories": {
          "supervised": "Conducción Supervisada",
          "license": "Licencia de Conducir",
          "dropout": "Deserción Escolar",
          "marriage": "Matrimonio",
          "consent": "Consentimiento",
          "gambling": "Juegos de Azar",
          "drinkingAlcohol": "Beber Alcohol"
        }
      },
      "sv": {
        "title": "Upplåsta Länder",
        "ageInput": "Ange din ålder",
        "homeStateInput": "Ange ditt land",
        "categories": {
          "supervised": "Övervakad Körning",
          "license": "Körkort",
          "dropout": "Avhopp",
          "marriage": "Äktenskap",
          "consent": "Samtycke",
          "gambling": "Spel",
          "drinkingAlcohol": "Alkoholkonsumtion"
        }
      },
      "hu": {
        "title": "Feloldott Országok",
        "ageInput": "Írd be a korod",
        "homeStateInput": "Írd be az országod",
        "categories": {
          "supervised": "Felügyelt Vezetés",
          "license": "Jogosítvány",
          "dropout": "Iskolai Kihagyás",
          "marriage": "Házasság",
          "consent": "Hozzájárulás",
          "gambling": "Szerencsejáték",
          "drinkingAlcohol": "Alkoholfogyasztás"
        }
      },
      "pl": {
        "title": "Odblokowane Kraje",
        "ageInput": "Wpisz swój wiek",
        "homeStateInput": "Wpisz swój kraj",
        "categories": {
          "supervised": "Nadzorowana Jazda",
          "license": "Prawo Jazdy",
          "dropout": "Porzucenie Szkoły",
          "marriage": "Małżeństwo",
          "consent": "Zgoda",
          "gambling": "Hazard",
          "drinkingAlcohol": "Picie Alkoholu"
        }
      },
      "ga": {
        "title": "Tíortha Neamhspleách",
        "ageInput": "Cuir isteach do aois",
        "homeStateInput": "Cuir isteach do thír",
        "categories": {
          "supervised": "Tiomáint faoi Chothú",
          "license": "Ceadúnas Tiomána",
          "dropout": "Drochthiontú",
          "marriage": "Pósadh",
          "consent": "Toiliú",
          "gambling": "Cearrbhachas",
          "drinkingAlcohol": "Ól Alcóil"
        }
      }
    
    
  };

  return (
    <div className="app-container dark-mode">
      <div className="language-dropdown">
        <select value={language} onChange={handleLanguageChange}>
        <option value="en"><span role="img" aria-label="UK">🇬🇧</span> English</option>
<option value="nl"><span role="img" aria-label="Netherlands">🇳🇱</span> Nederlands</option>
<option value="fr"><span role="img" aria-label="France">🇫🇷</span> Français</option>
<option value="de"><span role="img" aria-label="Germany">🇩🇪</span> Deutsch</option>
<option value="it"><span role="img" aria-label="Italy">🇮🇹</span> Italiano</option>
<option value="da"><span role="img" aria-label="Denmark">🇩🇰</span> Dansk</option>
<option value="el"><span role="img" aria-label="Greece">🇬🇷</span> Ελληνικά</option>
<option value="pt"><span role="img" aria-label="Portugal">🇵🇹</span> Português</option>
<option value="es"><span role="img" aria-label="Spain">🇪🇸</span> Español</option>
<option value="sv"><span role="img" aria-label="Sweden">🇸🇪</span> Svenska</option>
<option value="hu"><span role="img" aria-label="Hungary">🇭🇺</span> Magyar</option>
<option value="pl"><span role="img" aria-label="Poland">🇵🇱</span> Polski</option>
<option value="ga"><span role="img" aria-label="Ireland">🇮🇪</span> Gaeilge</option>

        </select>
      </div>
      <h1>{labels[language].title}</h1>

      <div className="input-group">
        <label htmlFor="age-input">{labels[language].ageInput}</label>
        <input id="age-input" type="number" onChange={handleChange} className="age-input" value={inputValue} min="0" max="99" />
      </div>
      <div className="input-group autocomplete-container">
        <label htmlFor="home-state-input">{labels[language].homeStateInput}</label>
        <input id="home-state-input" type="text" onChange={handleHomeStateChange} className="home-state-input" value={homeState} />
        {suggestions.length > 0 && (
          <ul className="autocomplete-list">
            {suggestions.map((suggestion) => (
              <li key={suggestion} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
      {Object.keys(labels[language].categories).map((key) => (
        <div className="category-container" key={key}>
          <CategoryMap title={labels[language].categories[key]} filterKey={key} inputValue={inputValue} homeState={homeState} />
        </div>
      ))}
    </div>
  );
};

export default App;
