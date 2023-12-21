
import Link from 'next/link';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';

export default function Component() {
  return (
    <Navbar className='bg-gray-100' fluid rounded>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/adminPanel/products">
          Products
        </NavbarLink>
        <NavbarLink href="/adminPanel/orders">Orders</NavbarLink>
        <NavbarLink href="/adminPanel/users">Users</NavbarLink>
        <NavbarLink href="/adminPanel/payments">Payments</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
