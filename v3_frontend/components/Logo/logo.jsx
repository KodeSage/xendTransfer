import React from 'react';
import Link from 'next/link'

export default function Logo ( ) {
  return (

    <Link href='/' >
      <img src="./desktoplogo.png" className="h-11 cursor-pointer" />
    </Link>
  )
};
