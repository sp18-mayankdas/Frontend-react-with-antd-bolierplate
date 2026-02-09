// components/search-bar/index.tsx
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Input } from '..';
import SearchIcon from '@/assets/Search.svg?react';
import { debounceMethod } from '@/utils';

interface ISearchProps {
  placeholder: string;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  delay?: number;
}

export const SearchInput = ({
  placeholder,
  className,
  value,
  onChange,
  delay = 500,
}: ISearchProps) => {
  const [searchValue, setSearchValue] = useState(value || '');

  // debounced onChange function -> Prevent recreation of the function
  const debouncedOnChange = useMemo(
    () =>
      debounceMethod((debouncedValue: string) => {
        onChange?.(debouncedValue);
      }, delay),
    [onChange, delay]
  );

  // Update internal value when external value changes
  useEffect(() => {
    setSearchValue(value || '');
  }, [value]);

  const handleInputChange = useCallback(
    (inputValue: string) => {
      setSearchValue(inputValue);
      debouncedOnChange(inputValue);
    },
    [debouncedOnChange]
  );

  return (
    <>
      <Input
        variant="outlined"
        className={className}
        placeholder={placeholder}
        prefix={<SearchIcon />}
        value={searchValue}
        onChange={(e) => handleInputChange(e.target.value)}
      />
    </>
  );
};
