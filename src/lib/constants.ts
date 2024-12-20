export const websiteMetadata = {
  name: 'Vanishing Ink',
  title: 'Write and Forget',
  subtitle: 'For thoughts that deserve to be free.',
  description: 'An ephemeral space for your musings to exist briefly.',
};

export const invalidKeys = [
  'ArrowLeft',
  'ArrowRight',
  'ArrowUp',
  'ArrowDown',
  'Backspace',
  'Tab',
  'Escape',
  'Control',
  'CapsLock',
  'Tab',
  'Shift',
  'Meta',
  'Alt',
  'Delete',
  'End',
  'PageDown',
  'PageUp',
  'Home',
  'Insert',
  'ScrollLock',
  'Pause',
  'ScrollLock',
  'NumLock',
];

type CharType = {
  text: string;
  hasSpecialStyles?: boolean;
  style?: React.CSSProperties;
  className?: React.HTMLAttributes<HTMLElement>['className'];
};

export const charsWithMetaData: {
  [key: string]: CharType;
} = {
  Backspace: { text: 'backspace' },
  Enter: { text: 'keyboard_return' },
  ' ': { text: 'space_bar' },
  Shift: { text: 'shift' },
  Alt: { text: 'keyboard_option_key' },
  Meta: { text: 'keyboard_command_key' },
  Option: { text: 'keyboard_command_key' },
  Control: { text: 'keyboard_control_key' },
  Tab: { text: 'keyboard_tab' },
  ArrowUp: { text: 'keyboard_arrow_up' },
  ArrowRight: { text: 'keyboard_arrow_right' },
  ArrowDown: { text: 'keyboard_arrow_down' },
  ArrowLeft: { text: 'keyboard_arrow_left' },
  CapsLock: { text: 'shift_lock' },
  Escape: { text: 'arrow_insert' },
  Unidentified: { text: 'error' },
  PageUp: { text: 'text_select_move_up' },
  PageDown: { text: 'text_select_move_down' },
  Home: { text: 'home' },
  End: { text: '' },
  AudioVolumeUp: { text: 'volume_up' },
  AudioVolumeDown: { text: 'volume_down' },
  AudioVolumeMute: { text: 'volume_off' },
  Fn: { text: 'globe' },
  Eisu: { text: '英数', hasSpecialStyles: false, className: 'font-sans' },
  Kana: { text: 'かな', hasSpecialStyles: false, className: 'font-sans' },

  // UTF8("\xe2\x8c\xa7"), @71,  // clear
  // UTF8("\xe2\x8c\xab"), @51,  // delete
  // UTF8("\xe2\x8c\xa6"), @117, // forward delete
  // UTF8("?\xe2\x83\x9d"), @114, // help
  // UTF8("\xe2\x86\x98"), @119, // end
  // UTF8("\xe2\x86\xa9"), @76,  // numpad enter
  // UTF8("\xf0\x9f\x94\x85"), @145, // low brightness
  // UTF8("\xf0\x9f\x94\x86"), @144, // high brightness
  // UTF8("\xf0\x9f\x96\xa5"), @160, // mission control
  // UTF8("\xf0\x9f\x9a\x80"), @131, // launcher
  // UTF8("\xf0\x9f\x94\x8d"), @177, // spotlight key (left-pointing magnifying glass)
  // UTF8("\xf0\x9f\x8e\xa4"), @176, // dictation key (microphone)
  // UTF8("\xe2\x8f\xbe"), @178,     // focus key (unicode power sleep symbol)
};

export const chars: { [key: string]: string } = {
  Backspace: 'backspace',
  Enter: 'keyboard_return',
  ' ': 'space_bar',
  Shift: 'shift',
  Alt: 'keyboard_option_key',
  Meta: 'keyboard_command_key',
  Option: 'keyboard_command_key',
  Control: 'keyboard_control_key',
  Tab: 'keyboard_tab',
  ArrowUp: 'keyboard_arrow_up',
  ArrowRight: 'keyboard_arrow_right',
  ArrowDown: 'keyboard_arrow_down',
  ArrowLeft: 'keyboard_arrow_left',
  CapsLock: 'shift_lock',
  Escape: 'arrow_insert',
  Unidentified: 'error',
  PageUp: 'text_select_move_up',
  PageDown: 'text_select_move_down',
  Home: 'home',
  End: '',
  AudioVolumeUp: 'volume_up',
  AudioVolumeDown: 'volume_down',
  AudioVolumeMute: 'volume_off',
  Fn: 'globe',
  Eisu: '英数',
  Kana: 'かな',

  // UTF8("\xe2\x8c\xa7"), @71,  // clear
  // UTF8("\xe2\x8c\xab"), @51,  // delete
  // UTF8("\xe2\x8c\xa6"), @117, // forward delete
  // UTF8("?\xe2\x83\x9d"), @114, // help
  // UTF8("\xe2\x86\x98"), @119, // end
  // UTF8("\xe2\x86\xa9"), @76,  // numpad enter
  // UTF8("\xf0\x9f\x94\x85"), @145, // low brightness
  // UTF8("\xf0\x9f\x94\x86"), @144, // high brightness
  // UTF8("\xf0\x9f\x96\xa5"), @160, // mission control
  // UTF8("\xf0\x9f\x9a\x80"), @131, // launcher
  // UTF8("\xf0\x9f\x94\x8d"), @177, // spotlight key (left-pointing magnifying glass)
  // UTF8("\xf0\x9f\x8e\xa4"), @176, // dictation key (microphone)
  // UTF8("\xe2\x8f\xbe"), @178,     // focus key (unicode power sleep symbol)
};
