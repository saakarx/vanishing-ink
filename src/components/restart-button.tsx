import { useAnimate } from 'framer-motion';

export function RestartButton() {
  const [scope, animate] = useAnimate();

  return (
    <button
      ref={scope}
      onMouseEnter={() => animate(scope.current, { scale: 1.02 })}
      onMouseLeave={() => animate(scope.current, { scale: 1 })}
      onClick={async () => {
        await animate([
          [scope.current, { scale: [0.98, 1] }],
          ['.restart-button__icon', { rotate: -360 }, { at: '<' }],
          ['.restart-button__icon', { rotate: 0 }, { duration: 0.000000001 }],
        ]);

        window.location.reload();
      }}
      className='absolute bottom-5 right-5 z-20 px-2.5 py-1.5 shadow-md text-purple-custom dark:text-purple-200 rounded-xl flex items-center gap-1.5 border-2 border-gray-100/75 dark:border-gray-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-custom/80 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black'
    >
      <span className='restart-button__icon material-symbols-outlined !text-base'>
        &#xe042;
      </span>
      Restart
    </button>
  );
}
