import { MoveSearchList } from 'components/MoveSearchList/MoveSearchList';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovi } from 'services/api';
import { MoveSearch } from '../../components/MoveSearch/MoveSearch';
import { toast } from 'react-hot-toast';

export const Move = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searthArrey, setSearthArrey] = useState([]);
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query.trim() === '') {
      return;
    }

    getSearchMovi(query).then(setSearthArrey).catch(console.log);
  }, [query]);

  useEffect(() => {
    if (searthArrey.total_results === 0) {
      toast.error('Nothing was found for this request');
    }
  }, [searthArrey]);

  const updateQueryString = value => {
    const query = value.search;
    if (!query || query.trim() === '') {
      toast.error('Enter a value.');
    }

    const nextParams = query !== '' ? { query } : {};

    setSearchParams(nextParams);
  };

  return (
    <>
      <MoveSearch onSubmit={updateQueryString} />
      {searthArrey.length !== 0 && <MoveSearchList array={searthArrey} />}
    </>
  );
};
