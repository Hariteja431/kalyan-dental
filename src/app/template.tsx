"use client";

import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="animate-page-enter">
      <main className="min-w-0 overflow-x-hidden pt-16 md:pt-[72px]">
        {children}
      </main>
    </div>
  );
}
