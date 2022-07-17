-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 17, 2022 at 03:54 PM
-- Server version: 5.7.33
-- PHP Version: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jsassignment`
--

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `salary` mediumint(9) DEFAULT NULL,
  `account` varchar(34) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`id`, `name`, `company`, `city`, `salary`, `account`) VALUES
(1, 'Reed', 'Ultrices Mauris Ipsum Associates', 'Ciudad Real', 6, 'MU5732735159343549582467453377'),
(2, 'Hayden', 'Aliquam Rutrum Lorem Inc.', 'Purmerend', 1, 'BG47MLQU68261531764555'),
(3, 'Clare', 'Pellentesque Foundation', 'Bodø', 0, 'ES4735809566047727526466'),
(4, 'Carlos', 'Ac Nulla Corporation', 'Juliaca', 5, 'FO8817761212697132'),
(5, 'Imani', 'Cubilia Company', 'São Luís', 7, 'GT89376027438325358476470997'),
(6, 'Reese', 'Eleifend Cras Sed LLC', 'Belford Roxo', 7, 'IE54DGTI58085263077268'),
(7, 'Hedley', 'Nisi Magna Sed LLP', 'María Elena', 1, 'ME47798365941957127396'),
(8, 'Marshall', 'Nullam Ut Nisi Corp.', 'Busan', 6, 'GL4446558766366281'),
(9, 'Jackson', 'Blandit Ltd', 'Suruç', 4, 'LI4429579826408731858'),
(10, 'Joan', 'Leo Morbi PC', 'Franeker', 6, 'LV92QQYI2628877764866'),
(11, 'Cullen', 'In PC', 'Ashburton', 2, 'KW9585793526385811828211477575'),
(12, 'Tyler', 'Ligula Consectetuer LLC', 'Quesada', 6, 'DO75601263779112631011642774'),
(13, 'Merrill', 'Amet Consectetuer Adipiscing PC', 'Boryspil', 6, 'VG7387779969492931299891'),
(14, 'Graiden', 'Tortor Associates', 'Bientina', 6, 'BA669576527185334136'),
(15, 'Vernon', 'Sagittis Augue Eu Inc.', 'Okene', 7, 'PT42361293898303578603763'),
(16, 'Haviva', 'Fusce Inc.', 'San Andrés', 3, 'IS708483357752528111691703'),
(17, 'Fredericka', 'Purus Inc.', 'Jiangsu', 5, 'MC7976265722554676400451360'),
(18, 'Erin', 'Odio Nam Corp.', 'Saint-Urbain', 3, 'MT55SYQU97769832550557795775810'),
(19, 'Mufutau', 'Fames Ac Consulting', 'Lehri', 4, 'LU338326143717248498'),
(20, 'Thaddeus', 'Sed Eget Inc.', 'Chongqing', 1, 'GR0229231181438732303174426'),
(21, 'Joy', 'Adipiscing Mauris Corp.', 'Borlänge', 7, 'LB95974802813452554728616670'),
(22, 'Quynn', 'Elementum Ltd', 'Zwelitsha', 9, 'GE68530506311156348416'),
(23, 'Quinlan', 'Mus Donec Company', 'Santander', 3, 'BG93PJRB91205873586498'),
(24, 'Jolene', 'Ipsum Dolor Sit Incorporated', 'Barrie', 7, 'CH0632861746521541784'),
(25, 'Mara', 'Varius Ultrices Corp.', 'Villach', 1, 'GI04VKWA632473763175451'),
(26, 'Drake', 'Vivamus Non Lorem Limited', 'Avesta', 4, 'GT77231576378248753515007236'),
(27, 'Aphrodite', 'Nunc Ltd', 'Darbhanga', 9, 'FR2355038621593452968862176'),
(28, 'David', 'Erat Volutpat Incorporated', 'Bydgoszcz', 5, 'FO9815157497434219'),
(29, 'Nash', 'Magna Et Incorporated', 'Hallein', 8, 'MT50CJIH13127284228722827735876'),
(30, 'Zahir', 'Suspendisse Ac Metus Associates', 'Córdoba', 5, 'PS966971645155698845928418542'),
(31, 'Cairo', 'Sem Corp.', 'Kristiansand', 1, 'LV60FODD0257605326712'),
(32, 'Elaine', 'Mauris Morbi Foundation', 'Oryol', 8, 'NL54GMSV2426171248'),
(33, 'Tatyana', 'Sed Libero Proin Ltd', 'Cisnes', 10, 'MU8371602144028335676729630138'),
(34, 'Lillith', 'Purus Incorporated', 'Jakarta', 1, 'GL4408558175104390'),
(35, 'Zenaida', 'Dis Limited', 'Swabi', 4, 'AT386552129888254293'),
(36, 'Desirae', 'Neque Venenatis Lacus Institute', 'Rodez', 9, 'PT23511384432083643306352'),
(37, 'Reese', 'Bibendum Ullamcorper Corp.', 'Kielce', 10, 'EE654944632886426058'),
(38, 'Martena', 'Semper Dui Foundation', 'Finkenstein am Faaker See', 7, 'TR752144518695835998275150'),
(39, 'Slade', 'Cras Dolor LLP', 'Wagga Wagga', 3, 'PK5732467352365789833396'),
(40, 'Dai', 'Ornare Lectus Ante Corp.', 'Alaminos', 4, 'CR2728423761245546802'),
(41, 'Justina', 'Orci Adipiscing Non Incorporated', 'Racine', 4, 'SM0255697442673060641933233'),
(42, 'Sage', 'Adipiscing Elit Aliquam Limited', 'Feira de Santana', 4, 'LB83083808179576473476856156'),
(43, 'Ferdinand', 'Hendrerit Foundation', 'Cork', 6, 'FR6745482144642448783350369'),
(44, 'Petra', 'At Risus Nunc LLP', 'Munger', 1, 'TN3229233965676115776963'),
(45, 'Amy', 'Mauris Nulla LLC', 'Campli', 7, 'CZ7921326079618952813458'),
(46, 'Irene', 'Lorem Corporation', 'Wedel', 4, 'GE70422151822333327982'),
(47, 'Daquan', 'Felis Orci Adipiscing Company', 'Karap?nar', 5, 'HR5938156211840652131'),
(48, 'Irene', 'Velit Eget Inc.', 'Armidale', 6, 'SM7153876823028581758546547'),
(49, 'Hollee', 'Rutrum Fusce Institute', 'B?c Ninh', 2, 'IT382IZONI44179634141053864'),
(50, 'Moses', 'Vitae LLP', 'Palma de Mallorca', 2, 'GI78IGBW227304675432241');

-- --------------------------------------------------------

--
-- Table structure for table `mytable`
--

CREATE TABLE `mytable` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `salary` mediumint(9) DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mytable`
--

INSERT INTO `mytable` (`id`, `name`, `phone`, `email`, `salary`, `country`) VALUES
(1, 'Gray', '01 54 36 02 31', 'euismod.est@aol.ca', 89482, 'Belgium'),
(2, 'Jolene', '07 26 94 89 17', 'tincidunt.nunc.ac@aol.com', 95982, 'Peru'),
(3, 'Tad', '03 46 80 56 46', 'amet.ultricies@hotmail.net', 39618, 'Singapore'),
(4, 'Anthony', '04 25 09 14 38', 'sem.pellentesque@yahoo.edu', 28265, 'Costa Rica'),
(5, 'Keane', '06 83 77 06 66', 'sodales.nisi@hotmail.org', 22465, 'United States'),
(6, 'Yvonne', '06 61 34 44 15', 'vitae.risus@google.com', 29468, 'Colombia'),
(7, 'Lavinia', '03 58 32 22 14', 'mauris@outlook.net', 49811, 'Costa Rica'),
(8, 'Armand', '04 34 73 43 97', 'nunc.id.enim@yahoo.com', 98939, 'Ireland'),
(9, 'Timon', '03 02 23 56 73', 'diam.duis.mi@hotmail.edu', 26334, 'Vietnam'),
(10, 'Althea', '03 06 87 16 56', 'magna@outlook.couk', 53698, 'Colombia'),
(11, 'Moana', '05 62 49 83 38', 'cum.sociis@protonmail.org', 40321, 'Italy'),
(12, 'Arsenio', '07 41 62 83 07', 'fusce.aliquam.enim@hotmail.com', 10201, 'China'),
(13, 'Veda', '02 45 28 52 88', 'ipsum@outlook.couk', 33058, 'India'),
(14, 'Rebecca', '03 35 44 31 51', 'proin.non@hotmail.net', 45186, 'Australia'),
(15, 'Claudia', '04 50 22 18 42', 'magna.suspendisse@outlook.com', 89136, 'Italy'),
(16, 'Dennis', '02 31 31 39 61', 'aliquam@icloud.edu', 91723, 'Philippines'),
(17, 'Rahim', '02 31 73 86 03', 'congue.a.aliquet@aol.couk', 21937, 'Austria'),
(18, 'Odysseus', '02 97 45 32 83', 'sapien.imperdiet@aol.ca', 79685, 'Philippines'),
(19, 'Natalie', '06 21 64 52 66', 'ut@icloud.edu', 47789, 'Australia'),
(20, 'Galvin', '01 28 34 44 39', 'eget.mollis.lectus@protonmail.edu', 73240, 'Austria'),
(21, 'Uriel', '09 58 50 04 98', 'id.enim.curabitur@hotmail.com', 62877, 'Australia'),
(22, 'Colleen', '04 34 47 15 31', 'elit.etiam.laoreet@google.net', 65995, 'Turkey'),
(23, 'Kareem', '08 68 15 80 07', 'donec@hotmail.couk', 46918, 'Pakistan'),
(24, 'MacKensie', '05 89 01 82 69', 'sed@hotmail.couk', 48277, 'Canada'),
(25, 'Destiny', '05 32 63 14 19', 'sed.dictum@hotmail.net', 40604, 'Australia'),
(26, 'Jerry', '04 32 42 11 33', 'vivamus@aol.org', 86864, 'Belgium'),
(27, 'Wynne', '02 11 82 93 49', 'lobortis.mauris.suspendisse@hotmail.edu', 19219, 'Norway'),
(28, 'Sopoline', '08 57 33 43 75', 'ultrices@protonmail.ca', 31021, 'Netherlands'),
(29, 'Dylan', '09 64 61 39 52', 'aliquam.vulputate@icloud.net', 63687, 'Canada'),
(30, 'Nolan', '08 88 53 88 52', 'iaculis.lacus@hotmail.edu', 49608, 'New Zealand'),
(31, 'Iona', '07 89 95 81 13', 'nisi.sem@protonmail.com', 67330, 'Costa Rica'),
(32, 'Jessamine', '06 81 53 47 27', 'mus@hotmail.org', 76786, 'South Africa'),
(33, 'Martena', '05 48 00 24 51', 'libero@icloud.org', 46455, 'Philippines'),
(34, 'Lyle', '08 57 51 25 92', 'nam.porttitor.scelerisque@protonmail.com', 57497, 'Netherlands'),
(35, 'Reece', '03 11 95 47 86', 'odio.nam@protonmail.com', 15694, 'India'),
(36, 'Michael', '04 65 12 64 84', 'nunc.commodo@hotmail.net', 21543, 'Mexico'),
(37, 'Noah', '04 72 13 61 30', 'felis.adipiscing.fringilla@yahoo.ca', 80494, 'Philippines'),
(38, 'Frances', '09 29 20 16 36', 'morbi.accumsan.laoreet@protonmail.couk', 50314, 'Austria'),
(39, 'Desirae', '02 88 90 87 93', 'lacus.etiam@hotmail.edu', 62786, 'Russian Federation'),
(40, 'Bo', '06 90 76 32 58', 'felis@yahoo.ca', 95661, 'Vietnam'),
(41, 'Calista', '07 87 12 18 23', 'lacus@yahoo.com', 39972, 'Ireland'),
(42, 'Camden', '02 41 74 88 56', 'a.auctor@icloud.com', 58590, 'Costa Rica'),
(43, 'Rae', '02 26 64 10 64', 'quis.massa@aol.ca', 34604, 'Spain'),
(44, 'Elton', '05 65 60 84 58', 'commodo.ipsum.suspendisse@google.org', 10838, 'Mexico'),
(45, 'Sophia', '08 53 88 30 96', 'nisl.sem@google.edu', 85037, 'Australia'),
(46, 'Evelyn', '07 18 82 75 61', 'aenean.sed@hotmail.net', 39331, 'Nigeria'),
(47, 'Serina', '08 82 33 48 48', 'morbi.sit@google.edu', 38623, 'Poland'),
(48, 'Leroy', '01 26 63 90 33', 'tempus.risus@yahoo.net', 34601, 'Chile'),
(49, 'Willow', '03 12 77 17 02', 'molestie.dapibus@outlook.couk', 98307, 'Chile'),
(50, 'Signe', '09 60 18 50 26', 'eu.ultrices@yahoo.ca', 75079, 'United Kingdom');

-- --------------------------------------------------------

--
-- Table structure for table `worldcountrylist`
--

CREATE TABLE `worldcountrylist` (
  `id` int(11) NOT NULL,
  `name` varchar(75) NOT NULL DEFAULT '',
  `alpha_2` char(2) NOT NULL DEFAULT '',
  `alpha_3` char(3) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `worldcountrylist`
--

INSERT INTO `worldcountrylist` (`id`, `name`, `alpha_2`, `alpha_3`) VALUES
(1, 'Afghanistan', 'AF', 'AFG'),
(2, 'Aland', 'AX', 'ALA'),
(3, 'Albania', 'AL', 'ALB'),
(4, 'Algeria', 'DZ', 'DZA'),
(5, 'American Samoa', 'AS', 'ASM'),
(6, 'Andorra', 'AD', 'AND'),
(7, 'Angola', 'AO', 'AGO'),
(8, 'Anguilla', 'AI', 'AIA'),
(9, 'Antarctica', 'AQ', 'ATA'),
(10, 'Antigua and Barbuda', 'AG', 'ATG'),
(11, 'Argentina', 'AR', 'ARG'),
(12, 'Armenia', 'AM', 'ARM'),
(13, 'Aruba', 'AW', 'ABW'),
(14, 'Australia', 'AU', 'AUS'),
(15, 'Austria', 'AT', 'AUT'),
(16, 'Azerbaijan', 'AZ', 'AZE'),
(17, 'Bahamas', 'BS', 'BHS'),
(18, 'Bahrain', 'BH', 'BHR'),
(19, 'Bangladesh', 'BD', 'BGD'),
(20, 'Barbados', 'BB', 'BRB'),
(21, 'Belarus', 'BY', 'BLR'),
(22, 'Belgium', 'BE', 'BEL'),
(23, 'Belize', 'BZ', 'BLZ'),
(24, 'Benin', 'BJ', 'BEN'),
(25, 'Bermuda', 'BM', 'BMU'),
(26, 'Bhutan', 'BT', 'BTN'),
(27, 'Bolivia', 'BO', 'BOL'),
(28, 'Bonaire', 'BQ', 'BES'),
(29, 'Bosnia and Herzegovina', 'BA', 'BIH'),
(30, 'Botswana', 'BW', 'BWA'),
(31, 'Bouvet Island', 'BV', 'BVT'),
(32, 'Brazil', 'BR', 'BRA'),
(33, 'British Indian Ocean Territory', 'IO', 'IOT'),
(34, 'British Virgin Islands', 'VG', 'VGB'),
(35, 'Brunei', 'BN', 'BRN'),
(36, 'Bulgaria', 'BG', 'BGR'),
(37, 'Burkina Faso', 'BF', 'BFA'),
(38, 'Burundi', 'BI', 'BDI'),
(39, 'Cambodia', 'KH', 'KHM'),
(40, 'Cameroon', 'CM', 'CMR'),
(41, 'Canada', 'CA', 'CAN'),
(42, 'Cape Verde', 'CV', 'CPV'),
(43, 'Cayman Islands', 'KY', 'CYM'),
(44, 'Central African Republic', 'CF', 'CAF'),
(45, 'Chad', 'TD', 'TCD'),
(46, 'Chile', 'CL', 'CHL'),
(47, 'China', 'CN', 'CHN'),
(48, 'Christmas Island', 'CX', 'CXR'),
(49, 'Cocos [Keeling] Islands', 'CC', 'CCK'),
(50, 'Colombia', 'CO', 'COL'),
(51, 'Comoros', 'KM', 'COM'),
(52, 'Cook Islands', 'CK', 'COK'),
(53, 'Costa Rica', 'CR', 'CRI'),
(54, 'Croatia', 'HR', 'HRV'),
(55, 'Cuba', 'CU', 'CUB'),
(56, 'Curacao', 'CW', 'CUW'),
(57, 'Cyprus', 'CY', 'CYP'),
(58, 'Czech Republic', 'CZ', 'CZE'),
(59, 'Democratic Republic of the Congo', 'CD', 'COD'),
(60, 'Denmark', 'DK', 'DNK'),
(61, 'Djibouti', 'DJ', 'DJI'),
(62, 'Dominica', 'DM', 'DMA'),
(63, 'Dominican Republic', 'DO', 'DOM'),
(64, 'East Timor', 'TL', 'TLS'),
(65, 'Ecuador', 'EC', 'ECU'),
(66, 'Egypt', 'EG', 'EGY'),
(67, 'El Salvador', 'SV', 'SLV'),
(68, 'Equatorial Guinea', 'GQ', 'GNQ'),
(69, 'Eritrea', 'ER', 'ERI'),
(70, 'Estonia', 'EE', 'EST'),
(71, 'Ethiopia', 'ET', 'ETH'),
(72, 'Falkland Islands', 'FK', 'FLK'),
(73, 'Faroe Islands', 'FO', 'FRO'),
(74, 'Fiji', 'FJ', 'FJI'),
(75, 'Finland', 'FI', 'FIN'),
(76, 'France', 'FR', 'FRA'),
(77, 'French Guiana', 'GF', 'GUF'),
(78, 'French Polynesia', 'PF', 'PYF'),
(79, 'French Southern Territories', 'TF', 'ATF'),
(80, 'Gabon', 'GA', 'GAB'),
(81, 'Gambia', 'GM', 'GMB'),
(82, 'Georgia', 'GE', 'GEO'),
(83, 'Germany', 'DE', 'DEU'),
(84, 'Ghana', 'GH', 'GHA'),
(85, 'Gibraltar', 'GI', 'GIB'),
(86, 'Greece', 'GR', 'GRC'),
(87, 'Greenland', 'GL', 'GRL'),
(88, 'Grenada', 'GD', 'GRD'),
(89, 'Guadeloupe', 'GP', 'GLP'),
(90, 'Guam', 'GU', 'GUM'),
(91, 'Guatemala', 'GT', 'GTM'),
(92, 'Guernsey', 'GG', 'GGY'),
(93, 'Guinea', 'GN', 'GIN'),
(94, 'Guinea-Bissau', 'GW', 'GNB'),
(95, 'Guyana', 'GY', 'GUY'),
(96, 'Haiti', 'HT', 'HTI'),
(97, 'Heard Island and McDonald Islands', 'HM', 'HMD'),
(98, 'Honduras', 'HN', 'HND'),
(99, 'Hong Kong', 'HK', 'HKG'),
(100, 'Hungary', 'HU', 'HUN'),
(101, 'Iceland', 'IS', 'ISL'),
(102, 'India', 'IN', 'IND'),
(103, 'Indonesia', 'ID', 'IDN'),
(104, 'Iran', 'IR', 'IRN'),
(105, 'Iraq', 'IQ', 'IRQ'),
(106, 'Ireland', 'IE', 'IRL'),
(107, 'Isle of Man', 'IM', 'IMN'),
(108, 'Israel', 'IL', 'ISR'),
(109, 'Italy', 'IT', 'ITA'),
(110, 'Ivory Coast', 'CI', 'CIV'),
(111, 'Jamaica', 'JM', 'JAM'),
(112, 'Japan', 'JP', 'JPN'),
(113, 'Jersey', 'JE', 'JEY'),
(114, 'Jordan', 'JO', 'JOR'),
(115, 'Kazakhstan', 'KZ', 'KAZ'),
(116, 'Kenya', 'KE', 'KEN'),
(117, 'Kiribati', 'KI', 'KIR'),
(118, 'Kosovo', 'XK', 'XKX'),
(119, 'Kuwait', 'KW', 'KWT'),
(120, 'Kyrgyzstan', 'KG', 'KGZ'),
(121, 'Laos', 'LA', 'LAO'),
(122, 'Latvia', 'LV', 'LVA'),
(123, 'Lebanon', 'LB', 'LBN'),
(124, 'Lesotho', 'LS', 'LSO'),
(125, 'Liberia', 'LR', 'LBR'),
(126, 'Libya', 'LY', 'LBY'),
(127, 'Liechtenstein', 'LI', 'LIE'),
(128, 'Lithuania', 'LT', 'LTU'),
(129, 'Luxembourg', 'LU', 'LUX'),
(130, 'Macao', 'MO', 'MAC'),
(131, 'Macedonia', 'MK', 'MKD'),
(132, 'Madagascar', 'MG', 'MDG'),
(133, 'Malawi', 'MW', 'MWI'),
(134, 'Malaysia', 'MY', 'MYS'),
(135, 'Maldives', 'MV', 'MDV'),
(136, 'Mali', 'ML', 'MLI'),
(137, 'Malta', 'MT', 'MLT'),
(138, 'Marshall Islands', 'MH', 'MHL'),
(139, 'Martinique', 'MQ', 'MTQ'),
(140, 'Mauritania', 'MR', 'MRT'),
(141, 'Mauritius', 'MU', 'MUS'),
(142, 'Mayotte', 'YT', 'MYT'),
(143, 'Mexico', 'MX', 'MEX'),
(144, 'Micronesia', 'FM', 'FSM'),
(145, 'Moldova', 'MD', 'MDA'),
(146, 'Monaco', 'MC', 'MCO'),
(147, 'Mongolia', 'MN', 'MNG'),
(148, 'Montenegro', 'ME', 'MNE'),
(149, 'Montserrat', 'MS', 'MSR'),
(150, 'Morocco', 'MA', 'MAR'),
(151, 'Mozambique', 'MZ', 'MOZ'),
(152, 'Myanmar [Burma]', 'MM', 'MMR'),
(153, 'Namibia', 'NA', 'NAM'),
(154, 'Nauru', 'NR', 'NRU'),
(155, 'Nepal', 'NP', 'NPL'),
(156, 'Netherlands', 'NL', 'NLD'),
(157, 'New Caledonia', 'NC', 'NCL'),
(158, 'New Zealand', 'NZ', 'NZL'),
(159, 'Nicaragua', 'NI', 'NIC'),
(160, 'Niger', 'NE', 'NER'),
(161, 'Nigeria', 'NG', 'NGA'),
(162, 'Niue', 'NU', 'NIU'),
(163, 'Norfolk Island', 'NF', 'NFK'),
(164, 'North Korea', 'KP', 'PRK'),
(165, 'Northern Mariana Islands', 'MP', 'MNP'),
(166, 'Norway', 'NO', 'NOR'),
(167, 'Oman', 'OM', 'OMN'),
(168, 'Pakistan', 'PK', 'PAK'),
(169, 'Palau', 'PW', 'PLW'),
(170, 'Palestine', 'PS', 'PSE'),
(171, 'Panama', 'PA', 'PAN'),
(172, 'Papua New Guinea', 'PG', 'PNG'),
(173, 'Paraguay', 'PY', 'PRY'),
(174, 'Peru', 'PE', 'PER'),
(175, 'Philippines', 'PH', 'PHL'),
(176, 'Pitcairn Islands', 'PN', 'PCN'),
(177, 'Poland', 'PL', 'POL'),
(178, 'Portugal', 'PT', 'PRT'),
(179, 'Puerto Rico', 'PR', 'PRI'),
(180, 'Qatar', 'QA', 'QAT'),
(181, 'Republic of the Congo', 'CG', 'COG'),
(182, 'Reunion', 'RE', 'REU'),
(183, 'Romania', 'RO', 'ROU'),
(184, 'Russia', 'RU', 'RUS'),
(185, 'Rwanda', 'RW', 'RWA'),
(187, 'Saint Helena', 'SH', 'SHN'),
(188, 'Saint Kitts and Nevis', 'KN', 'KNA'),
(189, 'Saint Lucia', 'LC', 'LCA'),
(190, 'Saint Martin', 'MF', 'MAF'),
(191, 'Saint Pierre and Miquelon', 'PM', 'SPM'),
(192, 'Saint Vincent and the Grenadines', 'VC', 'VCT'),
(193, 'Samoa', 'WS', 'WSM'),
(194, 'San Marino', 'SM', 'SMR'),
(196, 'Saudi Arabia', 'SA', 'SAU'),
(197, 'Senegal', 'SN', 'SEN'),
(198, 'Serbia', 'RS', 'SRB'),
(199, 'Seychelles', 'SC', 'SYC'),
(200, 'Sierra Leone', 'SL', 'SLE'),
(201, 'Singapore', 'SG', 'SGP'),
(202, 'Sint Maarten', 'SX', 'SXM'),
(203, 'Slovakia', 'SK', 'SVK'),
(204, 'Slovenia', 'SI', 'SVN'),
(205, 'Solomon Islands', 'SB', 'SLB'),
(206, 'Somalia', 'SO', 'SOM'),
(207, 'South Africa', 'ZA', 'ZAF'),
(208, 'South Georgia and the South Sandwich Islands', 'GS', 'SGS'),
(209, 'South Korea', 'KR', 'KOR'),
(210, 'South Sudan', 'SS', 'SSD'),
(211, 'Spain', 'ES', 'ESP'),
(212, 'Sri Lanka', 'LK', 'LKA'),
(213, 'Sudan', 'SD', 'SDN'),
(214, 'Suriname', 'SR', 'SUR'),
(215, 'Svalbard and Jan Mayen', 'SJ', 'SJM'),
(216, 'Swaziland', 'SZ', 'SWZ'),
(217, 'Sweden', 'SE', 'SWE'),
(218, 'Switzerland', 'CH', 'CHE'),
(219, 'Syria', 'SY', 'SYR'),
(220, 'Taiwan', 'TW', 'TWN'),
(221, 'Tajikistan', 'TJ', 'TJK'),
(222, 'Tanzania', 'TZ', 'TZA'),
(223, 'Thailand', 'TH', 'THA'),
(224, 'Togo', 'TG', 'TGO'),
(225, 'Tokelau', 'TK', 'TKL'),
(226, 'Tonga', 'TO', 'TON'),
(227, 'Trinidad and Tobago', 'TT', 'TTO'),
(228, 'Tunisia', 'TN', 'TUN'),
(229, 'Turkey', 'TR', 'TUR'),
(230, 'Turkmenistan', 'TM', 'TKM'),
(231, 'Turks and Caicos Islands', 'TC', 'TCA'),
(232, 'Tuvalu', 'TV', 'TUV'),
(233, 'U.S. Minor Outlying Islands', 'UM', 'UMI'),
(234, 'U.S. Virgin Islands', 'VI', 'VIR'),
(235, 'Uganda', 'UG', 'UGA'),
(236, 'Ukraine', 'UA', 'UKR'),
(237, 'United Arab Emirates', 'AE', 'ARE'),
(238, 'United Kingdom', 'GB', 'GBR'),
(239, 'United States', 'US', 'USA'),
(240, 'Uruguay', 'UY', 'URY'),
(241, 'Uzbekistan', 'UZ', 'UZB'),
(242, 'Vanuatu', 'VU', 'VUT'),
(243, 'Vatican City', 'VA', 'VAT'),
(244, 'Venezuela', 'VE', 'VEN'),
(245, 'Vietnam', 'VN', 'VNM'),
(246, 'Wallis and Futuna', 'WF', 'WLF'),
(247, 'Western Sahara', 'EH', 'ESH'),
(248, 'Yemen', 'YE', 'YEM'),
(249, 'Zambia', 'ZM', 'ZMB'),
(250, 'Zimbabwe', 'ZW', 'ZWE');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mytable`
--
ALTER TABLE `mytable`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `worldcountrylist`
--
ALTER TABLE `worldcountrylist`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `mytable`
--
ALTER TABLE `mytable`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `worldcountrylist`
--
ALTER TABLE `worldcountrylist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=251;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
