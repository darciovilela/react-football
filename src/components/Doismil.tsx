import { useState, useEffect } from 'react';
import axios from 'axios';
import { DoismilForm } from './DoismilForm';
import { Championship } from '../interfaces/championships';

export const Doismil = () => {
  const [doismil, setDoismil] = useState<Championship[]>([]);
  const [date, setDate] = useState(+new Date());

  useEffect(() => {
    const callFetchFunction = async () => {
      const result = await axios.get<Championship[]>(
        'http://localhost:4000/doismil'
      );
      setDoismil(result.data);
    };
    callFetchFunction();
  }, [date]);

  if (!doismil.length) {
    return <div>Loading... (or empty)</div>;
  }

  return (
    <div>
      <h1>2000 Champions</h1>
      <DoismilForm setDate={setDate} />
      <table className="center">
        <thead className="table-head">
          <tr>
            <th>Year</th>
            <th>Champion</th>
            <th>Vice</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {doismil.map((item) => {
            return (
              <tr>
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
