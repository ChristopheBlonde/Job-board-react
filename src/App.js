import "./App.css";
import Title from "./conponents/Title";
import Card from "./conponents/card/Card";
import Footer from "./conponents/Footer";
import githubIcon from "./images/github-logo.png";
import reacteur from "./images/le-reacteur-logo.png";

function App() {
  return (
    <div className="app">
      <Title />
      <main className="container">
        <Card
          className="card red"
          title="Chef de Projets"
          contractType="CDD"
          country="France"
          city="Paris"
        />
        <Card
          className="card yellow"
          title="Full Time Sales Associate - Sydney Boutique"
          contractType="CDI"
          country="Australie"
          city="Sydney"
        />
        <Card
          className="card purple"
          title="Agent de Sécurité - Pantin"
          contractType="CDI"
          country="France"
          city="Pantin"
        />
        <Card
          className="card orange"
          title="Responsable d'Atelier (H/F)"
          contractType="CDD"
          country="France"
          city="Paris"
        />
        <Card
          className="card cyan"
          title="Dévelopeur React.js"
          contractType="CDI"
          country="France"
          city="Paris"
        />
        <Card
          className="card red"
          title="Sales Associate Stockholm"
          contractType="CDI"
          country="Suède"
          city="Stockholm"
        />
        <Card
          className="card pink"
          title="Vendeur/se - Crans Montana"
          contractType="CDI"
          country="Suisse"
          city="Crans-Montana"
        />
        <Card
          className="card purple"
          title="CRM & Data Quality Analyst"
          contractType="CDI"
          country="USA"
          city="New York"
        />
        <Card
          className="card orange"
          title="Imfirmier (H/F)"
          contractType="CDI"
          country="France"
          city="Pantin"
        />
      </main>
      <Footer className="footer" image={githubIcon} icon={reacteur} />
    </div>
  );
}

export default App;
