function Picture({ url, alternativeText }) {
  
  return (
    <img className="picture" src={url} alt={alternativeText} />
  )
}

export default Picture