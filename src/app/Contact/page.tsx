import Image from 'next/image';
import Link from 'next/link'
import lading from "@/app/lading/lading.png"
import Home from '@/app/page'
export default function main  () {
  return(
   <div className='main'> 
      <ul >
   <li > <Link className='main2' href='/Home'>Home</Link></li>
    <li ><Link className='main2' href='/Services'>Service</Link></li>
    </ul>
    
    <ul className='main4'>
  <li > <Link className='main3' href='/About'>About us</Link> </li>
   <li > <Link className='main3' href='Contact'>Contact</Link></li>

   </ul>
   <Image className='img' src={lading} alt=''></Image>

</div>
  )
}
