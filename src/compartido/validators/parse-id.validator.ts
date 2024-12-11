export function parseId(id: string): number {
  const parsedId = Number(id);
  if (isNaN(parsedId)) {
    throw new Error('El ID proporcionado no es válido');
  }
  return parsedId;
}
