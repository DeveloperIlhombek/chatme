import { create } from 'zustand'
import { groupsApi } from '@/lib/api'
import type { GroupResponse } from '@/types'

// ─────────────────────────────────────────────────────────────────────────────
// ChatState — hozircha faqat guruhlar
// TODO (5-qadam): messages, lastMessageId, polling funksiyalar qo'shiladi
// ─────────────────────────────────────────────────────────────────────────────
interface ChatState {
  // Guruhlar
  groups: GroupResponse[]
  isLoadingGroups: boolean
  fetchGroups: () => Promise<void>
  addGroup: (group: GroupResponse) => void
  removeGroup: (groupId: number) => void

  // TODO: Xabarlar uchun state (5-qadam)
  // messages: Record<number, MessageResponse[]>
  // lastMessageId: Record<number, number>
  // isLoadingMessages: boolean
  // isSending: boolean
  // activeGroupId: number | null

  // TODO: Xabarlar uchun funksiyalar (5-qadam)
  // setActiveGroup: (id: number | null) => void
  // fetchMessages: (groupId: number) => Promise<void>
  // pollMessages: (groupId: number) => Promise<void>
  // sendMessage: (groupId: number, content: string) => Promise<void>
  // deleteMessage: (groupId: number, messageId: number) => Promise<void>
}

export const useChatStore = create<ChatState>(set => ({
  groups: [],
  isLoadingGroups: false,

  fetchGroups: async () => {
    set({ isLoadingGroups: true })
    try {
      const groups = await groupsApi.getMyGroups()
      set({ groups, isLoadingGroups: false })
    } catch {
      set({ isLoadingGroups: false })
    }
  },

  addGroup: group =>
    set(state => ({ groups: [group, ...state.groups] })),

  removeGroup: groupId =>
    set(state => ({ groups: state.groups.filter(g => g.id !== groupId) })),
}))
