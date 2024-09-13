"use client"
import { useState } from "react";
import {
  Send,
  ChevronDown,
  Reply,
  Smile,
  Star,
  Trash,
  Share2,
  CircleUser,
} from "lucide-react";

export default function Discussion() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Alice",
      avatar: "",
      content: "Hey, has anyone started the new course module?",
      timestamp: "10:30 AM",
    },
    {
      id: 2,
      sender: "Bob",
      avatar: "",
      content: "Yes, I just finished it. It's pretty interesting!",
      timestamp: "10:32 AM",
    },
    {
      id: 3,
      sender: "Charlie",
      avatar: "",
      content: "I need some help with the third assignment.",
      timestamp: "10:35 AM",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState<number | null>(null);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const newMsg = {
        id: messages.length + 1,
        sender: "You",
        avatar: "", // Add the avatar for "You", or leave empty to use CircleUser
        content: newMessage,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, newMsg]);
      setNewMessage("");
    }
  };

  const toggleDropdown = (id: number) => {
    setDropdownVisible(dropdownVisible === id ? null : id);
  };

  return (
    <div className="flex flex-col h-full p-6 pt-3 mt-8">
      <h1 className="text-xl mb-6 text-gray-600">Discussions</h1>

      <div className="flex-1 overflow-y-auto space-y-4  rounded-lg">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`relative flex ${
              message.sender === "You" ? "justify-end" : "justify-start"
            }`}
          >
            <div className="flex items-start space-x-2">
              {message.sender !== "You" && (
                <>
                  {message.avatar ? (
                    <Image
                    
                      src={message.avatar}
                      alt={`${message.sender}'s avatar`}
                      className="w-8 h-8 rounded-full"
                    />
                  ) : (
                    <CircleUser className="w-8 h-8 text-gray-400" />
                  )}
                </>
              )}
              <div
                className={`relative p-4 rounded-lg shadow-md max-w-xs ${
                  message.sender === "You"
                    ? "bg-lms-green text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-semibold mb-1">
                      {message.sender}
                    </p>
                    <p>{message.content}</p>
                  </div>
                  <ChevronDown
                    className="w-5 h-5 cursor-pointer text-gray-500 ml-2"
                    onClick={() => toggleDropdown(message.id)}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2 text-right">
                  {message.timestamp}
                </p>

                {dropdownVisible === message.id && (
                  <div className="absolute -top-1 -right-[52%] mt-2 w-40 bg-white rounded-lg shadow-lg z-10">
                    <ul className="py-2">
                      <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
                        <Reply className="w-4 h-4 mr-2" /> Reply
                      </li>
                      <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
                        <Smile className="w-4 h-4 mr-2" /> React
                      </li>
                      <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
                        <Share2 className="w-4 h-4 mr-2" /> Forward
                      </li>
                      <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
                        <Star className="w-4 h-4 mr-2" /> Star
                      </li>
                      <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
                        <Trash className="w-4 h-4 mr-2" /> Delete
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center">
        <input
          type="text"
          className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lms-green min-h-"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button
          onClick={handleSendMessage}
          className="ml-3 p-3 bg-lms-green text-white rounded-lg shadow hover:bg-green-600"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
