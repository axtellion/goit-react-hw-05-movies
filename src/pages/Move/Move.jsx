import { MoveSearchList } from 'components/MoveSearchList/MoveSearchList';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovi } from 'services/api';
import { MoveSearch } from '../../components/MoveSearch/MoveSearch';

export const Move = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searthArrey, setSearthArrey] = useState([]);

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) return;

    getSearchMovi(query).then(setSearthArrey).catch(console.log);
  }, [query]);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <MoveSearch value={query} onChange={updateQueryString} />
      {searthArrey.length !== 0 && <MoveSearchList array={searthArrey} />}
    </>
  );
};
