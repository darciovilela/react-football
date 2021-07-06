import { useState, useEffect } from 'react';
import axios from 'axios';
import { NoventaForm } from './NoventaForm';

export interface Noventa {
  id?: string;
  year: string;
  champion: string;
  vice: string;
}

export const Noventa = () => {
  const [noventa, setNoventa] = useState<Noventa[]>([]);
  const [date, setDate] = useState(+new Date());

  useEffect(() => {
    const callFetchFunction = async () => {
      const result = await axios.get<Noventa[]>(
        'http://localhost:4000/noventa'
      );
      setNoventa(result.data);
    };
    callFetchFunction();
  }, [date]);

  if (!noventa.length) {
    return <div>Loading... (or empty)</div>;
  }

  return (
    <div>
      <h1>1990 Champions</h1>
      <NoventaForm setDate={setDate} />
      <table className="center">
        <thead className="noventa-table-head">
          <tr>
            <th>Year</th>
            <th>Champion</th>
            <th>Vice</th>
          </tr>
        </thead>
        <tbody className="noventa-table-body">
          {noventa.map((item) => {
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
