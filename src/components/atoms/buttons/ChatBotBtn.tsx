"use client";

import AIChatBotDialog from "@/components/organisms/Popups/AIChatBotDialog";
import { BotMessageSquare } from "lucide-react";

const ChatBotBtn = () => {
  return (
    <div className="fixed bottom-16 left-8 md:left-16 z-50">
      <AIChatBotDialog>
        <div className="relative group">
          {/* Animated background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full blur-lg opacity-30 animate-pulse group-hover:opacity-50 transition-opacity duration-300"></div>

          {/* Main button with floating animation */}
          <div className="relative bg-white shadow-lg rounded-full p-3 cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-float border-2 border-emerald-100 hover:border-emerald-300">
            {/* Icon with breathing animation */}
            <div className="animate-breathe">
              <BotMessageSquare
                color="#16c588"
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:rotate-12 md:w-14 md:h-14"
              />
            </div>

            {/* Notification dot */}
            <div className="absolute top-0 right-0 md:-top-1 md:-right-1 w-2 h-2 md:w-4 md:h-4 bg-emerald-500 rounded-full animate-ping"></div>
            <div className="absolute top-0 right-0 md:-top-1 md:-right-1 w-2 h-2 md:w-4 md:h-4 bg-emerald-500 rounded-full"></div>
          </div>

          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-[10px] md:text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            تحتاج مساعدة؟ اتحدث مع عقرقر
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
          </div>
        </div>
      </AIChatBotDialog>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes breathe {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-breathe {
          animation: breathe 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ChatBotBtn;
