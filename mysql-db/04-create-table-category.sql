USE DOCKERIZED;
create table t_category
(
    id        int unsigned primary key auto_increment comment '主键',
    `name`    varchar(200) not null comment '分类名称',
    parent_id int unsigned comment '上级分类ID',
    if_parent tinyint(1)   not null comment '是否包含下级分类',
    sort      int unsigned not null comment '排名指数',
    index idx_parent_id (parent_id),
    index idx_sort (sort)
) comment ='商品分类表';