USE DOCKERIZED;


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
