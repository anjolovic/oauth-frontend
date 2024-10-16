import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <main className="text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to OAuth Service</h1>
        <p className="text-xl mb-8">Secure authentication for your application</p>
        <Link href="/login" passHref>
          <Button size="lg">Login</Button>
        </Link>
      </main>
    </div>
  );
}
