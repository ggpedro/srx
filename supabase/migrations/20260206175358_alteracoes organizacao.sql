/*
  Alterações feitas para servir ao propósito da comunidade
*/

alter table "geral"."tb_organizacao" drop constraint "tb_organizacao_sg_organizacao_embrapii_fkey";

alter table "geral"."tp_organizacao" drop constraint "tp_organizacao_pkey";

alter table "geral"."tp_organizacao_embrapii" drop constraint "tp_organizacao_embrapii_pkey";

drop index if exists "geral"."tp_organizacao_embrapii_pkey";

drop index if exists "geral"."tp_organizacao_pkey";

drop table "geral"."tp_organizacao";

drop table "geral"."tp_organizacao_embrapii";


  create table "geral"."tp_organizacao_tipo" (
    "sg_organizacao_tipo" character varying not null,
    "created_at" timestamp with time zone not null default now(),
    "no_organizacao_tipo" character varying not null,
    "ds_organizacao_tipo" character varying,
    "sg_esfera_publica" character varying
      );


alter table "geral"."tb_organizacao" drop column "sg_organizacao_embrapii";

alter table "geral"."tb_organizacao" add column "sg_organizacao_tipo" character varying;

CREATE UNIQUE INDEX tp_organizacao_tipo_pkey ON geral.tp_organizacao_tipo USING btree (sg_organizacao_tipo);

alter table "geral"."tp_organizacao_tipo" add constraint "tp_organizacao_tipo_pkey" PRIMARY KEY using index "tp_organizacao_tipo_pkey";
alter table "geral"."tp_organizacao_tipo" add column "co_comunidade_tag" int8;
alter table "geral"."tp_organizacao_tipo" add column "co_comunidade_perfil" int8;
alter table "geral"."tb_organizacao" add column "co_comunidade_tag" int8;
-- alter table "geral"."tb_organizacao" add column "co_comunidade_perfil" int8;

alter table "geral"."tb_organizacao" add constraint "tb_organizacao_sg_organizacao_tipo_fkey" FOREIGN KEY (sg_organizacao_tipo) REFERENCES geral.tp_organizacao_tipo(sg_organizacao_tipo) not valid;

alter table "geral"."tb_organizacao" validate constraint "tb_organizacao_sg_organizacao_tipo_fkey";