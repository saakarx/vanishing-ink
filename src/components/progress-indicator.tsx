import { motion } from 'framer-motion';

export function ProgressIndicator({ progress }: { progress: number }) {
  return (
    <div
      style={{ maxWidth: 'calc(100% - 16px)' }}
      className='absolute left-2 top-2 w-full h-1 bg-muted z-20 rounded-full overflow-hidden'
    >
      <motion.div
        data-label='progress'
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1, ease: 'linear' }}
        className='h-full bg-primary rounded-full'
      />
    </div>
  );
}
