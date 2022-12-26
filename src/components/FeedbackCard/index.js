import './index.css'

const FeedbackCard = props => {
  const {eachItem} = props
  const {name, imgUrl} = eachItem

  return (
    <>
      <h1 className="heading">
        How satisfied are you with our customer support performance?
      </h1>
      <div className="emoji-container">
        <li>
          <button type="button">
            <img src={imgUrl} className="emoji" alt={name} />
          </button>
          <p>{name}</p>
        </li>
      </div>
    </>
  )
}

export default FeedbackCard
