const Button = ({ buttonName, funcName }) => {
  return (
    <button onClick={funcName} className="profile__button">{buttonName}</button>
  )
}

export default Button