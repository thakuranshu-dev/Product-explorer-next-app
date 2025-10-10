'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Home, Person, ShoppingCart,Favorite, Settings, Edit, LocalShipping, IndeterminateCheckBox } from '@mui/icons-material';

export default function BottomNavigation() {
  const routes = [
    { href: '/', label: 'Home', icon: <Home /> },
    { href: '/cart', label: 'Cart', icon: <ShoppingCart /> },
    { href: '/wishlist', label: 'Wishlist', icon: <Favorite /> },
    { href: '/orders', label: 'Orders', icon: <IndeterminateCheckBox /> },
    { href: '/profile', label: 'Profile', icon: <Person /> },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  // Orders: ReceiptLong, ListAlt, AssignmentTurnedIn, Description, GiftBox,
  return (
    <nav className="navigation ">
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

        <div className="indicator" />
      </ul>
    </nav>
  );
}