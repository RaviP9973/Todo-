// supabase/functions/task-created.ts
import { serve } from 'https://deno.land/std/http/server.ts';

serve(async (req) => {
  const payload = await req.json();

  // Log for debugging
  console.log('New todo inserted:', payload);

  // Send to your backend
  const response = await fetch('https://backendtodo-lzmk.onrender.com/webhook/task-created', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  return new Response(JSON.stringify({ success: true, backendStatus: response.status }), {
    status: 200,
  });
  }); 