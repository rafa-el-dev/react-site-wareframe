function Button({ primary, children }) {

  return (
    <button className={`button ${primary ? 'button-primary' : ''}`}>
      {children}
    </button>
  )
}

export default Button