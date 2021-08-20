import { useState, useEffect } from 'react';
import axios from 'axios';
import { Championship, ChampionshipFlags } from '../interfaces/championships';

export const useForm = (
  setDate: Function,
  activeRecord: Championship,
  emptyChampionship: Championship,
  formParams: ChampionshipFlags
) => {
  const [formState, setFormState] = useState(activeRecord);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    setFormState(activeRecord);
  }, [activeRecord]);

  const createChampionship = async (championship: Championship) => {
    await axios.post<Championship>('http://localhost:4000/final', {
      ...championship,
      ...formParams,
    });
  };

  const updateChampionship = async (championship: Championship) => {
    await axios.patch<Championship>(
      `http://localhost:4000/final/${championship.id}`,
      championship
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
    try {
      setError(undefined);
      if (formState.id) {
        await updateChampionship(formState);
      } else {
        await createChampionship(formState);
      }
      setDate(+new Date());
      setFormState(emptyChampionship);
    } catch (e) {
      setError(e);
    }
  };

  return { formState, handleChange, handleSubmit, error };
};
