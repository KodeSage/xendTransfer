import React from 'react';
import Image from 'next/image';
import Link from 'next/link'

export default function Logo() {
  return (

    <Link href="/">
      <div className="flex items-center cursor-pointer">
      <div className="pr-2">
     <Image src="/xendO.png" alt="xendlogo" width={50} height={50} />
      </div>
      <div>
        <span className="font-semibold text-2xl text-white">xendtransfer</span>
        </div>
      
      </div>
    </Link>
  )
};
