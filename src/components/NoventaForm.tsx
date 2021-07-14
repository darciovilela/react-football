import { useState, useEffect } from 'react';
import axios from 'axios';
import { Championship } from '../interfaces/championships';
import { emptyNoventa } from './Noventa';

interface IProps {
  setDate: Function;
  activeRecord: Championship;
}

export const NoventaForm: React.FC<IProps> = ({ setDate, activeRecord }) => {
  const [formState, setFormState] = useState(activeRecord);

  useEffect(() => {
    setFormState(activeRecord);
  }, [activeRecord]);

  const createNoventa = async (noventa: Championship) => {
    await axios.post<Championship>('http://localhost:4000/noventa', noventa);
  };

  const updateNoventa = async (noventa: Championship) => {
    await axios.patch<Championship>(
      `http://localhost:4000/noventa/${noventa.id}`,
      noventa
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
      await updateNoventa(formState);
    } else {
      await createNoventa(formState);
    }
    setDate(+new Date());
    setFormState(emptyNoventa);
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
