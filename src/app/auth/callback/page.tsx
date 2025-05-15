'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { createClient } from '@/utils/supabaseClient'

export default function CallbackPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const handleOAuth = async () => {
      const supabase = createClient()
      const code = searchParams.get('code')

      if (code) {
        const { error } = await supabase.auth.exchangeCodeForSession(code)

        if (error) {
          console.error('OAuth exchange error:', error.message)
        }
      } else {
        console.error('No code found in URL')
      }

      router.replace('/')
    }

    handleOAuth()
  }, [router, searchParams])

  return <p>Signing in...</p>
}
