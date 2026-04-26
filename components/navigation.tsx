'use client';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@heroui/navbar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';

const AquaLogo = () => (
  <Image
    src="/logoheader.png"
    alt="Aqua Solutions Logo"
    width={60}
    height={50}
    priority
  />
);

export function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/products', label: 'Products' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      position="static"
      className="bg-white shadow-sm border-b border-gray-200"
      classNames={{
        wrapper: 'max-w-7xl px-4 sm:px-6 lg:px-8',
        item: [
          'flex',
          'relative',
          'h-full',
          'items-center',
        ],
      }}
    >
      {/* Brand */}
      <NavbarBrand>
        <Link href="/" className="flex items-center gap-2">
          <AquaLogo />
          
        </Link>
      </NavbarBrand>

      {/* Desktop links */}
      <NavbarContent className="hidden sm:flex gap-1" justify="center">
        {links.map((link) => (
          <NavbarItem key={link.href} isActive={isActive(link.href)}>
            <Link
              href={link.href}
              className={`text-sm px-3 py-1.5 rounded-md transition-colors ${
                isActive(link.href)
                  ? 'text-[#0077b6] font-medium'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100 font-normal'
              }`}
            >
              {link.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* CTA + mobile toggle */}
      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <Link
            href="/contact"
            className="text-sm font-medium px-4 py-1.5 rounded-md bg-white text-[#0077b6] hover:bg-[#0077b6] hover:text-white border border-[#0077b6] transition-colors"
          >
            Get a Quotation
          </Link>
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden text-gray-700"
        />
      </NavbarContent>

      {/* Mobile menu */}
      <NavbarMenu className="bg-white pt-4">
        {links.map((link) => (
          <NavbarMenuItem key={link.href}>
            <Link
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`w-full text-sm py-2 px-1 border-b border-gray-100 block transition-colors ${
                isActive(link.href)
                  ? 'text-[#0077b6] font-medium'
                  : 'text-gray-700 hover:text-gray-900 font-normal'
              }`}
            >
              {link.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-3 block text-center text-sm font-medium px-4 py-1.5 rounded-md bg-white text-[#0077b6] hover:bg-[#0077b6] hover:text-white border border-[#0077b6] transition-colors"
          >
            Get a Quotation
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
