# Proyecto Epic Motors App - Prueba técnica
Este proyecto ees un aplicación con Next.Js configurada para ejecutarse con docker compose.

## URL pública
[https://epic-motors.vercel.app/](https://epic-motors.vercel.app/)

## Requisitos

- Docker
- Docker Compose

## Instrucciones para ejecutar con docker hub

### Paso 1: Crear archivo `docker-compose.yml`
Crea un archivo `docker-compose.yml` con el siguiente contenido:
```yaml
services:
  app:
    build: 
      context: .
      dockerfile: Dockerfile
    image: afmarquinhos/epic-motors-app:1.0.3
    ports:
      - "3000:3000"
    volumes:
      - .:/app
    environment:
      - NODE_ENV=development
```
### Paso 2: Levantar los conetenedores
Navega al directorio donde se encuentra el archivo `docker-compose.yml` y levanta los contenedores usando docker compose.
```bash
docker compose up -d
```
### Paso 3: Accede a la aplicaión
Una vez los contenedores estén funcionando la aplicación estará disponible en "hhtp://localhost:3000"

## Dependencias

- **axios**: Utilizado para realizar solicitudes a la Api de los departamentos y ciudades de Colombia.
- **lucide-react**: Proporciona los íconos utilizados en la UI.
- **next**: Framework requerido en las especificaciones.
- **react**: La biblioteca principal.
- **react-hook-form**: Librería utilizada para gestionar formulariosy su validación.
- **zustand**: Librería utilizada para la gestión de estado global en la aplicación.

