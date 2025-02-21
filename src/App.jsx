import React, { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file
import { states, stateAbbreviations, stateAbbrArray} from './data.js';
import { labels} from './language-data.js';

const renderMap = (filteredStates, homeState, filterKey) => {
 

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

  return (
    <div className="app-container dark-mode">
      <div className="language-dropdown">
        <select value={language} onChange={handleLanguageChange}>
        <option value="en"><span role="img" aria-label="UK Flag">🇬🇧</span> English</option>
<option value="nl"><span role="img" aria-label="Netherlands Flag">🇳🇱</span> Nederlands</option>
<option value="fr"><span role="img" aria-label="France Flag">🇫🇷</span> Français</option>
<option value="de"><span role="img" aria-label="Germany Flag">🇩🇪</span> Deutsch</option>
<option value="it"><span role="img" aria-label="Italy Flag">🇮🇹</span> Italiano</option>
<option value="da"><span role="img" aria-label="Denmark Flag">🇩🇰</span> Dansk</option>
<option value="el"><span role="img" aria-label="Greece Flag">🇬🇷</span> Ελληνικά</option>
<option value="pt"><span role="img" aria-label="Portugal Flag">🇵🇹</span> Português</option>
<option value="es"><span role="img" aria-label="Spain Flag">🇪🇸</span> Español</option>
<option value="sv"><span role="img" aria-label="Sweden Flag">🇸🇪</span> Svenska</option>
<option value="hu"><span role="img" aria-label="Hungary Flag">🇭🇺</span> Magyar</option>
<option value="pl"><span role="img" aria-label="Poland Flag">🇵🇱</span> Polski</option>
<option value="ga"><span role="img" aria-label="Ireland Flag">🇮🇪</span> Gaeilge</option>

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
