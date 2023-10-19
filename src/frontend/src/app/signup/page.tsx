"use client"

import { ChangeEvent, useCallback, useState } from 'react'
import { FormTextInput } from '@/components/ui/Form/FormTextInput'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { UserSchema } from '@/schema/user'

export default function SignUp() {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const defaultValues = UserSchema.defaultValues

  const { control, handleSubmit, reset } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: zodResolver(UserSchema.signUpSchema)
  })

  const inputUserName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value)
  }, [setUserName])

  const inputEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }, [setEmail])

  const inputPassword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }, [setPassword])

  const inputConfirmPassword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value)
  }, [setConfirmPassword])

  return (
    <>
      <main className="flex-center relative centering-x w-screen h-screen">
        <div className="flex flex-col gap-8 relative w-1/3 h-auto p-16 rounded-3xl color-bg">
          <FormTextInput
            control={control}
            isRequired
            label={'ユーザー名'}
            maxLength={20}
            name={'userName'}
            onChange={inputUserName}
          />
          <FormTextInput
            control={control}
            isRequired
            label={'メールアドレス'}
            maxLength={100}
            name={'email'}
            onChange={inputEmail}
            type='email'
          />
          <FormTextInput
            control={control}
            isRequired
            label={'パスワード'}
            maxLength={100}
            name={'password'}
            onChange={inputPassword}
            type='password'
          />
          <FormTextInput
            control={control}
            isRequired
            label={'パスワード(確認)'}
            maxLength={100}
            name={'confirmPassword'}
            onChange={inputConfirmPassword}
            type='password'
          />
        </div>
      </main>
    </>
  )
}