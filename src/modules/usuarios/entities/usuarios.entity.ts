import { Rol } from '@prisma/client';

export class Usuario {
  username: string;
  password: string;
  nombre_apellido: string;
  rol: Rol;
  usuario_creacion: string;
  fecha_creacion: Date;
  usuario_modificacion: string;
  fecha_modificacion: Date;
  fecha_eliminacion: Date | null;
}
