
# Servify

## 📌 Descripción

El sistema permite gestionar **usuarios**, **servicios**, **reservas**, **pagos** y **valoraciones**. Está diseñado para una plataforma en la que los usuarios pueden reservar servicios, realizar pagos y dejar comentarios y calificaciones.

## 🏗️ Explicación del Modelo

El modelo de base de datos está compuesto por varias tablas relacionadas entre sí:

- **Usuarios (`user`)**: Contiene la información básica de los usuarios, como nombre, correo electrónico y tipo de usuario.
- **Servicios (`service`)**: Representa los servicios ofrecidos, con detalles como nombre, descripción, precio y disponibilidad.
- **Reservas (`reservation`)**: Almacena las reservas realizadas por los usuarios para los servicios disponibles.
- **Pagos (`payment`)**: Registra los pagos efectuados por los usuarios, incluyendo cantidad y estado del pago.
- **Valoraciones (`rating`)**: Permite a los usuarios calificar los servicios con un comentario y una puntuación.
- **Migraciones (`prisma_migrations`)**: Tabla utilizada por Prisma ORM para gestionar cambios en la estructura de la base de datos.

Las relaciones principales incluyen:
- Un **usuario** puede realizar múltiples **reservas** y **pagos**.
- Un **servicio** puede tener múltiples **reservas** y puede estar vinculado a una **valoración**.
- Una **reserva** está asociada a un **usuario** y un **servicio**.
- Un **pago** se asocia con un **usuario** y un **servicio**.
- Un **usuario** puede dejar múltiples **valoraciones**, cada una asociada a un servicio específico.

![imagen](https://github.com/user-attachments/assets/fc4d0951-dcec-488e-88d4-16c85d1d4836)


Aquí podemos ver un diagrama de flujo algo prematuro sobre el proyecto, pero dejando clara la idea del mismo.

![Diagrama en blanco](https://github.com/user-attachments/assets/e109e11a-6ac8-4e8f-9dfb-2eb03a430062)

