# Proyecto Epic Motors App - Prueba técnica
Este proyecto ees un aplicación con Next.Js configurada para ejecutarse con docker compose.

## URL pública
[https://epic-motors.vercel.app/](https://epic-motors.vercel.app/)

## Requisitos

- Docker
- Docker Compose

## Clonar repositorio

```bash
git clone https://github.com/afmarquinho/epic-motors.git
```

### Levantar los conetenedores
Navega al directorio donde se encuentra el archivo `docker-compose.yml` y levanta los contenedores usando docker compose.
```bash
docker compose build
docker compose up -d
```
### Accede a la aplicaión
Una vez los contenedores estén funcionando la aplicación estará disponible en "hhtp://localhost:3000"

## Dependencias

- **axios**: Utilizado para realizar solicitudes a la Api de los departamentos y ciudades de Colombia.
- **lucide-react**: Proporciona los íconos utilizados en la UI.
- **next**: Framework requerido en las especificaciones.
- **react**: La biblioteca principal.
- **react-hook-form**: Librería utilizada para gestionar formulariosy su validación.
- **zustand**: Librería utilizada para la gestión de estado global en la aplicación.

