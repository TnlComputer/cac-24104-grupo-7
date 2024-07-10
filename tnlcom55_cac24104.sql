-- phpMyAdmin SQL Dump
-- version 5.2.0-rc1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 10-07-2024 a las 19:57:44
-- Versión del servidor: 8.0.30
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tnlcom55_cac24104`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paises`
--

CREATE TABLE `paises` (
  `id` int NOT NULL,
  `Nombre` char(52) COLLATE utf8mb4_general_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `paises`
--

INSERT INTO `paises` (`id`, `Nombre`) VALUES
(1, 'Aruba'),
(2, 'Afghanistan'),
(3, 'Angola'),
(4, 'Anguilla'),
(5, 'Albania'),
(6, 'Andorra'),
(7, 'Netherlands Antilles'),
(8, 'United Arab Emirates'),
(9, 'Argentina'),
(10, 'Armenia'),
(11, 'American Samoa'),
(12, 'Antarctica'),
(13, 'French Southern territories'),
(14, 'Antigua and Barbuda'),
(15, 'Australia'),
(16, 'Austria'),
(17, 'Azerbaijan'),
(18, 'Burundi'),
(19, 'Belgium'),
(20, 'Benin'),
(21, 'Burkina Faso'),
(22, 'Bangladesh'),
(23, 'Bulgaria'),
(24, 'Bahrain'),
(25, 'Bahamas'),
(26, 'Bosnia and Herzegovina'),
(27, 'Belarus'),
(28, 'Belize'),
(29, 'Bermuda'),
(30, 'Bolivia'),
(31, 'Brazil'),
(32, 'Barbados'),
(33, 'Brunei'),
(34, 'Bhutan'),
(35, 'Bouvet Island'),
(36, 'Botswana'),
(37, 'Central African Republic'),
(38, 'Canada'),
(39, 'Cocos (Keeling) Islands'),
(40, 'Switzerland'),
(41, 'Chile'),
(42, 'China'),
(43, 'C?te d?Ivoire'),
(44, 'Cameroon'),
(45, 'Congo, The Democratic Republic of the'),
(46, 'Congo'),
(47, 'Cook Islands'),
(48, 'Colombia'),
(49, 'Comoros'),
(50, 'Cape Verde'),
(51, 'Costa Rica'),
(52, 'Cuba'),
(53, 'Christmas Island'),
(54, 'Cayman Islands'),
(55, 'Cyprus'),
(56, 'Czech Republic'),
(57, 'Germany'),
(58, 'Djibouti'),
(59, 'Dominica'),
(60, 'Denmark'),
(61, 'Dominican Republic'),
(62, 'Algeria'),
(63, 'Ecuador'),
(64, 'Egypt'),
(65, 'Eritrea'),
(66, 'Western Sahara'),
(67, 'Spain'),
(68, 'Estonia'),
(69, 'Ethiopia'),
(70, 'Finland'),
(71, 'Fiji Islands'),
(72, 'Falkland Islands'),
(73, 'France'),
(74, 'Faroe Islands'),
(75, 'Micronesia, Federated States of'),
(76, 'Gabon'),
(77, 'United Kingdom'),
(78, 'Georgia'),
(79, 'Ghana'),
(80, 'Gibraltar'),
(81, 'Guinea'),
(82, 'Guadeloupe'),
(83, 'Gambia'),
(84, 'Guinea-Bissau'),
(85, 'Equatorial Guinea'),
(86, 'Greece'),
(87, 'Grenada'),
(88, 'Greenland'),
(89, 'Guatemala'),
(90, 'French Guiana'),
(91, 'Guam'),
(92, 'Guyana'),
(93, 'Hong Kong'),
(94, 'Heard Island and McDonald Islands'),
(95, 'Honduras'),
(96, 'Croatia'),
(97, 'Haiti'),
(98, 'Hungary'),
(99, 'Indonesia'),
(100, 'India'),
(101, 'British Indian Ocean Territory'),
(102, 'Irlanda'),
(103, 'Iran'),
(104, 'Iraq'),
(105, 'Iceland'),
(106, 'Israel'),
(107, 'Italy'),
(108, 'Jamaica'),
(109, 'Jordan'),
(110, 'Japan'),
(111, 'Kazakstan'),
(112, 'Kenya'),
(113, 'Kyrgyzstan'),
(114, 'Cambodia'),
(115, 'Kiribati'),
(116, 'Saint Kitts and Nevis'),
(117, 'South Korea'),
(118, 'Kuwait'),
(119, 'Laos'),
(120, 'Lebanon'),
(121, 'Liberia'),
(122, 'Libyan Arab Jamahiriya'),
(123, 'Saint Lucia'),
(124, 'Liechtenstein'),
(125, 'Sri Lanka'),
(126, 'Lesotho'),
(127, 'Lithuania'),
(128, 'Luxembourg'),
(129, 'Latvia'),
(130, 'Macao'),
(131, 'Morocco'),
(132, 'Monaco'),
(133, 'Moldova'),
(134, 'Madagascar'),
(135, 'Maldives'),
(136, 'Mexico'),
(137, 'Marshall Islands'),
(138, 'Macedonia'),
(139, 'Mali'),
(140, 'Malta'),
(141, 'Myanmar'),
(142, 'Mongolia'),
(143, 'Northern Mariana Islands'),
(144, 'Mozambique'),
(145, 'Mauritania'),
(146, 'Montserrat'),
(147, 'Martinique'),
(148, 'Mauritius'),
(149, 'Malawi'),
(150, 'Malaysia'),
(151, 'Mayotte'),
(152, 'Namibia'),
(153, 'New Caledonia'),
(154, 'Niger'),
(155, 'Norfolk Island'),
(156, 'Nigeria'),
(157, 'Nicaragua'),
(158, 'Niue'),
(159, 'Netherlands'),
(160, 'Norway'),
(161, 'Nepal'),
(162, 'Nauru'),
(163, 'New Zealand'),
(164, 'Oman'),
(165, 'Pakistan'),
(166, 'Panama'),
(167, 'Pitcairn'),
(168, 'Peru'),
(169, 'Philippines'),
(170, 'Palau'),
(171, 'Papua New Guinea'),
(172, 'Poland'),
(173, 'Puerto Rico'),
(174, 'North Korea'),
(175, 'Portugal'),
(176, 'Paraguay'),
(177, 'Palestine'),
(178, 'French Polynesia'),
(179, 'Qatar'),
(180, 'R?union'),
(181, 'Romania'),
(182, 'Russian Federation'),
(183, 'Rwanda'),
(184, 'Saudi Arabia'),
(185, 'Sudan'),
(186, 'Senegal'),
(187, 'Singapore'),
(188, 'South Georgia and the South Sandwich Islands'),
(189, 'Saint Helena'),
(190, 'Svalbard and Jan Mayen'),
(191, 'Solomon Islands'),
(192, 'Sierra Leone'),
(193, 'El Salvador'),
(194, 'San Marino'),
(195, 'Somalia'),
(196, 'Saint Pierre and Miquelon'),
(197, 'Sao Tome and Principe'),
(198, 'Suriname'),
(199, 'Slovakia'),
(200, 'Slovenia'),
(201, 'Sweden'),
(202, 'Swaziland'),
(203, 'Seychelles'),
(204, 'Syria'),
(205, 'Turks and Caicos Islands'),
(206, 'Chad'),
(207, 'Togo'),
(208, 'Thailand'),
(209, 'Tajikistan'),
(210, 'Tokelau'),
(211, 'Turkmenistan'),
(212, 'East Timor'),
(213, 'Tonga'),
(214, 'Trinidad and Tobago'),
(215, 'Tunisia'),
(216, 'Turkey'),
(217, 'Tuvalu'),
(218, 'Taiwan'),
(219, 'Tanzania'),
(220, 'Uganda'),
(221, 'Ukraine'),
(222, 'United States Minor Outlying Islands'),
(223, 'Uruguay'),
(224, 'United States'),
(225, 'Uzbekistan'),
(226, 'Holy See (Vatican City State)'),
(227, 'Saint Vincent and the Grenadines'),
(228, 'Venezuela'),
(229, 'Virgin Islands, British'),
(230, 'Virgin Islands, U.S.'),
(231, 'Vietnam'),
(232, 'Vanuatu'),
(233, 'Wallis and Futuna'),
(234, 'Samoa'),
(235, 'Yemen'),
(236, 'Yugoslavia'),
(237, 'South Africa'),
(238, 'Zambia'),
(239, 'Zimbabwe');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `peliculas`
--

CREATE TABLE `peliculas` (
  `id` int NOT NULL,
  `titulo` varchar(150) COLLATE utf8mb4_general_ci NOT NULL,
  `imagen` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `genero` varchar(150) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `director` varchar(150) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `duracion` time NOT NULL,
  `estreno` date DEFAULT NULL,
  `descripcion` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `peliculas`
--

INSERT INTO `peliculas` (`id`, `titulo`, `imagen`, `genero`, `director`, `duracion`, `estreno`, `descripcion`, `isActive`) VALUES
(1, 'The Beekeeper', 'peli_1.jpg', 'Acción, Crimen, Suspenso', 'David Ayer', '01:45:00', '2024-01-12', 'La brutal campaña de venganza de un hombre adquiere dimensiones nacionales cuando se descubre que es un antiguo agente de una poderosa organización clandestina conocida como \"Los apicultores\".', 1),
(2, 'Badlan Hunters', 'peli_2.jpg', 'Acción, Aventura, Crimen', 'Kim Bo-tong, Kwak Jae-min', '01:47:00', '2024-01-26', 'Cuando Seúl se vuelve un lugar yermo y sin ley tras un terremoto, un cazador entra en acción para rescatar a una adolescente que fue secuestrada por un médico trastornado.', 1),
(3, 'The MarvelS', 'peli_3.jpg', 'Acción, Aventura, Aventura', 'Nia DaCVosta', '01:45:00', '2023-10-11', 'Secuela de la película del 2019 \"Capitán Marvel\".', 1),
(4, 'Wonka', 'peli_4.jpg', 'Aventura, Comedia, Familia', 'Paul King', '01:56:00', '2023-12-15', 'La historia se centrará específicamente en un joven Willy Wonka y en cómo conoció a los Oompa-Loompas en una de sus primeras aventuras.', 1),
(5, 'Aquaman', 'peli_5.jpg', 'Acción, Aventura, Fantasía', 'James Wan', '02:23:00', '2018-12-13', 'El heredero de Atlantis, Arthur Curry, se embarca a prevenir una guerra entre los mundos del agua y la tierra.', 1),
(6, 'Migration', 'peli_6.jpg', 'Animación, Aventura, Comedia', 'Benjamin Renner, Guylo Homsy', '01:23:00', '2023-12-06', 'Una familia de patos intenta convencer a su sobreprotector padre para que se vaya de vacaciones.', 1),
(7, '60 Minutes', 'peli_7.jpg', 'Acción, Aventura, Drama', 'Oliver Kienle', '01:28:00', '2024-01-19', 'Desesperado por no perder la custodia de su hija, un luchador de artes marciales mixtas abandona una pelea y recorre Berlín a todo gas para verla el día de su cumpleaños.', 1),
(8, 'Wish', 'peli_8.jpg', 'Animación, Aventira, Comedia', 'Chris Buck, Fawn Veerasunthorn', '01:35:00', '2023-11-22', 'Asha pide un deseo a una estrella y recibe una respuesta mucho más directa de lo que esperaba cuando un astro problemático baja del cielo para unirse a ella.', 1),
(9, 'The Masked Saint', 'peli_9.jpg', 'Acción, Biografía, Crimen', 'Warren P. Sonoda', '01:45:00', '2016-01-08', 'A pastor and professional wrestler accepts a position at a struggling church where he helps the community both in his official capacity and as his alter ego The Saint.', 1),
(10, 'Due Justice', 'peli_10.jpg', 'Acción, Crimen, Drama', 'Kjavier, Crimen, Drama', '01:37:00', '2023-11-24', 'Un abogado con pasado militar persigue a la banda que mató a su mujer y a su hermano y se llevó a su hija.', 1),
(11, 'Orion and The Dark', 'peli_11.jpg', 'Animación, Aventura, Comedia', 'Sean Charmatz', '01:33:00', '2024-02-02', 'Orion le tiene miedo a las alturas, a los animales y se queda casi paralizado ante el peor de todos los peligros: la oscuridad. Esta, lleva a Orión en un viaje nocturno para demostrarle que lo único que hay que temer es el propio miedo.', 1),
(12, 'Genghis Khan', 'peli_12.jpg', 'Fantasía, Acción, Aventura', 'Hasi Chaolu', '01:59:00', '2018-04-28', 'Temüjin y Börte son amantes de la infancia que están profundamente enamorados, pero las noticias de la muerte del padre de Temüjin interrumpieron rápidamente su relación. Temüjin regresa a su ciudad natal, pero se enfrentó a un ataque repentino de los antiguos camaradas de su padre, causando la destrucción de toda su tribu.', 1),
(13, 'Lift', 'peli_13.jpg', 'Acción, Comedia, Crimen', 'F. Gary Gray', '01:47:00', '2024-01-12', 'Sigue a una maestra ladrona y a su ex novio, que se unen para robar 100 millones de dólares en lingotes de oro que se transportan en un avión A380 de pasajeros.', 1),
(14, 'Attack', 'peli_14.jpg', 'Acción, ciencia ficción, thriller ', 'Lakshya Raj Anand', '02:01:00', '2022-04-01', 'Con el Parlamento bajo asedio, el primer supersoldado de la India, Arjun Shergill, se encarga de apoderar a los terroristas en el momento, salvar al Primer Ministro de sus garras y evitar que una bomba sucia explote y destruya Delhi. Arjun triturá en su misión?', 1),
(15, 'Mutant Ghost Wargirl', 'peli_15.jpg', 'Accion, Ciencia Ficción', 'Binjie Liu', '01:11:00', '2022-09-26', 'En el mundo futuro, la tecnología avanza a pasos agigantados. Ha surgido en el mundo una organización misteriosa, especializada en organizar una \"competencia\" clandestina para los ricos: la Batalla del Mañana.', 1),
(16, 'Poor Things', 'peli_16.jpg', 'Comedia, Drama, Romance', 'Yorgos Lanthimos', '02:21:00', '2023-12-08', 'El increíble relato de la fantástica evolución de Bella Baxter, una joven resucitada por el brillante y poco ortodoxo científico, el doctor Godwin Baxter.', 1),
(17, 'The Five', 'peli_17.jpg', 'Accioón, Drama, Película del Oeste', 'Travis Mills', '01:15:00', '2023-01-07', 'Una mujer despreciada solicita la ayuda de cinco desconocidos para ejecutar un robo a un banco. La tensión aumenta a medida que los hombres esperan ansiosamente su llegada con el dinero, dejando a la tripulación preguntándose si han sido traicionados.', 1),
(18, 'Trunk Locked In', 'peli_18.jpg', 'Drama, Suspenso', 'Marc Schießer', '01:36:00', '2023-10-24', 'Malina wakes up disoriented in the trunk of a speeding car and discovers to her horror that she is missing more than her memory. With her mobile phone as the only link to the outside world, she wages a desperate battle for survival.', 1),
(19, 'Anyone But You', 'peli_19.jpg', 'Comedia, Romance', 'Will Gluck', '01:43:00', '2023-12-22', 'Dos archienemigos universitarios se reúnen años después de su graduación en una boda de ensueño y fingen ser amantes por motivos personales.', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int NOT NULL,
  `isAdmin` tinyint(1) NOT NULL DEFAULT '0',
  `isActive` tinyint(1) NOT NULL DEFAULT '1',
  `nombre` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `apellido` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(150) COLLATE utf8mb4_general_ci NOT NULL,
  `clave` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `id_pais` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `isAdmin`, `isActive`, `nombre`, `apellido`, `email`, `clave`, `fecha_nacimiento`, `id_pais`) VALUES
(1, 1, 1, 'Juan', 'Perez', 'juanperez@gmail.com', 'clave123', '2003-10-03', 102),
(2, 0, 1, 'Prueba', 'CaC24104', 'prueba@cac24104.com', 'prueba', '2024-05-11', 102);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `paises`
--
ALTER TABLE `paises`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `titulo` (`titulo`),
  ADD KEY `id_genero` (`genero`),
  ADD KEY `id_director` (`director`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `usuarios_ibfk_1` (`id_pais`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `paises`
--
ALTER TABLE `paises`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=240;

--
-- AUTO_INCREMENT de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`id_pais`) REFERENCES `paises` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
