import {useState} from 'react'
import './index.css'
import SuggestionItemComponent from '../SuggestionItem'

const GoogleSuggestions = ({suggestionsList}) => {
  const [searchInput, setSearchInput] = useState('')
  const [filteredSuggestions, setFilteredSuggestions] =
    useState(suggestionsList)

  const handleSearchInputButton = event => {
    const inputValue = event.target.value
    setSearchInput(inputValue)

    const updatedListData = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(inputValue.toLowerCase()),
    )
    setFilteredSuggestions(updatedListData)
  }

  const handleArrowIcon = val => {
    setSearchInput(val)
  }

  return (
    <div className="main-container">
      <div className="container">
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="Google Logo"
            className="image"
          />
        </div>
        <div className="ul-container">
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="Search-icon"
              className="input-search-icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              value={searchInput}
              onChange={handleSearchInputButton}
            />
          </div>
          <ul>
            {filteredSuggestions.map(eachItem => (
              <SuggestionItemComponent
                key={eachItem.id}
                eachItem={eachItem}
                handleArrowIcon={handleArrowIcon}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

//export default GoogleSuggestions
