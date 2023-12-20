
const generateId = () => Date.now().toString(32) +(Math.random() * 100 + 1).toString(32).substring(2);
// como solo es una linea no es necesario el return ñ.ñ
// toString(32) convierte ese número en una cadena en base 32.
// toString(32) convierte ese número en una cadena en base 32.
// substring(2) se utiliza para eliminar el "0." al principio de la cadena generada por Math.random().

//un sistema numérico con una base de 32. El sistema numérico en base 32 utiliza los dígitos 0-9 y las letras a-v (o A-V) para representar los valores.

export {
    generateId
}