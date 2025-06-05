import React,{useState} from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'
import { resetAdminPass } from '@/services/authClient'
import {Input, Button} from '@/components/ui'
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from '@/components/ui/card'
import { Alert } from '@/components/ui'

import axios from 'axios'

const ResetPassowrd : React.FC = () => {
    const [params] = useSearchParams()
    const token = params.get('token') ?? ''
    const [newpassword, setNewPassword] = useState('')
    const [confirmnewpassword, setConfirmNewPassword] = useState('')
    const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
    const [message, setMessage] = useState('')
    const nav = useNavigate()



    const handleResetPassword = async() => {
        if(newpassword !== confirmnewpassword) {
            setStatus('error')
            setMessage('Passwords donot match')
            return
        }
        setStatus('loading')


        try {
            const res = await resetAdminPass(token, newpassword)
            setStatus('success')
            setMessage(res.data.message)
            setTimeout(() => nav('/login'), 2000)
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
           initial = {{opacity:0, y:20}}
           animate= {{opacity: 1, y:0}}
           className='w-full max-w-md'
        >
            <Card className='shadow-lg'>
                <CardHeader className='text-center'>
                    <CardTitle className='text-2xl'>Reset Password</CardTitle>
                    
                </CardHeader>
                <CardContent className='space-y-4'>
                    {status !== 'idle' && <Alert variant={status === 'success' ? 'default': 'destructive'}>
                        {message}
                    </Alert>}
                    <Input 
                       type = 'password'
                       placeholder='New Password'
                       value={newpassword}
                       onChange={e=> setNewPassword(e.target.value)}
                       />
                    <Input 
                       type='password'
                       placeholder='Cofirm New Password'
                       value={confirmnewpassword}
                       onChange={e => setConfirmNewPassword(e.target.value)}
                       />
                       <Button onClick={handleResetPassword} className='w-full'>Reset Password</Button>
                </CardContent>
            </Card>
        </motion.div>
        </div>
    )



}

export default ResetPassowrd;