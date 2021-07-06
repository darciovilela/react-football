import { useState, useEffect } from 'react';
import axios from 'axios';
import { Championship } from '../interfaces/championships';

// estado inicial do form vazio
const emptyNoventa: Championship = {
  year: '',
  champion: '',
  vice: '',
};

interface IProps {
  setDate: Function;
}

export const NoventaForm: React.FC<IProps> = ({ setDate }) => {
  const [formState, setFormState] = useState(emptyNoventa);

  const createNoventa = async (noventa: Championship) => {
    const result = await axios.post<Championship>(
      'http://localhost:4000/noventa',
      noventa
    );
  };

  const handleChange = (event: any) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    createNoventa(formState);
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
