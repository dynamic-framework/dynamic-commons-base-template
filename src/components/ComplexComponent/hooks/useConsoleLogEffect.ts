import { useEffect } from 'react';

export function useConsoleLogEffect() {
  useEffect(() => {
    console.log('useConsoleLogEffect');
  }, []);
}
