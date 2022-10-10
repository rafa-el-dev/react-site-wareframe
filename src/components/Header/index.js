import Container from "../Container"
import Logo from "../Logo"
import Menu from "../Menu"

function Header() {
  return (
    <header className="header">
      <Container>
        <Logo />
        <Menu />
      </Container>
    </header>
  )
}

export default Header