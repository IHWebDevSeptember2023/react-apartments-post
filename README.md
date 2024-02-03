# React apartments app
En esta lección hemos aprendido a crear un proyecto react que hace una llamada a la API de apartments y muestra los resultados en una lista.

La ruta que nos lleva a AddApartmentPage component muestra un formulario para añadir un nuevo apartamento a la lista. Este formulario hace una llamada `POST` con axios a la `API` para añadir un nuevo apartamento.

Después de hacer el `POST` hemos redirigido al usuario a la página principal con el hook `useNavigate` de `react-router-dom`. 

El problema que hemos tenido al usar `useNavigate` es que no hemos podido pasar el nuevo apartamento a la página principal hasta que hemos recargado la página. Para solucionar esto hemos usado el hook `useLocation` para obtener la location (de "/apartments/add" a "/") y el hook `useEffect` para actualizar el estado de la página principal cada vez que se modifica esta location.
