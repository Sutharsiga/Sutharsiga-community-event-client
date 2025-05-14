// app/auth/callback/page.tsx
'use client'

import { useEffect } from 'react'
import { createClient } from '@/utils/supabaseClient'
import { useRouter } from 'next/navigation'

export default function CallbackPage() {
  const router = useRouter()

  useEffect(() => {
    const handleOAuth = async () => {
      const supabase = createClient()
      await supabase.auth.getSession()
      router.push('/')
    }

    handleOAuth()
  }, [router])

  return <p>Signing in...</p>
}
