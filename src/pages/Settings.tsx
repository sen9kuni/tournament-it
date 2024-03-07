import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'

function Settings() {
  const [setting, setSetting] = useState<
    string | number | readonly string[] | undefined
  >('')

  function changeSetting(event: React.FormEvent<HTMLInputElement>): void {
    setSetting(event.currentTarget.value)
  }

  function handleSubmit() {
    const data = setting + ''
    console.log(JSON.stringify(setting))

    localStorage.setItem(import.meta.env.VITE_APP_NAME_LOCALSTORAGE, data)
    setSetting('')
  }
  return (
    <div className='w-screen h-screen bg-pink-100 flex justify-center items-center'>
      <div className='w-[200px] bg-white p-5 rounded-sm flex flex-col gap-5'>
        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Label htmlFor='valueLocal'>value setting</Label>
          <Input
            id='valueLocal'
            value={setting}
            className='border'
            onChange={changeSetting}
          />
        </div>
        <Button size={'sm'} onClick={handleSubmit}>
          hello
        </Button>
      </div>
    </div>
  )
}

export default Settings
