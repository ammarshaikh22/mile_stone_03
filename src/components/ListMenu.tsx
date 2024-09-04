import { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import Link from "next/link";
export function ListMenu({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <Menu setActive={setActive} className={className}>
            <Link href='/'><MenuItem setActive={setActive} active={active} item="Home">
            </MenuItem></Link>
            <MenuItem setActive={setActive} active={active} item="Shop">
                <div className="flex flex-col space-y-4 text-sm w-[200px]">
                    <HoveredLink href="/shop">Shop</HoveredLink>
                    <HoveredLink href="/shop/86">Shop Detail</HoveredLink>
                    <HoveredLink href="/cart">Cart</HoveredLink>
                    <HoveredLink href="/check-out">CheckOut</HoveredLink>
                </div>
            </MenuItem>
            <Link href='/about'><MenuItem setActive={setActive} active={active} item="About">
            </MenuItem></Link>
            <Link href='/contact'><MenuItem setActive={setActive} active={active} item="Contact">
            </MenuItem></Link>
        </Menu>
    );
}