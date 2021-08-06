import { useEffect, useState } from 'react';
import axios from 'axios';
import { Championship } from '../interfaces/championships';

// inicio do estado com array vazio
export const useList = (emptyChampionship: Championship, urlParams: string) => {
  const [championship, setChampionship] = useState<Championship[]>([]);
  const [date, setDate] = useState(+new Date());
  const [activeRecord, setActiveRecord] =
    useState<Championship>(emptyChampionship);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();

  // componentDidMount or variable date was changed
  useEffect(() => {
    const callFetchFunction = async () => {
      try {
        setLoading(true);
        setError(undefined);
        const result = await axios.get<Championship[]>(
          `http://localhost:4000/final?${urlParams}`
        );
        setChampionship(result.data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    callFetchFunction();
  }, [date, urlParams]);

  const deleteChampionship = async (championship: Championship) => {
    await axios.delete<Championship>(
      `http://localhost:4000/final/${championship.id}`
    );
    setDate(+new Date());
  };

  return {
    championship,
    setDate,
    activeRecord,
    setActiveRecord,
    deleteChampionship,
    loading,
    error,
  };
};
