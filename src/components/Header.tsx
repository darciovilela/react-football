import logo from '../img/logo_futebol.png';

export const Header = () => {
  return (
    <header className="App-header">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <p className="p-header">
        Brazil Football Champions <br />
        1980-2020
      </p>
    </header>
  );
};
