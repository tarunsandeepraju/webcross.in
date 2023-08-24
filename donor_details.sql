-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Aug 23, 2023 at 03:57 PM
-- Server version: 8.0.21
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `webcross`
--

-- --------------------------------------------------------

--
-- Table structure for table `donor_details`
--

DROP TABLE IF EXISTS `donor_details`;
CREATE TABLE IF NOT EXISTS `donor_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `age` int NOT NULL,
  `blood_group` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `state` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `district` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `area` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `phone_no` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `phone_no` (`phone_no`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `donor_details`
--

INSERT INTO `donor_details` (`id`, `name`, `age`, `blood_group`, `state`, `district`, `area`, `phone_no`) VALUES
(19, 'Chirag', 21, 'A+', 'Andhra Pradesh', 'Krishna', 'Gannavaram', 2147483647),
(20, 'Sandy', 25, 'B+', 'Andhra Pradesh', 'East Godavari', 'Kovvur', 8179331245),
(21, 'Phani', 21, 'B+', 'Andhra Pradesh', 'East Godavari', 'Kovvur', 55555555555),
(22, 'Koti', 32, 'B+', 'Andhra Pradesh', 'East Godavari', 'Kovvur', 4444444444),
(23, 'Harsha Jayanth', 20, 'AB-', 'Andhra Pradesh', 'Dr B. R. Ambedkar Konaseema district', 'Ramachandrapuram', 9491364620),
(34, 'Keerthi nutakki', 20, 'A+', 'Andhra Pradesh', 'Eluru', 'Eluru', 7013845006),
(35, 'Siva Satyam', 21, 'O+', 'Andhra Pradesh', 'West Godavari', 'Bhimavaram', 6301973609),
(36, 'Prashanth Taddi', 21, 'B+', 'Andhra Pradesh', 'East Godavari', 'Rajahmundry City', 9392066583);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
