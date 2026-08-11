'use client'
import { Cookie } from 'lucide-react'
import * as CookieConsent from 'vanilla-cookieconsent'

export default function ManageCookiesButton() {
    return (
        <button onClick={() => CookieConsent.showPreferences()} className='cursor-pointer hover:backdrop-opacity-90 text-[7px] xs:text-[10px] text-gray-600 dark:text-gray-500 uppercase tracking-widest flex items-center gap-2'>
            <Cookie className='text-violet-500 w-3 h-3' /> COOKIES
        </button>
    )
}