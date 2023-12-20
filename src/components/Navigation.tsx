"use client"
 
import * as React from "react"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
 
export function Navigation() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-rose-900">Menu</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="flex flex-col p-6 w-[300px] md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <ListItem href="/" title="Home">
                            Return to the main page
                        </ListItem>
                        <ListItem href="/bourbons" title="Bourbons and Whiskeys">
                            Search hundreds of bourbons and whiskeys from all over the world.
                        </ListItem>
                        <ListItem href="/faq" title="FAQ">
                            Commonly asked questions
                        </ListItem>
                        <ListItem href="/contact" title="Contact Us">
                            Ways to reach out
                        </ListItem>
                    </ul>
                </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
        )
    }

    const ListItem = React.forwardRef<
        React.ElementRef<"a">,
        React.ComponentPropsWithoutRef<"a">
    >(({ className, title, children, ...props }, ref) => {
        return (
            <li>
            <NavigationMenuLink asChild>
                <a
                ref={ref}
                className={cn(
                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                    className
                )}
                {...props}
                >
                <div className="text-sm font-medium leading-none">{title}</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {children}
                </p>
                </a>
            </NavigationMenuLink>
            </li>
        )
    })
    ListItem.displayName = "ListItem"