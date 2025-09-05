import React from 'react';

interface AuthLayoutProps {
  leftContent: React.ReactNode;
  children: React.ReactNode;
}

export default function AuthLayout({ leftContent, children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex bg-gradient-to-b from-navy-900 to-navy-800 ">
      <div className="lg:w-1/2">{leftContent}</div>
      <div className="w-full lg:w-1/2 flex items-center justify-centerpx-6 py-12">
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
