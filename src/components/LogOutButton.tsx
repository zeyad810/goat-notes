"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'

const LogOutButton = () => {
    const [isLoading, setIsLoading] = useState(false)
    function handleLogOut() {
        console.log("Logging Out")
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