import { useState, useEffect } from 'react';
import axios from 'axios';
import { OitentaForm } from './OitentaForm';

//declaracao do que sera passado na interface
export interface Oitenta {
  id?: string;
  year: string;
  champion: string;
  vice: string;
}

// inicio do estado com array vazio
export const Oitenta = () => {
  const [oitenta, setOitenta] = useState<Oitenta[]>([]);
  const [date, setDate] = useState(+new Date());

  // componentDidMount or variable date was changed
  useEffect(() => {
    const callFetchFunction = async () => {
      const result = await axios.get<Oitenta[]>(
        'http://localhost:4000/oitenta'
      );
      setOitenta(result.data);
    };
    callFetchFunction();
  }, [date]);

  if (!oitenta.length) {
    return <div>Loading... (or empty)</div>;
  }

  return (
    <div>
      <h1>1980 Champions</h1>
      <OitentaForm setDate={setDate} />
      <table className="center">
        <thead className="oitenta-table-head">
          <tr>
            <th>Year</th>
            <th>Champion</th>
            <th>Vice</th>
          </tr>
        </thead>
        <tbody className="oitenta-table-body">
          {oitenta.map((item) => {
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
