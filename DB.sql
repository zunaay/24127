CREATE DATABASE  IF NOT EXISTS `24127g8` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci */;
USE `24127g8`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: 24127g8
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

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
-- Table structure for table `articulos`
--

DROP TABLE IF EXISTS `articulos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articulos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `categoria` varchar(45) NOT NULL,
  `tipo` varchar(45) NOT NULL,
  `imagen` varchar(500) NOT NULL,
  `precio` int(11) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articulos`
--

LOCK TABLES `articulos` WRITE;
/*!40000 ALTER TABLE `articulos` DISABLE KEYS */;
INSERT INTO `articulos` VALUES (1,'Short deportivo','Pantalones','Hombre','https://acdn.mitiendanube.com/stores/001/661/615/products/28692e5e-834a-4f9e-9543-1009d0d528b2-76686304731feff8da16935062351714-1024-1024.jpg',21390,NULL,NULL),(2,'Camiseta básica','Remeras','Hombre','https://m.media-amazon.com/images/I/71VHA7WyzWL._AC_UY1000_.jpg',32100,NULL,NULL),(3,'Top deportivo','Remeras','Mujer','https://http2.mlstatic.com/D_NQ_NP_827722-MLA54295549670_032023-O.webp',21200,NULL,NULL),(4,'Calzas básicas','Pantalones','Mujer','https://startlap.com.ar/wp-content/uploads/2022/04/Calza-Fox-de-mujer-Boundary-negra-casual-dama-urbana-clasica-deporte-gym-indumentaria-startlap-tucuman-02.jpg',28700,NULL,NULL),(5,'Remera básica','Remeras','Niños','https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/6365d60fb28a4603b19aaf62011b6c15_9366/remera-adicolor-trefoil.jpg',14900,NULL,NULL),(6,'Short deportivo','Pantalones','Niños','https://d3fvqmu2193zmz.cloudfront.net/items_2/uid_commerces.1/uid_items_2.FDBZFEMO9J17/500x500/64F9D00D87EF8-Short-Deportivo-Jovencito-U-3s-Kn-Sho.webp',15600,NULL,NULL),(7,'Buzo con capucha','Abrigos','Mujer','https://http2.mlstatic.com/D_NQ_NP_855937-MLA52731784106_122022-O.webp',32400,NULL,NULL),(8,'Campera','Abrigos','Mujer','https://www.vandalia.com.ar/media/catalog/product/cache/1/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/7/8/7876_campera_con_capucha_negra_2_.jpg',45000,NULL,NULL),(9,'Campera','Abrigos','Hombre','https://acdn.mitiendanube.com/stores/001/661/615/products/07dbc155-20f5-4284-be6f-5b4ae6c480a2-561f49c2193f77cbd917078622037306-1024-1024.jpg',30290,NULL,NULL),(10,'asdas','dasdasd','Hombre','https://asd.com',1000,'2024-07-03 20:24:36','2024-07-03 20:24:36'),(11,'asdasdas','asdasda','Hombre','https://asdas.com',50000,'2024-07-03 20:26:26','2024-07-03 20:26:26');
/*!40000 ALTER TABLE `articulos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mensajes`
--

DROP TABLE IF EXISTS `mensajes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mensajes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  `asunto` varchar(45) NOT NULL,
  `mensaje` varchar(1000) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mensajes`
--

LOCK TABLES `mensajes` WRITE;
/*!40000 ALTER TABLE `mensajes` DISABLE KEYS */;
INSERT INTO `mensajes` VALUES (1,'Juan Perez','juanp@mail.com','123456','Cambio','Hola esto es un mensaje de prueba.',NULL,NULL),(2,'Alberto Lopez','alopez@mail.com','987654','Otro asunto','Segundo mensaje de prueba.',NULL,NULL);
/*!40000 ALTER TABLE `mensajes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stocks`
--

DROP TABLE IF EXISTS `stocks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stocks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `XS` int(11) NOT NULL,
  `S` int(11) NOT NULL,
  `M` int(11) NOT NULL,
  `L` int(11) NOT NULL,
  `XL` int(11) NOT NULL,
  `XXL` int(11) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stocks`
--

LOCK TABLES `stocks` WRITE;
/*!40000 ALTER TABLE `stocks` DISABLE KEYS */;
INSERT INTO `stocks` VALUES (1,398,45,21,350,0,21,NULL,'2024-07-03 07:19:19'),(2,202,235,492,0,320,20,NULL,NULL),(3,5,202,150,121,150,204,NULL,'2024-07-03 04:48:04'),(4,189,0,356,12,20,1,NULL,'2024-07-03 04:16:14'),(5,2,1,10,2,9,62,NULL,NULL),(6,21,30,35,68,0,65,NULL,NULL),(7,56,20,0,62,20,0,NULL,NULL),(8,21,56,98,20,48,62,NULL,NULL),(9,87,54,81,18,62,0,NULL,NULL),(11,0,0,0,0,0,0,'2024-07-03 20:24:36','2024-07-03 20:24:36'),(12,0,0,0,0,0,0,'2024-07-03 20:26:26','2024-07-03 20:26:26');
/*!40000 ALTER TABLE `stocks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas`
--

DROP TABLE IF EXISTS `ventas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ventas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productos` varchar(100) NOT NULL,
  `cantidad` varchar(100) NOT NULL,
  `talles` varchar(100) NOT NULL,
  `importe` int(11) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas`
--

LOCK TABLES `ventas` WRITE;
/*!40000 ALTER TABLE `ventas` DISABLE KEYS */;
INSERT INTO `ventas` VALUES (1,'4','1','XXL',28700,'2024-07-03 02:04:56','2024-07-03 02:04:56'),(4,'6,6','1,3','XS,XXL',62400,'2024-07-03 02:59:33','2024-07-03 02:59:33'),(5,'7,7','1,1','XL,XS',64800,'2024-07-03 03:03:37','2024-07-03 03:03:37'),(6,'2,2','5,4','XL,M',288900,'2024-07-03 03:08:46','2024-07-03 03:08:46'),(7,'2','3','XS',96300,'2024-07-03 03:19:10','2024-07-03 03:19:10'),(8,'4,4,1','1,2,10','XS,M,XS',300000,'2024-07-03 04:16:14','2024-07-03 04:16:14'),(9,'3','1','S',21200,'2024-07-03 04:48:04','2024-07-03 04:48:04'),(10,'1','1','L',21390,'2024-07-03 07:19:19','2024-07-03 07:19:19');
/*!40000 ALTER TABLE `ventas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-09  3:03:40
