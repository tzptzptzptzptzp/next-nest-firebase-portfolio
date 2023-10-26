"use client"

import { Button } from '@/components/ui/Button'
import { Form } from '@/components/ui/Form'
import { FormTextInput } from '@/components/ui/Form/FormTextInput'

import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebase'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { signUpType, UserSchema } from '@/schema/user'

export default function SignUp() {
  const defaultValues = UserSchema.defaultValues

  const { control, handleSubmit, reset } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: zodResolver(UserSchema.signUpSchema)
  })

  const handleSubmitForm = (reqBody: signUpType) => {
    createUserWithEmailAndPassword(auth, reqBody.email, reqBody.password)
  }

  return (
    <>
      <main className="flex-center relative centering-x w-screen h-screen">
        <div className="relative w-1/3 h-auto p-16 rounded-3xl color-bg">
          <Form className='flex flex-col gap-8' onSubmit={handleSubmit(handleSubmitForm)}>
            <FormTextInput
              control={control}
              isRequired
              label={'ユーザー名'}
              maxLength={20}
              name={'userName'}
            />
            <FormTextInput
              control={control}
              isRequired
              label={'メールアドレス'}
              maxLength={100}
              name={'email'}
              type='email'
            />
            <FormTextInput
              control={control}
              isRequired
              label={'パスワード'}
              maxLength={100}
              name={'password'}
              type='password'
            />
            <FormTextInput
              control={control}
              isRequired
              label={'パスワード(確認)'}
              maxLength={100}
              name={'confirmPassword'}
              type='password'
            />
            <div className='flex-center w-full'>
              <Button
                text={'SingUp'}
                type={'submit'}
              />
            </div>
          </Form>
        </div>
      </main>
    </>
  )
}