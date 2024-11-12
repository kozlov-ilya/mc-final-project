import { FormEvent, useCallback, useState } from 'react';
import Icon from 'components/Icon';
import TextField from 'components/TextField';
import { useSearchQuery } from 'hooks/useSearchQuery';
import styles from './Search.module.scss';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const { setQueryParam } = useSearchQuery();

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      setQueryParam('term', searchValue);
    },
    [searchValue, setQueryParam],
  );

  return (
    <form className={styles['SearchForm']} onSubmit={handleSubmit}>
      <TextField
        className={styles['Search']}
        value={searchValue}
        onChange={(value) => setSearchValue(value)}
        fieldSize="lg"
        leftContent={<Icon icon="Search" />}
      />
    </form>
  );
};

export default Search;