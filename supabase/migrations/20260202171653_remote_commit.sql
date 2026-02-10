


SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;


CREATE SCHEMA IF NOT EXISTS "geral";


ALTER SCHEMA "geral" OWNER TO "postgres";


COMMENT ON SCHEMA "public" IS 'standard public schema';



CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";






CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";






CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";






CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";






CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";






CREATE OR REPLACE FUNCTION "public"."rls_auto_enable"() RETURNS "event_trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'pg_catalog'
    AS $$
DECLARE
  cmd record;
BEGIN
  FOR cmd IN
    SELECT *
    FROM pg_event_trigger_ddl_commands()
    WHERE command_tag IN ('CREATE TABLE', 'CREATE TABLE AS', 'SELECT INTO')
      AND object_type IN ('table','partitioned table')
  LOOP
     IF cmd.schema_name IS NOT NULL AND cmd.schema_name IN ('public') AND cmd.schema_name NOT IN ('pg_catalog','information_schema') AND cmd.schema_name NOT LIKE 'pg_toast%' AND cmd.schema_name NOT LIKE 'pg_temp%' THEN
      BEGIN
        EXECUTE format('alter table if exists %s enable row level security', cmd.object_identity);
        RAISE LOG 'rls_auto_enable: enabled RLS on %', cmd.object_identity;
      EXCEPTION
        WHEN OTHERS THEN
          RAISE LOG 'rls_auto_enable: failed to enable RLS on %', cmd.object_identity;
      END;
     ELSE
        RAISE LOG 'rls_auto_enable: skip % (either system schema or not in enforced list: %.)', cmd.object_identity, cmd.schema_name;
     END IF;
  END LOOP;
END;
$$;


ALTER FUNCTION "public"."rls_auto_enable"() OWNER TO "postgres";

SET default_tablespace = '';

SET default_table_access_method = "heap";


CREATE TABLE IF NOT EXISTS "geral"."rl_organizacao_cargo" (
    "co_organizacao_cargo" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "sg_cargo" character varying,
    "co_organizacao" bigint,
    "co_pessoa_fisica" bigint
);


ALTER TABLE "geral"."rl_organizacao_cargo" OWNER TO "postgres";


ALTER TABLE "geral"."rl_organizacao_cargo" ALTER COLUMN "co_organizacao_cargo" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME "geral"."rl_organizacao_cargo_co_organizacao_cargo_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "geral"."rl_permissao_cargo" (
    "co_permissao_cargo" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "co_permissao" bigint,
    "sg_cargo" character varying
);


ALTER TABLE "geral"."rl_permissao_cargo" OWNER TO "postgres";


ALTER TABLE "geral"."rl_permissao_cargo" ALTER COLUMN "co_permissao_cargo" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME "geral"."rl_permissao_cargo_co_permissao_cargo_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "geral"."tb_comunidade_usuario" (
    "user_id" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "name" character varying,
    "email" character varying,
    "co_pessoa" bigint,
    "dt_atribuicoes" "date",
    "list_atribuicoes" character varying,
    "list_member_tags" character varying
);


ALTER TABLE "geral"."tb_comunidade_usuario" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "geral"."tb_credenciamento" (
    "co_credenciamento" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "dt_credenciamento_inicio" "date",
    "dt_credenciamento_fim" "date",
    "ds_credenciamento_detalhes" "date",
    "co_organizacao" bigint
);


ALTER TABLE "geral"."tb_credenciamento" OWNER TO "postgres";


ALTER TABLE "geral"."tb_credenciamento" ALTER COLUMN "co_credenciamento" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME "geral"."tb_credenciamento_co_credenciamento_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "geral"."tb_organizacao" (
    "co_organizacao" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "co_organizacao_pai" bigint,
    "sg_organizacao" character varying,
    "co_cnpj" character varying,
    "em_sufixo" character varying,
    "sg_organizacao_embrapii" character varying,
    "no_organizacao" character varying
);


ALTER TABLE "geral"."tb_organizacao" OWNER TO "postgres";


ALTER TABLE "geral"."tb_organizacao" ALTER COLUMN "co_organizacao" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME "geral"."tb_organizacao_co_organizacao_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "geral"."tb_pessoa_fisica" (
    "co_pessoa_fisica" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "co_usuario" "uuid",
    "co_cpf" character varying NOT NULL,
    "no_pessoa_fisica" character varying NOT NULL,
    "dt_nascimento" "date",
    "em_comunidade" character varying
);


ALTER TABLE "geral"."tb_pessoa_fisica" OWNER TO "postgres";


ALTER TABLE "geral"."tb_pessoa_fisica" ALTER COLUMN "co_pessoa_fisica" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME "geral"."tb_pessoa_fisica_co_pessoa_fisica_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "geral"."tp_cargo" (
    "sg_cargo" character varying NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "sg_cargo_superior" character varying,
    "no_cargo" character varying,
    "ds_cargo" character varying
);


ALTER TABLE "geral"."tp_cargo" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "geral"."tp_organizacao" (
    "sg_organizacao" character varying NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "no_organizacao" character varying NOT NULL,
    "ds_organizacao" character varying,
    "sg_esfera_publica" character varying
);


ALTER TABLE "geral"."tp_organizacao" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "geral"."tp_organizacao_embrapii" (
    "sg_organizacao_embrapii" character varying NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "no_organizacao_embrapii" character varying
);


ALTER TABLE "geral"."tp_organizacao_embrapii" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "geral"."tp_permissao" (
    "co_permissao" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "no_pagina" character varying,
    "sg_acao_app" character varying,
    "no_permissao" character varying
);


ALTER TABLE "geral"."tp_permissao" OWNER TO "postgres";


ALTER TABLE "geral"."tp_permissao" ALTER COLUMN "co_permissao" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME "geral"."tp_permissao_co_permissao_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



ALTER TABLE ONLY "geral"."rl_organizacao_cargo"
    ADD CONSTRAINT "rl_organizacao_cargo_pkey" PRIMARY KEY ("co_organizacao_cargo");



ALTER TABLE ONLY "geral"."rl_permissao_cargo"
    ADD CONSTRAINT "rl_permissao_cargo_pkey" PRIMARY KEY ("co_permissao_cargo");



ALTER TABLE ONLY "geral"."tb_comunidade_usuario"
    ADD CONSTRAINT "tb_comunidade_usuario_pkey" PRIMARY KEY ("user_id");



ALTER TABLE ONLY "geral"."tb_credenciamento"
    ADD CONSTRAINT "tb_credenciamento_pkey" PRIMARY KEY ("co_credenciamento");



ALTER TABLE ONLY "geral"."tb_organizacao"
    ADD CONSTRAINT "tb_organizacao_co_cnpj_key" UNIQUE ("co_cnpj");



ALTER TABLE ONLY "geral"."tb_organizacao"
    ADD CONSTRAINT "tb_organizacao_em_sufixo_key" UNIQUE ("em_sufixo");



ALTER TABLE ONLY "geral"."tb_organizacao"
    ADD CONSTRAINT "tb_organizacao_pkey" PRIMARY KEY ("co_organizacao");



ALTER TABLE ONLY "geral"."tb_pessoa_fisica"
    ADD CONSTRAINT "tb_pessoa_fisica_pkey" PRIMARY KEY ("co_pessoa_fisica");



ALTER TABLE ONLY "geral"."tp_cargo"
    ADD CONSTRAINT "tp_cargo_pkey" PRIMARY KEY ("sg_cargo");



ALTER TABLE ONLY "geral"."tp_organizacao_embrapii"
    ADD CONSTRAINT "tp_organizacao_embrapii_pkey" PRIMARY KEY ("sg_organizacao_embrapii");



ALTER TABLE ONLY "geral"."tp_organizacao"
    ADD CONSTRAINT "tp_organizacao_pkey" PRIMARY KEY ("sg_organizacao");



ALTER TABLE ONLY "geral"."tp_permissao"
    ADD CONSTRAINT "tp_permissao_pkey" PRIMARY KEY ("co_permissao");



ALTER TABLE ONLY "geral"."rl_organizacao_cargo"
    ADD CONSTRAINT "rl_organizacao_cargo_co_organizacao_fkey" FOREIGN KEY ("co_organizacao") REFERENCES "geral"."tb_organizacao"("co_organizacao");



ALTER TABLE ONLY "geral"."rl_organizacao_cargo"
    ADD CONSTRAINT "rl_organizacao_cargo_co_pessoa_fisica_fkey" FOREIGN KEY ("co_pessoa_fisica") REFERENCES "geral"."tb_pessoa_fisica"("co_pessoa_fisica");



ALTER TABLE ONLY "geral"."rl_organizacao_cargo"
    ADD CONSTRAINT "rl_organizacao_cargo_sg_cargo_fkey" FOREIGN KEY ("sg_cargo") REFERENCES "geral"."tp_cargo"("sg_cargo");



ALTER TABLE ONLY "geral"."rl_permissao_cargo"
    ADD CONSTRAINT "rl_permissao_cargo_co_permissao_fkey" FOREIGN KEY ("co_permissao") REFERENCES "geral"."tp_permissao"("co_permissao");



ALTER TABLE ONLY "geral"."rl_permissao_cargo"
    ADD CONSTRAINT "rl_permissao_cargo_sg_cargo_fkey" FOREIGN KEY ("sg_cargo") REFERENCES "geral"."tp_cargo"("sg_cargo");



ALTER TABLE ONLY "geral"."tb_credenciamento"
    ADD CONSTRAINT "tb_credenciamento_co_organizacao_fkey" FOREIGN KEY ("co_organizacao") REFERENCES "geral"."tb_organizacao"("co_organizacao");



ALTER TABLE ONLY "geral"."tb_organizacao"
    ADD CONSTRAINT "tb_organizacao_co_organizacao_pai_fkey" FOREIGN KEY ("co_organizacao_pai") REFERENCES "geral"."tb_organizacao"("co_organizacao");



ALTER TABLE ONLY "geral"."tb_organizacao"
    ADD CONSTRAINT "tb_organizacao_sg_organizacao_embrapii_fkey" FOREIGN KEY ("sg_organizacao_embrapii") REFERENCES "geral"."tp_organizacao_embrapii"("sg_organizacao_embrapii");



ALTER TABLE ONLY "geral"."tb_pessoa_fisica"
    ADD CONSTRAINT "tb_pessoa_fisica_co_usuario_fkey" FOREIGN KEY ("co_usuario") REFERENCES "auth"."users"("id");



ALTER TABLE ONLY "geral"."tp_cargo"
    ADD CONSTRAINT "tp_cargo_sg_cargo_superior_fkey" FOREIGN KEY ("sg_cargo_superior") REFERENCES "geral"."tp_cargo"("sg_cargo");



ALTER TABLE "geral"."tb_comunidade_usuario" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "geral"."tb_pessoa_fisica" ENABLE ROW LEVEL SECURITY;




ALTER PUBLICATION "supabase_realtime" OWNER TO "postgres";


GRANT USAGE ON SCHEMA "public" TO "postgres";
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";



GRANT ALL ON FUNCTION "public"."rls_auto_enable"() TO "anon";
GRANT ALL ON FUNCTION "public"."rls_auto_enable"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."rls_auto_enable"() TO "service_role";
























ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES TO "service_role";






ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS TO "service_role";






ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES TO "service_role";



/*
    SCHEMA PERSONALIZADO GERAL
*/
GRANT USAGE ON SCHEMA geral TO anon, authenticated, service_role;
GRANT ALL ON ALL TABLES IN SCHEMA geral TO anon, authenticated, service_role;
GRANT ALL ON ALL ROUTINES IN SCHEMA geral TO anon, authenticated, service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA geral TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA geral GRANT ALL ON TABLES TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA geral GRANT ALL ON ROUTINES TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA geral GRANT ALL ON SEQUENCES TO anon, authenticated, service_role;
-- Para entidades futuras
ALTER DEFAULT PRIVILEGES IN SCHEMA geral GRANT ALL ON TABLES TO anon, authenticated, service_role;





drop extension if exists "pg_net";