import { kv } from '@vercel/kv';

export async function PATCH(request) {
  try {
    const body = await request.json();
    const { id, estado, prioridad, notas, accion } = body;

    if (!id) {
      return Response.json({ error: 'ID requerido' }, { status: 400 });
    }

    const lead = await kv.hgetall(`lead:${id}`);
    if (!lead) {
      return Response.json({ error: 'Lead no encontrado' }, { status: 404 });
    }

    if (estado) lead.estado = estado;
    if (prioridad) lead.prioridad = prioridad;
    lead.fecha_actualizacion = new Date().toISOString();

    if (accion === 'agregar_nota' && notas) {
      const notasActuales = lead.notas ? JSON.parse(lead.notas) : [];
      notasActuales.push({
        texto: notas,
        fecha: new Date().toISOString(),
        tipo: 'nota'
      });
      lead.notas = JSON.stringify(notasActuales);
    }

    if (accion === 'cerrar') {
      lead.estado = 'cerrado';
      lead.fecha_cierre = new Date().toISOString();
    }

    await kv.hset(`lead:${id}`, lead);

    return Response.json({ success: true, lead });
  } catch (error) {
    console.error('Error updating lead:', error);
    return Response.json({ error: 'Error interno' }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return Response.json({ error: 'ID requerido' }, { status: 400 });
    }

    await kv.del(`lead:${id}`);

    return Response.json({ success: true });
  } catch (error) {
    console.error('Error deleting lead:', error);
    return Response.json({ error: 'Error interno' }, { status: 500 });
  }
}