import Link from 'next/link'
import logo from '@/public/images/logo.png'
import Image from 'next/image'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
   <Image src={logo} width={120} height={120} alt='credence-logo'/>
    </Link>
  )
}
