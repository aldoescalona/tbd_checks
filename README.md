# Proyecto de ejemplo para checks automáticos

Este proyecto muestra un ejemplo funcional de Node.js diseñado para un flujo de `trunk-based development`.

Incluye:

- tests automáticos con Jest
- linting con ESLint
- GitHub Actions para checks automáticos en `push` y `pull_request`
- guía de ramas cortas y merge frecuente a `main` como trunk

## Qué significa trunk-based development

En este proyecto, `main` actúa como el trunk principal.

- No se mantienen ramas de larga duración.
- Las nuevas funcionalidades y correcciones se hacen en ramas cortas y específicas.
- Cada rama se integra rápidamente mediante Pull Request.
- Los checks automáticos deben pasar antes de aceptar el merge.
- El trunk (`main`) siempre debe permanecer en un estado desplegable.

## Flujo recomendado

1. Crea una rama corta desde `main` para un cambio específico.
   - Ejemplo: `feature/calculo-basico` o `fix/suma-negativos`
2. Haz commits pequeños y atómicos.
3. Abre un Pull Request hacia `main`.
4. Revisa el PR y espera que los checks de CI pasen.
5. Fusiona el PR solo cuando `lint` y `test` sean exitosos.
6. Elimina la rama después del merge.

## Convenciones de ramas

- `main`: trunk principal, siempre desplegable.
- `feature/<nombre>`: nuevas funcionalidades.
- `fix/<nombre>`: correcciones puntuales.
- `chore/<nombre>`: tareas de mantenimiento, documentación o configuración.
- `hotfix/<nombre>`: correcciones urgentes sobre `main`.

## Ejemplo de cambio para PR

Este proyecto ya tiene una mejora lista en la rama actual `feature/branch`.
El cambio agrega una nueva función `subtract` a `src/math.js` y una prueba asociada.

## Pull Request ideal

- Título claro y conciso.
- Descripción del cambio y motivo.
- Lista de verificación de pruebas ejecutadas localmente.
- Referencia a issue o ticket si aplica.

## Checks automáticos

El flujo de GitHub Actions está configurado para ejecutarse en:

- `push` a `main`
- `pull_request` hacia `main`

El workflow ejecuta:

- `npm install`
- `npm run lint`
- `npm test`

## Comandos útiles

- `npm install`
- `npm test`
- `npm run lint`
- `npm run check`

## Estructura del proyecto

- `src/math.js`: funciones reutilizables.
- `src/index.js`: punto de entrada ejemplar.
- `tests/math.test.js`: validaciones básicas de comportamiento.

## Recomendaciones de branch protection

Para un flujo trunk-based más seguro, activa en GitHub:

- Require status checks to pass before merging
- Protege `main` contra pushes directos
- Obliga revisiones de PR
- Activa `squash` o `merge` según la política del equipo
