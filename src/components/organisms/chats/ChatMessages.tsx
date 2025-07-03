/* eslint-disable @typescript-eslint/no-explicit-any */
import MessageInput from "@/components/atoms/inputs/MessageInput";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreHorizontal, Star } from "lucide-react";
import React from "react";

interface Props {
  selectedPersonData: any;
  currentMessages: any;
  handleKeyPress: any;
  newMessage: any;
  setNewMessage: any;
  handleSendMessage: any;
}

const ChatMessages = ({
  currentMessages,
  selectedPersonData,
  handleKeyPress,
  newMessage,
  setNewMessage,
  handleSendMessage,
}: Props) => {
  return (
    <div className="flex-1 flex flex-col bg-[#F6FEF9] max-h-[85vh] overflow-y-scroll">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage
              src={selectedPersonData?.avatar || "/placeholder.svg"}
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
          <Star className="w-5 h-5 text-gray-400 cursor-pointer" />
          <MoreHorizontal className="w-5 h-5 text-gray-400 cursor-pointer" />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {currentMessages.map((message: any) => (
          <div
            key={message.id}
            className={`flex ${
              message.senderId === "me" ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.senderId === "me"
                  ? "bg-primary-light text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              <p className="text-sm">{message.content}</p>
              <p className="text-xs mt-1 opacity-70">{message.timestamp}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <MessageInput
        handleKeyPress={handleKeyPress}
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        handleSendMessage={handleSendMessage}
      />
    </div>
  );
};

export default ChatMessages;
