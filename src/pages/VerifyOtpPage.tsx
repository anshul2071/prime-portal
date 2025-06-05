import React, {useState} from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import { verfiyAdminOtp } from '@/services/authClient'
import {Input, Button} from '@/components/ui/index'
import axios from 'axios'

import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from '@/components/ui/card';

import {Alert, AlertDescription} from '@/components/ui/alert'
import { CheckCircle, AlertCircle } from 'lucide-react'


const VerifyOtpPage: React.FC = () => {
    const [paramms] = useSearchParams()
    const token = paramms.get('token') ?? ''
    const [otp, setOtp] = useState('')
    const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
    const [message, setMessage] = useState('')


    const handleSubmit = async() => {
        setStatus('loading')
        setMessage('')
        try {
            const res = await verfiyAdminOtp(token, otp)
            setStatus('success')
            setMessage(res.data.message)
        }
        catch (err:unknown) {
            console.log(err)
            setStatus('error')
            if(axios.isAxiosError(err))
            {
                setMessage(err.response?.data?.message ?? err.message)

            }else if (err instanceof Error) {
                setMessage(err.message)
            } else {
                setMessage(String(err))
            }
        }
    
    }

    return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <motion.div 
          initial = {{opacity:0, y:20}}
          animate = {{opacity:1, y:0}}
          className = "w-full max-w-md"
          >
            <Card className='shadow-lg'>
                <CardHeader className='text-center'>
                    <CardTitle className='text-2xl'>Verify Via OTP</CardTitle>

                </CardHeader>

                <CardContent className='space-y-4'>
                    {(status === 'success' || status === 'error') && (
                        <Alert variant={status === 'success' ? 'default': 'destructive'}>
                            {status === 'success' ? (
                                <CheckCircle className='h-4 w-4 text-green-500' />

                            ) : (
                                <AlertCircle className='h-4 w-4 text-red-500' />
                            )
                        }
                        <AlertDescription className='ml-2'>{message}</AlertDescription>
                        </Alert>
                    )}
                    {status !== 'success' && (
                        <>
                        <Input 
                          type = 'text'
                          placeholder='Enter OTP'
                          value={otp}
                          onChange={e=> setOtp(e.target.value)}
                          />
                          <Button onClick={handleSubmit} className='w-full'
                          >
                            Verify OTP
                          </Button>
                        </>
                        )}
                        {status === 'success' &&  (
                            <div className='text-center'>
                                <Link to = '/login'>
                                <Button size= 'sm'>
                                    Go to Login
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


export default VerifyOtpPage;