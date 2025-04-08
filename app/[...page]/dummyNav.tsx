/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import Logo from '/app/logo.svg';
import User from './usericon.svg';

const navigationItems = [
  { href: '#', label: 'Home' },
  { href: '#', label: 'Features' },
  { href: '#', label: 'About' },
  { href: '#', label: 'Contact' },
];

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  href,
  children,
}) => (
  <a
    href={href}
    className="font-bold text-zinc-600 border-transparent border-b-2 hover:text-zinc-700 hover:border-zinc-500"
  >
    {children}
  </a>
);

export const Navigation: React.FC = () => {
  return (
    <nav className="box-border flex justify-between items-center px-8 py-4 w-full bg-gray-50">
      <div className="flex items-center">
        <img
          src={Logo.src}
          alt="Company Brand Logo"
          className="h-10"
        />
      </div>
      <div className="flex gap-8 items-center">
        {navigationItems.map((item) => (
          <NavigationLink
            key={item.label}
            href={item.href}
          >
            {item.label}
          </NavigationLink>
        ))}
      </div>
      <button
        className="flex items-center p-2 cursor-pointer border-none bg-slate-200 rounded-md"
        aria-label="User Profile"
      >
        <img
          src={User.src}
          alt=""
          className="w-6 h-6"
        />
      </button>
    </nav>
  );
};
