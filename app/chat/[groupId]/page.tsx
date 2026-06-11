// TODO (6-qadam): Bu sahifada guruh chat oynasi ko'rsatiladi.
//
// Tugallangan ko'rinish:
//
// import { ChatArea } from "@/components/chat/ChatArea"
//
// interface Props {
//   params: Promise<{ groupId: string }>
// }
//
// export default async function GroupChatPage({ params }: Props) {
//   const { groupId } = await params
//   return <ChatArea groupId={Number(groupId)} />
// }
//
// ChatArea komponentini yaratish uchun 6-qadam ga qarang.

interface Props {
  params: Promise<{ groupId: string }>
}

export default async function GroupChatPage({ params }: Props) {
  const { groupId } = await params
  return (
    <div className="flex-1 flex items-center justify-center p-8 text-center">
      <div>
        <p className="text-muted-foreground">Guruh #{groupId}</p>
        <p className="text-sm text-muted-foreground mt-1">
          TODO: ChatArea komponenti (6-qadam)
        </p>
      </div>
    </div>
  )
}
