/*
Navicat MySQL Data Transfer

Source Server         : wanghao
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : wanghao

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-05-25 14:18:21
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `user_table`
-- ----------------------------
DROP TABLE IF EXISTS `user_table`;
CREATE TABLE `user_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `emile` varchar(200) COLLATE utf8_bin NOT NULL,
  `password` varchar(200) COLLATE utf8_bin NOT NULL,
  `username` varchar(200) COLLATE utf8_bin DEFAULT NULL,
  `phone` varchar(200) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of user_table
-- ----------------------------
INSERT INTO `user_table` VALUES ('1', '937722707@qq.com', '123456789', null, '18236569608');
INSERT INTO `user_table` VALUES ('2', '937722707@qq.com', '123456789', null, '18236569608');
INSERT INTO `user_table` VALUES ('3', '937722701@qq.com', '123456789', null, '18236569608');
INSERT INTO `user_table` VALUES ('4', '937722707@qq.com', '123456', null, '18236569608');
INSERT INTO `user_table` VALUES ('5', '937722707@qq.com', '123456789', null, '18236569608');
INSERT INTO `user_table` VALUES ('6', '937722701@qq.com', '123456789', null, '18236569608');
INSERT INTO `user_table` VALUES ('7', '937722702@qq.com', '123456789', null, '18236569608');
INSERT INTO `user_table` VALUES ('8', '111111111@qq.com', '123456789', null, '18236569608');
