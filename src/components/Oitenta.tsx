import { OitentaForm } from './OitentaForm';
import { Championship } from '../interfaces/championships';
import { useList } from '../hooks/useList';

// estado inicial do form vazio
export const emptyChampionship: Championship = {
  year: '',
  champion: '',
  vice: '',
};

// inicio do estado com array vazio
export const Oitenta = () => {
  const {
    championship,
    activeRecord,
    setActiveRecord,
    setDate,
    deleteChampionship,
  } = useList(emptyChampionship, 'oitenta=true');

  if (!championship.length) {
    return <div>Loading... (or empty)</div>;
  }

  return (
    <div>
      <h1>1980 Champions</h1>
      <button onClick={() => setActiveRecord(emptyChampionship)}>
        Insert New
      </button>
      <OitentaForm setDate={setDate} activeRecord={activeRecord} />
      <table className="center">
        <thead className="table-head">
          <tr>
            <th>E</th>
            <th>X</th>
            <th>Year</th>
            <th>Champion</th>
            <th>Vice</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {championship.map((item) => {
            return (
              <tr
                key={item.id}
                className={activeRecord === item ? 'active' : ''}
              >
                <td>
                  <button
                    onClick={() => {
                      setActiveRecord(item);
                    }}
                  >
                    E
                  </button>
                </td>
                <td>
                  <button onClick={() => deleteChampionship(item)}>X</button>
                </td>
                <td>{item.year}</td>
                <td>{item.champion}</td>
                <td>{item.vice}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
