"use client"
import Link from 'next/link'
import './style1.css'
import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter();
  const navigate = (name)=>{
    router.push(name)
  }
  return (
    <div className='centered'>
      <p className='container cursive large'>Anik's recipe</p>
     <p><button  className='custom-button' onClick={()=>navigate("/recipes")}>recipe</button></p>
     <p > <button  className='custom-button' onClick={()=>navigate("/addrecipe")}>add recipe</button></p>
    </div>
  )
}
