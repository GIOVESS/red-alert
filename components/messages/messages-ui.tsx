"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Send, Phone, Video, Info, Paperclip, Image, File, MapPin } from "lucide-react"

interface Contact {
  id: string
  name: string
  role: string
  avatar: string
  status: "online" | "offline" | "away" | "busy"
  lastMessage?: string
  lastMessageTime?: string
  unread?: number
}

interface Message {
  id: string
  senderId: string
  text: string
  timestamp: string
  attachments?: {
    type: "image" | "file" | "location"
    name: string
    url?: string
  }[]
  status: "sent" | "delivered" | "read"
}

export function MessagesUI() {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: "1",
      name: "Sarah Johnson",
      role: "Administrator",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "online",
      lastMessage: "I've dispatched the emergency team to the location",
      lastMessageTime: "10:30 AM",
      unread: 2,
    },
    {
      id: "2",
      name: "Michael Smith",
      role: "Field Coordinator",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "busy",
      lastMessage: "We need more supplies at the evacuation center",
      lastMessageTime: "Yesterday",
    },
    {
      id: "3",
      name: "Emergency Response Team",
      role: "Group",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "online",
      lastMessage: "Team Alpha has reached the location",
      lastMessageTime: "Yesterday",
      unread: 5,
    },
    {
      id: "4",
      name: "John Doe",
      role: "Volunteer",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "away",
      lastMessage: "I'll be available for the evening shift",
      lastMessageTime: "2 days ago",
    },
    {
      id: "5",
      name: "Emily Wilson",
      role: "Medical Coordinator",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "offline",
      lastMessage: "Medical supplies have been restocked",
      lastMessageTime: "3 days ago",
    },
  ])

  const [selectedContact, setSelectedContact] = useState<Contact | null>(contacts[0])
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "m1",
      senderId: "1",
      text: "I've dispatched the emergency team to the location. They should arrive in about 15 minutes.",
      timestamp: "10:30 AM",
      status: "read",
    },
    {
      id: "m2",
      senderId: "current-user",
      text: "Great, thank you for the quick response. I'll prepare the site for their arrival.",
      timestamp: "10:32 AM",
      status: "read",
    },
    {
      id: "m3",
      senderId: "1",
      text: "Please ensure the area is secured and civilians are at a safe distance.",
      timestamp: "10:35 AM",
      status: "read",
    },
    {
      id: "m4",
      senderId: "current-user",
      text: "Already done. I've established a perimeter and local police are assisting with crowd control.",
      timestamp: "10:37 AM",
      status: "read",
    },
    {
      id: "m5",
      senderId: "1",
      text: "Here's the location of the nearest medical facility:",
      timestamp: "10:40 AM",
      attachments: [
        {
          type: "location",
          name: "Nairobi General Hospital",
        },
      ],
      status: "delivered",
    },
    {
      id: "m6",
      senderId: "1",
      text: "I'm sending you the latest situation report as well.",
      timestamp: "10:42 AM",
      attachments: [
        {
          type: "file",
          name: "Situation_Report_June15.pdf",
        },
      ],
      status: "sent",
    },
  ])

  const [newMessage, setNewMessage] = useState("")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500"
      case "busy":
        return "bg-red-500"
      case "away":
        return "bg-yellow-500"
      case "offline":
        return "bg-gray-500"
      default:
        return "bg-gray-500"
    }
  }

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return

    const newMsg: Message = {
      id: `m${messages.length + 1}`,
      senderId: "current-user",
      text: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      status: "sent",
    }

    setMessages([...messages, newMsg])
    setNewMessage("")
  }

  return (
    <div className="grid h-[calc(100vh-12rem)] grid-cols-1 md:grid-cols-3 gap-0 rounded-lg border overflow-hidden">
      {/* Contacts List */}
      <div className="md:col-span-1 border-r">
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search contacts..." className="pl-8" />
            </div>
          </div>
          <div className="flex-1 overflow-auto">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-muted/50 ${selectedContact?.id === contact.id ? "bg-muted" : ""}`}
                onClick={() => setSelectedContact(contact)}
              >
                <div className="relative">
                  <Avatar>
                    <AvatarImage src={contact.avatar} alt={contact.name} />
                    <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span
                    className={`absolute bottom-0 right-0 h-3 w-3 rounded-full ${getStatusColor(contact.status)} ring-2 ring-background`}
                  ></span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-medium truncate">{contact.name}</p>
                    <span className="text-xs text-muted-foreground">{contact.lastMessageTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground truncate">{contact.lastMessage}</p>
                    {contact.unread && <Badge className="ml-2 bg-primary">{contact.unread}</Badge>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="md:col-span-2 flex flex-col h-full">
        {selectedContact ? (
          <>
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={selectedContact.avatar} alt={selectedContact.name} />
                  <AvatarFallback>{selectedContact.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{selectedContact.name}</p>
                  <div className="flex items-center">
                    <span className={`h-2 w-2 rounded-full ${getStatusColor(selectedContact.status)} mr-2`}></span>
                    <p className="text-xs text-muted-foreground">{selectedContact.status}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Video className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Info className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.senderId === "current-user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[70%] ${message.senderId === "current-user" ? "bg-primary text-primary-foreground" : "bg-muted"} rounded-lg p-3`}
                  >
                    <p>{message.text}</p>

                    {message.attachments &&
                      message.attachments.map((attachment, index) => (
                        <div key={index} className="mt-2 flex items-center gap-2 rounded-md bg-background/50 p-2">
                          {attachment.type === "image" && <Image className="h-4 w-4" />}
                          {attachment.type === "file" && <File className="h-4 w-4" />}
                          {attachment.type === "location" && <MapPin className="h-4 w-4" />}
                          <span className="text-sm">{attachment.name}</span>
                        </div>
                      ))}

                    <div className="mt-1 flex items-center justify-end gap-1">
                      <span className="text-xs opacity-70">{message.timestamp}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Input
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSendMessage()
                    }
                  }}
                />
                <Button size="icon" onClick={handleSendMessage}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              <p className="text-muted-foreground">Select a contact to start messaging</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

