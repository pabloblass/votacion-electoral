// import { Rol } from '@prisma/client';

// @Entity({name: 'usuarios'})
export class Usuario {
  username: string;
  password: string;
  nombre_apellido: string;
  rol: string;
  fecha_creacion: Date;
  fecha_actualizacion: Date;
}
