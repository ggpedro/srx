
-- select net.http_post(
--     url := 'https://seu-projeto.functions.supabase.co/v1/nome-da-funcao',
--     headers := jsonb_build_object(
--       'Content-type', 'application/json',
--       'Authorization', 'Bearer ' || (select decrypted_secret from vault.decrypted_secrets where name = 'service_role_key' limit 1)
--     ),
--     body := '{"job": "cron"}'::jsonb
--   ) as request_id;