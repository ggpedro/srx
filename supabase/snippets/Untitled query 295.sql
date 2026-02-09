GRANT USAGE ON SCHEMA geral TO anon, authenticated, service_role;
GRANT ALL ON ALL TABLES IN SCHEMA geral TO anon, authenticated, service_role;
GRANT ALL ON ALL ROUTINES IN SCHEMA geral TO anon, authenticated, service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA geral TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA geral GRANT ALL ON TABLES TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA geral GRANT ALL ON ROUTINES TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA geral GRANT ALL ON SEQUENCES TO anon, authenticated, service_role;


