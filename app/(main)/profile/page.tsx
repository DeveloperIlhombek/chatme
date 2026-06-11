// TODO (2-qadam): Profil sahifasini yozing.
//
// Bu sahifada:
//   - Foydalanuvchi ma'lumotlari (username, avatar, bio, qo'shilgan sana)
//   - Bio va avatar URL ni tahrirlash formasi
//
// Kerakli API (allaqachon api.ts da yozilgan):
//   usersApi.getMe()      — o'z profilimni olish
//   usersApi.updateMe()   — profilni yangilash
//
// Kerakli shadcn komponentlar (allaqachon o'rnatilgan):
//   Card, CardContent, CardHeader, CardTitle, CardDescription
//   Input, Label, Textarea, Button, Alert, AlertDescription
//
// Qo'llanmaning 2-qadamiga qarang.

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-xl font-semibold mb-2">Profil</h1>
        <p className="text-sm text-muted-foreground">
          TODO: Profil sahifasi (2-qadam)
        </p>
      </div>
    </div>
  )
}
