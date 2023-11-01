"use client"
import { useState } from 'react'

import { Button } from '@/components/ui/Button'
import { Form } from '@/components/ui/Form'
import { FormTextInput } from '@/components/ui/Form/FormTextInput'

import axios from 'axios'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebase'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { API_URL } from '@/data/apiUrl'

import { signUpType, UserSchema } from '@/schema/user'

export default function SignUp() {
  const [error, setError] = useState<null | string>()
  const defaultValues = UserSchema.defaultValues

  const { control, handleSubmit, reset } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: zodResolver(UserSchema.signUpSchema)
  })

  const handleSubmitForm = async (reqBody: signUpType) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, reqBody.email, reqBody.password)
      const user = userCredential.user
      const apiUrl = `http://localhost:8080${API_URL.createUser}`
      const postData = {
        uid: user.uid,
        email: reqBody.email,
      }
      await axios.post(apiUrl, postData)
    } catch (error: unknown) {
      if (typeof error === 'object' && error !== null && 'code' in error && 'message' in error) {
        const errorCode = error.code
        switch (errorCode) {
          case 'auth/email-already-in-use':
            setError('既に登録されているメールアドレスです')
            break
          default:
            setError('不明なエラーが発生しました')
            break
        }
        console.log(errorCode, error.message);
      }
    }
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
            {error &&
              <div className='text-center'>
                <p className='text-red-400'>{error}</p>
              </div>
            }
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