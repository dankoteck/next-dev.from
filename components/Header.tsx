"use client";

import { signIn, signOut } from "next-auth/react";

export default function Header() {
  const handleLogin = () => {
    signIn("github", { callbackUrl: "http://localhost:3000" });
  };

  const handleSignout = () => {
    signOut();
  };

  return (
    <div className="">
      <button onClick={handleLogin}>Login</button>

      <button onClick={handleSignout}>Signout</button>
    </div>
  );
}
