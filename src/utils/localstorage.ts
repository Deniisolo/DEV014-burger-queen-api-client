export function saveLocalStorage<T>(clave: string, valor: T): void {
  const valorJSON = JSON.stringify(valor);
  localStorage.setItem(clave, valorJSON);
}
export function loadLocalStorage<T>(clave: string): T | null {
  const valorJSON = localStorage.getItem(clave);
  if (valorJSON) {
    return JSON.parse(valorJSON) as T;
  }
  return null;
}
