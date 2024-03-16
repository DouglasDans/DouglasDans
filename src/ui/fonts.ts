import localFont from 'next/font/local'

export const cascadia = localFont({
   src: [
      {
         path: './fonts/CascadiaCode-Regular.ttf',
         weight: '400',
         style: 'normal'
      },
      {
         path: './fonts/CascadiaCode-SemiBold.ttf',
         weight: '500',
         style: 'normal'
      },
      {
         path: './fonts/CascadiaCode-Bold.ttf',
         weight: '600',
         style: 'normal'
      }
   ]
})

export const segoeui = localFont({
   src: './fonts/segoeui.ttf',
   display: 'swap'
})