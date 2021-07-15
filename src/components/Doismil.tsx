import { useState, useEffect } from 'react';
import axios from 'axios';
import { DoismilForm } from './DoismilForm';
import { Championship } from '../interfaces/championships';

// estado inicial do form vazio
export const emptyDoismil: Championship = {
  year: '',
  champion: '',
  vice: '',
};

export const Doismil = () => {
  const [doismil, setDoismil] = useState<Championship[]>([]);
  const [date, setDate] = useState(+new Date());
  const [activeRecord, setActiveRecord] = useState<Championship>(emptyDoismil);

  useEffect(() => {
    const callFetchFunction = async () => {
      const result = await axios.get<Championship[]>(
        'http://localhost:4000/final?doismil=true'
      );
      setDoismil(result.data);
    };
    callFetchFunction();
  }, [date]);

  const deleteDoismil = async (doismil: Championship) => {
    await axios.delete<Championship>(
      `http://localhost:4000/final/${doismil.id}`
    );
    setDate(+new Date());
  };

  if (!doismil.length) {
    return <div>Loading... (or empty)</div>;
  }

  return (
    <div>
      <h1>2000 Champions</h1>
      <button onClick={() => setActiveRecord(emptyDoismil)}>Insert New</button>
      <DoismilForm setDate={setDate} activeRecord={activeRecord} />
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
          {doismil.map((item) => {
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
                  <button onClick={() => deleteDoismil(item)}>X</button>
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
