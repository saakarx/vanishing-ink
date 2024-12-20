import { cn } from '@/lib/utils';
import { FC, SVGAttributes } from 'react';

type LogoProps = SVGAttributes<SVGSVGElement>;

const Logo: FC<LogoProps> = ({
  width = '776',
  height = '119',
  className,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 776 119'
    xmlns='http://www.w3.org/2000/svg'
    className={cn('aspect-[776/119] fill-primary-foreground', className)}
    {...props}
  >
    <path
      d='M80.1356 12.8605L53.8916 89.0005H26.7836L0.431641 12.8605H23.1116L40.3916 67.8325L57.5636 12.8605H80.1356Z'
      fill='currentColor'
    />
    <path
      d='M83.2752 58.6525C83.2752 52.3885 84.3912 46.9165 86.6232 42.2365C88.9272 37.5565 92.0232 33.9565 95.9112 31.4365C99.8712 28.9165 104.263 27.6565 109.087 27.6565C113.263 27.6565 116.863 28.4845 119.887 30.1405C122.911 31.7965 125.251 34.0285 126.907 36.8365V28.4125H148.075V89.0005H126.907V80.5765C125.251 83.3845 122.875 85.6165 119.779 87.2725C116.755 88.9285 113.191 89.7565 109.087 89.7565C104.263 89.7565 99.8712 88.4965 95.9112 85.9765C92.0232 83.4565 88.9272 79.8565 86.6232 75.1765C84.3912 70.4245 83.2752 64.9165 83.2752 58.6525ZM126.907 58.6525C126.907 54.7645 125.827 51.7045 123.667 49.4725C121.579 47.2405 118.987 46.1245 115.891 46.1245C112.723 46.1245 110.095 47.2405 108.007 49.4725C105.919 51.6325 104.875 54.6925 104.875 58.6525C104.875 62.5405 105.919 65.6365 108.007 67.9405C110.095 70.1725 112.723 71.2885 115.891 71.2885C118.987 71.2885 121.579 70.1725 123.667 67.9405C125.827 65.7085 126.907 62.6125 126.907 58.6525Z'
      fill='currentColor'
    />
    <path
      d='M199.773 27.8725C206.757 27.8725 212.301 30.2125 216.405 34.8925C220.509 39.5005 222.561 45.7645 222.561 53.6845V89.0005H201.393V56.4925C201.393 53.0365 200.493 50.3365 198.693 48.3925C196.893 46.3765 194.481 45.3685 191.457 45.3685C188.289 45.3685 185.805 46.3765 184.005 48.3925C182.205 50.3365 181.305 53.0365 181.305 56.4925V89.0005H160.137V28.4125H181.305V37.0525C183.177 34.3165 185.697 32.1205 188.865 30.4645C192.033 28.7365 195.669 27.8725 199.773 27.8725Z'
      fill='currentColor'
    />
    <path
      d='M244.869 22.7965C241.125 22.7965 238.101 21.7885 235.797 19.7725C233.565 17.6845 232.449 15.0925 232.449 11.9965C232.449 8.82847 233.565 6.20047 235.797 4.11247C238.101 2.02447 241.125 0.980469 244.869 0.980469C248.541 0.980469 251.493 2.02447 253.725 4.11247C256.029 6.20047 257.181 8.82847 257.181 11.9965C257.181 15.0925 256.029 17.6845 253.725 19.7725C251.493 21.7885 248.541 22.7965 244.869 22.7965ZM255.345 28.4125V89.0005H234.177V28.4125H255.345Z'
      fill='currentColor'
    />
    <path
      d='M293.211 89.7565C287.739 89.7565 282.843 88.8565 278.523 87.0565C274.275 85.1845 270.891 82.6645 268.371 79.4965C265.923 76.2565 264.555 72.6205 264.267 68.5885H284.787C285.075 70.5325 285.975 72.0445 287.487 73.1245C288.999 74.2045 290.871 74.7445 293.103 74.7445C294.831 74.7445 296.199 74.3845 297.207 73.6645C298.215 72.9445 298.719 72.0085 298.719 70.8565C298.719 69.3445 297.891 68.2285 296.235 67.5085C294.579 66.7885 291.843 65.9965 288.027 65.1325C283.707 64.2685 280.107 63.2965 277.227 62.2165C274.347 61.1365 271.827 59.3725 269.667 56.9245C267.579 54.4765 266.535 51.1645 266.535 46.9885C266.535 43.3885 267.507 40.1485 269.451 37.2685C271.395 34.3165 274.239 31.9765 277.983 30.2485C281.799 28.5205 286.371 27.6565 291.699 27.6565C299.619 27.6565 305.847 29.6005 310.383 33.4885C314.919 37.3765 317.547 42.4885 318.267 48.8245H299.151C298.791 46.8805 297.927 45.4045 296.559 44.3965C295.263 43.3165 293.499 42.7765 291.267 42.7765C289.539 42.7765 288.207 43.1005 287.271 43.7485C286.407 44.3965 285.975 45.2965 285.975 46.4485C285.975 47.8885 286.803 49.0045 288.459 49.7965C290.115 50.5165 292.779 51.2725 296.451 52.0645C300.843 53.0005 304.479 54.0445 307.359 55.1965C310.311 56.3485 312.867 58.2205 315.027 60.8125C317.259 63.3325 318.375 66.7885 318.375 71.1805C318.375 74.7085 317.331 77.8765 315.243 80.6845C313.227 83.4925 310.311 85.7245 306.495 87.3805C302.751 88.9645 298.323 89.7565 293.211 89.7565Z'
      fill='currentColor'
    />
    <path
      d='M368.634 27.8725C375.546 27.8725 381.018 30.2125 385.05 34.8925C389.154 39.5005 391.206 45.7645 391.206 53.6845V89.0005H370.038V56.4925C370.038 53.0365 369.138 50.3365 367.338 48.3925C365.538 46.3765 363.126 45.3685 360.102 45.3685C356.934 45.3685 354.45 46.3765 352.65 48.3925C350.85 50.3365 349.95 53.0365 349.95 56.4925V89.0005H328.782V9.08047H349.95V37.0525C351.822 34.3165 354.342 32.1205 357.51 30.4645C360.75 28.7365 364.458 27.8725 368.634 27.8725Z'
      fill='currentColor'
    />
    <path
      d='M413.513 22.7965C409.769 22.7965 406.745 21.7885 404.441 19.7725C402.209 17.6845 401.093 15.0925 401.093 11.9965C401.093 8.82847 402.209 6.20047 404.441 4.11247C406.745 2.02447 409.769 0.980469 413.513 0.980469C417.185 0.980469 420.137 2.02447 422.369 4.11247C424.673 6.20047 425.825 8.82847 425.825 11.9965C425.825 15.0925 424.673 17.6845 422.369 19.7725C420.137 21.7885 417.185 22.7965 413.513 22.7965ZM423.989 28.4125V89.0005H402.821V28.4125H423.989Z'
      fill='currentColor'
    />
    <path
      d='M475.68 27.8725C482.664 27.8725 488.208 30.2125 492.312 34.8925C496.416 39.5005 498.468 45.7645 498.468 53.6845V89.0005H477.3V56.4925C477.3 53.0365 476.4 50.3365 474.6 48.3925C472.8 46.3765 470.388 45.3685 467.364 45.3685C464.196 45.3685 461.712 46.3765 459.912 48.3925C458.112 50.3365 457.212 53.0365 457.212 56.4925V89.0005H436.044V28.4125H457.212V37.0525C459.084 34.3165 461.604 32.1205 464.772 30.4645C467.94 28.7365 471.576 27.8725 475.68 27.8725Z'
      fill='currentColor'
    />
    <path
      d='M532.439 27.6565C536.543 27.6565 540.107 28.4845 543.131 30.1405C546.227 31.7965 548.603 34.0285 550.259 36.8365V28.4125H571.427V88.3525C571.427 94.0405 570.347 99.1525 568.187 103.688C566.027 108.296 562.643 111.968 558.035 114.704C553.499 117.44 547.739 118.808 540.755 118.808C531.395 118.808 523.907 116.612 518.291 112.22C512.675 107.828 509.471 101.852 508.679 94.2925H529.523C529.955 96.2365 531.035 97.7485 532.763 98.8285C534.491 99.9085 536.723 100.448 539.459 100.448C546.659 100.448 550.259 96.4165 550.259 88.3525V80.5765C548.603 83.3845 546.227 85.6165 543.131 87.2725C540.107 88.9285 536.543 89.7565 532.439 89.7565C527.615 89.7565 523.223 88.4965 519.263 85.9765C515.375 83.4565 512.279 79.8565 509.975 75.1765C507.743 70.4245 506.627 64.9165 506.627 58.6525C506.627 52.3885 507.743 46.9165 509.975 42.2365C512.279 37.5565 515.375 33.9565 519.263 31.4365C523.223 28.9165 527.615 27.6565 532.439 27.6565ZM550.259 58.6525C550.259 54.7645 549.179 51.7045 547.019 49.4725C544.931 47.2405 542.339 46.1245 539.243 46.1245C536.075 46.1245 533.447 47.2405 531.359 49.4725C529.271 51.6325 528.227 54.6925 528.227 58.6525C528.227 62.5405 529.271 65.6365 531.359 67.9405C533.447 70.1725 536.075 71.2885 539.243 71.2885C542.339 71.2885 544.931 70.1725 547.019 67.9405C549.179 65.7085 550.259 62.6125 550.259 58.6525Z'
      fill='currentColor'
    />
    <path
      d='M625.329 12.8605V89.0005H604.161V12.8605H625.329Z'
      fill='currentColor'
    />
    <path
      d='M677.02 27.8725C684.004 27.8725 689.548 30.2125 693.652 34.8925C697.756 39.5005 699.808 45.7645 699.808 53.6845V89.0005H678.64V56.4925C678.64 53.0365 677.74 50.3365 675.94 48.3925C674.14 46.3765 671.728 45.3685 668.704 45.3685C665.536 45.3685 663.052 46.3765 661.252 48.3925C659.452 50.3365 658.552 53.0365 658.552 56.4925V89.0005H637.384V28.4125H658.552V37.0525C660.424 34.3165 662.944 32.1205 666.112 30.4645C669.28 28.7365 672.916 27.8725 677.02 27.8725Z'
      fill='currentColor'
    />
    <path
      d='M749.331 89.0005L732.591 64.1605V89.0005H711.423V9.08047H732.591V52.1725L749.331 28.4125H774.711L750.843 58.8685L775.143 89.0005H749.331Z'
      fill='currentColor'
    />
  </svg>
);

export { Logo };
