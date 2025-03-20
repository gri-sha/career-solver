"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu";
import { navBarStyles } from "@/components/styles";

export default function NavBar() {
    const pathname = usePathname();
    const sections = [
        { name: "Predict", path: "/predict" },
        { name: "Compare", path: "/compare" },
    ];

    return (
        <div className={navBarStyles.container}>
            <NavigationMenu className={navBarStyles.menu}>
                <NavigationMenuList className={navBarStyles.list}>
                    {sections.map(({ name, path }) => (
                        <NavigationMenuItem
                            key={path}
                            className={`${navBarStyles.item} ${pathname === path ? navBarStyles.itemSelected : navBarStyles.itemDefault}`}
                        >
                            <Link href={path}>{name}</Link>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}
