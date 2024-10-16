import { useContext, useEffect } from 'react';
import { AuthContext } from '@/contexts/AuthContext';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const auth = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!auth?.user) {
      router.push('/login');
    }
  }, [auth?.user, router]);

  if (!auth?.user) {
    return null;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {auth.user.email}!</p>
      <p>First Name: {auth.user.first_name}</p>
      <p>Last Name: {auth.user.last_name}</p>
      <button onClick={auth.logout}>Logout</button>
    </div>
  );
}