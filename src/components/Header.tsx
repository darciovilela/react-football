import logo from '../img/logo_futebol.png';

interface IProps {
  page: string;
  setPage: Function;
}

const pages = ['Oitenta', 'Noventa', 'Doismil'];

export const Header = (props: IProps) => {
  const menuItem = (pageName: string) => {
    return (
      <li
        key={pageName}
        onClick={() => props.setPage(pageName)}
        className={props.page === pageName ? 'active' : ''}
      >
        {pageName}
      </li>
    );
  };

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
        <ul>{pages.map((item) => menuItem(item))}</ul>
      </div>
    </header>
  );
};
