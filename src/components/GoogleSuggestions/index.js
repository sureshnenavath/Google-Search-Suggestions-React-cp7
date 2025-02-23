import {Component} from 'react'
import './index.css'
import SuggestionItemComponent from '../SuggestionItem'

class GoogleSuggestions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: '',
      filteredSuggestions: props.suggestionsList,
    }
  }

  handleSearchInputButton = event => {
    this.setState({searchInput: event.target.value}, this.filterSuggestions)
  }

  filterSuggestions = () => {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const updatedListData = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    this.setState({filteredSuggestions: updatedListData})
  }
  handleArrowIcon = val => {
    const {searchInput} = this.state
    this.setState({searchInput: val}, this.filterSuggestions)
  }

  render() {
    const {searchInput, filteredSuggestions} = this.state

    return (
      <div className="main-container">
        <div className="container">
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
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
                onChange={this.handleSearchInputButton}
              />
            </div>
            <ul>
              {filteredSuggestions.map(eachItem => (
                <SuggestionItemComponent
                  key={eachItem.id}
                  eachItem={eachItem}
                  handleArrowIcon={this.handleArrowIcon}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
