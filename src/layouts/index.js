import React from 'react';

export default function Layout({ children }) {
  return (
    <>
      <header>header</header>
      <main>{children}</main>
    </>
  );
}
