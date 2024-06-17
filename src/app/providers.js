'use client';
import { AnimatePresence } from 'framer-motion';
import React from 'react';

import { SmoothScroll } from '@/utils/smoothScroll';

export const Providers = ({ children }) => (
  <AnimatePresence>
    <CursorFollower />
    <SmoothScroll>{children}</SmoothScroll>
  </AnimatePresence>
);
