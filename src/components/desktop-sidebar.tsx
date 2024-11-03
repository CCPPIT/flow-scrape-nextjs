"use client"
import { CoinsIcon, HomeIcon, Layers2Icon, MenuIcon, ShieldCheckIcon } from 'lucide-react'
import React, { useState } from 'react'
import Logo from './logo'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button, buttonVariants } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { useIsMobile } from '@/hooks/use-mobile'

type Props = {}
const routes=[
    {
        href:"/",
        label:"Home",
        icon:HomeIcon
    },
    {
        href:"workflows",
        label:"WorkFlows",
        icon:Layers2Icon
    },
    {
        href:"credentinals",
        label:"Credentinals",
        icon:ShieldCheckIcon
    },
    {
        href:"billing",
        label:"Billing",
        icon:CoinsIcon
    }
]

const DesktopSideBar = (props: Props) => {
    const pathName=usePathname();
    const ActiveRoute=routes.find(
        (route)=>route.href.length>0&&pathName.includes(route.href)
    )||routes[0]
  return (
    <div className='hidden relative md:block max-w-[280px] h-screen overflow-hidden w-full bg-primary/5 dark:bg-secondary/30 dark:text-muted-foreground text-muted-foreground border-r-2 border-separate'>
        <div className="flex items-center justify-center gap-2 border-b-[1px] p-4">
            <Logo/>
          
        </div>
        <div className='flex flex-col p-2'>
                {routes.map((route)=>(
                    <Link href={route.href} key={route.href}
                    className={buttonVariants({
                        variant:ActiveRoute.href===route.href?"sidebarActivItems"
                        :"sidebarItems"
                    })}
                    >
                        <route.icon size={20}/>
                        {route.label}

                    </Link>
                ))}

            </div>
    </div>
  )
}
export function SideBarMobile(){
    const [IsOPoen,setIsOpen]=useState(false)
    const pathname=usePathname();
    const activeRoute=routes.find(
        (route)=>route.href.length>0&&pathname.includes(route.href)
    )||routes[0]
    return(
        <div className='block border-separate bg-background md:hidden'>
            <nav className='flex items-center justify-between container px-8'>
               <Sheet open={IsOPoen}onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <Button variant={"ghost"}
                    size={"icon"}
                    onClick={()=>setIsOpen(prev=>!prev)}
                    >
                        <MenuIcon/>

                    </Button>

                </SheetTrigger>
                <SheetContent className='w-[400px] sm:w-[540px] space-y-4' side={"left"}>
                    <Logo/>
                    <div className='flex flex-col gap-1'>
                    {routes.map((route)=>(
                    <Link href={route.href} key={route.href}
                    className={buttonVariants({
                        variant:activeRoute.href===route.href?"sidebarActivItems"
                        :"sidebarItems"
                    })}
                    >
                        <route.icon size={20}/>
                        {route.label}

                    </Link>
                ))}


                    </div>

                </SheetContent>

               </Sheet>
            </nav>

        </div>

    )
}


export default DesktopSideBar
