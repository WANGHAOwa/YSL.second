/*
Navicat MySQL Data Transfer

Source Server         : wanghao
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : wanghao

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-05-25 14:18:03
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `goods`
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `link` varchar(1000) COLLATE utf8_bin NOT NULL,
  `title` varchar(1000) COLLATE utf8_bin NOT NULL,
  `connect` varchar(1000) COLLATE utf8_bin NOT NULL,
  `price` varchar(1000) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of goods
-- ----------------------------
