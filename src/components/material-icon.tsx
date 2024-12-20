import { cn } from '@/lib/utils';
import React from 'react';

interface MaterialIconProps extends React.HTMLAttributes<HTMLSpanElement> {}

function MaterialIcon({ className, ...props }: MaterialIconProps) {
  return (
    <span className={cn('material-symbols-outlined', className)} {...props} />
  );
}

export { MaterialIcon };
