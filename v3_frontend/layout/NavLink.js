import React from 'react';
import { useRouter } from "next/router";
import Link from "next/link";


export default function NavLink ( {navIcon, href, aTag } )
{
    let curl = useRouter();
    const pathlocation = curl.pathname;

  return (
      <li className={ `flex items-center px-5 py-3 my-1 rounded-full ${ pathlocation === href ? "bg-blue-600 dark:bg-blue-800" : "" }` } onClick={ () => setNavIsOpen( false ) }>
          <span className={ `flex items-center text-2xl ${ pathlocation === href ? "text-white" : "text-slate-600 dark:text-slate-400" }` }> { navIcon } </span>
          <Link href={ href }>
              <a className={ `ml-3 text-sm ${ pathlocation === href ? "text-white" : "transition-all delay-200 text-slate-600 dark:text-slate-400 hover:text-blue-600 hover:font-bold" }` }>{ aTag }</a>
          </Link>
      </li>
  )
}
