"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { logoutAction } from '@/actions/user'
import { toast } from 'sonner'

const LogOutButton = () => {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    async function handleLogOut() {
        const { errorMessage } = await logoutAction()
        setIsLoading(true)

        if (errorMessage) {
            toast.error(errorMessage)
        } else {
            toast.success("LogOut successfully", { description: "You have been logged out successfully" })
            router.push("/")
        }
        setIsLoading(false)
    }
    return (
        <Button
            className='w-24'
            variant={'outline'}
            disabled={isLoading}
            onClick={handleLogOut}
        >
            {isLoading ? <Loader2 className='animate-spin' /> : "Log Out"}

        </Button>
    )
}

export default LogOutButton