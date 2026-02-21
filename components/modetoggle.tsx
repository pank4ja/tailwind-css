import React from 'react'
import { MoonIcon, SunIcon } from './icon';
import {useTheme} from "next-themes";

const ModeToggle = () => {
    const {theme, setTheme} = useTheme();
  return (

      <button>
      <div className='absolute flex items-center justify-center top-4 right-4'>
      <SunIcon />
      <MoonIcon />
    </div>
    </button>
  )
}

export default ModeToggle;
