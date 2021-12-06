
/*******************************************************/
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema alkemy
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema alkemy
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `alkemy` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ;
USE `alkemy` ;

-- -----------------------------------------------------
-- Table `alkemy`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `alkemy`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `alkemy`.`operations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `alkemy`.`operations` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(45) NOT NULL,
  `amount` INT NOT NULL,
  `date` DATE NOT NULL,
  `type` INT NOT NULL,
  `category` INT NOT NULL,
  `id_user` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_user_idx` (`id_user` ASC) ,
  CONSTRAINT `id_user`
    FOREIGN KEY (`id_user`)
    REFERENCES `alkemy`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
