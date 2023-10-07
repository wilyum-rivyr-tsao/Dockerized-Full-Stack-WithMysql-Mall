/*
 Navicat Premium Data Transfer

 Source Server         : local_docker_mysql5.7
 Source Server Type    : MySQL
 Source Server Version : 50743
 Source Host           : localhost:3307
 Source Schema         : DOCKERIZED

 Target Server Type    : MySQL
 Target Server Version : 50743
 File Encoding         : 65001

 Date: 07/10/2023 17:21:33
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for books
-- ----------------------------
DROP TABLE IF EXISTS `books`;
CREATE TABLE `books` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `thumbnail` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `author` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_bb8627d137a861e2d5dc8d1eb20` (`userId`),
  CONSTRAINT `FK_bb8627d137a861e2d5dc8d1eb20` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of books
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for brand
-- ----------------------------
DROP TABLE IF EXISTS `brand`;
CREATE TABLE `brand` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(200) COLLATE utf8_unicode_ci NOT NULL COMMENT '名称',
  `image` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '图片网址',
  `letter` char(1) COLLATE utf8_unicode_ci NOT NULL COMMENT '单位（量词语）',
  PRIMARY KEY (`id`),
  UNIQUE KEY `unq_name` (`name`),
  KEY `idx_letter` (`letter`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='品牌表';

-- ----------------------------
-- Records of brand
-- ----------------------------
BEGIN;
INSERT INTO `brand` (`id`, `name`, `image`, `letter`) VALUES (1, '联想', NULL, 'L');
INSERT INTO `brand` (`id`, `name`, `image`, `letter`) VALUES (2, '华为', NULL, 'H');
INSERT INTO `brand` (`id`, `name`, `image`, `letter`) VALUES (3, '小米', NULL, 'A');
INSERT INTO `brand` (`id`, `name`, `image`, `letter`) VALUES (4, '苹果', NULL, 'A');
INSERT INTO `brand` (`id`, `name`, `image`, `letter`) VALUES (5, 'OPPO', NULL, 'O');
INSERT INTO `brand` (`id`, `name`, `image`, `letter`) VALUES (6, '三星', NULL, 'S');
INSERT INTO `brand` (`id`, `name`, `image`, `letter`) VALUES (7, 'LG', NULL, 'L');
INSERT INTO `brand` (`id`, `name`, `image`, `letter`) VALUES (8, 'vivo', NULL, 'V');
INSERT INTO `brand` (`id`, `name`, `image`, `letter`) VALUES (9, '飞利浦', NULL, 'F');
INSERT INTO `brand` (`id`, `name`, `image`, `letter`) VALUES (10, '红米', NULL, 'H');
INSERT INTO `brand` (`id`, `name`, `image`, `letter`) VALUES (11, 'IMB', NULL, 'I');
INSERT INTO `brand` (`id`, `name`, `image`, `letter`) VALUES (12, '戴尔', NULL, 'D');
COMMIT;

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `userId` varchar(32) CHARACTER SET utf8mb4 NOT NULL DEFAULT '0' COMMENT '会员id',
  `skuId` varchar(32) CHARACTER SET utf8mb4 NOT NULL DEFAULT '0' COMMENT 'sku_id',
  `num` int(11) NOT NULL DEFAULT '0' COMMENT '数量',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `IDX_ns_goods_cart_member_id` (`userId`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT=' 购物车';

-- ----------------------------
-- Records of cart
-- ----------------------------
BEGIN;
INSERT INTO `cart` (`id`, `userId`, `skuId`, `num`) VALUES (18, '1', '3', 1);
INSERT INTO `cart` (`id`, `userId`, `skuId`, `num`) VALUES (19, '1', '4', 3);
COMMIT;

-- ----------------------------
-- Table structure for migrations
-- ----------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `timestamp` bigint(20) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of migrations
-- ----------------------------
BEGIN;
INSERT INTO `migrations` (`id`, `timestamp`, `name`) VALUES (1, 1695343589830, 'UserMigration1695343589830');
INSERT INTO `migrations` (`id`, `timestamp`, `name`) VALUES (2, 1695357883991, 'BookMigration1695357883991');
INSERT INTO `migrations` (`id`, `timestamp`, `name`) VALUES (3, 1695362390587, 'AddUserIdColumnToBookMigration1695362390587');
COMMIT;

-- ----------------------------
-- Table structure for property
-- ----------------------------
DROP TABLE IF EXISTS `property`;
CREATE TABLE `property` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `value` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `spuId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of property
-- ----------------------------
BEGIN;
INSERT INTO `property` (`id`, `name`, `value`, `spuId`) VALUES (1, 'CPU', '骁龙855', 1);
INSERT INTO `property` (`id`, `name`, `value`, `spuId`) VALUES (2, 'storage', '128G', 1);
INSERT INTO `property` (`id`, `name`, `value`, `spuId`) VALUES (3, 'RAM', '8G', 1);
INSERT INTO `property` (`id`, `name`, `value`, `spuId`) VALUES (4, 'size', '6寸', 1);
INSERT INTO `property` (`id`, `name`, `value`, `spuId`) VALUES (5, 'RAM', '16G', 1);
INSERT INTO `property` (`id`, `name`, `value`, `spuId`) VALUES (6, 'storage', '256G', 1);
COMMIT;

-- ----------------------------
-- Table structure for sku
-- ----------------------------
DROP TABLE IF EXISTS `sku`;
CREATE TABLE `sku` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `spuId` int(10) unsigned NOT NULL COMMENT '产品ID',
  `title` varchar(200) COLLATE utf8_unicode_ci NOT NULL COMMENT '标题',
  `price` decimal(10,2) unsigned NOT NULL COMMENT '价格',
  `saleable` tinyint(1) NOT NULL COMMENT '是否上架',
  `valid` tinyint(1) NOT NULL COMMENT '是否有效',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '添加时间',
  `last_update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '最后修改时间',
  `org_price` decimal(10,2) unsigned NOT NULL COMMENT '原价格',
  `decs` json DEFAULT NULL COMMENT '产品介绍',
  `product_desc` text COLLATE utf8_unicode_ci COMMENT '商品简介',
  `warehouseId` int(11) NOT NULL,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `images` json DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_spu_id` (`spuId`),
  KEY `idx_saleable` (`saleable`),
  KEY `idx_valid` (`valid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='商品表';

-- ----------------------------
-- Records of sku
-- ----------------------------
BEGIN;
INSERT INTO `sku` (`id`, `spuId`, `title`, `price`, `saleable`, `valid`, `create_time`, `last_update_time`, `org_price`, `decs`, `product_desc`, `warehouseId`, `code`, `image`, `images`) VALUES (1, 1, '小米9 8GB+128GB 全息幻彩蓝 ', 3299.00, 1, 1, '2020-05-19 19:17:16', '2020-05-19 19:17:16', 4000.00, '[\"描述1\", \"描述2\"]', '<ul>\n  <li>Milk</li>\n  <li>  Cheese  </li>\n</ul>\n    \n<h5>\n  Title\n</h5>\n<ul>    \n  <li>Blue cheese</li>    \n  <li>Feta</li>  \n</ul>', 1, '1,2,3,4', 'https://picx.zhimg.com/v2-82a3d61aeda82f5f296e783a96e095dc_r.webp?source=172ae18b&consumer=ZHI_MENG', '[\"https://i8.mifile.cn/v1/a1/7d54de8f-8cd7-3ef6-53fc-634c00fa46d4.webp\", \"https://i8.mifile.cn/v1/a1/7d54de8f-8cd7-3ef6-53fc-634c00fa46d4.webp\", \"https://i8.mifile.cn/v1/a1/7d54de8f-8cd7-3ef6-53fc-634c00fa46d4.webp\", \"https://i8.mifile.cn/v1/a1/7d54de8f-8cd7-3ef6-53fc-634c00fa46d4.webp\", \"https://i8.mifile.cn/v1/a1/7d54de8f-8cd7-3ef6-53fc-634c00fa46d4.webp\"]');
INSERT INTO `sku` (`id`, `spuId`, `title`, `price`, `saleable`, `valid`, `create_time`, `last_update_time`, `org_price`, `decs`, `product_desc`, `warehouseId`, `code`, `image`, `images`) VALUES (2, 1, '小米9 8GB+256GB 全息幻彩蓝', 3298.00, 1, 1, '2020-05-19 19:17:16', '2020-05-19 19:17:16', 4000.00, '[\"描述1\", \"描述2\"]', '<ul>\n  <li>Milk</li>\n  <li>  Cheese  </li>\n</ul>\n    \n<h5>\n  Title\n</h5>\n<ul>    \n  <li>Blue cheese</li>    \n  <li>Feta</li>  \n</ul>', 2, '1,6,4,3', 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bec639601906ed7649970c6ab311f992.png?w=800&h=800', '[\"https://i8.mifile.cn/v1/a1/7d54de8f-8cd7-3ef6-53fc-634c00fa46d4.webp\", \"https://i8.mifile.cn/v1/a1/7d54de8f-8cd7-3ef6-53fc-634c00fa46d4.webp\", \"https://i8.mifile.cn/v1/a1/7d54de8f-8cd7-3ef6-53fc-634c00fa46d4.webp\", \"https://i8.mifile.cn/v1/a1/7d54de8f-8cd7-3ef6-53fc-634c00fa46d4.webp\", \"https://i8.mifile.cn/v1/a1/7d54de8f-8cd7-3ef6-53fc-634c00fa46d4.webp\"]');
INSERT INTO `sku` (`id`, `spuId`, `title`, `price`, `saleable`, `valid`, `create_time`, `last_update_time`, `org_price`, `decs`, `product_desc`, `warehouseId`, `code`, `image`, `images`) VALUES (3, 1, '小米9 16GB+128GB 全息幻彩蓝', 2999.00, 1, 1, '2020-05-19 19:17:16', '2020-05-19 19:17:16', 4000.00, '[\"描述1\", \"描述2\"]', '<ul>\n  <li>Milk</li>\n  <li>  Cheese  </li>\n</ul>\n    \n<h5>\n  Title\n</h5>\n<ul>    \n  <li>Blue cheese</li>    \n  <li>Feta</li>  \n</ul>', 3, '1,2,4,5', 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/23af2e932e099e4b9bd598e874f8afb5.jpg', '[\"https://i8.mifile.cn/v1/a1/7d54de8f-8cd7-3ef6-53fc-634c00fa46d4.webp\", \"https://i8.mifile.cn/v1/a1/7d54de8f-8cd7-3ef6-53fc-634c00fa46d4.webp\", \"https://i8.mifile.cn/v1/a1/7d54de8f-8cd7-3ef6-53fc-634c00fa46d4.webp\", \"https://i8.mifile.cn/v1/a1/7d54de8f-8cd7-3ef6-53fc-634c00fa46d4.webp\", \"https://i8.mifile.cn/v1/a1/7d54de8f-8cd7-3ef6-53fc-634c00fa46d4.webp\"]');
INSERT INTO `sku` (`id`, `spuId`, `title`, `price`, `saleable`, `valid`, `create_time`, `last_update_time`, `org_price`, `decs`, `product_desc`, `warehouseId`, `code`, `image`, `images`) VALUES (4, 1, '小米9 16GB+256GB 深空灰', 2998.00, 1, 1, '2020-05-19 19:17:16', '2020-05-19 19:17:16', 4000.00, '[\"描述1\", \"描述2\"]', '<ul>\n  <li>Milk</li>\n  <li>  Cheese  </li>\n</ul>\n    \n<h5>\n  Title\n</h5>\n<ul>    \n  <li>Blue cheese</li>    \n  <li>Feta</li>  \n</ul>', 4, '1,4,5,6', 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1670765316.46533285.png', '[\"https://i8.mifile.cn/v1/a1/7d54de8f-8cd7-3ef6-53fc-634c00fa46d4.webp\", \"https://i8.mifile.cn/v1/a1/7d54de8f-8cd7-3ef6-53fc-634c00fa46d4.webp\", \"https://i8.mifile.cn/v1/a1/7d54de8f-8cd7-3ef6-53fc-634c00fa46d4.webp\", \"https://i8.mifile.cn/v1/a1/7d54de8f-8cd7-3ef6-53fc-634c00fa46d4.webp\", \"https://i8.mifile.cn/v1/a1/7d54de8f-8cd7-3ef6-53fc-634c00fa46d4.webp\"]');
COMMIT;

-- ----------------------------
-- Table structure for sku_properties_property
-- ----------------------------
DROP TABLE IF EXISTS `sku_properties_property`;
CREATE TABLE `sku_properties_property` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `propertyId` int(11) NOT NULL,
  `skuId` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of sku_properties_property
-- ----------------------------
BEGIN;
INSERT INTO `sku_properties_property` (`id`, `propertyId`, `skuId`) VALUES (1, 1, 1);
INSERT INTO `sku_properties_property` (`id`, `propertyId`, `skuId`) VALUES (2, 2, 1);
INSERT INTO `sku_properties_property` (`id`, `propertyId`, `skuId`) VALUES (3, 3, 1);
INSERT INTO `sku_properties_property` (`id`, `propertyId`, `skuId`) VALUES (4, 4, 1);
INSERT INTO `sku_properties_property` (`id`, `propertyId`, `skuId`) VALUES (6, 1, 2);
INSERT INTO `sku_properties_property` (`id`, `propertyId`, `skuId`) VALUES (7, 6, 2);
INSERT INTO `sku_properties_property` (`id`, `propertyId`, `skuId`) VALUES (8, 4, 2);
INSERT INTO `sku_properties_property` (`id`, `propertyId`, `skuId`) VALUES (9, 3, 2);
INSERT INTO `sku_properties_property` (`id`, `propertyId`, `skuId`) VALUES (11, 1, 3);
INSERT INTO `sku_properties_property` (`id`, `propertyId`, `skuId`) VALUES (12, 2, 3);
INSERT INTO `sku_properties_property` (`id`, `propertyId`, `skuId`) VALUES (13, 4, 3);
INSERT INTO `sku_properties_property` (`id`, `propertyId`, `skuId`) VALUES (14, 5, 3);
INSERT INTO `sku_properties_property` (`id`, `propertyId`, `skuId`) VALUES (16, 1, 4);
INSERT INTO `sku_properties_property` (`id`, `propertyId`, `skuId`) VALUES (17, 4, 4);
INSERT INTO `sku_properties_property` (`id`, `propertyId`, `skuId`) VALUES (18, 5, 4);
INSERT INTO `sku_properties_property` (`id`, `propertyId`, `skuId`) VALUES (19, 6, 4);
COMMIT;

-- ----------------------------
-- Table structure for sku_tags_tag
-- ----------------------------
DROP TABLE IF EXISTS `sku_tags_tag`;
CREATE TABLE `sku_tags_tag` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `skuId` int(11) NOT NULL,
  `tagId` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of sku_tags_tag
-- ----------------------------
BEGIN;
INSERT INTO `sku_tags_tag` (`id`, `skuId`, `tagId`) VALUES (1, 1, 1);
INSERT INTO `sku_tags_tag` (`id`, `skuId`, `tagId`) VALUES (2, 2, 1);
INSERT INTO `sku_tags_tag` (`id`, `skuId`, `tagId`) VALUES (3, 3, 2);
INSERT INTO `sku_tags_tag` (`id`, `skuId`, `tagId`) VALUES (4, 4, 2);
INSERT INTO `sku_tags_tag` (`id`, `skuId`, `tagId`) VALUES (5, 3, 1);
COMMIT;

-- ----------------------------
-- Table structure for spu
-- ----------------------------
DROP TABLE IF EXISTS `spu`;
CREATE TABLE `spu` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `title` varchar(200) COLLATE utf8_unicode_ci NOT NULL COMMENT '标题',
  `sub_title` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '副标题',
  `category_id` int(10) unsigned NOT NULL COMMENT '分类ID',
  `spg_id` int(10) unsigned DEFAULT NULL COMMENT '品类ID',
  `saleable` tinyint(1) NOT NULL COMMENT '是否上架',
  `valid` tinyint(1) NOT NULL COMMENT '是否有效',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '添加时间',
  `last_update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '最后修改时间',
  `brandId` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_category_id` (`category_id`),
  KEY `idx_spg_id` (`spg_id`),
  KEY `idx_saleable` (`saleable`),
  KEY `idx_valid` (`valid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='产品表';

-- ----------------------------
-- Records of spu
-- ----------------------------
BEGIN;
INSERT INTO `spu` (`id`, `title`, `sub_title`, `category_id`, `spg_id`, `saleable`, `valid`, `create_time`, `last_update_time`, `brandId`) VALUES (1, '小米9', NULL, 3, 10001, 1, 1, '2020-05-19 18:53:41', '2020-05-19 18:53:41', 3);
COMMIT;

-- ----------------------------
-- Table structure for tag
-- ----------------------------
DROP TABLE IF EXISTS `tag`;
CREATE TABLE `tag` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `value` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `skuId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of tag
-- ----------------------------
BEGIN;
INSERT INTO `tag` (`id`, `value`, `skuId`) VALUES (1, '屏幕大', NULL);
INSERT INTO `tag` (`id`, `value`, `skuId`) VALUES (2, '屏幕小', NULL);
INSERT INTO `tag` (`id`, `value`, `skuId`) VALUES (3, '好用', NULL);
COMMIT;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` (`id`, `name`, `email`, `password`, `created_at`, `updated_at`) VALUES (1, 'aaa', 'aoeu@oaeu.com', '$2b$10$gaPVYLy/qbrXvWVG.UX8t.k9nMIHrV7vW0brRhtQYcFf0YQq82YYC', '2023-09-22 07:21:53', '2023-09-22 07:21:53');
COMMIT;

-- ----------------------------
-- Table structure for warehouse
-- ----------------------------
DROP TABLE IF EXISTS `warehouse`;
CREATE TABLE `warehouse` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `num` int(10) unsigned NOT NULL COMMENT '库存数量',
  `unit` varchar(20) COLLATE utf8_unicode_ci NOT NULL COMMENT '库存单位',
  `delivery_date` varchar(20) COLLATE utf8_unicode_ci NOT NULL COMMENT '预计出货日',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='仓库商品库存表';

-- ----------------------------
-- Records of warehouse
-- ----------------------------
BEGIN;
INSERT INTO `warehouse` (`id`, `num`, `unit`, `delivery_date`) VALUES (1, 20, '部', '10-15');
INSERT INTO `warehouse` (`id`, `num`, `unit`, `delivery_date`) VALUES (2, 15, '部', '10-15');
INSERT INTO `warehouse` (`id`, `num`, `unit`, `delivery_date`) VALUES (3, 40, '部', '10-15');
INSERT INTO `warehouse` (`id`, `num`, `unit`, `delivery_date`) VALUES (4, 12, '部', '10-15');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
