import React from 'react';

const TestQRCode: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">QR Code Size Test</h1>
      <div className="mb-4">
        <p className="mb-2">Default size:</p>
        <img 
          src="/images/download/ditnote-applestroe.png" 
          alt="App Store QR Code Test" 
        />
      </div>
      <div className="mb-4">
        <p className="mb-2">With inline style (400px):</p>
        <img 
          src="/images/download/ditnote-applestroe.png" 
          alt="App Store QR Code Test" 
          style={{ width: '400px', height: 'auto', display: 'block' }}
        />
      </div>
      <div className="mb-4">
        <p className="mb-2">With Tailwind classes:</p>
        <img 
          src="/images/download/ditnote-applestroe.png" 
          alt="App Store QR Code Test" 
          className="w-[400px] h-auto block"
        />
      </div>
    </div>
  );
};

export default TestQRCode;