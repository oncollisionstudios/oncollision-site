"use client";
import { useState } from "react";

export default function ContactForm() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");

  const [loading,setLoading] = useState(false);

  async function sendEmail() {

    setLoading(true);

    const response = await fetch(
      "/api/contact",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          name,
          email,
          message
        })
      }
    );

    setLoading(false);

    if(response.ok){

      alert("Message sent!");

      setName("");
      setEmail("");
      setMessage("");

    } else {

      alert("Something went wrong");

    }

  }

  return (

    <div className="space-y-6">

      <input
        value={name}
        onChange={(e)=>setName(e.target.value)}
        type="text"
        placeholder="Name"
        className="
          w-full
          bg-black
          border
          border-gray-700
          rounded-lg
          p-4"
      />

      <input
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        className="
          w-full
          bg-black
          border
          border-gray-700
          rounded-lg
          p-4"
      />

      <textarea
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        rows={6}
        placeholder="Message"
        className="
          w-full
          bg-black
          border
          border-gray-700
          rounded-lg
          p-4"
      />

      <button
        onClick={sendEmail}
        className="
          px-8
          py-4
          rounded-xl
          bg-cyan-500
          hover:scale-105
          transition"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

    </div>

  );

}