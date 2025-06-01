import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Message {
  id: string;
  type: "user" | "ai";
  content: string;
  timestamp: Date;
}

const AIAssistant: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "ai",
      content:
        "Привет! Я ваш AI-помощник. Готов помочь с творческими проектами, анализом экрана и пошаговыми инструкциями.",
      timestamp: new Date(),
    },
  ]);

  const handleVoiceToggle = () => {
    setIsListening(!isListening);
  };

  const aiSuggestions = [
    "Анализ композиции",
    "Цветовая палитра",
    "Оптимизация UX",
    "Советы по анимации",
  ];

  return (
    <Card className="h-full bg-gradient-to-b from-purple-900/20 to-purple-800/10 border-purple-500/30">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between text-white">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
              <Icon name="Brain" size={16} className="text-white" />
            </div>
            <span className="text-lg">AI-Помощник</span>
          </div>
          <div className="flex items-center space-x-1">
            <div
              className={`w-2 h-2 rounded-full ${isListening ? "bg-green-400 animate-pulse" : "bg-gray-500"}`}
            />
            <span className="text-xs text-gray-400">
              {isListening ? "Слушаю..." : "Готов"}
            </span>
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col h-[calc(100%-80px)]">
        {/* Messages */}
        <div className="flex-1 space-y-3 mb-4 overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.type === "user"
                    ? "bg-purple-600 text-white"
                    : "bg-gray-700 text-gray-100"
                }`}
              >
                <p className="text-sm">{message.content}</p>
                <span className="text-xs opacity-70">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Suggestions */}
        <div className="mb-4">
          <p className="text-xs text-gray-400 mb-2">Быстрые команды:</p>
          <div className="grid grid-cols-2 gap-2">
            {aiSuggestions.map((suggestion, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="text-xs bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                {suggestion}
              </Button>
            ))}
          </div>
        </div>

        {/* Voice Controls */}
        <div className="flex items-center space-x-2">
          <Button
            variant={isListening ? "destructive" : "default"}
            onClick={handleVoiceToggle}
            className={
              isListening
                ? "bg-red-600 hover:bg-red-700"
                : "bg-purple-600 hover:bg-purple-700"
            }
          >
            <Icon name={isListening ? "MicOff" : "Mic"} size={16} />
            {isListening ? "Стоп" : "Говорить"}
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-gray-600 text-gray-300"
          >
            <Icon name="Type" size={16} />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-gray-600 text-gray-300"
          >
            <Icon name="Camera" size={16} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIAssistant;
