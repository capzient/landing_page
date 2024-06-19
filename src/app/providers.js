'use client';
import { AnimatePresence } from 'framer-motion';
import React from 'react';

import { SmoothScroll } from '@/utils/smoothScroll';

export const Providers = ({ children }) => (
  <AnimatePresence>
    <SmoothScroll>{children}</SmoothScroll>
  </AnimatePresence>
);
