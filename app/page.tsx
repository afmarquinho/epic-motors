"use client";
import Form from "@/components/Form";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className={`w-full min-h-screen flex flex-col`}>
      <Navbar />
      <Hero />
      <main className={`my-10 px-2 h-full`}>
        <Form />
      </main>
      <footer
        className={`text-center border-t-2 border-red-500 text-xs py-2 dark:bg-deepDark flex flex-col justify-center items-center bg-white`}
      >
        <p>&copy; 2024 KassyDev LLC. Todos los derechos reservados.</p>
        <p>
          Contacto:{" "}
          <a href="mailto:info@misitio.com">fernandez9029@gmail.com</a> | tel:
          +57-3187794472
        </p>
      </footer>
    </div>
  );
}
