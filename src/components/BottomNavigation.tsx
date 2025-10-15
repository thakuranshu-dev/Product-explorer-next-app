'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Person, ShoppingCart,Favorite, Settings, Edit, LocalShipping, IndeterminateCheckBox } from '@mui/icons-material';
// Orders: ReceiptLong, ListAlt, AssignmentTurnedIn, Description, GiftBox,

export default function BottomNavigation() {
  const routes = [
    { href: '/', label: 'Home', icon: <Home /> },
    { href: '/cart', label: 'Cart', icon: <ShoppingCart /> },
    { href: '/wishlist', label: 'Wishlist', icon: <Favorite /> },
    { href: '/orders', label: 'Orders', icon: <IndeterminateCheckBox /> },
    { href: '/profile', label: 'Profile', icon: <Person /> },
  ];
  
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState<number>(
    routes.findIndex(route => route.href === pathname)
  );

  return (
    <nav className="navigation">
      <ul>
        {routes.map((route, i) => (
          <li
            key={route.href}
            className={`list ${activeIndex === i ? 'active' : ''}`}
            onClick={() => setActiveIndex(i)}
          >
            <Link href={route.href}>
              <span className="icon">{route.icon}</span>
              <span className="text">{route.label}</span>
            </Link>
          </li>
        ))}

        <div className={`indicator ${(activeIndex===null || activeIndex<0)? "hidden":"visible"}` }/>
      </ul>
    </nav>
  );
}