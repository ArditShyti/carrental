"use client";

import { Navbar } from "./Navbar";
import { FloatingContactButtons } from "./FloatingContactButtons";
import { MarketingFooter } from "./MarketingFooter";

type MarketingPageShellProps = {
  children: React.ReactNode;
};

export function MarketingPageShell({ children }: MarketingPageShellProps) {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      {children}
      <MarketingFooter />
      <FloatingContactButtons />
    </div>
  );
}
