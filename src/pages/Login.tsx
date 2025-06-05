"use client"


import React, {useState} from 'react'
import {useForm, Controller} from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import useAuth from '@/hooks/useAuth'
import {Label, Input, Button} from '@/components/ui/index'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {motion} from 'framer-motion'
import {Mail,KeyRound,Eye,EyeOff,Login, AlertCircle, LogIn} from 'lucide-react'
import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert'



type LoginFormValues = {
    email: string
    password: string
}


const isValidEmail = (
    email: string
): boolean => {
    const emailRegex  =  /\S+@\S+\.\S+/
    return emailRegex.test(email);
}

const Login: React.FC = () => {
    const {login} = useAuth()
    const navigate = useNavigate()



    const {
        control,
        handleSsubmit,
        formState: {errors, isSubmitting},
    } = useForm<LoginFormValues>({
        defaultValues: {
            email: '',
            password: ''
        },
    })
    

    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')


    const onSubmit = async(data: LoginFormValues) => {
        setError('')

        if(!isValidEmail(data.email)) {
            setError('Invalid Email Form')
            return
        }
    try {
        await login ({ email: data.email.trim().toLowerCase(), password: data.password.trim()})
     }

    catch (err: unknown) {
        if(err instanceof Error) {
            setError(err.message)
         ra
        } else {
            setError('An  error occured')
        }
    }
    
    
}
  

return (
    <div className='min-h flex items-center justify-center bg-gradient-to-br from-slate-50 via-slate-100 to-slate-950 dark:via-slate-950 dark:to-slate-950 p-4'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-br from-primary/5 to-primary/10 z-10'/>
        <div className='absoulte top-[30vh] right-[10vw] w-[300px] h-[300px]  rounded-full bg-primary/5 blur-3xl  z-10'/>

        <motion.div 
         initial ={{opacity: 0, y:20}}
         animate = {{opacity:1 , y: 0}}
         transition={{duration: 0.5}}
         className='w-full max-w-md'
         >
            <div className='text-center mb-6'>
                <div className='inline-flex items-center justify-center pb-2 bg-primary/10 rounded-full mb-4'>
                <LogIn className='h-6 w-6 text-primary'/>

                </div>
                <h1 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70'>
                
                Admin Portal
                </h1>
                <p className='text-sm text-muted-foreground'>
                    Login to your account
                </p>
            </div>

            <Card className='border-0 shadow-xl backdrop-blur-sm bg-white/90 dark:bg-slate-900/90 overflow-hidden'>
            <CardHeader className='space-y-1 pb-2'>
                <CardTitle className='text-2xl font-bold text-center'>Welcome Back

                </CardTitle>
                <CardDescription className='text-center'>
                    Enter you Credentials below
                </CardDescription>
            </CardHeader>


            <CardContent>
                {error && (
                    <Alert variant='destructive' className='mb-4'>
                        <AlertCircle className='h-4 w-4'/>
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>

                    </Alert>
                )}

                <form onSubmit={handleSsubmit(onSubmit)} className='space-y-4'>
                    <div className='space-y-2'>
                        <Label htmlFor='email'>Email</Label>
                        <div className='relative'>
                            <div className='absolute left-3 top-1/2 transform -translate-y-1.2 text-muted-foreground'>
                                <Mail className='h-4 w-4'/>
                            </div>

                            <Controller 
                               name='email'
                               control={control}
                               rules = {{
                                required: true,
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Invalid Email Format"
                                },
                                
                            
                               }}

                               render ={({field}) =>(
                                    <Input 
                                       id='email'
                                       type='email'
                                       placeholder='admin@company.com'
                                       {...field}
                                       />
                                       )}
                                       />
                                       </div>

                        {errors.email && (
                            <p className='text-xs text-red-600 dark:text-red mt-1'>
                            {errors.email.message}
                            </p>
                        )}
                        </div>

                    </form>
            </CardContent>
            </Card>
         </motion.div>
    </div>
)


}