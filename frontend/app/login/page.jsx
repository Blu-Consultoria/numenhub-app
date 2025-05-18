"use client"

import React from 'react'
import Image from "next/image";

const LOGIN_URL = "/api/login";

export default function loginPage () {
    async function loginSubmit(event) {
        event.preventDefault();
        console.log(event, event.target)
        const formData = new FormData(event.target);
        const objectFromForm = Object.fromEntries(formData)
        const jsonData = JSON.stringify(objectFromForm);
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: jsonData,
        };
        const response = await fetch(LOGIN_URL, requestOptions)
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#090813] to-[#20245e]">
      <div className="flex flex-col items-center w-full max-w-sm">
        <Image
          src="/numen-logo.png"
          alt="Logo"
          width={180}
          height={48}
          className="mb-6"
        />
        <div className="bg-gradient-to-br from-white to-white/95 p-10 rounded-2xl shadow-lg w-full flex flex-col gap-6">
          <div className="text-center">
            <h2 className="mt-4 mb-2 text-2xl font-semibold text-gray-800">Bem-Vindo!</h2>
          </div>
          <form onSubmit={loginSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="username"
              placeholder="Usuário"
              required
              className="px-3 py-3 rounded-lg border bg-white border-gray-200 text-base focus:outline-none focus:ring-2 focus:ring-[#EF7A2D]"
            />
            <input
              type="password"
              name="password"
              placeholder="Senha"
              required
              className="px-3 py-3 rounded-lg border bg-white border-gray-200 text-base focus:outline-none focus:ring-2 focus:ring-[#EF7A2D]"
            />
            <button
              type="submit"
              className="py-3 rounded-lg bg-[#EF7A2D] hover:bg-[#FC474B] text-white font-bold text-base transition-colors"
            >
              Login
            </button>
          </form>
          {/* <form action={checkUserData} className="flex flex-col gap-4">
            <button
              type="submit"
              className="py-3 rounded-lg bg-[#EF7A2D] hover:bg-[#FC474B] text-white font-bold text-base transition-colors"
            >
              cehck
            </button>
          </form> */}
          {/* <form action={logoutUser} className="flex flex-col gap-4">
            <button
              type="submit"
              className="py-3 rounded-lg bg-[#EF7A2D] hover:bg-[#FC474B] text-white font-bold text-base transition-colors"
            >
              Sair
            </button>
          </form> */}
          <div className="text-center text-sm">
            <a href="#" className="text-[#151841] hover:underline">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}