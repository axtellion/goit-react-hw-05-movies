import { MoveSearchList } from 'components/MoveSearchList/MoveSearchList';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovi } from 'services/api';
import { MoveSearch } from '../../components/MoveSearch/MoveSearch';

export const Move = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searthArrey, setSearthArrey] = useState([]);
  const [value, setValue] = useState('');
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) return;

    getSearchMovi(query).then(setSearthArrey).catch(console.log);
  }, [query]);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};

    setSearchParams(nextParams);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <MoveSearch
        value={query}
        onChange={updateQueryString}
        onSubmit={handleSubmit}
      />
      {searthArrey.length !== 0 && <MoveSearchList array={searthArrey} />}
    </>
  );
};
