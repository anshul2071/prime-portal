import React, { useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { verifyAdminEmail } from '@/services/authClient'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const VerifyLinkPage: React.FC = () => {
  const [params] = useSearchParams()
  const token = params.get('token') ?? ''
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (!token) {
      setStatus('error')
      setMessage('No token provided.')
      return
    }
    setStatus('loading')
    verifyAdminEmail(token)
      .then(res => {
        setStatus('success')
        setMessage(res.message)
      })
      .catch(err => {
        setStatus('error')
        setMessage(err.response?.data?.message ?? err.message)
      })
  }, [token])

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <Card className="shadow-lg">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl">Verify Your Email</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {status === 'loading' && <div className="text-center">Verifying…</div>}
            {(status === 'success' || status === 'error') && (
              <Alert variant={status === 'success' ? 'default' : 'destructive'}>
                {status === 'success' ? (
                  <CheckCircle className="h-4 w-4 text-green-500" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-red-500" />
                )}
                <AlertDescription className="ml-2">{message}</AlertDescription>
              </Alert>
            )}
            {(status === 'success' || status === 'error') && (
              <div className="text-center">
                <Link to="/login">
                  <Button size="sm">
                    {status === 'success' ? 'Go to Login' : 'Back to Login'}
                  </Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

export default VerifyLinkPage
