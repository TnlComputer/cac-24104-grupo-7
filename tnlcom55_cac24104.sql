-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 03-07-2024 a las 20:07:40
-- Versión del servidor: 10.6.17-MariaDB
-- Versión de PHP: 8.1.14

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
-- Estructura de tabla para la tabla `directores`
--

CREATE TABLE `directores` (
  `id` int(11) NOT NULL,
  `ayn` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `directores`
--

INSERT INTO `directores` (`id`, `ayn`) VALUES
(1, 'Aaron Horvath'),
(2, 'Yorgos Lanthimos'),
(3, 'Bong Joon Ho');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `generos`
--

CREATE TABLE `generos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `generos`
--

INSERT INTO `generos` (`id`, `nombre`) VALUES
(1, 'Aventura'),
(2, 'Comedia'),
(3, 'Drama');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paises`
--

CREATE TABLE `paises` (
  `id` int(11) NOT NULL,
  `Nombre` char(52) NOT NULL DEFAULT ''
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
  `id` int(11) NOT NULL,
  `titulo` varchar(150) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `id_genero` int(11) DEFAULT NULL,
  `id_director` int(11) DEFAULT NULL,
  `duracion` time NOT NULL,
  `estreno` date DEFAULT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `presupuesto` decimal(15,2) DEFAULT NULL,
  `recaudacion` decimal(15,2) DEFAULT NULL,
  `url_trailer` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT 1,
  `url_fb` varchar(255) DEFAULT NULL,
  `url_x` varchar(255) DEFAULT NULL,
  `url_ig` varchar(255) DEFAULT NULL,
  `url_estudio` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `peliculas`
--

INSERT INTO `peliculas` (`id`, `titulo`, `imagen`, `id_genero`, `id_director`, `duracion`, `estreno`, `descripcion`, `presupuesto`, `recaudacion`, `url_trailer`, `isActive`, `url_fb`, `url_x`, `url_ig`, `url_estudio`) VALUES
(1, 'Mario Bros', '', 1, 1, '02:15:00', '2023-05-05', 'descripcion de la pelicula', '100000000.00', '1361992475.00', NULL, 1, NULL, NULL, NULL, NULL),
(2, 'Poor Things', '', 2, 2, '03:20:00', '2023-06-07', 'descripcion de la pelicula', '35000000.00', '117625455.00', NULL, 1, NULL, NULL, NULL, NULL),
(3, 'Parasite', '', 3, 3, '02:30:00', '2019-08-09', 'descripcion de la pelicula', '11400000.00', '262099264.00', NULL, 1, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `isAdmin` tinyint(1) NOT NULL DEFAULT 0,
  `isActive` tinyint(1) NOT NULL DEFAULT 1,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `clave` varchar(255) NOT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `id_pais` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `isAdmin`, `isActive`, `nombre`, `apellido`, `email`, `clave`, `fecha_nacimiento`, `id_pais`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'Juan', 'Perez', 'juanperez@gmail.com', 'clave123', '2003-10-03', 102, '2024-07-01 22:01:25', '2024-07-01 23:00:11');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `directores`
--
ALTER TABLE `directores`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `generos`
--
ALTER TABLE `generos`
  ADD PRIMARY KEY (`id`);

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
  ADD KEY `id_genero` (`id_genero`),
  ADD KEY `id_director` (`id_director`);

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
-- AUTO_INCREMENT de la tabla `directores`
--
ALTER TABLE `directores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `generos`
--
ALTER TABLE `generos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `paises`
--
ALTER TABLE `paises`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=240;

--
-- AUTO_INCREMENT de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `peliculas`
--
ALTER TABLE `peliculas`
  ADD CONSTRAINT `peliculas_ibfk_1` FOREIGN KEY (`id_genero`) REFERENCES `generos` (`id`),
  ADD CONSTRAINT `peliculas_ibfk_2` FOREIGN KEY (`id_director`) REFERENCES `directores` (`id`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`id_pais`) REFERENCES `paises` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
