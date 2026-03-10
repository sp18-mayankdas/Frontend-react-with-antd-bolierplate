import { useEffect, useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { cn, debounce } from '@/utils';
import { Input } from '../input';

export interface SearchInputProps {
  placeholder?: string;
  className?: string;
  /** Controlled value — syncs internal state when changed externally */
  value?: string;
  onChange?: (value: string) => void;
  /** Debounce delay in ms — set to 0 to disable debouncing */
  delay?: number;
  /** Override the search prefix icon — pass `null` to remove it */
  prefix?: React.ReactNode;
  disabled?: boolean;
  /** Max length of the search input */
  maxLength?: number;
}

export const SearchInput = ({
  placeholder = 'Search...',
  className,
  value,
  onChange,
  delay = 500,
  prefix = <SearchOutlined />,
  disabled,
  maxLength,
}: SearchInputProps) => {
  const [searchValue, setSearchValue] = useState(value ?? '');

  const debouncedOnChange = useRef(debounce((val: string) => onChange?.(val), delay));

  // Recreate the debounced function only when delay changes, and cancel the previous pending call to prevent stale invocations.
  useEffect(() => {
    debouncedOnChange.current.cancel();
    debouncedOnChange.current = debounce((val: string) => onChange?.(val), delay);
  }, [delay, onChange]);

  // Cancel any pending debounced call on unmount
  useEffect(() => {
    const debounced = debouncedOnChange.current;
    return () => debounced.cancel();
  }, []);

  // Sync internal state when controlled value changes from outside
  useEffect(() => {
    setSearchValue(value ?? '');
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = e.target.value;
    setSearchValue(next);
    debouncedOnChange.current(next);
  };

  return (
    <Input
      variant="outlined"
      placeholder={placeholder}
      prefix={prefix}
      value={searchValue}
      onChange={handleChange}
      disabled={disabled}
      maxLength={maxLength}
      className={cn('w-full', className)}
    />
  );
};
