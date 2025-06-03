"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { GamepadIcon as GameController, Code, Settings, Menu, Rocket, Users } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MainNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <div className="px-7">
              <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                <GameController className="h-6 w-6" />
                <span className="font-bold">Xeno Interactions</span>
              </Link>
            </div>
            <nav className="flex flex-col gap-4 px-7 mt-8">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-2 text-lg font-medium transition-colors hover:text-foreground/80",
                  pathname === "/" ? "text-foreground" : "text-foreground/60",
                )}
              >
                Home
              </Link>
              <Link
                href="/games"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-2 text-lg font-medium transition-colors hover:text-foreground/80",
                  pathname === "/games" ? "text-foreground" : "text-foreground/60",
                )}
              >
                <GameController className="h-4 w-4" />
                Games
              </Link>
              <Link
                href="/projects"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-2 text-lg font-medium transition-colors hover:text-foreground/80",
                  pathname === "/projects" ? "text-foreground" : "text-foreground/60",
                )}
              >
                <Rocket className="h-4 w-4" />
                Projects
              </Link>
              <Link
                href="/mods"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-2 text-lg font-medium transition-colors hover:text-foreground/80",
                  pathname === "/mods" ? "text-foreground" : "text-foreground/60",
                )}
              >
                <Code className="h-4 w-4" />
                Mods
              </Link>
              <Link
                href="/settings"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-2 text-lg font-medium transition-colors hover:text-foreground/80",
                  pathname === "/settings" ? "text-foreground" : "text-foreground/60",
                )}
              >
                <Settings className="h-4 w-4" />
                Settings
              </Link>
              <Link
                href="https://discord.gg/GBcuCSbktX"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-2 text-lg font-medium transition-colors hover:text-foreground/80",
                  "text-foreground/60",
                )}
              >
                <Users className="h-4 w-4" />
                Discord
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        <Link href="/" className="mr-6 flex items-center space-x-2">
          <GameController className="h-6 w-6" />
          <span className="hidden font-bold sm:inline-block">Xeno Interactions</span>
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/games" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <span className="flex items-center gap-2">
                    <GameController className="h-4 w-4" />
                    Games
                  </span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/projects" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <span className="flex items-center gap-2">
                    <Rocket className="h-4 w-4" />
                    Projects
                  </span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/mods" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <span className="flex items-center gap-2">
                    <Code className="h-4 w-4" />
                    Mods
                  </span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/settings" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <span className="flex items-center gap-2">
                    <Settings className="h-4 w-4" />
                    Settings
                  </span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center space-x-4">
          <Link href="https://discord.gg/GBcuCSbktX">
            <Button variant="outline" size="sm" className="hidden md:flex gap-2">
              <Users className="h-4 w-4" />
              Discord
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
