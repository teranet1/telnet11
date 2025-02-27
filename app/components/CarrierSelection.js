'use client'
import React from "react";
import useNameStore from "./nameStore";
import usePhoneStore from "./phoneStore";
function ContactForm() {
  const { name, setName } = useNameStore();
  const { phone, setPhone } = usePhoneStore();

  return (
    <form className="w-full max-w-[703px]">
      <div className="flex flex-wrap gap-10 mt-7 w-full text-5xl font-bold text-black whitespace-nowrap tracking-[3px] max-md:max-w-full">
        <label htmlFor="name" className="grow my-auto">
          이름
        </label>
        <input
          id="name"
          type="text"
          className="flex shrink-0 max-w-full bg-white rounded-xl border border-black border-solid h-[55px] w-[604px] px-4"
          aria-label="이름"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div className="flex flex-wrap gap-5 mt-11 w-full text-3xl font-bold text-black whitespace-nowrap max-md:mt-10 max-md:max-w-full">
        <label htmlFor="contact" className="grow my-auto">
          연락처
        </label>
        <input
          id="contact"
          type="tel"
          className="flex shrink-0 max-w-full bg-white rounded-xl border border-black border-solid h-[55px] w-[605px] px-4"
          aria-label="연락처"
        />
      </div>
    </form>
  );
}

export default ContactForm;