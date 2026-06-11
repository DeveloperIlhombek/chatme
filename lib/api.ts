import type {
	GroupCreate,
	GroupDetailResponse,
	GroupMemberResponse,
	GroupResponse,
	GroupUpdate,
	InviteRequest,
	LoginRequest,
	MessageOut,
	RegisterRequest,
	TokenResponse,
	UserResponse,
	UserUpdate,
} from '@/types'
import axios from 'axios'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

export const api = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json',
		'ngrok-skip-browser-warning': 'true',
	},
})

// Token interceptor — har bir so'rovga Authorization header qo'shadi
api.interceptors.request.use(config => {
	if (typeof window !== 'undefined') {
		const token = localStorage.getItem('access_token')
		if (token) {
			config.headers.Authorization = `Bearer ${token}`
		}
	}
	return config
})

// ─── Auth ────────────────────────────────────────────────────────────────────
export const authApi = {
	register: (data: RegisterRequest) =>
		api.post<UserResponse>('/auth/register', data).then(r => r.data),
	login: (data: LoginRequest) =>
		api.post<TokenResponse>('/auth/login', data).then(r => r.data),
}

// ─── Users ───────────────────────────────────────────────────────────────────
export const usersApi = {
	// O'z profilimni olish
	getMe: () => api.get<UserResponse>('/users/me').then(r => r.data),
	// Profilni yangilash (bio, avatar URL)
	updateMe: (data: UserUpdate) =>
		api.put<UserResponse>('/users/me', data).then(r => r.data),
	// Username bo'yicha qidirish
	search: (q: string) =>
		api.get<UserResponse[]>('/users/search', { params: { q } }).then(r => r.data),
	// Username bo'yicha boshqa foydalanuvchini ko'rish
	getByUsername: (username: string) =>
		api.get<UserResponse>(`/users/${username}`).then(r => r.data),
}

// ─── Groups ──────────────────────────────────────────────────────────────────
export const groupsApi = {
	// A'zo bo'lgan barcha guruhlarim
	getMyGroups: () => api.get<GroupResponse[]>('/groups').then(r => r.data),
	// Yangi guruh yaratish
	create: (data: GroupCreate) =>
		api.post<GroupResponse>('/groups', data).then(r => r.data),
	// Guruh ma'lumotlari (egasi, a'zolar soni bilan)
	get: (groupId: number) =>
		api.get<GroupDetailResponse>(`/groups/${groupId}`).then(r => r.data),
	// Guruhni yangilash (faqat admin)
	update: (groupId: number, data: GroupUpdate) =>
		api.put<GroupResponse>(`/groups/${groupId}`, data).then(r => r.data),
	// Guruhni o'chirish (faqat egasi)
	delete: (groupId: number) =>
		api.delete<MessageOut>(`/groups/${groupId}`).then(r => r.data),
	// Guruh a'zolari ro'yxati
	getMembers: (groupId: number) =>
		api.get<GroupMemberResponse[]>(`/groups/${groupId}/members`).then(r => r.data),
	// Guruhdan chiqish
	leave: (groupId: number) =>
		api.post<MessageOut>(`/groups/${groupId}/leave`).then(r => r.data),
	// A'zoni guruhdan chiqarish (faqat admin)
	kickMember: (groupId: number, userId: number) =>
		api.delete<MessageOut>(`/groups/${groupId}/kick/${userId}`).then(r => r.data),
	// Username bo'yicha taklif yuborish
	invite: (groupId: number, data: InviteRequest) =>
		api.post<MessageOut>(`/groups/${groupId}/invite`, data).then(r => r.data),
}

// ─── Messages ─────────────────────────────────────────────────────────────────
// TODO (5-qadam): messagesApi shu yerda yoziladi
// Kerakli endpointlar:
//   GET  /groups/{group_id}/messages?limit=50&after={lastId}
//   POST /groups/{group_id}/messages        { content: string }
//   DELETE /groups/{group_id}/messages/{message_id}

// ─── Invitations ──────────────────────────────────────────────────────────────
// TODO (7-qadam): invitationsApi shu yerda yoziladi
// Kerakli endpointlar:
//   GET  /invitations
//   POST /invitations/{id}/accept
//   POST /invitations/{id}/reject
