'use client';
import { AnimatePresence } from 'framer-motion';
import React from 'react';

import { CursorFollower } from '@/utils/cursorFollower';
import { SmoothScroll } from '@/utils/smoothScroll';

export const Providers = ({ children }) => (
  <AnimatePresence>
    <CursorFollower />
    <SmoothScroll>{children}</SmoothScroll>
  </AnimatePresence>
);
