

import Image from "next/image";

export default function LoginForm() {


  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-4xl shadow-md p-8 w-96 text-center">
        <div className="flex justify-center my-8">
          <Image src="/CCSLOGO.png" alt="logo" width={250} height={250} />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 uppercase">Boxy</h1>
        <h3 className="text-md mt-2 mb-6 font-bold  text-gray-800">
          Project Management Application <br /> for High-Volume Scanning Projects
        </h3>
        <div className="my-6">
          <p className="text-gray-700">Scan your personal card</p>
          <div className="flex justify-center mt-4">
            <Image src="/icons/qr_code_scanner.svg" alt="QR-scanner icon" width={200} height={200} />
          </div>
          <input
            id="scanUserCardInput"
            type="text"
            className="hidden-input"
            autoComplete="off"
          />
          <div id="authNote" className="text-center text-red-700">Notes</div>
        </div>
      </div>
    </div>
  );
}