import { createBrowserRouter } from 'react-router-dom';

import HomePage from '@/pages/home-page';
import WritePage from '@/pages/write-page';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/write', element: <WritePage /> },
]);

export default router;
