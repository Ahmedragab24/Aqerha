/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import type React from "react";
import { useState } from "react";
import PropertyForChatCard from "../molecules/cards/PropertyForChatCard";
import ChatMessages from "../organisms/chats/ChatMessages";
import ContactsUsersMessage from "../organisms/chats/ContactsUsersMessage";

interface Props {
  mockMessages: any;
  mockPeople: any;
  mockProperty: any;
}

export default function PropertyChatApp({
  mockMessages,
  mockPeople,
  mockProperty,
}: Props) {
  const [selectedPerson, setSelectedPerson] = useState<string>("1");
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const currentMessages = mockMessages[selectedPerson] || [];
  const selectedPersonData = mockPeople.find(
    (p: any) => p.id === selectedPerson
  );

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, this would send the message to the backend
      console.log("Sending message:", newMessage);
      setNewMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between">
      {/* Contacts Section */}
      <ContactsUsersMessage
        selectedPerson={selectedPerson}
        setSelectedPerson={setSelectedPerson}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        mockPeople={mockPeople}
      />

      {/* Chat Section */}
      <ChatMessages
        currentMessages={currentMessages}
        selectedPersonData={selectedPersonData}
        handleKeyPress={handleKeyPress}
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        handleSendMessage={handleSendMessage}
      />

      {/* Property Card Section */}
      <PropertyForChatCard mockProperty={mockProperty} />
    </div>
  );
}
