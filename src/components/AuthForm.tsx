"use client"
import React, { useTransition } from 'react'
import { CardContent } from './ui/card'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { useRouter } from 'next/navigation'

interface Props {
    type: "login" | "signUp "
}

const AuthForm = ({ type }: Props) => {

    const isLoginForm = type === "login"
    const router = useRouter()
    const [isPending, startTransition] = useTransition()


    function handleSubmit(formData: FormData) {
        console.log(formData)
    }

    return (
        <form action={handleSubmit} >
            <CardContent className='grid item-center gap-4 w-full' >
                <div className=' flex  flex-col space-y-1.5' >
                    <Label htmlFor='email' > Email </Label>
                    <Input
                        type='email'
                        id='email'
                        name='email'
                        required
                        disabled={isPending}
                        placeholder='Enter your email'
                    />
                </div>
                <div className='flex flex-col space-y-1.5' >
                    <Label htmlFor='email' > Email </Label>
                    <Input
                        type='email'
                        id='email'
                        name='email'
                        required
                        disabled={isPending}
                        placeholder='Enter your email'
                    />
                </div>

            </CardContent>

        </form>
    )
}

export default AuthForm