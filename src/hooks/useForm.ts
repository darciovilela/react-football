import { useState, useEffect } from 'react';
import axios from 'axios';
import { Championship } from '../interfaces/championships';

export const useForm = (
  setDate: Function,
  activeRecord: Championship,
  emptyChampionship: Championship,
  formParams: {}
) => {
  const [formState, setFormState] = useState(activeRecord);

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
    if (formState.id) {
      await updateChampionship(formState);
    } else {
      await createChampionship(formState);
    }
    setDate(+new Date());
    setFormState(emptyChampionship);
  };

  return { formState, handleChange, handleSubmit };
};
