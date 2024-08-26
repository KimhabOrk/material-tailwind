import React from 'react';

export function InputCreditCard() {
  const formatCardNumber = (input: HTMLInputElement) => {
    input.value = input.value.replace(/\D/g, '');
    input.value = input.value.replace(/(.{4})/g, '$1 ').trim();
  };

  const handleCardNumberInput = (event: React.FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    formatCardNumber(input);
  };

  const handleExpirationDateInput = (event: React.FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    const value = input.value.replace(/\D/g, '');

    if (value.length <= 2) {
      input.value = value;
    } else {
      input.value = `${value.slice(0, 2)}/${value.slice(2, 4)}`;
    }
  };

  const handleCvvInput = (event: React.FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    input.value = input.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');
  };

  return (
    <div className="w-full max-w-sm min-w-[200px] mt-4">
      <label className="block mb-1 text-sm text-slate-800">
        Cardholder Name
      </label>
      <input
        type="text"
        className="w-full h-10 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
        placeholder="e.g John Doe"
      />

      <label className="block mb-1 text-sm text-slate-800 mt-4">
        Card Number
      </label>
      <input
        type="text"
        id="cardNumber"
        className="w-full h-10 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
        placeholder="1234 5678 9012 3456"
        maxLength={19}
        onInput={handleCardNumberInput}
      />

      <div className="flex">
        <div className="w-full md:w-8/12 mr-4">
          <label className="block mb-1 text-sm text-slate-800 mt-4">
            Expiration Date
          </label>
          <input
            type="text"
            className="w-full h-10 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
            placeholder="MM/YY"
            maxLength={5}
            pattern="\d{2}/\d{2}"
            onInput={handleExpirationDateInput}
          />
        </div>
        <div className="w-full md:w-4/12">
          <label className="block mb-1 text-sm text-slate-800 mt-4">
            CVV
          </label>
          <input
            type="text"
            className="w-full h-10 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
            placeholder="123"
            maxLength={3}
            pattern="\d{3}"
            onInput={handleCvvInput}
          />
        </div>
      </div>

      <button className="w-full text-sm flex items-center justify-center bg-slate-800 rounded hover:bg-slate-700 text-white py-3 px-6 mt-4">
        Purchase Now
      </button>
    </div>
  );
}