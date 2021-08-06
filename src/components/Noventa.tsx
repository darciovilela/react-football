import { NoventaForm } from './NoventaForm';
import { emptyChampionship } from '../interfaces/championships';
import { useList } from '../hooks/useList';

// inicio do estado com array vazio
export const Noventa = () => {
  const {
    championship,
    setDate,
    activeRecord,
    setActiveRecord,
    deleteChampionship,
    loading,
    error,
  } = useList(emptyChampionship, 'noventa=true');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div className="error">
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }

  return (
    <div>
      <h1>1990 Champions</h1>
      <button onClick={() => setActiveRecord(emptyChampionship)}>
        Insert New
      </button>
      <NoventaForm setDate={setDate} activeRecord={activeRecord} />
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
