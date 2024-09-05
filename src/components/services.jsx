export default function Services() {
  return (
    <div className="bg-customTeal text-white p-10 m-20">
      <h1 className="text-3xl font-bold mb-10 text-center">Nuestros Servicios</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Servicio 1 */}
        <div className="flex items-start space-x-4 p-6 border border-gray-700 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">01</h2>
          <div>
            <h3 className="text-xl font-semibold">Desarrollo Backend</h3>
            <p>Creación y gestión de servidores, APIs y lógica de negocio con Node.js, Express y Python.</p>
          </div>
        </div>

        {/* Servicio 2 */}
        <div className="flex items-start space-x-4 p-6 border border-gray-700 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">02</h2>
          <div>
            <h3 className="text-xl font-semibold">Diseño y Gestión de Bases de Datos</h3>
            <p>Creación, normalización y mantenimiento de bases de datos en MongoDB y MySQL.</p>
          </div>
        </div>

        {/* Servicio 3 */}
        <div className="flex items-start space-x-4 p-6 border border-gray-700 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">03</h2>
          <div>
            <h3 className="text-xl font-semibold">Desarrollo de Páginas Web</h3>
            <p>Creación de sitios web completos y responsivos con HTML, CSS, JavaScript y React.</p>
          </div>
        </div>

        {/* Servicio 4 */}
        <div className="flex items-start space-x-4 p-6 border border-gray-700 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">04</h2>
          <div>
            <h3 className="text-xl font-semibold">Soluciones para E-Commerce</h3>
            <p>Optimización de plataformas de comercio electrónico para mejorar la experiencia de compra.</p>
          </div>
        </div>

        {/* Servicio 5 */}
        <div className="flex items-start space-x-4 p-6 border border-gray-700 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">05</h2>
          <div>
            <h3 className="text-xl font-semibold">Soluciones en la Nube</h3>
            <p>Implementación de soluciones en la nube para mejorar la escalabilidad y disponibilidad de datos.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
