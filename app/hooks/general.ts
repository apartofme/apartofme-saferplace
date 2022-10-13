import { useCallback, useEffect, useRef, useState } from 'react';
import { AppState, AppStateStatus } from 'react-native';

// eslint-disable-next-line react-hooks/exhaustive-deps
export const useMount = (func: () => void) => useEffect(func, []);

export const useSpecificKeyExtractor = <TItem>(
  prefix: string,
  field: keyof TItem,
) =>
  useCallback(
    (item: TItem, index: number) => `${prefix}-${item[field]}-${index}`,
    [prefix, field],
  );

/**
 * Saves the previous state of the value
 * @param value the current value from the useState (usually) to save its prev value
 * @returns the previous saved value
 */
export const usePrevious = <TValue>(value: TValue) => {
  const ref = useRef<TValue>();

  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
};

export const useAppState = () => {
  const { currentState } = AppState;
  const [appState, setAppState] = useState(currentState);

  useEffect(() => {
    const onChange = (newState: AppStateStatus) => {
      setAppState(newState);
    };
    const subscription = AppState.addEventListener('change', onChange);
    return () => {
      subscription.remove();
    };
  }, []);

  return appState;
};

export default useAppState;
