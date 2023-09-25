USE DOCKERIZED;
create table spu
(
    id               int unsigned primary key auto_increment comment '主键',
    title            varchar(200) not null comment '标题',
    sub_title        varchar(200) comment '副标题',
    category_id      int unsigned not null comment '分类ID',
    brand_id         int unsigned comment '品牌ID',
    spg_id           int unsigned comment '品类ID',
    saleable         boolean      not null comment '是否上架',
    valid            boolean      not null comment '是否有效',
    create_time      timestamp    not null default now() comment '添加时间',
    last_update_time timestamp    not null default now() comment '最后修改时间',
    index idx_category_id (category_id),
    index idx_brand_id (brand_id),
    index idx_spg_id (spg_id),
    index idx_saleable (saleable),
    index idx_valid (valid)

) comment ='产品表';