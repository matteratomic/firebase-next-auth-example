'use client';

import { useContext, useEffect, useState } from 'react';
import { signUp } from '../../firebase/auth';
import { AuthContext } from '@/firebase/AuthProvider';
import { useRouter } from 'next/navigation';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user,createUser } = useContext(AuthContext)
  const router = useRouter()

  const handleSignUp = async (e) => {
    e.preventDefault();
    await createUser(email, password);
  };

  useEffect(() => {
    if (user) {
      router.push('/')
    }
  }, [user,router])

  return (
    <form onSubmit={handleSignUp}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
  );
}
