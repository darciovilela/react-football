import { Championship } from '../interfaces/championships';
import { emptyChampionship } from './Doismil';
import { useForm } from '../hooks/useForm';

interface IProps {
  setDate: Function;
  activeRecord: Championship;
}

export const DoismilForm: React.FC<IProps> = ({ setDate, activeRecord }) => {
  const { formState, handleChange, handleSubmit } = useForm(
    setDate,
    activeRecord,
    emptyChampionship,
    { doismil: true }
  );

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
