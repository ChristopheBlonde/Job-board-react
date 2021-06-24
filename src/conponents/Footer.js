const Footer = (props) => {
  return (
    <footer className={props.className}>
      <a
        className="linkIcon"
        href="https://lereacteur.io/"
        rel="noreferrer"
        target="_blank"
      >
        <img src={props.icon} alt="" />
        Le Reacteur
      </a>
      <p className="link">
        Made with <span>React</span> at &nbsp;
        <a href="https://lereacteur.io/" rel="noreferrer" target="_blank">
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
      <a
        className="linkIcon"
        href="https://github.com/ChristopheBlonde"
        rel="noreferrer"
        target="_blank"
      >
        <img src={props.image} alt="" />
        Chris
      </a>
    </footer>
  );
};

export default Footer;
