import Container from "../Container"

function Section({ id, className, style, children }) {
  
  return (
    <section id={id} className={`section ${className || ''}`} style={style}>
      <Container>
        {children}
      </Container>
    </section>
  )
}

export default Section