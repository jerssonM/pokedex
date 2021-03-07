# Global 66 - Prueba técnica

> Desarrollado por Jersson Morales | [LinkedIn](https://www.linkedin.com/in/jersson-stiven-morales-alza-022115183/)

### [URL demo](https://pokedex-olive-mu.vercel.app/)

#### Capturas de pantalla
<img src="https://user-images.githubusercontent.com/45905864/110226087-da36b500-7eb9-11eb-87d7-0f4c7aae5438.png" width="600px" />
<img src="https://user-images.githubusercontent.com/45905864/110226117-677a0980-7eba-11eb-8cc9-f1a085277107.png" width="600px" />
<img src="https://user-images.githubusercontent.com/45905864/110226030-35b47300-7eb9-11eb-941d-db12b8c6558b.png" width="600px" />

#### Tecnologias usadas

- **Vue**
- **Jest & Vue utils** (Pruebas unitarias).

#### Librerias adicionales

- **Prettier - eslint + plugins** (Validación de errores y formateo de archivos).
- **Husky - lint-stagged** (Validaciones de pruebas unitarias y linters previo a los commits).

#### Estructura  del proyecto

    frontend/
    |-- src/
    |   |
    |   |-- components/ # Componentes generales
    |   |-- config/     # Archivos de configuración y constantes
    |   |-- styles/     # Estilos generales y temas
    |   |-- views/      # Paginas
    |   |-- utils/      # Utilidades generales
    |   |
    |-- test/   # Pruebas unitarias
    |-- ../     # Archivos de configuración
    |-----

#### Scripts

-  **yarn serve** : Ejecuta el proyecto en modo desarollo.
-  **yarn build** : Compila el proyecto para enviarlo a producción
-  **yarn lint** : Corre el linter en el proyecto.
-  **yarn test:unit** : Ejecuta las pruebas unitarias.
-  **yarn test-with-coverage** : Ejecuta las pruebas unitarias y genera un reporte del cubrimiento
    de las pruebas.


#### Coverage
![coverage](./coverage.png)
