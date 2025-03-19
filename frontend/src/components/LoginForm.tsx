"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [authCode, setAuthCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  async function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();

      if (!authCode.trim()) {
        setErrorMessage("Auth code is required");
        return;
      }

      setErrorMessage("");

      try {
        const res = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ authCode }),
        });

        const data = await res.json();

        if (!res.ok) {
          setErrorMessage(data.error || "Unknown error");
        } else {
          console.log("User data:", data);
          setErrorMessage("");
          router.push("/dashboard");
        }

      } catch (error) {
        console.error("Login request failed", error);
        setErrorMessage("Internal server error");
      }

      setAuthCode("");
      inputRef.current?.focus();
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
    <div className="bg-white rounded-4xl shadow-md p-8 w-96 text-center">
      <div className="flex justify-center my-8">
        <Image src="/CCSLOGO.png" alt="logo" width={250} height={250} />
      </div>
      <h1 className="text-4xl font-bold text-gray-800">Boxy</h1>
      <h3 className="text-md my-6 font-bold  text-gray-800">
        Project Management Application <br /> for High-Volume Scanning Projects
      </h3>
      <div className="my-6 relative">
        <p className="text-gray-700">Scan your personal card</p>
        <div className="flex justify-center mt-4">
          <Image src="/icons/qr_code_scanner.svg" alt="QR-scanner icon" width={200} height={200} />
        </div>
        <input
          id="scanUserCardInput"
          ref={inputRef}
          type="text"
          className="hidden-input"
          autoComplete="off"
          value={authCode}
          onChange={(e) => setAuthCode(e.target.value)}
          onKeyDown={handleKeyDown} 
        />
         {errorMessage && 
          <div id="authNote" className="text-center text-red-700 mt-2 absolute bottom-0.2 w-full">{errorMessage} </div>}
      </div>
    </div>
  </div>

  );
}
