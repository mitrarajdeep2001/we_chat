"use client";

import React, { Suspense, useState, useEffect } from "react";

interface DelayedSuspenseProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
  delay?: number;
}

const DelayedSuspense: React.FC<DelayedSuspenseProps> = ({
  children,
  fallback,
  delay = 300,
}) => {
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFallback(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <Suspense fallback={showFallback ? fallback : null}>{children}</Suspense>
  );
};

export default DelayedSuspense;
