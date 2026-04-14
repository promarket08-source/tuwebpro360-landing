'use client';
import { useState, useEffect } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, isToday, addMonths, subMonths } from 'date-fns';
import { es } from 'date-fns/locale';

export default function AdminDashboard() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [activeTab, setActiveTab] = useState('leads');
  const [selectedLead, setSelectedLead] = useState(null);
  const [nota, setNota] = useState('');

  useEffect(() => {
    fetchLeads();
  }, []);

  async function fetchLeads() {
    try {
      const res = await fetch('/api/leads');
      const data = await res.json();
      setLeads(data.leads || []);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  }

  const leadsPorEstado = {
    nuevo: leads.filter(l => l.estado === 'nuevo').length,
    contactado: leads.filter(l => l.estado === 'contactado').length,
    en_progreso: leads.filter(l => l.estado === 'en_progreso').length,
    cerrado: leads.filter(l => l.estado === 'cerrado').length,
  };

  const days = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth)
  });

  const getLeadsForDay = (day) => {
    return leads.filter(lead => {
      const fecha = new Date(lead.fecha_creacion);
      return isSameDay(fecha, day);
    });
  };

  async function actualizarEstado(leadId, nuevoEstado) {
    try {
      await fetch(`/api/leads/${leadId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: leadId, estado: nuevoEstado })
      });
      fetchLeads();
      setSelectedLead(null);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async function agregarNota(leadId) {
    if (!nota.trim()) return;
    try {
      await fetch(`/api/leads/${leadId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: leadId, accion: 'agregar_nota', notas: nota })
      });
      setNota('');
      fetchLeads();
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const getEstadoColor = (estado) => {
    const colores = {
      nuevo: 'bg-green-500',
      contactado: 'bg-yellow-500',
      en_progreso: 'bg-blue-500',
      cerrado: 'bg-gray-500'
    };
    return colores[estado] || 'bg-gray-500';
  };

  const getPrioridadColor = (prioridad) => {
    const colores = {
      alta: 'text-red-500',
      media: 'text-yellow-500',
      baja: 'text-green-500'
    };
    return colores[prioridad] || 'text-gray-500';
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-indigo-400">EP360</h1>
            <span className="text-gray-400">/</span>
            <h2 className="text-xl font-semibold">CRM & Admin</h2>
          </div>
          <div className="flex items-center gap-4">
            <a href="/" className="text-gray-400 hover:text-white transition">
              <i className="fas fa-home mr-2"></i>Volver al sitio
            </a>
          </div>
        </div>
      </nav>

      <div className="flex">
        <aside className="w-64 bg-gray-800 min-h-screen p-4">
          <div className="space-y-2">
            <button
              onClick={() => setActiveTab('leads')}
              className={`w-full text-left px-4 py-3 rounded-lg transition ${activeTab === 'leads' ? 'bg-indigo-600' : 'hover:bg-gray-700'}`}
            >
              <i className="fas fa-users mr-2"></i>Leads
              <span className="float-right bg-green-500 text-xs px-2 py-0.5 rounded-full">{leadsPorEstado.nuevo}</span>
            </button>
            <button
              onClick={() => setActiveTab('calendario')}
              className={`w-full text-left px-4 py-3 rounded-lg transition ${activeTab === 'calendario' ? 'bg-indigo-600' : 'hover:bg-gray-700'}`}
            >
              <i className="fas fa-calendar mr-2"></i>Calendario
            </button>
            <button
              onClick={() => setActiveTab(' estadisticas')}
              className={`w-full text-left px-4 py-3 rounded-lg transition ${activeTab === 'estadisticas' ? 'bg-indigo-600' : 'hover:bg-gray-700'}`}
            >
              <i className="fas fa-chart-bar mr-2"></i>Estadísticas
            </button>
          </div>

          <div className="mt-8 p-4 bg-gray-700 rounded-lg">
            <h3 className="font-semibold mb-3">Estados</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Nuevos</span>
                <span className="text-green-500">{leadsPorEstado.nuevo}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Contactados</span>
                <span className="text-yellow-500">{leadsPorEstado.contactado}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">En proceso</span>
                <span className="text-blue-500">{leadsPorEstado.en_progreso}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Cerrados</span>
                <span className="text-gray-500">{leadsPorEstado.cerrado}</span>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 p-6">
          {activeTab === 'leads' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Leads ({leads.length})</h2>
                <button onClick={fetchLeads} className="bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                  <i className="fas fa-sync-alt mr-2"></i>Actualizar
                </button>
              </div>

              {loading ? (
                <div className="text-center py-12">
                  <i className="fas fa-spinner fa-spin text-4xl text-indigo-500"></i>
                </div>
              ) : (
                <div className="space-y-3">
                  {leads.map((lead) => (
                    <div
                      key={lead.id}
                      className="bg-gray-800 rounded-lg p-4 hover:bg-gray-750 transition cursor-pointer"
                      onClick={() => setSelectedLead(lead)}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg">{lead.nombre}</h3>
                          <p className="text-gray-400 text-sm">{lead.negocio || 'Sin negocio'}</p>
                          <p className="text-indigo-400 text-sm">
                            <i className="fab fa-whatsapp mr-1"></i>{lead.whatsapp}
                          </p>
                          {lead.email && (
                            <p className="text-gray-500 text-sm">{lead.email}</p>
                          )}
                        </div>
                        <div className="text-right">
                          <span className={`inline-block px-2 py-1 rounded text-xs ${getEstadoColor(lead.estado)} text-white`}>
                            {lead.estado}
                          </span>
                          <p className={`text-xs mt-1 ${getPrioridadColor(lead.prioridad)}`}>
                            {lead.prioridad}
                          </p>
                          <p className="text-gray-500 text-xs mt-2">
                            {format(new Date(lead.fecha_creacion), 'dd/MM/yyyy HH:mm')}
                          </p>
                        </div>
                      </div>
                      {lead.mensaje && (
                        <p className="text-gray-400 text-sm mt-2 border-t border-gray-700 pt-2">
                          "{lead.mensaje}"
                        </p>
                      )}
                      {lead.notas && JSON.parse(lead.notas).length > 0 && (
                        <div className="mt-2 pt-2 border-t border-gray-700">
                          <p className="text-xs text-gray-500 mb-1">Notas:</p>
                          {JSON.parse(lead.notas).map((nota, i) => (
                            <p key={i} className="text-xs text-gray-400">
                              • {nota.texto}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  {leads.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                      <i className="fas fa-inbox text-4xl mb-4"></i>
                      <p>No hay leads aún</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {activeTab === 'calendario' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <button
                  onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                  className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <h2 className="text-2xl font-bold">
                  {format(currentMonth, 'MMMM yyyy', { locale: es })}
                </h2>
                <button
                  onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                  className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>

              <div className="grid grid-cols-7 gap-2 mb-2">
                {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map((day) => (
                  <div key={day} className="text-center font-semibold text-gray-500 py-2">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-2">
                {days.map((day) => {
                  const dayLeads = getLeadsForDay(day);
                  return (
                    <div
                      key={day.toString()}
                      onClick={() => setSelectedDate(day)}
                      className={`min-h-[100px] p-2 rounded-lg cursor-pointer transition ${
                        isToday(day) ? 'bg-indigo-900 border-2 border-indigo-500' :
                        isSameDay(day, selectedDate) ? 'bg-gray-700' : 'bg-gray-800 hover:bg-gray-700'
                      }`}
                    >
                      <div className="font-semibold mb-1">{format(day, 'd')}</div>
                      {dayLeads.length > 0 && (
                        <div className="space-y-1">
                          {dayLeads.slice(0, 3).map((lead) => (
                            <div key={lead.id} className="text-xs bg-green-600 px-1 rounded truncate">
                              {lead.nombre}
                            </div>
                          ))}
                          {dayLeads.length > 3 && (
                            <div className="text-xs text-gray-400">+{dayLeads.length - 3}</div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                <h3 className="font-semibold mb-2">
                  Leads del {format(selectedDate, 'dd MMMM yyyy', { locale: es })}
                </h3>
                {getLeadsForDay(selectedDate).length === 0 ? (
                  <p className="text-gray-500">No hay leads este día</p>
                ) : (
                  <div className="space-y-2">
                    {getLeadsForDay(selectedDate).map((lead) => (
                      <div key={lead.id} className="flex justify-between items-center bg-gray-700 p-2 rounded">
                        <span>{lead.nombre}</span>
                        <span className="text-sm text-indigo-400">{lead.negocio}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'estadisticas' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Estadísticas</h2>
              <div className="grid grid-cols-4 gap-4 mb-8">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-green-500">{leads.length}</div>
                  <div className="text-gray-400">Total Leads</div>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-green-500">{leadsPorEstado.nuevo}</div>
                  <div className="text-gray-400">Nuevos</div>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-blue-500">{leadsPorEstado.en_progreso}</div>
                  <div className="text-gray-400">En Progreso</div>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-green-500">
                    {leads.length > 0 ? Math.round((leadsPorEstado.cerrado / leads.length) * 100) : 0}%
                  </div>
                  <div className="text-gray-400">Tasa de Cierre</div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {selectedLead && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">{selectedLead.nombre}</h3>
              <button onClick={() => setSelectedLead(null)} className="text-gray-400 hover:text-white">
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>

            <div className="space-y-3 mb-4">
              <div>
                <label className="text-gray-500 text-sm">WhatsApp</label>
                <p className="text-indigo-400">{selectedLead.whatsapp}</p>
              </div>
              {selectedLead.email && (
                <div>
                  <label className="text-gray-500 text-sm">Email</label>
                  <p>{selectedLead.email}</p>
                </div>
              )}
              {selectedLead.negocio && (
                <div>
                  <label className="text-gray-500 text-sm">Negocio</label>
                  <p>{selectedLead.negocio}</p>
                </div>
              )}
              {selectedLead.mensaje && (
                <div>
                  <label className="text-gray-500 text-sm">Mensaje</label>
                  <p className="text-gray-300 italic">"{selectedLead.mensaje}"</p>
                </div>
              )}
              <div>
                <label className="text-gray-500 text-sm">Estado</label>
                <p className={`capitalize ${getEstadoColor(selectedLead.estado)}`}>
                  {selectedLead.estado}
                </p>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-4">
              <label className="text-gray-500 text-sm">Cambiar estado</label>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => actualizarEstado(selectedLead.id, 'nuevo')}
                  className="px-3 py-1 bg-green-600 rounded text-sm"
                >
                  Nuevo
                </button>
                <button
                  onClick={() => actualizarEstado(selectedLead.id, 'contactado')}
                  className="px-3 py-1 bg-yellow-600 rounded text-sm"
                >
                  Contactado
                </button>
                <button
                  onClick={() => actualizarEstado(selectedLead.id, 'en_progreso')}
                  className="px-3 py-1 bg-blue-600 rounded text-sm"
                >
                  En Progreso
                </button>
                <button
                  onClick={() => actualizarEstado(selectedLead.id, 'cerrado')}
                  className="px-3 py-1 bg-gray-600 rounded text-sm"
                >
                  Cerrado
                </button>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-4 mt-4">
              <label className="text-gray-500 text-sm">Agregar nota</label>
              <div className="flex gap-2 mt-2">
                <input
                  type="text"
                  value={nota}
                  onChange={(e) => setNota(e.target.value)}
                  placeholder="Escribe una nota..."
                  className="flex-1 bg-gray-700 px-3 py-2 rounded"
                />
                <button
                  onClick={() => agregarNota(selectedLead.id)}
                  className="bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>

            <div className="mt-4">
              <a
                href={`https://wa.me/${selectedLead.whatsapp}?text=Hola%20${selectedLead.nombre}%2C%20te%20contacto%20desde%20EP360`}
                target="_blank"
                className="block text-center bg-green-600 py-3 rounded-lg hover:bg-green-700 transition"
              >
                <i className="fab fa-whatsapp mr-2"></i>Contactar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}