import { useRef, useState, useEffect, Fragment } from 'react';
import { useSearchParams } from 'react-router-dom';

import { RestartButton } from '../components/restart-button';
import { Char } from '../components/char';
import { ProgressIndicator } from '../components/progress-indicator';

import { useKeystrokes } from '@/hooks/use-keystrokes';

import { cn, isInArray } from '../lib/utils';
import { invalidKeys } from '../lib/constants';

type WriterState = 'not-started' | 'running' | 'idle' | 'finished';

const isInvalidKey = isInArray(invalidKeys);

function WritePage() {
  const [searchParams] = useSearchParams();

  const showKeystrokes = searchParams.get('keystrokes') !== 'false';
  const isBlurred = searchParams.get('blurred') !== 'false';
  const duration = parseInt(searchParams.get('duration') ?? '3');

  const TOTAL_TIME = useRef(duration * 60).current;
  const timer = useRef<NodeJS.Timeout | undefined>(undefined);
  const [writerState, setWriterState] = useState<WriterState>('not-started');
  const [totalSeconds, setTotalSeconds] = useState(TOTAL_TIME);
  const { addKeystroke, keystrokes, clearKeystrokes } =
    useKeystrokes(showKeystrokes);

  useEffect(() => {
    switch (writerState) {
      case 'not-started':
        clearInterval(timer.current);
        break;
      case 'running':
        clearInterval(timer.current);
        timer.current = setInterval(() => {
          setTotalSeconds(totalSeconds => {
            if (totalSeconds === 0) {
              setWriterState('finished');
              return 0;
            }
            return totalSeconds - 1;
          });
        }, 1000);
        break;
      case 'finished':
        clearInterval(timer.current);
        clearKeystrokes();
        break;
      default:
        clearInterval(timer.current);
        console.warn('Unhandled writerState: ' + writerState);
        break;
    }
  }, [writerState, clearKeystrokes]);

  const timerWidth = ((TOTAL_TIME - totalSeconds) / TOTAL_TIME) * 100;

  const startWriting = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (writerState === 'not-started') {
      if (isInvalidKey(e.key)) return;
      setWriterState('running');
    }

    if (showKeystrokes) addKeystroke(e.key);
  };

  return (
    <Fragment>
      <ProgressIndicator progress={timerWidth} />

      <div className='h-screen w-full relative isolate'>
        <textarea
          autoComplete='none'
          autoFocus={true}
          spellCheck={false}
          placeholder='Start writing...'
          className='bg-transparent text-primary caret-primary selection:bg-primary selection:text-primary-foreground selection:caret-primary-foreground focus:outline-none absolute inset-0 z-0 resize-none p-4 pt-5 font-mono leading-[26px] text-[15px]'
          defaultValue={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, obcaecati veritatis quos corrupti dignissimos hic in ipsum iste!  Necessitatibus libero quaerat blanditiis. Accusantium quisquam illo sequi, dolorem nihil minima! Consequuntur? `}
          onKeyDown={startWriting}
        />

        {isBlurred && writerState === 'running' && (
          <div className='pointer-events-none fixed inset-0 z-10 backdrop-blur-[2px]' />
        )}
      </div>

      {showKeystrokes && keystrokes.length > 0 && (
        <div
          data-label='key-input-bubble'
          className={cn(
            'absolute bottom-5 left-5',
            'flex items-center flex-wrap max-w-[250px] rounded-xl px-2.5 py-1.5  bg-white dark:bg-[#121212] text-purple-custom dark:text-purple-200 shadow-md border-2 border-gray-100/75 dark:border-gray-500/50 pointer-events-none'
          )}
        >
          {keystrokes.map((key, idx) => (
            <Char char={key} key={idx} />
          ))}
        </div>
      )}

      {writerState === 'finished' && <RestartButton />}
    </Fragment>
  );
}

export default WritePage;
