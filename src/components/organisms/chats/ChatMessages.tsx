/* eslint-disable @typescript-eslint/no-explicit-any */
import MessageInput from "../../atoms/inputs/MessageInput";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { MoreHorizontal, File as FileIcon, Trash } from "lucide-react";
import type React from "react";
import type { MessageType, ShowChatType } from "@/types/chat";
import { useGetProfileQuery } from "@/store/services/Profile";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDeleteChatMutation } from "@/store/services/Chats";
import { showSuccessToast } from "@/components/Successfully/DoneToast";
import { showFailedToast } from "@/components/Error&NotFound/FailedToast";
import { ErrorType } from "@/types/errors";

interface Props {
  selectedPersonData: any;
  currentMessages: ShowChatType[];
  handleKeyPress: (e: React.KeyboardEvent) => void;
  newMessage: string | File;
  setNewMessage: (message: string | File) => void;
  handleSendMessage: () => void;
  isLoading?: boolean;
  currentUserId?: number;
  typeMessage?: MessageType;
  setTypeMessage?: (type: MessageType) => void;
}

const ChatMessages = ({
  currentMessages,
  selectedPersonData,
  handleKeyPress,
  newMessage,
  setNewMessage,
  handleSendMessage,
  isLoading = false,
  typeMessage,
  setTypeMessage,
}: Props) => {
  const [DeleteChat] = useDeleteChatMutation();
  const { data } = useGetProfileQuery();
  const myId = data?.data?.id;

  const handleDeleteChat = async () => {
    try {
      await DeleteChat(currentMessages[0]?.chat_id || 0).unwrap();
      showSuccessToast({ title: "تم حذف المحادثة" });
    } catch (error) {
      const err = error as ErrorType;
      showFailedToast({ title: err?.data?.message || "حدث خطأ غير متوقع" });
    }
  };

  const handleDownload = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = url.split("/").pop() || "file";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  /** دالة لعرض محتوى الرسالة بناءً على النوع */
  const renderMessageContent = (message: ShowChatType) => {
    switch (message?.type) {
      case "image":
        return (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={message?.message}
            alt="صورة مرسلة"
            className="rounded-lg max-w-[220px] max-h-[220px] object-cover cursor-pointer hover:opacity-90 transition"
          />
        );
      case "file":
        return (
          <div
            onClick={() => handleDownload(message?.message)}
            className="flex items-center gap-2 text-sm underline hover:text-primary cursor-pointer"
          >
            <FileIcon className="w-4 h-4" />
            تحميل الملف
          </div>
        );
      case "location":
        const [lat, lng] = message?.message?.split(",") || [];
        const mapUrl = `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`;
        return (
          <div className="w-[250px] h-[180px] rounded-lg overflow-hidden border">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        );
      default:
        return <p className="text-sm break-words">{message?.message}</p>;
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-[#F6FEF9] rounded-2xl shadow-lg min-h-[60vh] max-h-[85vh] overflow-y-scroll">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage
              src={selectedPersonData?.image || "/placeholder.svg"}
            />
            <AvatarFallback>
              {selectedPersonData?.name?.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">{selectedPersonData?.name}</h3>
            <p className="text-sm text-gray-500">
              {selectedPersonData?.isOnline ? "متصل الآن" : "غير متصل"}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <DropdownMenu dir="rtl">
            <DropdownMenuTrigger>
              <MoreHorizontal className="w-5 h-5 text-gray-400 cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="px-4">
              <DropdownMenuLabel
                className="flex items-center justify-center gap-2 text-red-500 cursor-pointer"
                onClick={() => handleDeleteChat()}
              >
                حذف
                <Trash className="w-4 h-4 ml-2" />
              </DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Messages */}
      {currentMessages?.length === 0 && (
        <p className="pt-20 flex-1 flex items-center text-center justify-center text-gray-500">
          لا يوجد رسائل <br />
          قم بكتابة رسالتك الأولي
        </p>
      )}

      <div className="flex-1 overflow-y-auto p-4 gap-4 flex flex-col-reverse">
        {currentMessages?.map((message: ShowChatType) => {
          const isMyMessage = message?.user?.id === myId;

          return (
            <div
              key={message?.id}
              className={`flex items-end gap-2 ${
                isMyMessage ? "justify-end" : "justify-start"
              }`}
            >
              {/* Avatar */}
              {!isMyMessage && (
                <Avatar className="w-8 h-8">
                  <AvatarImage
                    src={selectedPersonData?.image || "/placeholder.svg"}
                  />
                  <AvatarFallback>
                    {selectedPersonData?.name?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              )}

              {/* Message Bubble */}
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl shadow-md ${
                  isMyMessage
                    ? "bg-primary text-white rounded-bl-none"
                    : "bg-gray-200 text-gray-700 rounded-br-none"
                }`}
              >
                {renderMessageContent(message)}
                <p className="text-[11px] mt-1 opacity-70 text-right">
                  {new Date(message?.created_at).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>

              {/* My Avatar */}
              {isMyMessage && (
                <Avatar className="w-8 h-8">
                  <AvatarImage src={data?.data?.image || "/placeholder.svg"} />
                  <AvatarFallback>{data?.data?.name?.charAt(0)}</AvatarFallback>
                </Avatar>
              )}
            </div>
          );
        })}
      </div>

      {/* Message Input */}
      <MessageInput
        handleKeyPress={handleKeyPress}
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        handleSendMessage={handleSendMessage}
        isLoading={isLoading}
        typeMessage={typeMessage}
        setTypeMessage={setTypeMessage}
      />
    </div>
  );
};

export default ChatMessages;
