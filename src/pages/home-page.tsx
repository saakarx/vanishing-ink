import { useNavigate } from 'react-router-dom';
import { PenLineIcon } from 'lucide-react';
import { Dispatch, SetStateAction, useId, useRef, useState } from 'react';
import { CheckedState } from '@radix-ui/react-checkbox';

import { ChangeThemeDropdown } from '@/components/change-theme-dropdown';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { toast } from '@/hooks/use-toast';
import { Logo } from '@/components/logo';

function CheckboxWithText({
  label,
  text,
  checked,
  onCheckedChange,
}: {
  label: string;
  text?: string;
  checked: boolean;
  onCheckedChange: (value: CheckedState) => void;
}) {
  const id = useId();

  return (
    <div className='items-top flex space-x-2'>
      <Checkbox id={id} checked={checked} onCheckedChange={onCheckedChange} />
      <div className='grid gap-1.5 leading-none'>
        <Label htmlFor={id}>{label}</Label>
        {text && <p className='text-sm text-muted-foreground'>{text}</p>}
      </div>
    </div>
  );
}

function HomePage() {
  const [keystrokes, setKeystrokes] = useState<boolean>(true);
  const [blurred, setBlurred] = useState<boolean>(false);
  const [duration, setDuration] = useState<string>('');
  const durationRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  const toggleCheckbox =
    (setter: Dispatch<SetStateAction<boolean>>) => (val: CheckedState) => {
      const value = val.valueOf();

      if (typeof value === 'string') setter(true);
      else setter(value);
    };

  function startWriting() {
    if (duration.length === 0) {
      if (durationRef.current) durationRef.current.focus();

      toast({
        title: 'Uh oh! Missing input',
        description: 'Must set a duration for typing',
        variant: 'destructive',
      });
      return;
    }

    const searchParams = new URLSearchParams();
    searchParams.set('keystrokes', String(keystrokes));
    searchParams.set('blurred', String(blurred));
    searchParams.set('duration', duration);

    const relativeURL = `/write?${searchParams.toString()}`;

    console.log({ relativeURL, duration });

    navigate(relativeURL);
  }

  return (
    <main className='flex flex-col items-center justify-center gap-6 min-h-screen'>
      <ChangeThemeDropdown className='absolute top-4 right-4' />

      <div className='flex flex-col items-center gap-5 max-w-3xl mb-6'>
        <Logo width={180} height='auto' className='text-muted-foreground' />
        <h1 className='font-bold text-6xl'>Write and Forget</h1>
        <p className='text-muted-foreground text-lg'>
          For thoughts that deserve to be free.
        </p>
      </div>

      <div className='flex gap-3 flex-col'>
        <h2 className='text-center font-semibold text-xl mb-3'>Options</h2>

        <div className='flex gap-4 flex-col'>
          <CheckboxWithText
            label='Show keystrokes'
            text='The keys you press will be visible in the bottom left part of the screen'
            checked={keystrokes}
            onCheckedChange={toggleCheckbox(setKeystrokes)}
          />

          <CheckboxWithText
            label='Blurred Mode'
            text='The text you type will be blurred till the timer goes on'
            checked={blurred}
            onCheckedChange={toggleCheckbox(setBlurred)}
          />

          <div className='items-top flex flex-col space-y-2'>
            <Label htmlFor='duration'>Duration</Label>
            <Select value={duration} onValueChange={setDuration}>
              <SelectTrigger
                ref={durationRef}
                id='duration'
                className='max-w-[280px]'
              >
                <SelectValue placeholder='Typing duration...' />
              </SelectTrigger>
              <SelectContent>
                {[3, 5, 10, 15, 20, 30, 60].map(val => (
                  <SelectItem key={val} value={val.toString()}>
                    {val} mins
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <Button type='button' onClick={startWriting}>
        <span>Start Writing</span>
        <PenLineIcon />
      </Button>
    </main>
  );
}

export default HomePage;
