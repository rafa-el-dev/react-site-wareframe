import Button from "./components/Button";
import Card from "./components/Card";
import Header from "./components/Header";
import Picture from "./components/Picture";
import Section from "./components/Section";

import "./styles/styles.css"

function App() {
  return (
    <div>
      <Header />
      <Section className="section-intro">
        <div className="section-intro__side section-intro__side--left">
          <h1 className="section-intro__title">Front-end descomplicado e direto ao ponto!</h1>
          <p className="section-intro__paragraph">Aprenda a desenvolver interfaces modernas e de alta qualidade com quem está na área atuando com projetos altamente renomados.</p>
          <Button primary>Fazer parte da lista de espera</Button>
        </div>
        <div className="section-intro__side section-intro__side--right">
          <Picture url="https://cdn.pixabay.com/photo/2019/06/05/08/37/dog-4253238_960_720.jpg" alternativeText="Lobo" />
        </div>
      </Section>
      <Section className="section-area section-area--dark">
        <h2 className="section-area__title">Título</h2>
        <p className="section-area__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="section-area__cards">
          <Card title="Inter" text="Série A" imageUrl="./img/logo-inter.png"/>
          <Card light title="Grêmio" text="Série B" imageUrl="./img//logo-gremio.png" />
          <Card title="Brasil" text="Champions League" imageUrl="./img/bandeira-brasil.png"/>
        </div>
      </Section>
    </div>
  );
}

export default App;
