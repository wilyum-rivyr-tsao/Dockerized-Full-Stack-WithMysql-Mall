USE DOCKERIZED;
create table t_sku
(
    id               int unsigned primary key auto_increment comment '主键',
    spu_id           int unsigned            not null comment '产品ID',
    title            varchar(200)            not null comment '标题',
    images           json comment '商品图片',
    price            decimal(10, 2) unsigned not null comment '价格',
    param            json                    not null comment '参数',    
    saleable         boolean                 not null comment '是否上架',
    valid            boolean                 not null comment '是否有效',
    create_time      timestamp               not null default now() comment '添加时间',
    last_update_time timestamp               not null default now() comment '最后修改时间',
    org_price        decimal(10, 2) unsigned not null comment '原价格',
    decs             json COMMENT '产品介绍',
    product_desc     TEXT COMMENT '商品简介',
    index idx_spu_id (spu_id),
    index idx_saleable (saleable),
    index idx_valid (valid)
) comment ='商品表';
