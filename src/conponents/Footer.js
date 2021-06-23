const Footer = (props) => {
  return (
    <footer className={props.className}>
      <p className="link">
        Made with <span>React</span> at &nbsp;
        <a
          href="https://apollo.lereacteur.io/"
          rel="noreferrer"
          target="_blank"
        >
          <img src={props.icon} alt="" /> Le Reacteur
        </a>{" "}
        By&nbsp;
        <a
          href="https://github.com/ChristopheBlonde"
          rel="noreferrer"
          target="_blank"
        >
          <img src={props.image} alt="" /> Chris
        </a>
      </p>
    </footer>
  );
};

export default Footer;
