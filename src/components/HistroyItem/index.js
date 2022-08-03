import './index.css'

const HistoryItem = props => {
  const {HistoryDeatails, onDelete} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = HistoryDeatails

  const onDeleteHistory = () => {
    onDelete(id)
  }

  return (
    <li className="historyItemContainer">
      <div className="detailsContainer">
        <p>{timeAccessed}</p>
        <div className="logoDetails">
          <img src={logoUrl} alt="domain logo" className="logoSize" />
          <p>{title}</p>
          <p>{domainUrl}</p>
        </div>
      </div>
      <button
        className="button"
        type="button"
        testid="delete"
        onClick={onDeleteHistory}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
