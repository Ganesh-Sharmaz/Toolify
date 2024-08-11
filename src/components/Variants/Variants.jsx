import React from 'react'
import Stack from '@mui/material/Stack'
import  Skeleton  from '@mui/material/Skeleton'


function Variants() {
  return (
    <>
    <div className=' h-screen w-full flex justify-center pt-20 pb-20 bg-black'>
    <Stack  spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      
      {/* For other variants, adjust the size with `width` and `height` */}
      {/* <Skeleton sx={{ bgcolor: 'grey.500'}} variant="circular" width={40} height={40} /> */}


      <Skeleton animation="wave" sx={{ bgcolor: 'grey.900'}} variant="rounded" width={1012} height={60} />
      <Skeleton animation="wave"  variant="rounded" sx={{ fontSize: '1rem', bgcolor: 'grey.900' }} />
      <div className='gap-3 flex '>
      <Skeleton animation="wave" sx={{ bgcolor: 'grey.900'}} variant="rounded" width={600} height={400} />
      <Skeleton animation="wave" sx={{ bgcolor: 'grey.900'}} variant="rounded" width={400} height={400} />
      </div>

    </Stack>
    </div>
    
    </>
  )
}

export default Variants