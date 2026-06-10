import { cuandoPasa, enviarAlFrontend, iniciar } from './lib/ui.ts';

/* Precios de los artistas en patacones 
ID_ARTISTA  | PRECIO
=============================
sabrina     |   1000
kgatlw      |    700
lali        |    500
magdalena   |    600
viagra      |    400
dillom      |    350
marilina    |    200
mugre       |    150

Descuentos:
CÓDIGO      | DESCUENTO
==============================
TIC10       |       10%
TIC20       |       20%
DARIO       |       50%
*/


function calcularTotal(id: string, cantidadNum: number,codigoDescuento: string)
{
  if(id == "sabrina")
  {
    if(codigoDescuento == "TIC10") {return (1000 * 0.9) * cantidadNum}
    if(codigoDescuento == "TIC20") {return (1000 * 0.8) * cantidadNum}
    if(codigoDescuento == "DARIO") {return (1000 * 0.5) * cantidadNum}
  }
  else if (id == "kgatlw")
  {
    if(codigoDescuento == "TIC10") {return (700 * 0.9) * cantidadNum}
    if(codigoDescuento == "TIC20") {return (700 * 0.8) * cantidadNum}
    if(codigoDescuento == "DARIO") {return (700 * 0.5) * cantidadNum}
  }
  else if (id == "lali")
    {
      if(codigoDescuento == "TIC10") {return (500 * 0.9) * cantidadNum}
      if(codigoDescuento == "TIC20") {return (500 * 0.8) * cantidadNum}
      if(codigoDescuento == "DARIO") {return (500 * 0.5) * cantidadNum}
    }
    else if (id == "magdalena")
      {
        if(codigoDescuento == "TIC10") {return (600 * 0.9) * cantidadNum}
        if(codigoDescuento == "TIC20") {return (600 * 0.8) * cantidadNum}
        if(codigoDescuento == "DARIO") {return (600 * 0.5) * cantidadNum}
      }
      else if (id == "viagra")
        {
          if(codigoDescuento == "TIC10") {return (400 * 0.9) * cantidadNum}
          if(codigoDescuento == "TIC20") {return (400 * 0.8) * cantidadNum}
          if(codigoDescuento == "DARIO") {return (400 * 0.5) * cantidadNum}
        }
        else if (id == "dillom")
          {
            if(codigoDescuento == "TIC10") {return (350 * 0.9) * cantidadNum}
            if(codigoDescuento == "TIC20") {return (350 * 0.8) * cantidadNum}
            if(codigoDescuento == "DARIO") {return (350 * 0.5) * cantidadNum}
          }
          else if (id == "marilina")
            {
              if(codigoDescuento == "TIC10") {return (200 * 0.9) * cantidadNum}
              if(codigoDescuento == "TIC20") {return (200 * 0.8) * cantidadNum}
              if(codigoDescuento == "DARIO") {return (200 * 0.5) * cantidadNum}
            }
            else if (id == "mugre")
              {
                if(codigoDescuento == "TIC10") {return (150 * 0.9) * cantidadNum}
                if(codigoDescuento == "TIC20") {return (150 * 0.8) * cantidadNum}
                if(codigoDescuento == "DARIO") {return (150 * 0.5) * cantidadNum}
              }
              else
              {
                return 0;
              }

}

// COMPLETAR: Implementar la función calcularTotal que reciba el id del artista, la cantidad de entradas y un código de descuento (opcional) y devuelva el precio total a pagar en patacones.

cuandoPasa('seleccionarArtista', ({ id, cantidad, codigoDescuento }) => {
  let cantidadNum: number = Number(cantidad);
  let precio: number | undefined = calcularTotal(id, cantidadNum, codigoDescuento);
  enviarAlFrontend('mostrarPrecio', precio);
});

iniciar();
