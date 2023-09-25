USE DOCKERIZED;
create table warehouse_sku
(
    warehouse_id int unsigned comment '主键',
    sku_id       int unsigned comment '商品ID',
    num          int unsigned not null comment '库存数量',
    unit         varchar(20)  not null comment '库存单位',
    delivery_date     varchar(20)  not null comment '预计出货日',
    primary key (warehouse_id, sku_id)
) comment '仓库商品库存表';