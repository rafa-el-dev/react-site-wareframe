import Container from "../Container"

function Section(props) {
  
  return (
    <section className="section">
      <Container>
        {props.children}
      </Container>
    </section>
  )
}

export default Section