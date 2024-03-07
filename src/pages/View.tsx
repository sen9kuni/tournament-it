import { useEffect, useState } from 'react'

function View() {
  const [valueView, setValueView] = useState<string | null>('')

  useEffect(() => {
    const displayData = () => {
      const storageData = localStorage.getItem(
        import.meta.env.VITE_APP_NAME_LOCALSTORAGE
      )
      setValueView(storageData)
    }
    displayData()

    window.addEventListener('storage', displayData)

    return () => {
      window.removeEventListener('storage', displayData)
    }
  }, [])
  return (
    <div className='w-screen h-screen bg-pink-100 flex justify-center items-center'>
      <div className='w-[200px] bg-white p-5 rounded-sm flex flex-col items-center gap-5'>
        <span>here</span>
        <p>{valueView ? valueView : '-'}</p>
      </div>
    </div>
  )
}

export default View
