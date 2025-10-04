import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send } from "lucide-react";

type Message = {
  id: number;
  author: string;
  content: string;
  timestamp: string;
  isCurrentUser: boolean;
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      author: "Sarah Johnson",
      content: "Hey everyone! Excited about the upcoming AI workshop!",
      timestamp: "10:30 AM",
      isCurrentUser: false,
    },
    {
      id: 2,
      author: "You",
      content: "Me too! What topics will be covered?",
      timestamp: "10:32 AM",
      isCurrentUser: true,
    },
    {
      id: 3,
      author: "Mike Chen",
      content: "I heard it will cover neural networks and deep learning basics.",
      timestamp: "10:35 AM",
      isCurrentUser: false,
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message: Message = {
        id: messages.length + 1,
        author: "You",
        content: newMessage,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isCurrentUser: true,
      };
      setMessages([...messages, message]);
      setNewMessage("");
      inputRef.current?.focus();
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-5xl">
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Discussion Chat</h1>
        <p className="text-muted-foreground">
          Connect with society members in real-time
        </p>
      </header>

      <Card className="h-[600px] flex flex-col">
        <CardHeader className="border-b">
          <CardTitle>General Discussion</CardTitle>
        </CardHeader>

        <CardContent className="flex-1 overflow-y-auto p-4">
          <div
            role="log"
            aria-live="polite"
            aria-label="Chat messages"
            className="space-y-4"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  message.isCurrentUser ? "flex-row-reverse" : ""
                }`}
              >
                <Avatar className="flex-shrink-0">
                  <AvatarFallback>
                    {message.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div
                  className={`flex flex-col ${
                    message.isCurrentUser ? "items-end" : "items-start"
                  } max-w-[70%]`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold">
                      {message.author}
                    </span>
                    <time
                      className="text-xs text-muted-foreground"
                      dateTime={message.timestamp}
                    >
                      {message.timestamp}
                    </time>
                  </div>
                  <div
                    className={`rounded-lg p-3 ${
                      message.isCurrentUser
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <p>{message.content}</p>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </CardContent>

        <div className="border-t p-4">
          <form
            onSubmit={handleSendMessage}
            className="flex gap-2"
            aria-label="Send message"
          >
            <Input
              ref={inputRef}
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              aria-label="Message input"
              className="flex-1"
            />
            <Button
              type="submit"
              size="icon"
              disabled={!newMessage.trim()}
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
}
