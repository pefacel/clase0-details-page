import { useRouter } from 'next/router'
import React from 'react'

export default function Pagina1() {

const router=useRouter()

let currentPage=router.asPath
  return (

<>

<button onClick={()=>router.push('/pagina1')}  className='px-8'>pagina1 </button>
<button onClick={()=>router.push('/pagina2')}  className='px-8'>pagina2 </button>

</>

   )
}
