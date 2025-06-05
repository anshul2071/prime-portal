import React, {useState } from 'react'
import {motion} from 'framer-motion'
import { forgotAdminPass } from '@/services/authClient'
import {Input, Button} from '@/components/ui'

import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from '@/components/ui/card'
import axios from 'axios'

import { Alert } from '@/components/ui'

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
    const [message, setMessage] = useState ('')



    const handleForgotPassowrd = async() => {
        setStatus('loading')

        try {
            const res = await forgotAdminPass(email)
            setStatus('success')
            setMessage(res.message)
        } catch (err:unknown) {
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
                initial = {{opacity: 0, y:20}}
                animate = {{opacity:1, y: 0}}
                className='w-full max-w-md'
                >
                    <Card className='shadow-lg'>
                        <CardHeader className='text-center'>
                            <CardTitle className='text-2xl'>Forgot Password</CardTitle>

                        </CardHeader>
                        <CardContent className='space-y-4'>
                            {status !== 'idle' && <Alert variant={status === 'success' ? 'default' : 'destructive'}>
                                {message}
                            </Alert>}
                            <Input 
                               type = 'email'
                               placeholder='you@company.com'
                               value={email}
                               onChange={e => setEmail(e.target.value)}
                               />
                               <Button onClick={handleForgotPassowrd} className='w-full'>Send Reset Link</Button>
                        </CardContent>
                    </Card>
                </motion.div>
                
            </div>

    )
}

export default ForgotPassword;