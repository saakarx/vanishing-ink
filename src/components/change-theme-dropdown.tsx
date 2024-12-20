import { HTMLAttributes } from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Button } from './ui/button';
import { MaterialIcon } from './material-icon';

import { themes, useTheme } from '@/context/theme-provider';
import { cn } from '@/lib/utils';

export function ChangeThemeDropdown({
  className,
}: {
  className?: HTMLAttributes<HTMLButtonElement>['className'];
}) {
  const { setTheme, theme: activeTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          size='icon'
          className={cn(
            'focus-visible:ring-offset-2 focus-visible:ring-offset-background',
            className
          )}
        >
          <MaterialIcon className='dark:!hidden !text-xl'>
            &#xe518;
          </MaterialIcon>
          <MaterialIcon className='!hidden dark:!inline-block !text-xl'>
            &#xe51c;
          </MaterialIcon>
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='center'>
        {themes.map((item, idx) => (
          <DropdownMenuItem key={idx} onClick={() => setTheme(item.value)}>
            {item.icon}
            <span className='flex-1 mr-8 inline-block'>{item.name}</span>
            <span
              className={`material-symbols-outlined !text-lg/none ${
                activeTheme === item.value ? '!inline-block' : '!hidden'
              }`}
            >
              &#xe5ca;
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
