import React, { useEffect, useState } from 'react'
import { IoMoon, IoSunny } from 'react-icons/io5/index.js'

const themes = ['light', 'dark']

export default function ThemeToggle() {
  const [isMounted, setIsMounted] = useState(false)

  const [theme, setTheme] = useState(() => {
    if (import.meta.env.SSR)
      return undefined

    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme'))
      return localStorage.getItem('theme')

    if (window.matchMedia('(prefers-color-scheme: dark)').matches)
      return 'dark'

    return 'light'
  })

  const toggleTheme = () => {
    const t = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', t)
    setTheme(t)
  }

  const setThemeMetaTag = () => {
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta)
      meta.setAttribute('content', theme === 'light' ? '#ffffff' : '#1e293b')
  }

  useEffect(() => {
    setThemeMetaTag()

    const root = document.documentElement
    if (theme === 'light')
      root.classList.remove('dark')
    else
      root.classList.add('dark')
  }, [theme])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted
    ? (
    <div className="inline-flex items-center p-[1px] rounded-3xl bg-gray-400 dark:bg-purple-500">
      {themes.map((t) => {
        const checked = t === theme
        return (
          <button
            key={t}
            className={`${
              checked ? 'bg-white text-black' : ''
            } cursor-pointer rounded-3xl p-2`}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {t === 'light' ? <IoSunny /> : <IoMoon />}
          </button>
        )
      })}
    </div>
      )
    : (
    <div />
      )
}
