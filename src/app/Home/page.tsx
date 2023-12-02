'use client'
import Image from 'next/image';
import Link from 'next/link'
import lading from "@/app/lading/lading2.png"
import to1 from '@/app/Toyota/car43.png'
import aut from '@/app/lading/gher2.png'
import autm from '@/app/lading/kil2.png'
import auto from '@/app/lading/fuel2.png'
import suz from '@/app/suzuki/suzuki1.png'
import kia from '@/app/kia/kia2.png'
import honda from '@/app/Honda/honda2.png'
import suzk from '@/app/Honda/honda3.png'
import kia2 from '@/app/kia/kia5.png'
import end from '@/app/lading/end2.png'
import { motion , AnimatePresence } from 'framer-motion';
import React from 'react'
import  mai from '@/app/lading/12.jpg'






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
   <h1>SIMPLE</h1>
   <h2>STYLISH</h2>
   <button><Link href='/join'><b>Join Now</b></Link></button>
  
 
  <Image className='img' src={lading} alt=''></Image>

<div className='border'>
  <h1>Toyota Corolla</h1>
  <h2>$52/ <sub>Year</sub></h2>
<Image className='img3' src={aut} alt='Automatic'></Image>
<Image className='img4' src={autm} alt='Automatic'></Image>
<Image className='img5' src={auto} alt='Automatic'></Image>
<h3>Gher</h3>
<h4>160 Kl</h4>
<h5>21 MPG</h5>

  <Image className='img2' src={to1} alt=''></Image>
</div>

<div className='border2'>
  <h1>Suzuki Alto VXR</h1>
  <h2>$57/ <sub>Year</sub></h2>
<Image className='img3' src={aut} alt='Automatic'></Image>
<Image className='img4' src={autm} alt='Automatic'></Image>
<Image className='img5' src={auto} alt='Automatic'></Image>
<h3>Gher</h3>
<h4>160 Kl</h4>
<h5>21 MPG</h5>

  <Image className='img2' src={suz} alt=''></Image>
</div>
<div className='border3'>
  <h1>Honda CIVIC</h1>
  <h2>$60/ <sub>Year</sub></h2>
<Image className='img3' src={aut} alt='Automatic'></Image>
<Image className='img4' src={autm} alt='Automatic'></Image>
<Image className='img5' src={auto} alt='Automatic'></Image>
<h3>Gher</h3>
<h4>160 Kl</h4>
<h5>21 MPG</h5>

  <Image className='img2' src={honda} alt=''></Image>
</div>
<div className='border4'>
  <h1>Kia New model</h1>
  <h2>$70/ <sub>Year</sub></h2>
<Image className='img3' src={aut} alt='Automatic'></Image>
<Image className='img4' src={autm} alt='Automatic'></Image>
<Image className='img5' src={auto} alt='Automatic'></Image>
<h3>Gher</h3>
<h4>160 Kl</h4>
<h5>21 MPG</h5>

  <Image className='img2' src={kia} alt=''></Image>
</div>
<div className='border5'>
  <h1>Honda CiVIC 2014 </h1>
  <h2>$52/ <sub>Year</sub></h2>
<Image className='img3' src={aut} alt='Automatic'></Image>
<Image className='img4' src={autm} alt='Automatic'></Image>
<Image className='img5' src={auto} alt='Automatic'></Image>
<h3>Gher</h3>
<h4>160 Kl</h4>
<h5>21 MPG</h5>

  <Image className='img2' src={suzk} alt=''></Image>
</div>
<div className='border6'>
  <h1>Kia Model 2023</h1>
  <h2>$52/ <sub>Year</sub></h2>
<Image className='img3' src={aut} alt='Automatic'></Image>
<Image className='img4' src={autm} alt='Automatic'></Image>
<Image className='img5' src={auto} alt='Automatic'></Image>
<h3>Gher</h3>
<h4>160 Kl</h4>
<h5>21 MPG</h5>

  <Image className='img2' src={kia2} alt=''></Image>
</div>
<div className='border7'>
  <h1>Toyota Corolla</h1>
  <h2>$52/ <sub>Year</sub></h2>
<Image className='img3' src={aut} alt='Automatic'></Image>
<Image className='img4' src={autm} alt='Automatic'></Image>
<Image className='img5' src={auto} alt='Automatic'></Image>
<h3>Gher</h3>
<h4>160 Kl</h4>
<h5>21 MPG</h5>

  <Image className='img2' src={to1} alt=''></Image>
</div>
<div className='border8'>
  <h1>Suzuki Alto VXR</h1>
  <h2>$57/ <sub>Year</sub></h2>
<Image className='img3' src={aut} alt='Automatic'></Image>
<Image className='img4' src={autm} alt='Automatic'></Image>
<Image className='img5' src={auto} alt='Automatic'></Image>
<h3>Gher</h3>
<h4>160 Kl</h4>
<h5>21 MPG</h5>

  <Image className='img2' src={suz} alt=''></Image>
</div>
<div className='border9'>
  <h1>Honda CIVIC</h1>
  <h2>$60/ <sub>Year</sub></h2>
<Image className='img3' src={aut} alt='Automatic'></Image>
<Image className='img4' src={autm} alt='Automatic'></Image>
<Image className='img5' src={auto} alt='Automatic'></Image>
<h3>Gher</h3>
<h4>160 Kl</h4>
<h5>21 MPG</h5>

  <Image className='img2' src={honda} alt=''></Image>
</div>
<div className='border10'>
  <h1>Kia New model</h1>
  <h2>$70/ <sub>Year</sub></h2>
<Image className='img3' src={aut} alt='Automatic'></Image>
<Image className='img4' src={autm} alt='Automatic'></Image>
<Image className='img5' src={auto} alt='Automatic'></Image>
<h3>Gher</h3>
<h4>160 Kl</h4>
<h5>21 MPG</h5>

  <Image className='img2' src={kia} alt=''></Image>
</div>
<div className='border11'>
  <h1>Honda CiVIC 2014 </h1>
  <h2>$52/ <sub>Year</sub></h2>
<Image className='img3' src={aut} alt='Automatic'></Image>
<Image className='img4' src={autm} alt='Automatic'></Image>
<Image className='img5' src={auto} alt='Automatic'></Image>
<h3>Gher</h3>
<h4>160 Kl</h4>
<h5>21 MPG</h5>

  <Image className='img2' src={suzk} alt=''></Image>
</div>
<div className='border12'>
  <h1>Kia Model 2023</h1>
  <h2>$52/ <sub>Year</sub></h2>
<Image className='img3' src={aut} alt='Automatic'></Image>
<Image className='img4' src={autm} alt='Automatic'></Image>
<Image className='img5' src={auto} alt='Automatic'></Image>
<h3>Gher</h3>
<h4>160 Kl</h4>
<h5>21 MPG</h5>

  <Image className='img2' src={kia2} alt=''></Image>
</div>
<div className='end'>



<Image className='img2' src={end} alt=''></Image>  
<h1>GARAGE SHOW</h1>
  <h2>The best and smart cars</h2>
  <h3>Your Website.com</h3>
  
   <h4><Link  href='/Home'>Home</Link></h4>
    <h5><Link  href='/Services'>Service</Link></h5>

    
   
  <h6><Link  href='/About'>About us</Link> </h6>
   <p> <Link  href='Contact'>Contact</Link></p>

 

</div>
  </div>

  )
}