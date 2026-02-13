-- ALTERAR ISTO URGENTE!!! DEVE-SE USAR O ALTER DATABASE postgres SET app.cron_secret = '' E NÃO COLOCAR HARD CODED E VERSIONADO;

select
  cron.schedule(
    'sync-comunidade-importar-novos-usuarios',
    -- '0 0,12 * * *',
    '*/2 * * * *',
    $$
    select
      net.http_post(
        url := 'http://kong:8000/functions/v1/sync-comunidade-usuarios-novos',
        headers := jsonb_build_object(
          'Host','127.0.0.1:54321',
          'Content-Type','application/json',
          'Authorization','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0',
          'api_key','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0',
          'x-cron-secret','DSAOIJ328FJ343disjfa83D@fastdgfs@af1,.431DSLLSssreFD434fdGA..SR',
          'jobTipo','1',
          'jobTeste','true'
        )::jsonb,
        body := '{}'::jsonb
      );
    $$
  );
