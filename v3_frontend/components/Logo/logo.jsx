import React from 'react';
import Image from 'next/image';
import Link from 'next/link'

export default function Logo ( { toogleMenu}) {
  return (

    <Link href="/">
      <div className="flex items-center cursor-pointer">
      <div className="pr-2">
          <Image src="/xendO.png" alt="xendlogo" width={ 50 } height={ 50 } className={ `${toogleMenu && "rotate-360"
            }` }/>
      </div>
      <div>
        <span className="font-semibold text-2xl text-white xendlogo">xendtransfer</span>
        </div>
      
      </div>
    </Link>
  )
};
