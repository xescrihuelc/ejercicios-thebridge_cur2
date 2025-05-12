CREATE DATABASE  IF NOT EXISTS `libraryadmin` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `libraryadmin`;
-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: libraryadmin
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `publicationYear` int DEFAULT NULL,
  `ISBN` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT  IGNORE INTO `books` (`id`, `title`, `description`, `author`, `publicationYear`, `ISBN`, `createdAt`, `updatedAt`) VALUES (1,'fgd','gf','dgfh',2002,343545,'2025-05-08 12:43:03','2025-05-08 12:43:03'),(2,'fgd','gf','dgfh',2002,343545,'2025-05-08 12:43:05','2025-05-08 12:43:05'),(3,'Un Amor','Dolor','Yolada Sarah',1932,3456745,'2025-05-08 12:48:25','2025-05-08 12:48:25');
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loans`
--

DROP TABLE IF EXISTS `loans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loans` (
  `id` int NOT NULL AUTO_INCREMENT,
  `return_date` datetime DEFAULT NULL,
  `loan_date` datetime NOT NULL,
  `deadline` datetime NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `BookId` int DEFAULT NULL,
  `MemberId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `BookId` (`BookId`),
  KEY `MemberId` (`MemberId`),
  CONSTRAINT `loans_ibfk_1` FOREIGN KEY (`BookId`) REFERENCES `books` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `loans_ibfk_2` FOREIGN KEY (`MemberId`) REFERENCES `members` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loans`
--

LOCK TABLES `loans` WRITE;
/*!40000 ALTER TABLE `loans` DISABLE KEYS */;
INSERT  IGNORE INTO `loans` (`id`, `return_date`, `loan_date`, `deadline`, `createdAt`, `updatedAt`, `BookId`, `MemberId`) VALUES (1,'2025-05-09 07:23:03','2025-06-08 07:20:01','2025-06-08 07:20:01','2025-05-09 07:20:01','2025-05-09 07:23:03',3,3),(2,'2025-05-09 07:23:03','2025-06-08 07:20:11','2025-06-08 07:20:11','2025-05-09 07:20:11','2025-05-09 07:23:03',3,2),(3,'2025-05-09 07:26:36','2025-06-08 07:25:55','2025-06-08 07:25:55','2025-05-09 07:25:55','2025-05-09 07:26:36',2,1),(4,'2025-05-09 07:41:19','2025-06-08 07:41:17','2025-06-08 07:41:17','2025-05-09 07:41:17','2025-05-09 07:41:19',2,1),(5,'2025-05-09 10:02:29','2025-06-08 08:56:42','2025-06-08 08:56:42','2025-05-09 08:56:42','2025-05-09 10:02:29',2,1),(6,'2025-05-09 10:02:34','2025-06-08 09:58:39','2025-06-08 09:58:39','2025-05-09 09:58:39','2025-05-09 10:02:34',3,1),(7,NULL,'2025-06-08 10:02:58','2025-06-08 10:02:58','2025-05-09 10:02:58','2025-05-09 10:02:58',1,1),(8,'2025-05-09 10:03:15','2025-06-08 10:03:02','2025-06-08 10:03:02','2025-05-09 10:03:02','2025-05-09 10:03:15',3,1);
/*!40000 ALTER TABLE `loans` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `members`
--

DROP TABLE IF EXISTS `members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `members` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `registrationDate` datetime NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `members`
--

LOCK TABLES `members` WRITE;
/*!40000 ALTER TABLE `members` DISABLE KEYS */;
INSERT  IGNORE INTO `members` (`id`, `name`, `registrationDate`, `createdAt`, `updatedAt`) VALUES (1,'Andres Peñalva','2025-05-08 08:51:29','2025-05-08 08:51:29','2025-05-08 08:51:29'),(2,'Andres Peñalva','2025-05-08 09:00:01','2025-05-08 09:00:01','2025-05-08 09:00:01'),(3,'Zazza el Italiano','2025-05-08 09:02:08','2025-05-08 09:02:08','2025-05-08 09:02:08'),(4,'Torrente','2025-05-08 09:02:23','2025-05-08 09:02:23','2025-05-08 09:02:23'),(5,'Puterío en Orihuela','2025-05-08 09:05:27','2025-05-08 09:05:27','2025-05-08 09:05:27'),(6,'Vegetta el guarris','2025-05-08 09:06:35','2025-05-08 09:06:35','2025-05-08 09:06:35');
/*!40000 ALTER TABLE `members` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'libraryadmin'
--

--
-- Dumping routines for database 'libraryadmin'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-09 13:54:11
