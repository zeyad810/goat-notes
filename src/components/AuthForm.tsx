"use client"
import React, { useTransition } from 'react'
import { CardContent, CardFooter } from './ui/card'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'
import { loginAction, signUpAction } from '@/actions/user'

interface Props {
    type: "login" | "signUp" // ✅ No trailing space
}

const AuthForm = ({ type }: Props) => {
    const isLoginForm = type === "login" // ✅ Correct logic
    const router = useRouter()
    const [isPending, startTransition] = useTransition()

    function handleSubmit(formData: FormData) {
        startTransition(async () => {
            const email = formData.get("email") as string
            const password = formData.get("password") as string

            let errorMessage = ""
            let title = ""
            let description = ""

            if (isLoginForm) {
                const result = await loginAction(email, password)
                errorMessage = result?.errorMessage || ""
                title = "Logged In"
                description = "You have been successfully logged in"
            } else {
                const result = await signUpAction(email, password)
                errorMessage = result?.errorMessage || ""
                title = "Signed Up"
                description = "Check your email for a confirmation link"
            }

            if (errorMessage) {
                toast.error(errorMessage)
            } else {
                toast.success(title, { description })
                router.replace("/")
            }
        })
    }

    return (
        <form action={handleSubmit}>
            <CardContent className='grid item-center gap-4 w-full'>
                <div className='flex flex-col space-y-1.5'>
                    <Label htmlFor='email'>Email</Label>
                    <Input
                        type='email'
                        id='email'
                        name='email'
                        required
                        disabled={isPending}
                        placeholder='Enter your email'
                    />
                </div>
                <div className='flex flex-col space-y-1.5'>
                    <Label htmlFor='password'>Password</Label>
                    <Input
                        type='password'
                        id='password'
                        name='password'
                        required
                        disabled={isPending}
                        placeholder='Enter your password'
                    />
                </div>
            </CardContent>
            <CardFooter className='flex items-center flex-col gap-6 mt-6'>
                <Button className='w-full' disabled={isPending}>
                    {isPending ? <Loader2 className='animate-spin' /> : isLoginForm ? "Login" : "Sign Up"}
                </Button>
                <p>
                    {isLoginForm ? "Don't have an account yet?" : "Already have an account?"}
                    <Link
                        href={isLoginForm ? "/sign-up" : "/login"}
                        className={`text-blue-500 underline px-1 ${isPending ? "pointer-events-none opacity-50" : ""}`}
                    >
                        {isLoginForm ? "Sign Up" : "Login"}
                    </Link>
                </p>
            </CardFooter>
        </form>
    )
}

export default AuthForm
