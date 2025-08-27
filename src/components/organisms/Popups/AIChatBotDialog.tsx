/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  MessageCircle,
  Send,
  Mic,
  Copy,
  Trash2,
  ThumbsUp,
  ThumbsDown,
  Download,
  Clock,
  Bot,
  User,
} from "lucide-react";
import { generateAIResponse } from "@/lib/firebase";
import { toast } from "sonner";

interface Props {
  children: React.ReactNode;
}

interface Message {
  id: string;
  role: "user" | "bot";
  text: string;
  timestamp: Date;
  feedback?: "positive" | "negative";
}

const faqList = [
  "ما هي متطلبات نشر الإعلان العقاري؟",
  "كيف أعلن عن عقار إذا كنت المالك أو الوكيل؟",
  "الأسئلة المتكررة بخصوص ترخيص الإعلانات",
  "كل ما تحتاج معرفته لإضافة إعلانك العقاري",
  "ما هي أسعار العقارات في المنطقة؟",
  "كيف أتواصل مع الوكلاء العقاريين؟",
];

const EnhancedAIChatbot = ({ children }: Props) => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateMessageId = () => Math.random().toString(36).substr(2, 9);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: generateMessageId(),
      role: "user",
      text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    setIsTyping(true);

    try {
      // Simulate typing delay for better UX
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const botReply = await generateAIResponse(text);
      const botMessage: Message = {
        id: generateMessageId(),
        role: "bot",
        text: botReply,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.log(error);

      setMessages((prev) => [
        ...prev,
        {
          id: generateMessageId(),
          role: "bot",
          text: "عذراً، حدث خطأ. حاول مرة أخرى.",
          timestamp: new Date(),
        },
      ]);
      toast.error("خطأ في الاتصال");
    } finally {
      setLoading(false);
      setIsTyping(false);
    }
  };

  const handleSend = () => sendMessage(input);

  const copyMessage = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("تم النسخ");
  };

  const clearChat = () => {
    setMessages([]);
    toast.success("تم مسح المحادثة");
  };

  const provideFeedback = (
    messageId: string,
    feedback: "positive" | "negative"
  ) => {
    setMessages((prev) =>
      prev.map((msg) => (msg.id === messageId ? { ...msg, feedback } : msg))
    );
    toast.success("شكراً لك");
  };

  const exportChat = () => {
    const chatText = messages
      .map(
        (msg) =>
          `[${msg.timestamp.toLocaleTimeString("ar-SA")}] ${
            msg.role === "user" ? "أنت" : "المساعد"
          }: ${msg.text}`
      )
      .join("\n\n");

    const blob = new Blob([chatText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `محادثة-${new Date().toLocaleDateString("ar-SA")}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const startVoiceInput = () => {
    if ("webkitSpeechRecognition" in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.lang = "ar-SA";
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setIsListening(false);
      };

      recognition.onerror = () => {
        setIsListening(false);
        toast.error("خطأ في التعرف على الصوت");
      };

      recognition.start();
    } else {
      toast.error("التعرف على الصوت غير مدعوم في هذا المتصفح");
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("ar-SA", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className="max-w-2xl mx-auto flex flex-col h-[85vh] p-0 overflow-hidden"
        dir="rtl"
      >
        {/* Header */}
        <DialogHeader className="pt-6 px-6 pb-4 border-b bg-card shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                <Bot className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="min-w-0">
                <DialogTitle className="text-xl font-semibold text-foreground">
                  المساعد العقاري الذكي
                </DialogTitle>
                <p className="text-sm text-muted-foreground">
                  مساعدك الشخصي في عالم العقارات
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Button
                variant="ghost"
                size="sm"
                onClick={exportChat}
                disabled={messages.length === 0}
                className="h-8 w-8 p-0"
              >
                <Download className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearChat}
                disabled={messages.length === 0}
                className="h-8 w-8 p-0"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        <ScrollArea className="flex-1 overflow-y-auto px-4 py-2">
          <div className="space-y-4 min-h-full">
            {messages.length === 0 && (
              <div className="text-center py-8">
                <MessageCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground mb-4">
                  مرحباً! أنا مساعدك العقاري الذكي
                </p>
                <p className="text-sm text-muted-foreground">
                  ابدأ بطرح سؤالك أو اختر من الاقتراحات أدناه
                </p>
              </div>
            )}

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.role === "bot" && (
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-primary-foreground" />
                  </div>
                )}

                <div
                  className={`max-w-[75%] ${
                    msg.role === "user" ? "order-first" : ""
                  }`}
                >
                  <div
                    className={`px-4 py-3 rounded-2xl shadow-sm ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-sm"
                        : "bg-card text-card-foreground border rounded-bl-sm"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                  </div>

                  <div className="flex items-center gap-2 mt-2 px-2">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {formatTime(msg.timestamp)}
                    </div>

                    {msg.role === "bot" && (
                      <div className="flex items-center gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 w-6 p-0"
                          onClick={() => copyMessage(msg.text)}
                        >
                          <Copy className="w-3 h-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className={`h-6 w-6 p-0 ${
                            msg.feedback === "positive" ? "text-green-600" : ""
                          }`}
                          onClick={() => provideFeedback(msg.id, "positive")}
                        >
                          <ThumbsUp className="w-3 h-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className={`h-6 w-6 p-0 ${
                            msg.feedback === "negative" ? "text-red-600" : ""
                          }`}
                          onClick={() => provideFeedback(msg.id, "negative")}
                        >
                          <ThumbsDown className="w-3 h-3" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>

                {msg.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <User className="w-4 h-4 text-secondary-foreground" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="bg-card border rounded-2xl rounded-bl-sm px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} className="h-px" />
          </div>
        </ScrollArea>

        {/* FAQ Suggestions */}
        {messages.length === 0 && (
          <div className="px-4 pb-4 shrink-0">
            <Separator className="mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {faqList.slice(0, 4).map((faq, i) => (
                <Button
                  key={i}
                  variant="outline"
                  size="sm"
                  className="!text-xs font-normal h-auto py-2 px-3 !text-right justify-start bg-transparent hover:bg-accent"
                  onClick={() => sendMessage(faq)}
                >
                  {faq}
                </Button>
              ))}
            </div>
          </div>
        )}

        <div className="p-4 border-t bg-background shrink-0">
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && !e.shiftKey && handleSend()
                }
                placeholder="اكتب رسالتك هنا..."
                className="pr-12 text-right"
                disabled={loading}
                dir="rtl"
              />
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                onClick={startVoiceInput}
                disabled={loading || isListening}
              >
                <Mic
                  className={`w-4 h-4 ${
                    isListening ? "text-red-500 animate-pulse" : ""
                  }`}
                />
              </Button>
            </div>
            <Button
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className="px-6 shrink-0"
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </Button>
          </div>

          {isListening && (
            <div className="mt-2 text-center">
              <Badge variant="secondary" className="animate-pulse">
                🎤 جاري الاستماع...
              </Badge>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EnhancedAIChatbot;
