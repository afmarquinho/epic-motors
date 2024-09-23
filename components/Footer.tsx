
const Footer = () => {
  return (
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
  )
}
export default Footer