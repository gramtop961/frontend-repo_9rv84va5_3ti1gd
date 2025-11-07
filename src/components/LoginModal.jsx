import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, Phone, User } from 'lucide-react';

export default function LoginModal({ open, onClose }) {
  const [mode, setMode] = useState('login'); // 'login' | 'register'
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 grid place-items-center bg-blue-950/20 backdrop-blur-sm p-4"
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="w-full max-w-md rounded-2xl border border-blue-100 bg-white/90 shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between p-4 border-b border-blue-100 bg-gradient-to-br from-blue-50 to-white">
              <div>
                <div className="text-lg font-bold text-blue-900">{mode === 'login' ? 'Masuk' : 'Daftar'}</div>
                <div className="text-xs text-blue-900/70">Akses fitur simpan favorit dan histori</div>
              </div>
              <button onClick={onClose} className="p-2 rounded-lg hover:bg-blue-50">
                <X size={18} className="text-blue-900" />
              </button>
            </div>

            <div className="p-5 space-y-3">
              {mode === 'register' && (
                <div className="relative">
                  <User size={16} className="absolute left-3 top-3 text-blue-900/60" />
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Nama Lengkap" className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-blue-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                </div>
              )}
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-3 text-blue-900/60" />
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-blue-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-300" />
              </div>
              {mode === 'register' && (
                <div className="relative">
                  <Phone size={16} className="absolute left-3 top-3 text-blue-900/60" />
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="No. Telepon" className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-blue-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                </div>
              )}
              <div className="relative">
                <Lock size={16} className="absolute left-3 top-3 text-blue-900/60" />
                <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Kata Sandi" className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-blue-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-300" />
              </div>

              <button className="w-full mt-2 py-2.5 rounded-xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/30 hover:bg-blue-700">{mode === 'login' ? 'Masuk' : 'Daftar'}</button>

              <div className="text-center text-sm text-blue-900/70">
                {mode === 'login' ? (
                  <span>
                    Belum punya akun?{' '}
                    <button onClick={() => setMode('register')} className="text-blue-700 font-medium hover:underline">Daftar</button>
                  </span>
                ) : (
                  <span>
                    Sudah punya akun?{' '}
                    <button onClick={() => setMode('login')} className="text-blue-700 font-medium hover:underline">Masuk</button>
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
