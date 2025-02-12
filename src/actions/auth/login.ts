'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function loginAction(formData: FormData) {
  formData.set('redirectTo', '/');

  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      return redirect(`/auth/login?error=${error.type}`);
    }

    throw error;
  }
}
