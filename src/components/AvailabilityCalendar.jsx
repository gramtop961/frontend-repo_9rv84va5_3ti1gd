import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays } from 'lucide-react';

// Helper untuk menghasilkan kalender bulan tertentu (mulai dari Senin)
function generateMonth(year, month) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();

  const weeks = [];
  let currentWeek = [];

  // Tambahkan placeholder sebelum tanggal 1 agar mulai Senin
  const startWeekday = (firstDay.getDay() + 6) % 7; // 0 = Senin
  for (let i = 0; i < startWeekday; i++) currentWeek.push(null);

  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(year, month, d);
    const weekday = (date.getDay() + 6) % 7; // 0=Senin
    currentWeek.push(date);
    if (weekday === 6 || d === daysInMonth) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }

  return weeks;
}

// Dummy data: rentang tanggal yang dipesan di bulan November 2025
const dummyBookedRanges = [
  { start: '2025-11-01', end: '2025-11-10' },
  { start: '2025-11-15', end: '2025-11-20' },
  { start: '2025-11-25', end: '2025-11-30' },
];

function isBooked(date, ranges) {
  const y = date.getFullYear();
  const m = (date.getMonth() + 1).toString().padStart(2, '0');
  const d = date.getDate().toString().padStart(2, '0');
  const key = `${y}-${m}-${d}`;
  return ranges.some(r => key >= r.start && key <= r.end);
}

export default function AvailabilityCalendar() {
  const year = 2025;
  const month = 10; // 0-11; 10 = November

  const weeks = useMemo(() => generateMonth(year, month), [year, month]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-blue-100/80 bg-white/70 backdrop-blur overflow-hidden shadow-[0_10px_40px_-20px_rgba(30,64,175,0.25)]"
    >
      <div className="px-4 py-3 border-b border-blue-100 flex items-center justify-between bg-gradient-to-br from-blue-50 to-white">
        <div className="flex items-center gap-2 text-blue-800 font-semibold"><CalendarDays size={18}/> November {year}</div>
        <div className="text-xs text-blue-900/70">Data contoh (dummy)</div>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-7 text-center text-xs md:text-sm font-medium text-blue-700">
          {['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'].map(h => (
            <div key={h} className="py-2">{h}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {weeks.map((week, wi) => (
            week.map((date, di) => {
              if (!date) return <div key={`empty-${wi}-${di}`} className="h-10 md:h-12" />;
              const booked = isBooked(date, dummyBookedRanges);
              return (
                <div
                  key={date.toISOString()}
                  className={`h-10 md:h-12 rounded-lg flex items-center justify-center text-sm border transition-colors ${
                    booked
                      ? 'bg-blue-600 text-white border-blue-600 shadow-inner'
                      : 'bg-white text-blue-900 border-blue-100 hover:bg-blue-50'
                  }`}
                  title={booked ? 'Sudah dipesan' : 'Tersedia'}
                >
                  {date.getDate()}
                </div>
              );
            })
          ))}
        </div>
        <div className="mt-4 flex items-center gap-3 text-sm">
          <span className="h-3 w-3 rounded bg-blue-600 border border-blue-600 inline-block" />
          <span className="text-blue-900/80">Sudah dipesan</span>
        </div>
      </div>
    </motion.div>
  );
}
