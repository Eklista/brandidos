import type { ReactNode } from 'react';

interface PublicLayoutProps {
  children: ReactNode;
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <div className="min-h-screen bg-zinc-950">
      <main className="">
        {children}
      </main>
    </div>
  );
};

export default PublicLayout;