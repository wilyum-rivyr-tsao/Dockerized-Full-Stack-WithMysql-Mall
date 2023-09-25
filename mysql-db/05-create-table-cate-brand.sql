USE DOCKERIZED;
create table category_brand
(
    category_id int unsigned comment '分类 ID',
    brand_id    int unsigned comment '品牌 ID',
    primary key (category_id, brand_id)
) comment ='分类与品牌关联表';
