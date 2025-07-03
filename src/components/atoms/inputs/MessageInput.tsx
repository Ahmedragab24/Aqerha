/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlignLeft, Bold, Italic, Link, List, Paperclip } from "lucide-react";
import Image from "next/image";

interface Props {
  handleKeyPress: any;
  newMessage: any;
  setNewMessage: any;
  handleSendMessage: any;
}

const MessageInput = ({
  handleKeyPress,
  setNewMessage,
  newMessage,
  handleSendMessage,
}: Props) => {
  return (
    <div className="p-4 border-t border-gray-200">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex gap-2">
          <Paperclip className="w-4 h-4 text-gray-500 cursor-pointer" />
          <Link className="w-4 h-4 text-gray-500 cursor-pointer" />
          <Bold className="w-4 h-4 text-gray-500 cursor-pointer" />
          <Italic className="w-4 h-4 text-gray-500 cursor-pointer" />
          <List className="w-4 h-4 text-gray-500 cursor-pointer" />
          <AlignLeft className="w-4 h-4 text-gray-500 cursor-pointer" />
        </div>
      </div>
      <div className="flex gap-2">
        <Input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="اكتب رسالتك..."
          className="flex-1"
        />
        <Button onClick={handleSendMessage} className="!h-11">
          أرسل
          <Image
            src="/Icons/SendMessage.svg"
            alt="send message"
            width={20}
            height={20}
          />
        </Button>
      </div>
    </div>
  );
};

export default MessageInput;
