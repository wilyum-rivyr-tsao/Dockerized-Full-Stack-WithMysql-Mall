USE DOCKERIZED;

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
-- Records of cart
-- ----------------------------
BEGIN;
INSERT INTO `cart` (`id`, `userId`, `skuId`, `num`) VALUES (18, '1', '3', 1);
INSERT INTO `cart` (`id`, `userId`, `skuId`, `num`) VALUES (19, '1', '4', 3);
COMMIT;



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
-- Records of sku
-- ----------------------------
BEGIN;
INSERT INTO `sku` (`id`, `spuId`, `title`, `price`, `saleable`, `valid`, `create_time`, `last_update_time`, `org_price`, `decs`, `product_desc`, `warehouseId`, `code`, `image`, `images`) VALUES (1, 1, '小米9 8GB+128GB 全息幻彩蓝 ', 3299.00, 1, 1, '2020-05-19 19:17:16', '2020-05-19 19:17:16', 4000.00, '[\"描述1\", \"描述2\"]', '<ul>\n  <li>Milk</li>\n  <li>  Cheese  </li>\n</ul>\n    \n<h5>\n  Title\n</h5>\n<ul>    \n  <li>Blue cheese</li>    \n  <li>Feta</li>  \n</ul>', 1, '1,2,3,4', 'https://picx.zhimg.com/v2-82a3d61aeda82f5f296e783a96e095dc_r.webp?source=172ae18b&consumer=ZHI_MENG', '[\"https://i8.mifile.cn/v1/a1/7d54de8f-8cd7-3ef6-53fc-634c00fa46d4.webp\", \"https://i8.mifile.cn/v1/a1/7d54de8f-8cd7-3ef6-53fc-634c00fa46d4.webp\", \"https://i8.mifile.cn/v1/a1/7d54de8f-8cd7-3ef6-53fc-634c00fa46d4.webp\", \"https://i8.mifile.cn/v1/a1/7d54de8f-8cd7-3ef6-53fc-634c00fa46d4.webp\", \"https://i8.mifile.cn/v1/a1/7d54de8f-8cd7-3ef6-53fc-634c00fa46d4.webp\"]');
INSERT INTO `sku` (`id`, `spuId`, `title`, `price`, `saleable`, `valid`, `create_time`, `last_update_time`, `org_price`, `decs`, `product_desc`, `warehouseId`, `code`, `image`, `images`) VALUES (2, 1, '小米9 8GB+256GB 全息幻彩蓝', 3298.00, 1, 1, '2020-05-19 19:17:16', '2020-05-19 19:17:16', 4000.00, '[\"描述1\", \"描述2\"]', '<ul>\n  <li>Milk</li>\n  <li>  Cheese  </li>\n</ul>\n    \n<h5>\n  Title\n</h5>\n<ul>    \n  <li>Blue cheese</li>    \n  <li>Feta</li>  \n</ul>', 2, '1,6,4,3', 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bec639601906ed7649970c6ab311f992.png?w=800&h=800', '[\"https://i8.mifile.cn/v1/a1/7d54de8f-8cd7-3ef6-53fc-634c00fa46d4.webp\", \"https://i8.mifile.cn/v1/a1/7d54de8f-8cd7-3ef6-53fc-634c00fa46d4.webp\", \"https://i8.mifile.cn/v1/a1/7d54de8f-8cd7-3ef6-53fc-634c00fa46d4.webp\", \"https://i8.mifile.cn/v1/a1/7d54de8f-8cd7-3ef6-53fc-634c00fa46d4.webp\", \"https://i8.mifile.cn/v1/a1/7d54de8f-8cd7-3ef6-53fc-634c00fa46d4.webp\"]');
INSERT INTO `sku` (`id`, `spuId`, `title`, `price`, `saleable`, `valid`, `create_time`, `last_update_time`, `org_price`, `decs`, `product_desc`, `warehouseId`, `code`, `image`, `images`) VALUES (3, 1, '小米9 16GB+128GB 全息幻彩蓝', 2999.00, 1, 1, '2020-05-19 19:17:16', '2020-05-19 19:17:16', 4000.00, '[\"描述1\", \"描述2\"]', '<ul>\n  <li>Milk</li>\n  <li>  Cheese  </li>\n</ul>\n    \n<h5>\n  Title\n</h5>\n<ul>    \n  <li>Blue cheese</li>    \n  <li>Feta</li>  \n</ul>', 3, '1,2,4,5', 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/23af2e932e099e4b9bd598e874f8afb5.jpg', '[\"https://i8.mifile.cn/v1/a1/7d54de8f-8cd7-3ef6-53fc-634c00fa46d4.webp\", \"https://i8.mifile.cn/v1/a1/7d54de8f-8cd7-3ef6-53fc-634c00fa46d4.webp\", \"https://i8.mifile.cn/v1/a1/7d54de8f-8cd7-3ef6-53fc-634c00fa46d4.webp\", \"https://i8.mifile.cn/v1/a1/7d54de8f-8cd7-3ef6-53fc-634c00fa46d4.webp\", \"https://i8.mifile.cn/v1/a1/7d54de8f-8cd7-3ef6-53fc-634c00fa46d4.webp\"]');
INSERT INTO `sku` (`id`, `spuId`, `title`, `price`, `saleable`, `valid`, `create_time`, `last_update_time`, `org_price`, `decs`, `product_desc`, `warehouseId`, `code`, `image`, `images`) VALUES (4, 1, '小米9 16GB+256GB 深空灰', 2998.00, 1, 1, '2020-05-19 19:17:16', '2020-05-19 19:17:16', 4000.00, '[\"描述1\", \"描述2\"]', '<ul>\n  <li>Milk</li>\n  <li>  Cheese  </li>\n</ul>\n    \n<h5>\n  Title\n</h5>\n<ul>    \n  <li>Blue cheese</li>    \n  <li>Feta</li>  \n</ul>', 4, '1,4,5,6', 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1670765316.46533285.png', '[\"https://i8.mifile.cn/v1/a1/7d54de8f-8cd7-3ef6-53fc-634c00fa46d4.webp\", \"https://i8.mifile.cn/v1/a1/7d54de8f-8cd7-3ef6-53fc-634c00fa46d4.webp\", \"https://i8.mifile.cn/v1/a1/7d54de8f-8cd7-3ef6-53fc-634c00fa46d4.webp\", \"https://i8.mifile.cn/v1/a1/7d54de8f-8cd7-3ef6-53fc-634c00fa46d4.webp\", \"https://i8.mifile.cn/v1/a1/7d54de8f-8cd7-3ef6-53fc-634c00fa46d4.webp\"]');
COMMIT;


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
-- Records of spu
-- ----------------------------
BEGIN;
INSERT INTO `spu` (`id`, `title`, `sub_title`, `category_id`, `spg_id`, `saleable`, `valid`, `create_time`, `last_update_time`, `brandId`) VALUES (1, '小米9', NULL, 3, 10001, 1, 1, '2020-05-19 18:53:41', '2020-05-19 18:53:41', 3);
COMMIT;



-- ----------------------------
-- Records of tag
-- ----------------------------
BEGIN;
INSERT INTO `tag` (`id`, `value`, `skuId`) VALUES (1, '屏幕大', NULL);
INSERT INTO `tag` (`id`, `value`, `skuId`) VALUES (2, '屏幕小', NULL);
INSERT INTO `tag` (`id`, `value`, `skuId`) VALUES (3, '好用', NULL);
COMMIT;


-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` (`id`, `name`, `email`, `password`, `created_at`, `updated_at`) VALUES (1, 'aaa', 'aoeu@oaeu.com', '$2b$10$gaPVYLy/qbrXvWVG.UX8t.k9nMIHrV7vW0brRhtQYcFf0YQq82YYC', '2023-09-22 07:21:53', '2023-09-22 07:21:53');
COMMIT;

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