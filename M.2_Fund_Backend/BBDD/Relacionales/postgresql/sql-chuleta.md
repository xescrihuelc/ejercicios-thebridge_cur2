## Tutorial Básico de SQL con PostgreSQL

**¿Qué es SQL?**

SQL (Structured Query Language) es el lenguaje estándar utilizado para interactuar con bases de datos relacionales. Permite crear, modificar, eliminar y consultar datos.

**¿Qué es PostgreSQL?**

PostgreSQL (o simplemente "Postgres") es un potente sistema de gestión de bases de datos relacionales de código abierto, conocido por su robustez, características avanzadas y cumplimiento de estándares SQL.

**Antes de empezar:**

Necesitarás tener acceso a una base de datos PostgreSQL. Puedes instalarlo localmente, usar Docker o utilizar un servicio de base de datos en la nube. También necesitarás una herramienta para conectarte y ejecutar comandos SQL (como `psql` en la línea de comandos, **pgAdmin**, DBeaver, etc.).

---

### 1. Data Definition Language (DDL) - Definiendo la Estructura

Estos comandos se usan para definir y modificar la estructura de tu base de datos.

#### `CREATE TABLE`

* **Teoría:** Define una nueva tabla en la base de datos. Una tabla es una colección de datos organizada en filas y columnas. Al crearla, especificas el nombre de la tabla y los nombres y tipos de datos de cada columna.
* **Caso de Uso:** Cuando necesitas un lugar para almacenar un tipo específico de información, como usuarios, productos, pedidos, etc.
* **Tipos de Datos Comunes en PostgreSQL:**
    * `INTEGER` o `INT`: Números enteros.
    * `SERIAL`: Un entero que se autoincrementa automáticamente (muy útil para IDs únicos). Es una abreviatura de PostgreSQL para crear una secuencia y asignarla como valor predeterminado. `BIGSERIAL` para números más grandes.
    * `VARCHAR(n)`: Cadena de texto de longitud variable, con un máximo de `n` caracteres.
    * `TEXT`: Cadena de texto de longitud variable sin límite práctico.
    * `BOOLEAN`: Valor verdadero (`true`) o falso (`false`).
    * `DATE`: Almacena fechas (año, mes, día).
    * `TIMESTAMP`: Almacena fecha y hora. `TIMESTAMPTZ` almacena fecha, hora y zona horaria.
    * `NUMERIC(precision, escala)` o `DECIMAL(precision, escala)`: Números decimales exactos, útil para dinero. `precision` es el total de dígitos, `escala` son los dígitos después del punto decimal.
* **Restricciones Comunes (Constraints):**
    * `PRIMARY KEY`: Identifica de forma única cada fila en la tabla. No permite valores NULL. Una tabla suele tener una columna `id` como `PRIMARY KEY`.
    * `NOT NULL`: Asegura que la columna no pueda tener valores NULL (vacíos).
    * `UNIQUE`: Asegura que todos los valores en la columna sean diferentes entre sí (aunque permite múltiples NULLs, a diferencia de la `PRIMARY KEY`).
* **Ejemplo:** Crear una tabla para almacenar información de usuarios.

```sql
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,             -- ID único autoincrementado para cada usuario
    nombre VARCHAR(100) NOT NULL,      -- Nombre del usuario, no puede ser nulo
    email VARCHAR(100) UNIQUE NOT NULL, -- Email único para cada usuario, no puede ser nulo
    fecha_registro DATE DEFAULT CURRENT_DATE, -- Fecha de registro, por defecto la fecha actual
    activo BOOLEAN DEFAULT true        -- Indica si el usuario está activo, por defecto verdadero
);
-- Nota: Los comentarios en SQL empiezan con --
```

#### `DROP TABLE`

* **Teoría:** Elimina permanentemente una tabla existente y *todos* los datos que contiene. ¡Esta acción no se puede deshacer fácilmente!
* **Caso de Uso:** Cuando una tabla ya no es necesaria o fue creada por error.
* **Ejemplo:**

```sql
DROP TABLE usuarios;

-- Es buena práctica usar IF EXISTS para evitar errores si la tabla no existe:
DROP TABLE IF EXISTS usuarios_viejos;
```

---

### 2. Data Manipulation Language (DML) - Manipulando los Datos

Estos comandos se usan para añadir, modificar o eliminar datos *dentro* de las tablas.

#### `INSERT INTO`

* **Teoría:** Añade una nueva fila (un nuevo registro) a una tabla. Debes proporcionar valores para las columnas especificadas o para todas si no especificas columnas (en el orden correcto).
* **Caso de Uso:** Registrar un nuevo usuario, añadir un producto al inventario, guardar un nuevo pedido.
* **Ejemplo:** Añadir dos usuarios a la tabla `usuarios`.

```sql
-- Forma 1: Especificando las columnas (recomendado por claridad)
INSERT INTO usuarios (nombre, email, activo)
VALUES ('Juan Perez', 'juan.perez@email.com', true);

-- Forma 2: Sin especificar columnas (los valores deben ir en el orden exacto de la tabla)
-- El 'id' se genera automáticamente (SERIAL) y 'fecha_registro' toma el valor por defecto
INSERT INTO usuarios (nombre, email)
VALUES ('Ana Garcia', 'ana.garcia@email.com');

-- Insertar otro usuario, especificando la fecha y estado inactivo
INSERT INTO usuarios (nombre, email, fecha_registro, activo)
VALUES ('Pedro Lopez', 'pedro.lopez@email.com', '2025-01-15', false);
```

#### `UPDATE`

* **Teoría:** Modifica los datos de una o más filas existentes en una tabla. Es **crucial** usar la cláusula `WHERE` para especificar qué filas actualizar, de lo contrario, ¡actualizarás *todas* las filas de la tabla!
* **Caso de Uso:** Cambiar el email de un usuario, actualizar el stock de un producto, marcar un pedido como enviado.
* **Ejemplo:** Cambiar el email del usuario con `id = 1` y activar al usuario con `id = 3`.

```sql
-- Actualizar el email del usuario con id = 1
UPDATE usuarios
SET email = 'juan.perez.nuevo@email.com'
WHERE id = 1;

-- Activar al usuario Pedro Lopez (suponiendo que su id es 3)
UPDATE usuarios
SET activo = true
WHERE id = 3;

-- Actualizar múltiples columnas a la vez
UPDATE usuarios
SET nombre = 'Ana García López', activo = false
WHERE email = 'ana.garcia@email.com';
```

#### `DELETE FROM`

* **Teoría:** Elimina una o más filas de una tabla. Al igual que con `UPDATE`, es **fundamental** usar `WHERE` para especificar qué filas eliminar. Sin `WHERE`, ¡se eliminarán *todas* las filas!
* **Caso de Uso:** Eliminar una cuenta de usuario inactiva, quitar un producto descatalogado.
* **Ejemplo:** Eliminar al usuario con `id = 3`.

```sql
DELETE FROM usuarios
WHERE id = 3;

-- CUIDADO: Este comando borraría TODOS los usuarios
-- DELETE FROM usuarios;
```

---

### 3. Data Query Language (DQL) - Consultando los Datos

El comando principal aquí es `SELECT`, que se usa para recuperar datos de la base de datos.

#### `SELECT` básico

* **Teoría:** Recupera datos de una o más tablas. Puedes seleccionar todas las columnas (`*`) o especificar las columnas que deseas.
* **Caso de Uso:** Obtener una lista de usuarios, ver los detalles de un producto, consultar pedidos recientes.
* **Ejemplo:**

```sql
-- Seleccionar todas las columnas de todos los usuarios
SELECT * FROM usuarios;

-- Seleccionar solo el nombre y el email de todos los usuarios
SELECT nombre, email FROM usuarios;
```

#### `DISTINCT` (en lugar de `UNIQUE` en `SELECT`)

* **Teoría:** La palabra clave `DISTINCT` se usa con `SELECT` para devolver solo filas con valores únicos (diferentes) en las columnas especificadas. Elimina duplicados del resultado. (`UNIQUE` es más comúnmente una restricción de tabla, no un modificador de `SELECT`).
* **Caso de Uso:** Obtener una lista de los diferentes países donde viven los usuarios, sin repetir los países.
* **Ejemplo:** (Supongamos que añadimos una columna `pais`)

```sql
-- Añadamos la columna (veremos ALTER TABLE más adelante, pero para el ejemplo):
-- ALTER TABLE usuarios ADD COLUMN pais VARCHAR(50);
-- UPDATE usuarios SET pais = 'España' WHERE id = 1;
-- UPDATE usuarios SET pais = 'México' WHERE id = 2;
-- UPDATE usuarios SET pais = 'España' WHERE email = 'ana.garcia@email.com';

-- Obtener la lista de países únicos de los usuarios
SELECT DISTINCT pais FROM usuarios;
```

#### `LIMIT`

* **Teoría:** Restringe el número de filas devueltas por la consulta.
* **Caso de Uso:** Obtener solo los 10 usuarios más recientes, mostrar resultados paginados en una aplicación web.
* **Ejemplo:**

```sql
-- Obtener solo los 2 primeros usuarios (el orden no está garantizado aún)
SELECT * FROM usuarios LIMIT 2;
```

#### `WHERE`

* **Teoría:** Filtra las filas devueltas por `SELECT`, basándose en una condición específica. Solo se devuelven las filas que cumplen la condición.
* **Caso de Uso:** Encontrar un usuario por su email, seleccionar productos por debajo de un cierto precio, obtener pedidos de una fecha específica.
* **Ejemplo:**

```sql
-- Seleccionar el usuario con email 'ana.garcia@email.com'
SELECT * FROM usuarios WHERE email = 'ana.garcia@email.com';

-- Seleccionar los usuarios activos
SELECT nombre, email FROM usuarios WHERE activo = true;

-- Seleccionar usuarios registrados antes de una fecha
SELECT * FROM usuarios WHERE fecha_registro < '2025-03-01';
```

#### Comparadores en `WHERE`

* **Teoría:** Son los operadores que usas dentro de `WHERE` para comparar valores.
* `=`: Igual a
* `<>` o `!=`: Diferente de
* `<`: Menor que
* `>`: Mayor que
* `<=`: Menor o igual que
* `>=`: Mayor o igual que
* **Caso de Uso:** Se usan constantemente dentro de `WHERE` para definir las condiciones de filtrado.
* **Ejemplo:**

```sql
-- Usuarios cuyo ID es mayor que 1
SELECT * FROM usuarios WHERE id > 1;

-- Usuarios cuyo nombre NO es 'Juan Perez'
SELECT * FROM usuarios WHERE nombre <> 'Juan Perez';
```

#### `BETWEEN` en `WHERE`

* **Teoría:** Selecciona filas cuyos valores en una columna están dentro de un rango especificado (incluyendo los límites). Es equivalente a `columna >= valor_minimo AND columna <= valor_maximo`.
* **Caso de Uso:** Seleccionar usuarios registrados entre dos fechas, productos con precios en un rango determinado.
* **Ejemplo:**

```sql
-- Usuarios registrados en enero de 2025
SELECT * FROM usuarios
WHERE fecha_registro BETWEEN '2025-01-01' AND '2025-01-31';
```

#### `LIKE` en `WHERE`

* **Teoría:** Realiza una comparación de patrones en cadenas de texto. Se usa con comodines:
    * `%`: Representa cero, uno o múltiples caracteres cualesquiera.
    * `_`: Representa exactamente un carácter cualquiera.
* **Caso de Uso:** Buscar usuarios cuyo nombre empiece por 'A', encontrar emails de un dominio específico.
* **Ejemplo:**

```sql
-- Usuarios cuyo nombre empieza por 'Ana'
SELECT * FROM usuarios WHERE nombre LIKE 'Ana%';

-- Usuarios cuyo email contiene '@email.com'
SELECT * FROM usuarios WHERE email LIKE '%@email.com';

-- Usuarios cuyo nombre tiene 4 letras y empieza por 'J' (ej: Juan)
SELECT * FROM usuarios WHERE nombre LIKE 'J___';
```

#### `ORDER BY`

* **Teoría:** Ordena las filas del resultado según los valores de una o más columnas. Por defecto ordena de forma ascendente (`ASC`). Se puede especificar `DESC` para orden descendente.
* **Caso de Uso:** Ordenar usuarios por nombre alfabéticamente, mostrar productos del más caro al más barato, listar pedidos por fecha (más recientes primero).
* **Ejemplo:**

```sql
-- Seleccionar todos los usuarios ordenados por nombre ascendentemente (A-Z)
SELECT * FROM usuarios ORDER BY nombre ASC; -- ASC es opcional, es el defecto

-- Seleccionar todos los usuarios ordenados por fecha de registro descendentemente (más nuevos primero)
SELECT * FROM usuarios ORDER BY fecha_registro DESC;

-- Ordenar primero por estado activo (false primero) y luego por nombre
SELECT * FROM usuarios ORDER BY activo ASC, nombre ASC;
```

---

#### `GROUP BY` y Funciones de Agregación

* **Teoría:** La cláusula `GROUP BY` agrupa filas que tienen el mismo valor en una o más columnas especificadas. Su propósito principal es permitirte realizar cálculos sobre cada uno de estos grupos utilizando **funciones de agregación**. Sin `GROUP BY`, las funciones de agregación operan sobre *todas* las filas devueltas por la consulta; con `GROUP BY`, operan individualmente sobre cada *grupo* de filas.

* **Funciones de Agregación Comunes:**
    * `COUNT(columna)`: Cuenta el número de filas o valores no nulos en una columna dentro de cada grupo. `COUNT(*)` cuenta todas las filas del grupo.
    * `SUM(columna)`: Suma los valores de una columna numérica dentro de cada grupo.
    * `AVG(columna)`: Calcula el promedio (media aritmética) de los valores de una columna numérica dentro de cada grupo.
    * `MAX(columna)`: Encuentra el valor máximo en una columna dentro de cada grupo.
    * `MIN(columna)`: Encuentra el valor mínimo en una columna dentro de cada grupo.

* **Regla Importante:** Cuando usas `GROUP BY`, cualquier columna en la cláusula `SELECT` debe ser:
    1.  Una de las columnas por las que estás agrupando (listada en `GROUP BY`).
    2.  El resultado de una función de agregación.

* **Caso de Uso:** Es fundamental cuando quieres obtener resúmenes de tus datos en lugar de filas individuales. Por ejemplo: ¿Cuántos clientes tengo por ciudad? ¿Cuál es el total de ventas por vendedor? ¿Cuál es el precio promedio de producto por categoría? ¿Cuál fue el pedido más reciente por cliente?

* **Ejemplos:**

    **Usando la tabla `usuarios` (creada anteriormente):**
    (Recordemos que tiene `id`, `nombre`, `email`, `fecha_registro`, `activo`, y añadimos `pais`)

    ```sql
    -- Supongamos estos datos en la tabla usuarios:
    -- INSERT INTO usuarios (nombre, email, pais, activo) VALUES
    -- ('Juan Perez', 'juan.perez@email.com', 'España', true),
    -- ('Ana Garcia', 'ana.garcia@email.com', 'México', true),
    -- ('Luis Gomez', 'luis.gomez@email.com', 'España', true),
    -- ('Maria Rodriguez', 'maria.r@email.com', 'Argentina', false),
    -- ('Carlos Sanchez', 'carlos.s@email.com', 'México', true);

    -- Ejemplo 1: Contar cuántos usuarios hay en cada país.
    -- Necesidad: Saber la distribución de usuarios por geografía.
    -- Uso: Agrupamos por 'pais' y contamos las filas en cada grupo.
    SELECT
        pais,
        COUNT(*) AS numero_de_usuarios -- Usamos COUNT(*) para contar filas por país
    FROM usuarios
    GROUP BY pais;
    -- Resultado esperado:
    -- pais      | numero_de_usuarios
    -------------|--------------------
    -- España    |                  2
    -- México    |                  2
    -- Argentina |                  1

    -- Ejemplo 2: Contar cuántos usuarios activos e inactivos hay.
    -- Necesidad: Ver el estado general de la base de usuarios.
    -- Uso: Agrupamos por la columna booleana 'activo' y contamos.
    SELECT
        activo,
        COUNT(*) AS total_usuarios
    FROM usuarios
    GROUP BY activo;
    -- Resultado esperado:
    -- activo | total_usuarios
    ----------|----------------
    -- true   |              4
    -- false  |              1

    -- Ejemplo 3: Contar cuántos usuarios activos hay por país.
    -- Necesidad: Análisis más detallado combinando geografía y estado.
    -- Uso: Filtramos primero con WHERE y luego agrupamos y contamos.
    SELECT
        pais,
        COUNT(*) AS usuarios_activos
    FROM usuarios
    WHERE activo = true  -- Filtramos ANTES de agrupar
    GROUP BY pais;
    -- Resultado esperado:
    -- pais      | usuarios_activos
    -------------|------------------
    -- España    |                2
    -- México    |                2
    ```

    **Creando y usando una tabla `productos` para más ejemplos:**

    ```sql
    -- Creamos una tabla simple de productos
    CREATE TABLE productos (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(100) NOT NULL,
        categoria VARCHAR(50),
        precio NUMERIC(10, 2),
        stock INT
    );

    -- Insertamos algunos datos de ejemplo
    INSERT INTO productos (nombre, categoria, precio, stock) VALUES
    ('Laptop Modelo X', 'Electrónica', 1200.50, 15),
    ('Teclado Mecánico', 'Accesorios', 75.00, 50),
    ('Monitor 24 pulgadas', 'Electrónica', 250.00, 25),
    ('Mouse Gamer', 'Accesorios', 45.50, 100),
    ('Silla de Oficina', 'Muebles', 150.00, 30),
    ('Webcam HD', 'Electrónica', 60.00, 40);

    -- Ejemplo 4: Calcular el número de productos y el stock total por categoría.
    -- Necesidad: Resumen de inventario por tipo de producto.
    -- Uso: Agrupamos por 'categoria' y usamos COUNT para número de productos
    --      y SUM para el total de unidades en stock.
    SELECT
        categoria,
        COUNT(*) AS numero_productos, -- Cuenta cuántos productos hay en la categoría
        SUM(stock) AS stock_total     -- Suma el stock de esos productos
    FROM productos
    GROUP BY categoria;
    -- Resultado esperado:
    -- categoria   | numero_productos | stock_total
    ---------------|------------------|-------------
    -- Electrónica |                3 |          80
    -- Accesorios  |                2 |         150
    -- Muebles     |                1 |          30

    -- Ejemplo 5: Calcular el precio promedio, mínimo y máximo por categoría.
    -- Necesidad: Análisis de precios por tipo de producto.
    -- Uso: Agrupamos por 'categoria' y aplicamos AVG, MIN y MAX a la columna 'precio'.
    SELECT
        categoria,
        AVG(precio) AS precio_promedio, -- Calcula el precio medio
        MIN(precio) AS precio_minimo,   -- Encuentra el precio más bajo
        MAX(precio) AS precio_maximo    -- Encuentra el precio más alto
    FROM productos
    GROUP BY categoria;
    -- Resultado esperado (los promedios pueden variar ligeramente por redondeo):
    -- categoria   | precio_promedio | precio_minimo | precio_maximo
    ---------------|-----------------|---------------|---------------
    -- Electrónica |          503.50 |         60.00 |       1200.50
    -- Accesorios  |           60.25 |         45.50 |         75.00
    -- Muebles     |          150.00 |        150.00 |        150.00

    -- Ejemplo 6 (Avanzado - Usando HAVING): Mostrar categorías cuyo precio promedio sea mayor a 100.
    -- Necesidad: Filtrar los *resultados* de la agregación, no las filas originales.
    -- Uso: Usamos HAVING para filtrar DESPUÉS de que GROUP BY y AVG han hecho su trabajo.
    --      WHERE filtra filas antes de agrupar, HAVING filtra grupos después de agregar.
    SELECT
        categoria,
        AVG(precio) AS precio_promedio
    FROM productos
    GROUP BY categoria
    HAVING AVG(precio) > 100; -- Filtra los grupos basados en el resultado de AVG
    -- Resultado esperado:
    -- categoria   | precio_promedio
    ---------------|-----------------
    -- Electrónica |          503.50
    -- Muebles     |          150.00
    ```

---

### Nos quedamos aqui, pero que sepais que hay mas cosas...

Aunque lo que pediste cubre los fundamentos, aquí hay algunos conceptos importantes que podrías querer aprender a continuación:

1.  **`ALTER TABLE`:** Para modificar una tabla existente (añadir, eliminar, modificar columnas o restricciones).
    * *Ejemplo:* `ALTER TABLE usuarios ADD COLUMN telefono VARCHAR(20);`
2.  **Más Restricciones (Constraints):**
    * `FOREIGN KEY`: Para establecer relaciones entre tablas (ej., vincular pedidos con usuarios).
    * `CHECK`: Para definir condiciones que los datos deben cumplir (ej., `precio > 0`).

4.  **`JOIN`:** ¡Fundamental! Para combinar filas de dos o más tablas basándose en una columna relacionada entre ellas (ej., obtener los datos de un usuario junto con sus pedidos). Hay varios tipos: `INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`, `FULL OUTER JOIN`.
5.  **Subconsultas (Subqueries):** Consultas anidadas dentro de otras consultas.
6.  **Índices (`CREATE INDEX`):** Para acelerar las operaciones de búsqueda (`SELECT`) en tablas grandes. Las claves primarias (`PRIMARY KEY`) y únicas (`UNIQUE`) crean índices automáticamente.
7.  **Transacciones (`BEGIN`, `COMMIT`, `ROLLBACK`):** Para agrupar varias operaciones SQL como una unidad atómica (o todas tienen éxito o ninguna).

