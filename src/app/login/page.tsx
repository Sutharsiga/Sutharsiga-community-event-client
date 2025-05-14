'use client'

import { createClient } from '@/utils/supabaseClient'

export default function LoginButton() {
  const handleLogin = async () => {
    const supabase = createClient()
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    })
  }

  return <button onClick={handleLogin}>Sign in with Google</button>
}