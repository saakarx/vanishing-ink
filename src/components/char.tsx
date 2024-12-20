import { motion } from 'framer-motion';

import { cn } from '../lib/utils';
import { charsWithMetaData } from '../lib/constants';

export function Char({ char }: { char: string }) {
  const special = char in charsWithMetaData;
  const isSpecial =
    special &&
    (charsWithMetaData[char].hasSpecialStyles === undefined ||
      charsWithMetaData[char]?.hasSpecialStyles === true);

  return (
    <motion.span
      initial={{ y: 10 }}
      animate={{ y: 0 }}
      style={{ ...(special ? charsWithMetaData[char].style : undefined) }}
      className={cn(
        isSpecial ? 'material-symbols-outlined' : 'font-medium',
        'inline-block'
      )}
    >
      {charsWithMetaData[char]?.text ?? char}
    </motion.span>
  );
}
