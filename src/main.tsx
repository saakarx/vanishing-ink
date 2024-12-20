import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from '@/context/theme-provider';

import router from '@/routes';

import './main.css';
import { Toaster } from './components/ui/toaster';

const root = document.getElementById('root')! as HTMLElement;

createRoot(root).render(
  <React.StrictMode>
    <ThemeProvider storageKey='@writer/ui-theme'>
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  </React.StrictMode>
);
