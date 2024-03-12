import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const FormSchema = z.object({
  template: z.string({ required_error: 'Please select template' }),
  title: z.string({ required_error: 'Please input title' }).min(2, {
    message: 'Username at least 2 characters.',
  }),
})

function Wellcome() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })
  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
  }
  return (
    <div className='w-screen h-screen bg-pink-100 flex justify-center items-center'>
      <div className='bg-white p-5 rounded-sm'>
        <div className=' flex flex-col gap-2 items-center'>
          <span>Hello there👀</span>
          <span>Wellcome to Tournamet ✨IT✨</span>
          <span>Please input this start form</span>
          <Form {...form}>
            <form
              className='border p-3 rounded'
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className='flex flex-col gap-4 items-center'>
                <FormField
                  control={form.control}
                  name='title'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='capitalize'>title</FormLabel>
                      <FormControl>
                        <Input
                          className='w-[200px]'
                          placeholder='input title'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='template'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='capitalize'>theme</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className='w-[200px]'>
                            <SelectValue placeholder='Select a theme' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className='w-[200px]'>
                          <SelectItem value='eSports'>E-Sport</SelectItem>
                          <SelectItem value='Sports'>Sports</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type='submit'>Lets Goo</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Wellcome
