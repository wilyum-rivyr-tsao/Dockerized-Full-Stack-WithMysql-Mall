USE DOCKERIZED;
create table t_brand
(
    id     int unsigned primary key auto_increment comment '主键',
    `name` varchar(200) not null comment '名称',
    image  varchar(500) comment '图片网址',
    letter char(1)      not null comment '单位（量词语）',
    unique unq_name (`name`),
    index idx_letter (letter)
) comment ='品牌表';