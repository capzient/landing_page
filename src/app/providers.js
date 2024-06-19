'use client';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Toaster } from 'sonner';

import { SmoothScroll } from '@/utils/smoothScroll';

export const Providers = ({ children }) => (
  <AnimatePresence>
    <Toaster />
    <SmoothScroll>{children}</SmoothScroll>
  </AnimatePresence>
);
