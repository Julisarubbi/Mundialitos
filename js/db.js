// js/db.js
import { SUPABASE_URL, SUPABASE_ANON_KEY } from './config.js';

const headers = {
  'apikey': SUPABASE_ANON_KEY,
  'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
  'Content-Type': 'application/json',
  'Prefer': 'return=representation'
};

export const DB = {
  async getJugadores() {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/jugadores?select=*&order=nombre.asc`, { headers });
    if (!res.ok) throw new Error('Error al cargar jugadores');
    return await res.json();
  },

  async crearJugador(username, nombre) {
    const cleanUser = username.trim().toLowerCase().replace(/^@/, '');
    const res = await fetch(`${SUPABASE_URL}/rest/v1/jugadores`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ username: `@${cleanUser}`, nombre: nombre.trim() })
    });
    if (!res.ok) throw new Error('Error al registrar jugador (puede que el @usuario ya exista)');
    return await res.json();
  },

  async getPartidos() {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/partidos?select=*&order=created_at.desc`, { headers });
    if (!res.ok) throw new Error('Error al cargar partidos');
    return await res.json();
  },

  async registrarPartido(jugador1_id, jugador2_id, goles1, goles2) {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/partidos`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        jugador1_id,
        jugador2_id,
        goles1: parseInt(goles1, 10),
        goles2: parseInt(goles2, 10)
      })
    });
    if (!res.ok) throw new Error('Error al registrar el resultado');
    return await res.json();
  }
};