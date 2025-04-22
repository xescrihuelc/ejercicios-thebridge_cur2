
**Tema:** Bestiario de Criaturas Mágicas

**1. Query `CREATE TABLE` (PostgreSQL)**

```sql
CREATE TABLE CriaturasMagicas (
    id SERIAL PRIMARY KEY,                      -- Identificador único auto-incremental (PostgreSQL)
    nombre VARCHAR(100) NOT NULL UNIQUE,        -- Nombre de la criatura, no puede ser nulo y debe ser único
    tipo VARCHAR(50),                           -- Tipo (ej: Bestia, Elemental, No-muerto, Feérico)
    habitat VARCHAR(100),                       -- Dónde suele encontrarse (ej: Bosque Encantado, Montañas Nubladas)
    nivel_peligro INTEGER CHECK (nivel_peligro >= 1 AND nivel_peligro <= 10), -- Escala de 1 (inofensivo) a 10 (muy peligroso)
    habilidad_especial VARCHAR(150),            -- Habilidad destacada (ej: Aliento de Fuego, Curación, Invisibilidad)
    fecha_avistamiento DATE,                    -- Última fecha en la que fue vista
    descripcion TEXT                            -- Descripción más detallada (opcional)
);

-- Añadimos un índice al tipo para búsquedas más rápidas (opcional pero buena práctica)
CREATE INDEX idx_criaturas_tipo ON CriaturasMagicas (tipo);
```

**2. Queries `INSERT INTO`**

```sql
INSERT INTO CriaturasMagicas (nombre, tipo, habitat, nivel_peligro, habilidad_especial, fecha_avistamiento, descripcion) VALUES
('Dragón Rojo Furia', 'Bestia', 'Montañas Volcánicas', 9, 'Aliento de Fuego Masivo', '2024-05-15', 'Un enorme dragón con escamas rojas brillantes y muy mal temperamento.'),
('Unicornio Plateado', 'Celestial', 'Bosque Encantado Profundo', 2, 'Cuerno Curativo', '2025-01-10', 'Criatura noble y pura, su cuerno puede sanar cualquier herida.'),
('Grifo Real', 'Bestia', 'Picos Nublados', 7, 'Vuelo Supersónico', '2024-11-20', 'Mitad águila, mitad león. Majestuoso y territorial.'),
('Goblin Carcajada', 'Humanoide', 'Cuevas Húmedas', 3, 'Trampas Improvisadas', '2025-03-01', 'Pequeño, verde y molesto. Le encanta tender emboscadas simples.'),
('Fénix Eterno', 'Elemental', 'Cráter Ardiente', 10, 'Renacimiento Ígneo', NULL, 'Ave de fuego que renace de sus cenizas. Inmortal y extremadamente poderoso.'),
('Sirena Melódica', 'Acuático', 'Arrecife Coralino Soleado', 4, 'Canto Hipnótico', '2024-08-30', 'Hermosa criatura marina cuya voz puede encantar a los marineros.'),
('Centauro Arquero Veloz', 'Humanoide', 'Llanuras Verdes', 6, 'Puntería Infalible', '2025-02-18', 'Mitad humano, mitad caballo. Experto con el arco y la flecha.'),
('Hada Luminosa del Claro', 'Feérico', 'Claro de Luna Silencioso', 1, 'Polvo de Sueños Tranquilos', '2024-12-25', 'Pequeña criatura alada que brilla suavemente en la oscuridad.'),
('Golem de Obsidiana', 'Constructo', 'Ruinas Antiguas Olvidadas', 8, 'Fuerza Imparable', '2023-10-01', 'Constructo mágico hecho de roca volcánica, lento pero increíblemente fuerte.'),
('Sprite Travieso del Musgo', 'Feérico', 'Bosque Susurrante', 2, 'Invisibilidad Temporal', NULL, 'Diminuto ser feérico al que le gusta gastar bromas y esconderse.'),
('Kraken Abisal Gigante', 'Acuático', 'Fosa Marina Profunda', 10, 'Agarre Tentacular Aplastante', '2022-07-11', 'Monstruo marino colosal con innumerables tentáculos.'),
('Basilisco Petrificador', 'Reptil', 'Alcantarillas Olvidadas', 9, 'Mirada Petrificante Instantánea', '2024-09-05', 'Serpiente gigante cuya mirada convierte a sus víctimas en piedra.'),
('Dríade Guardiana del Árbol', 'Planta', 'Bosque Primigenio Ancestral', 5, 'Controlar Naturaleza Circundante', '2025-04-01', 'Espíritu del árbol con forma femenina, protege su bosque.'),
('Vampiro Conde Sanguinus', 'No-muerto', 'Castillo Sombrío Decadente', 8, 'Drenar Vida y Niebla', NULL, 'Aristócrata no-muerto que se alimenta de sangre y puede comandar la niebla.'),
('Hombre Lobo Garra Nocturna', 'Humanoide', 'Bosque Bajo la Luna Llena', 7, 'Transformación Lunar y Furia', '2025-03-31', 'Humano que se transforma en una bestia feroz durante la luna llena.');

-- Agregamos una criatura sin habilidad especial para practicar IS NULL
INSERT INTO CriaturasMagicas (nombre, tipo, habitat, nivel_peligro, fecha_avistamiento, descripcion) VALUES
('Elemental de Agua Menor', 'Elemental', 'Lago Cristalino', 3, '2024-06-10', 'Un espíritu acuático básico sin habilidades destacables.');

-- Agregamos otra criatura con nivel de peligro 10
INSERT INTO CriaturasMagicas (nombre, tipo, habitat, nivel_peligro, habilidad_especial, fecha_avistamiento, descripcion) VALUES
('Liche Archimago Zarthus', 'No-muerto', 'Torre Nigromántica', 10, 'Magia Negra Avanzada', '2021-01-01', 'Un poderoso mago no-muerto que busca la inmortalidad a cualquier precio.');

-- Agregamos un monton mas!
INSERT INTO CriaturasMagicas (nombre, tipo, habitat, nivel_peligro, habilidad_especial, fecha_avistamiento, descripcion) VALUES
('Quimera Tricéfala', 'Bestia', 'Desfiladeros Rocosos', 8, 'Aliento de Fuego, Veneno y Grito Sónico', '2024-03-12', 'Combinación aterradora de león, cabra y serpiente.'),
('Esfinge Guardiana', 'Mítico', 'Ruinas del Desierto Antiguo', 7, 'Acertijos Mortales', '2023-11-05', 'Protectora de conocimientos antiguos, propone enigmas a los viajeros.'),
('Gárgola Vigía', 'Constructo', 'Catedral Gótica Abandonada', 5, 'Piel de Piedra', '2024-07-22', 'Estatua que cobra vida para defender su territorio, especialmente de noche.'),
('Naga Venenosa', 'Reptil', 'Jungla Pantanosa Calurosa', 6, 'Mordisco Paralizante y Constricción', '2025-02-01', 'Serpiente humanoide con poderosa magia y veneno.'),
('Sátiro Flautista', 'Feérico', 'Bosque Festivo Soleado', 3, 'Música Encantadora', NULL, 'Amante de la fiesta y la música, puede hacer bailar a cualquiera.'),
('Minotauro del Laberinto', 'Humanoide', 'Laberinto Subterráneo Olvidado', 8, 'Carga Bestial y Hacha Doble', '2024-10-30', 'Fuerza bruta con cabeza de toro, perdido en su propio laberinto.'),
('Banshee Llorona', 'No-muerto', 'Ciénaga Brumosa Espectral', 7, 'Grito Mortal Anunciador', '2023-08-14', 'Espíritu femenino cuyo lamento predice una muerte inminente.'),
('Hipogrifo Noble', 'Bestia', 'Colinas Ventosas del Norte', 6, 'Vuelo Elegante y Garras Afiladas', '2025-04-11', 'Criatura orgullosa, mezcla de águila y caballo.'),
('Wendigo Devorador', 'Espíritu', 'Bosque Nevado Profundo y Oscuro', 9, 'Hambre Insaciable y Mimetismo', '2022-12-20', 'Espíritu maligno asociado al canibalismo y al frío extremo.'),
('Djinn de la Lámpara Oxidada', 'Elemental', 'Lámpara Antigua Sellada', 7, 'Concesión de Deseos Retorcidos', '2020-05-01', 'Genio poderoso pero tramposo, cuidado con lo que deseas.'),
('Leprechaun Avaro', 'Feérico', 'Colinas Verdes de Tréboles', 2, 'Esconder Oro y Suerte Ilusoria', '2025-03-17', 'Pequeño ser obsesionado con su oro, difícil de atrapar.'),
('Kobold Minero Leal', 'Humanoide', 'Minas Abandonadas Ricas', 2, 'Excavación Rápida y Trampas Menores', NULL, 'Reptiloides pequeños que a menudo sirven a dragones.'),
('Wyvern Cazador', 'Bestia', 'Acantilados Costeros Peligrosos', 8, 'Aguijón Venenoso y Vuelo Ágil', '2024-06-28', 'Similar a un dragón, pero con dos patas y un aguijón venenoso en la cola.'),
('Fantasma Aullador Encadenado', 'Fantasma', 'Mansión Embrujada Decrépita', 4, 'Lamentos Aterradores y Toque Frío', '2023-01-15', 'Espíritu atormentado incapaz de abandonar el lugar de su muerte.'),
('Imp Burlón', 'Demonio Menor', 'Plano Infernal Cercano', 3, 'Magia Menor Ilusoria y Molestar', NULL, 'Pequeño demonio que disfruta causando pequeñas desgracias.'),
('Treant Anciano Sabio', 'Planta', 'Corazón del Bosque Primigenio', 7, 'Animar Árboles y Fuerza Natural', '2021-08-08', 'Árbol consciente y guardián del bosque, muy antiguo y sabio.'),
('Ogro Brutal del Pantano', 'Humanoide', 'Pantano Apestoso y Fangoso', 6, 'Garrote Pesado y Poca Inteligencia', '2024-04-04', 'Grande, fuerte y no muy listo. Territorial y agresivo.'),
('Cíclope Pastor Solitario', 'Gigante', 'Isla Remota Volcánica', 7, 'Fuerza Colosal y Lanzar Rocas', '2023-05-21', 'Gigante de un solo ojo, a menudo cuida rebaños peculiares.'),
('Ángel Caído Renegado', 'Celestial/Demonio', 'Ruinas Celestiales Destruidas', 9, 'Alas Negras y Poder Corrupto', NULL, 'Un ángel expulsado del paraíso, ahora con poderes oscuros.'),
('Serpiente Marina Dentada', 'Acuático', 'Estrecho Peligroso entre Islas', 7, 'Mordisco Triturador y Camuflaje Acuático', '2024-11-11', 'Enorme serpiente marina que ataca barcos desprevenidos.'),
('Gólem de Hielo Glacial', 'Constructo', 'Tundra Congelada Eterna', 7, 'Aliento Congelante y Cuerpo Resistente', '2022-02-14', 'Hecho de hielo mágico, inmune al frío y puede congelar a sus enemigos.'),
('Mantícora Comehombres', 'Bestia', 'Cañones Áridos y Secos', 8, 'Cola con Púas Venenosas y Rugido Aterrador', '2024-01-03', 'León con alas de murciélago, cola de escorpión y rostro humanoide.'),
('Pegaso Alado Blanco', 'Celestial', 'Nubes Altas cerca del Olimpo', 4, 'Vuelo Majestuoso y Pureza', '2025-05-05', 'Caballo alado de gran belleza y bondad, difícil de encontrar.'),
('Esqueleto Guerrero Leal', 'No-muerto', 'Cripta Olvidada del Rey', 4, 'Espada Oxidada y Determinación Vacía', NULL, 'Restos óseos animados por magia oscura para servir a su amo.'),
('Zombi Lento Contagioso', 'No-muerto', 'Cementerio Abandonado Brumoso', 2, 'Mordisco Infeccioso y Horda', '2024-10-31', 'Cadáver reanimado que busca carne fresca, lento pero numeroso.'),
('Arpía Chillona', 'Bestia/Humanoide', 'Montañas Escarpadas y Ventosas', 5, 'Grito Enloquecedor y Garras Sucias', '2023-09-09', 'Criatura voladora con cuerpo de ave y cabeza de mujer, cruel y sucia.'),
('Salamandra Ígnea Pequeña', 'Elemental', 'Pozos de Lava Activos', 5, 'Inmunidad al Fuego y Piel Ardiente', '2024-08-18', 'Lagarto elemental que vive y se alimenta del fuego.'),
('Gnomo Inventor Chiflado', 'Humanoide', 'Taller Subterráneo Ruidoso', 2, 'Artilugios Explosivos (a veces)', NULL, 'Pequeño inventor obsesionado con mecanismos complejos y a menudo peligrosos.'),
('Duergar Explorador Oscuro', 'Humanoide', 'Ciudad Subterránea Oscura Profunda', 4, 'Invisibilidad en Sombras y Magia Ilusoria', '2023-03-25', 'Primo malvado de los enanos, adaptado a la vida subterránea.'),
('Rakshasa Ilusionista', 'Demonio', 'Palacio Exótico Oculto', 8, 'Cambio de Forma y Magia Mental', '2022-11-30', 'Demonio con cabeza de tigre que disfruta engañando y manipulando.'),
('Doppelgänger Suplantador', 'Aberración', 'Ciudades Humanas Populosas', 6, 'Cambiar de Forma Perfectamente', '2025-01-29', 'Criatura capaz de imitar la apariencia de otros seres.'),
('Gusano Púrpura Devorador', 'Bestia', 'Cavernas Profundas y Húmedas', 9, 'Engullir Entero y Emboscada Subterránea', '2021-06-15', 'Gusano gigante que crea túneles y devora todo a su paso.'),
('Elemental de Tierra Resistente', 'Elemental', 'Cuevas Rocosas Primordiales', 6, 'Piel Pétrea y Control Terrestre', NULL, 'Espíritu de la tierra, fuerte y difícil de dañar físicamente.'),
('Elemental de Aire Veloz', 'Elemental', 'Cimas de Montañas Tormentosas', 5, 'Forma Gaseosa y Control del Viento', '2024-02-29', 'Espíritu del aire, rápido y difícil de atrapar.'),
('Pixie Bromista del Bosque', 'Feérico', 'Prados Floridos Secretos', 2, 'Invisibilidad y Pequeñas Ilusiones', '2025-04-20', 'Pequeña hada alada conocida por sus bromas inofensivas.'),
('Oso Lechuza Depredador', 'Bestia', 'Bosque Denso y Antiguo', 7, 'Abrazo Aplastante y Pico Desgarrador', '2023-07-07', 'Extraña y agresiva mezcla de oso y lechuza gigante.'),
('Caballero Espectral Guardián', 'Fantasma', 'Campo de Batalla Antiguo Olvidado', 7, 'Armadura Etérea y Ataque Espectral', NULL, 'Fantasma de un guerrero honorable que aún protege un lugar.'),
('Súcubo Seductora', 'Demonio', 'Planos Etéreos y Sueños Humanos', 6, 'Drenar Energía Vital y Encanto Sobrenatural', '2024-09-23', 'Demonio femenino que seduce mortales para robar su fuerza vital.'),
('Hidra de Lerna Regenerativa', 'Bestia', 'Pantano Maldito Inexpugnable', 9, 'Múltiples Cabezas y Regeneración Rápida', '2022-04-18', 'Serpiente acuática gigante con múltiples cabezas que vuelven a crecer.'),
('Gólem de Carne Ensamblado', 'Constructo/No-muerto', 'Laboratorio del Alquimista Loco', 7, 'Fuerza Bruta y Partes Intercambiables', '2023-12-01', 'Constructo grotesco hecho de partes de cadáveres cosidas.'),
('Escorpión Gigante del Desierto', 'Bestia', 'Desierto de Arena Hirviente', 6, 'Pinzas Aplastantes y Aguijón Neurotóxico', '2024-05-30', 'Arácnido de tamaño descomunal adaptado a climas extremos.'),
('Araña Gigante Tejedora de Trampas', 'Bestia', 'Bosque Tenebroso Lleno de Telas', 5, 'Telarañas Pegajosas y Veneno Paralizante', '2023-10-13', 'Araña enorme que crea complejas redes para atrapar presas.'),
('Remorhaz Glacial', 'Bestia', 'Glaciar Ártico Profundo', 9, 'Calor Interno Intenso y Emboscada Helada', '2021-11-11', 'Insectoide gigante que genera un calor inmenso, derritiendo el hielo a su alrededor.'),
('Genio del Viento Noble', 'Elemental', 'Tormenta Eterna Controlada', 8, 'Control del Clima y Vuelo Huracanado', NULL, 'Elemental de aire poderoso y a menudo arrogante.'),
('Mimic Cofre Falso', 'Aberración', 'Mazmorras y Ruinas Trampa', 5, 'Transformación en Objeto Inanimado y Adhesivo', '2024-07-01', 'Depredador que imita objetos para atraer y atrapar a sus víctimas.'),
('Devorador de Intelecto Acechador', 'Aberración', 'Underdark Siniestro', 7, 'Devorar Cerebros y Control Mental', '2023-06-19', 'Criatura psiónica que se alimenta de la inteligencia de sus presas.'),
('Homúnculo Sirviente Leal', 'Constructo', 'Laboratorio Mágico del Mago', 1, 'Vínculo Telepático y Tareas Simples', NULL, 'Pequeño ser artificial creado para servir a un mago.'),
('Gremlin Saboteador de Máquinas', 'Feérico/Mecánico', 'Talleres y Fábricas Ruidosas', 3, 'Desmontar Mecanismos y Mala Suerte', '2024-12-12', 'Criatura caótica que disfruta destruyendo maquinaria.'),
('Thri-kreen Nómada Psiónico', 'Humanoide Insectoide', 'Estepas Secas y Soleadas', 5, 'Cuatro Brazos, Salto Poderoso y Psiónica Menor', '2023-04-28', 'Insectoide inteligente y nómada con habilidades mentales.'),
('Yeti Guardián de la Cumbre', 'Bestia', 'Cumbres Nevadas Inaccesibles', 7, 'Camuflaje en Nieve y Rugido Congelante', '2022-09-15', 'Primate grande y peludo adaptado a las alturas heladas.'),
('Cockatrice Petrificadora Menor', 'Bestia', 'Colinas Rocosas y Granjas', 6, 'Picotazo Petrificante (temporal)', '2024-11-01', 'Mezcla de gallo y reptil cuyo picotazo puede convertir en piedra.'),
('Golem de Arcilla Básico', 'Constructo', 'Taller de Golems Inicial', 4, 'Fuerza Considerable y Reparable', '2025-01-01', 'Un golem simple pero efectivo hecho de arcilla mágica.');

```

**3. 20 Ejercicios de Queries SQL (PostgreSQL)**

Aquí tienes 20 ejercicios de dificultad variada para practicar:

1.  **Selección básica:** Muestra todos los datos de todas las criaturas mágicas.
2.  **Selección específica:** Muestra solo el `nombre`, `tipo` y `nivel_peligro` de todas las criaturas.
3.  **Filtrado simple (=):** Encuentra todas las criaturas que viven en 'Picos Nublados'.
4.  **Filtrado numérico (>):** Lista las criaturas con un `nivel_peligro` estrictamente mayor a 8.
5.  **Filtrado con `LIKE`:** Encuentra todas las criaturas cuyo nombre contenga la palabra 'Rojo' o 'Roja'. (Recuerda que `LIKE` es sensible a mayúsculas/minúsculas por defecto en PostgreSQL, usa `ILIKE` para ignorar).
6.  **Filtrado con `IN`:** Muestra las criaturas que sean de tipo 'Bestia', 'Elemental' o 'Acuático'.
7.  **Filtrado con `BETWEEN`:** Lista las criaturas cuyo `nivel_peligro` esté entre 4 y 7 (ambos inclusive).
8.  **Filtrado `IS NULL`:** Encuentra las criaturas para las cuales no se conoce la `fecha_avistamiento`.
9.  **Filtrado `IS NOT NULL`:** Muestra las criaturas que sí tienen una `habilidad_especial` registrada.
10. **Combinación `AND`:** Lista las criaturas de tipo 'Humanoide' que además tengan un `nivel_peligro` mayor o igual a 6.
11. **Combinación `OR`:** Encuentra las criaturas que vivan en 'Cuevas Húmedas' o tengan un `nivel_peligro` menor a 3.
12. **Ordenación `ORDER BY`:** Muestra el nombre y nivel de peligro de todas las criaturas, ordenadas por `nivel_peligro` de mayor a menor. Si hay empate, ordena por nombre alfabéticamente.
13. **Limitación `LIMIT`:** Muestra las 3 criaturas más peligrosas (según `nivel_peligro`).
14. **Conteo `COUNT(*)`:** ¿Cuántas criaturas hay registradas en total?
15. **Conteo con `WHERE`:** ¿Cuántas criaturas son de tipo 'Feérico'?
16. **Promedio `AVG`:** ¿Cuál es el nivel de peligro promedio de todas las criaturas?
17. **Máximo `MAX`:** ¿Cuál es el `nivel_peligro` más alto registrado?
18. **Agrupación `GROUP BY`:** Muestra cuántas criaturas hay de cada `tipo`.
19. **Agrupación con `HAVING`:** Muestra los `tipos` de criatura que tienen un nivel de peligro promedio superior a 6.
20. **Valores únicos `DISTINCT`:** Lista todos los `habitats` diferentes donde se han avistado criaturas, sin repetir.


htts://sql-island.informatik.uni-kl.de/
