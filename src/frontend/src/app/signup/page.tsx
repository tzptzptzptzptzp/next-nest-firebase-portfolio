"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { FullScreenContainer } from '@/components/templates/FullScreenContainer'
import { Button } from '@/components/atoms/Button'
import { Form } from '@/components/molecules/Form'
import { FormTextInput } from '@/components/molecules/Form/FormTextInput'

import { userSignUp } from '@/utils/authentication'

import { signUpType, UserSchema } from '@/schema/user'

import 'react-toastify/dist/ReactToastify.css'
import { useAppSelector } from '@/redux/hooks'
import Link from 'next/link'

export default function SignUp() {
  const router = useRouter()
  const [error, setError] = useState<null | string>()
  const currentLang = useAppSelector((state) => state.lang.value)
  const defaultValues = UserSchema.defaultValues

  const { control, handleSubmit, reset } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: zodResolver(UserSchema.signUpSchema)
  })

  const handleSubmitForm = async (reqBody: signUpType) => {
    try {
      await userSignUp(reqBody.email, reqBody.password, setError)
      router.push('/')
    } catch (error) {

    }
  }

  return (
    <FullScreenContainer>
      <main className="relative h-auto px-16 py-12 rounded-3xl color-bg">
        <Form className='flex flex-col gap-8' onSubmit={handleSubmit(handleSubmitForm)}>
          <FormTextInput
            control={control}
            isRequired
            label={currentLang === 'en' ? 'UserName' : 'ユーザー名'}
            maxLength={20}
            name={'userName'}
          />
          <FormTextInput
            control={control}
            isRequired
            label={currentLang === 'en' ? 'Email Address' : 'メールアドレス'}
            maxLength={100}
            name={'email'}
            type='email'
          />
          <FormTextInput
            control={control}
            isRequired
            label={currentLang === 'en' ? 'Password' : 'パスワード'}
            maxLength={100}
            name={'password'}
            type='password'
          />
          <FormTextInput
            control={control}
            isRequired
            label={currentLang === 'en' ? 'Confirm Password' : 'パスワード(確認)'}
            maxLength={100}
            name={'confirmPassword'}
            type='password'
          />
          {error &&
            <div className='text-center'>
              <p className='text-red-400'>{error}</p>
            </div>
          }
          <div className='flex-center w-full'>
            <Button
              text={currentLang === 'en' ? 'SignUp' : 'サインアップ'}
              type={'submit'}
            />
          </div>
          <div className='flex-center gap-6 text-xl underline'>
            <Link href='/'>
              {currentLang === 'en' ? 'TopPage' : 'トップへ'}
            </Link>
            <Link href='/login'>
              {currentLang === 'en' ? 'LogInPage' : 'ログイン'}
            </Link>
          </div>
        </Form>
      </main>
    </FullScreenContainer>
  )
}