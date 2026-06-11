// ⚠️ Bu fayl ishlaMАYDI — Next.js uni e'tiborsiz qoldiradi.
//
// SABAB: Bu faylda `middleware` nomli funksiya eksport qilinmagan.
// Next.js faqat quyidagi shaklni qabul qiladi:
//
//   export function middleware(request: NextRequest) { ... }
//
// HAQIQIY middleware kodi proxy.ts faylida yozilgan,
// lekin u ham 2 ta sababga ko'ra ishlamaydi:
//   1. Fayl nomi proxy.ts (middleware.ts bo'lishi kerak)
//   2. Eksport nomi `proxy` (middleware bo'lishi kerak)
//
// VAZIFA (1-qadam):
//   - proxy.ts faylini o'chiring
//   - Shu faylga (middleware.ts) proxy.ts dagi kodni ko'chiring
//   - Funksiya nomini `proxy` → `middleware` ga o'zgartiring
