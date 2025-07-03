/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import React from "react";

interface Props {
  selectedPerson: any;
  setSelectedPerson: any;
  searchQuery: any;
  setSearchQuery: any;
  mockPeople: any;
}

const ContactsUsersMessage = ({
  selectedPerson,
  searchQuery,
  setSearchQuery,
  setSelectedPerson,
  mockPeople,
}: Props) => {
  return (
    <div className="w-80 border-l border-gray-200 max-h-[85vh] overflow-y-scroll">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <Button size="sm">
            <Plus className="w-4 h-4" />
          </Button>
          <div className="flex-1 mx-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contacts List */}
      <div className="overflow-y-auto">
        {mockPeople.map((person: any) => (
          <div
            key={person.id}
            onClick={() => setSelectedPerson(person.id)}
            className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
              selectedPerson === person.id ? "bg-blue-50" : ""
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="relative">
                <Avatar>
                  <AvatarImage src={person.avatar || "/placeholder.svg"} />
                  <AvatarFallback>{person.name.charAt(0)}</AvatarFallback>
                </Avatar>
                {person.isOnline && (
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-sm truncate">
                    {person.name}
                  </h4>
                  <span className="text-xs text-gray-500">
                    {person.timestamp}
                  </span>
                </div>
                <p className="text-sm text-gray-600 truncate">
                  {person.lastMessage}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-gray-400">
                    مرحبا! أريد أن أستفسر عن العقار
                  </span>
                  {person.unreadCount && (
                    <Badge variant="destructive" className="text-xs">
                      {person.unreadCount}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactsUsersMessage;
