import { kv } from '@vercel/kv';

export async function POST(request) {
  try {
    const body = await request.json();
    const { nombre, whatsapp, email, negocio, mensaje, pagina, origen } = body;

    if (!whatsapp || !nombre) {
      return Response.json({ error: 'Nombre y WhatsApp son requeridos' }, { status: 400 });
    }

    const leadId = `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const now = new Date().toISOString();

    const lead = {
      id: leadId,
      nombre,
      whatsapp,
      email: email || '',
      negocio: negocio || '',
      mensaje: mensaje || '',
      pagina: pagina || '',
      origen: origen || 'web',
      estado: 'nuevo',
      prioridad: 'media',
      notas: [],
      fecha_creacion: now,
      fecha_actualizacion: now,
    };

    await kv.hset(`lead:${leadId}`, lead);
    await kv.zadd('leads:index', { score: Date.now(), value: leadId });

    const allLeads = await kv.lrange('leads:all', 0, -1);
    await kv.rpush('leads:all', leadId);

    return Response.json({ success: true, lead });
  } catch (error) {
    console.error('Error creating lead:', error);
    return Response.json({ error: 'Error interno' }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const estado = searchParams.get('estado');

    const leadIds = await kv.lrange('leads:all', 0, -1);
    const leads = [];

    for (const leadId of leadIds) {
      const lead = await kv.hgetall(`lead:${leadId}`);
      if (lead && (!estado || lead.estado === estado)) {
        leads.push(lead);
      }
    }

    leads.sort((a, b) => new Date(b.fecha_creacion) - new Date(a.fecha_creacion));

    return Response.json({ leads });
  } catch (error) {
    console.error('Error fetching leads:', error);
    return Response.json({ leads: [] });
  }
}