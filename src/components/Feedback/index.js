import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isEmojiClicked: false}

  onClickButt = () => {
    this.setState(prevState => ({isEmojiClicked: !prevState.isEmojiClicked}))
  }

  render() {
    const {isEmojiClicked} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="bg-container">
        {isEmojiClicked ? (
          <div className="thankyou-container">
            <img src={loveEmojiUrl} alt="love emoji" className="emoji" />
            <h1 className="heading">Thank You!</h1>
            <p className="para">
              We will use your feedback to improve our customer support
              performance.
            </p>
          </div>
        ) : (
          <div className="emoji-container">
            <h1 className="heading">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="emojis">
              {emojis.map(each => {
                const {name, imageUrl} = each
                return (
                  <li key={each.id}>
                    <button
                      className="button"
                      type="button"
                      onClick={this.onClickButt}
                    >
                      <img className="emoji" src={imageUrl} alt={name} />
                    </button>
                    <p className="emoji-name">{name}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
