'use client'
import { Cookie } from 'lucide-react'
import * as CookieConsent from 'vanilla-cookieconsent'

export default function ManageCookiesButton() {
  return (
    <button onClick={() => CookieConsent.showPreferences()} className='fixed bottom-4 left-4 z-50 bg-background p-2 rounded-full cursor-pointer hover:backdrop-opacity-90'>
        <Cookie className='text-primary w-6 h-6'/>
    </button>
  )
}