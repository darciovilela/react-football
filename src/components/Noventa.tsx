import { useState, useEffect } from 'react';
import axios from 'axios';
import { NoventaForm } from './NoventaForm';
import { Championship } from '../interfaces/championships';

// estado inicial do form vazio
export const emptyNoventa: Championship = {
  year: '',
  champion: '',
  vice: '',
};

export const Noventa = () => {
  const [noventa, setNoventa] = useState<Championship[]>([]);
  const [date, setDate] = useState(+new Date());
  const [activeRecord, setActiveRecord] = useState<Championship>(emptyNoventa);

  useEffect(() => {
    const callFetchFunction = async () => {
      const result = await axios.get<Championship[]>(
        'http://localhost:4000/final?noventa=true'
      );
      setNoventa(result.data);
    };
    callFetchFunction();
  }, [date]);

  const deleteNoventa = async (noventa: Championship) => {
    await axios.delete<Championship>(
      `http://localhost:4000/final/${noventa.id}`
    );
    setDate(+new Date());
  };

  if (!noventa.length) {
    return <div>Loading... (or empty)</div>;
  }

  return (
    <div>
      <h1>1990 Champions</h1>
      <button onClick={() => setActiveRecord(emptyNoventa)}>Insert New</button>
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
          {noventa.map((item) => {
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
                  <button onClick={() => deleteNoventa(item)}>X</button>
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
