import AuthForm from '@/components/AuthForm'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'

const SignUpPage = () => {
    return (
        <div className='mt-20 flex flex-col flex-1 items-center'>
            <Card className='w-full max-w-md'>
                <CardHeader className='mb-4'>
                    <CardTitle className='text-center text-3xl'>
                        Sign Up
                    </CardTitle>
                </CardHeader>

                <AuthForm type="signUp" />
            </Card>
        </div>
    )
}

export default SignUpPage
