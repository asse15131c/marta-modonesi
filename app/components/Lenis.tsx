"use client";

import { ReactLenis, useLenis } from "lenis/react";

export function Lenis({ children }: { children: any }) {
  return (
    <ReactLenis
      root
      options={{
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
