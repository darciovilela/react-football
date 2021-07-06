import logo from '../img/logo_futebol.png';

interface IProps {
  setpage: Function;
}

export const Header = (props: IProps) => {
  return (
    <header className="App-header">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <p className="p-header">
        Brazil Football Champions <br />
        1980-2020
      </p>
      <div>
        <ul>
          <li onClick={() => props.setpage('Oitenta')}>Anos Oitenta</li>
          <li onClick={() => props.setpage('Noventa')}>Anos Noventa</li>
        </ul>
      </div>
    </header>
  );
};
