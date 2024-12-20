import { useCallback, useEffect, useState } from 'react';

const MAX_KEYSTROKES = 10;

function useKeystrokes(showKeystrokes: boolean) {
  const [keystrokes, setKeystrokes] = useState<string[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setKeystrokes([]);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [keystrokes]);

  const addKeystroke = useCallback(
    (key: string) => {
      if (!showKeystrokes) return;

      setKeystrokes(prevVal => {
        const strokes = [...prevVal, key];

        if (prevVal.length >= MAX_KEYSTROKES) {
          return strokes.slice(strokes.length % MAX_KEYSTROKES);
        }

        return strokes;
      });
    },
    [showKeystrokes]
  );

  const clearKeystrokes = useCallback(() => {
    setKeystrokes([]);
  }, []);

  return {
    keystrokes,
    addKeystroke,
    clearKeystrokes,
  };
}

export { useKeystrokes };
