'use client';

import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

/** Instant route changes — no animation blocking paint */
export default function PageTransitionShell({ children }: Props) {
  return <>{children}</>;
}
