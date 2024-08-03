'use client';

import { useContext, useEffect, useState } from 'react';
import { signIn } from '../../firebase/auth';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/firebase/AuthProvider';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, loginUser } = useContext(AuthContext)
  const router = useRouter()


  useEffect(() => {
    if (user) {
      router.push('/')
    }
  }, [user, router])


  const handleSignIn = async (e) => {
    e.preventDefault();
    await loginUser(email, password);
  };

  return (
    <form onSubmit={handleSignIn}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Sign In</button>
    </form>
  );
}
