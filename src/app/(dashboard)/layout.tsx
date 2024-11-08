import BreadCrumbHeader from '@/components/BreadCrumbHeader'
import DesktopSideBar from '@/components/desktop-sidebar'
import { ModeToggle } from '@/components/ThemeModeToggle'
import { Separator } from '@/components/ui/separator'
import { SignedIn, UserButton } from '@clerk/nextjs'
import React from 'react'

type Props = {
    children:React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <div className='flex h-screen'>
        <DesktopSideBar/>
        <div className='flex flex-col flex-1 min-h-screen'>
            <header className='flex items-center justify-between px-4 py-4 h-[50px] container'>
                <BreadCrumbHeader/>
                <div className='flex gap-1 items-center'>
                    <ModeToggle/>
                   
                        <UserButton/>
                    

                </div>

            </header>
            <Separator/>
            <div className='overflow-auto'>
                <div className='flex-1 container py-4 text-accent-foreground'>
                {children}

                </div>

            </div>

        </div>
       </div>
  )
}

export default Layout