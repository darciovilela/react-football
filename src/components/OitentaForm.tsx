import { useState, useEffect } from 'react';
import axios from 'axios';
import { Championship } from '../interfaces/championships';
import { emptyOitenta } from './Oitenta';

interface IProps {
  setDate: Function;
  activeRecord: Championship;
}

export const OitentaForm: React.FC<IProps> = ({ setDate, activeRecord }) => {
  const [formState, setFormState] = useState(activeRecord);

  useEffect(() => {
    setFormState(activeRecord);
  }, [activeRecord]);

  const createOitenta = async (oitenta: Championship) => {
    await axios.post<Championship>('http://localhost:4000/oitenta', oitenta);
  };

  const updateOitenta = async (oitenta: Championship) => {
    await axios.patch<Championship>(
      `http://localhost:4000/oitenta/${oitenta.id}`,
      oitenta
    );
  };

  const handleChange = (event: any) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (formState.id) {
      await updateOitenta(formState);
    } else {
      await createOitenta(formState);
    }
    setDate(+new Date());
    setFormState(emptyOitenta);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Year:</label>
          <input
            className="center"
            type="text"
            name="year"
            value={formState.year}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Champion:</label>
          <input
            className="center"
            type="text"
            name="champion"
            value={formState.champion}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Vice:</label>
          <input
            className="center"
            type="text"
            name="vice"
            value={formState.vice}
            onChange={handleChange}
          />
        </div>
        <input className="submit" type="submit" />
      </form>
    </div>
  );
};
