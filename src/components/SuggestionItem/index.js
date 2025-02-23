// Write your code here
import './index.css'
const SuggestionItemComponent = props => {
  const {eachItem, handleArrowIcon} = props
  const arrowFunction = () => {
    handleArrowIcon(eachItem.suggestion)
  }
  return (
    <li className="list-elements">
      <p>{eachItem.suggestion}</p>
      <div className="arrow-icon-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow-icon"
          alt="Arrow"
          onClick={arrowFunction}
        />
      </div>
    </li>
  )
}
export default SuggestionItemComponent
