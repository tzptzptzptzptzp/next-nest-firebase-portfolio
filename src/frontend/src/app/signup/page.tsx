"use client"

import { TextInput } from '@/components/ui/TextInput'
import { ChangeEvent, useCallback, useState } from 'react'

export default function SignUp() {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const inputUserName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value)
  }, [setUserName])

  return (
    <>
      <main className="flex-center relative centering-x w-screen h-screen">
        <div className="flex relative w-1/3 h-auto">
          <TextInput
            fullWidth={true}
            label={'ユーザー名'}
            variant='standard'
            multiline={false}
            required={true}
            rows={1}
            value={userName}
            type={'text'}
            onChange={inputUserName}
          />
        </div>
      </main>
    </>
  )
}