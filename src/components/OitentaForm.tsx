import { Championship } from '../interfaces/championships';
import { emptyChampionship } from './Oitenta';
import { useForm } from '../hooks/useForm';

interface IProps {
  setDate: Function;
  activeRecord: Championship;
}

export const OitentaForm: React.FC<IProps> = ({ setDate, activeRecord }) => {
  const { formState, handleChange, handleSubmit } = useForm(
    setDate,
    activeRecord,
    emptyChampionship,
    { oitenta: true, noventa: false, doismil: false }
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
