import { useState, useEffect } from 'react';
import axios from 'axios';
import { Championship } from '../interfaces/championships';

// inicio do estado com array vazio
export const useList = (emptyChampionship: Championship, urlParams: string) => {
  const [championship, setChampionship] = useState<Championship[]>([]);
  const [date, setDate] = useState(+new Date());
  const [activeRecord, setActiveRecord] =
    useState<Championship>(emptyChampionship);

  // componentDidMount or variable date was changed
  useEffect(() => {
    const callFetchFunction = async () => {
      const result = await axios.get<Championship[]>(
        'http://localhost:4000/final?${urlParams}'
      );
      setChampionship(result.data);
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
  };
};
