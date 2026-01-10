"use client"

import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Chatbox() {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [step, setStep] = useState<"intro" | "chat">("intro")

  const handleStartChat = () => {
    if (name && phone) {
      setStep("chat")
    }
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-coral hover:bg-coral-dark text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 ${
          isOpen ? "scale-0" : "scale-100"
        }`}
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl transition-all transform origin-bottom-right ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="bg-teal text-white p-4 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium">SS Hospital Support</p>
              <p className="text-xs text-white/80">We typically reply instantly</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {step === "intro" ? (
            <div className="space-y-4">
              <p className="text-charcoal text-sm">
                Hi — how can we help? Book appointments, ask about doctors or emergencies.
              </p>
              <div className="space-y-3">
                <Input
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-xl"
                />
                <Input
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="rounded-xl"
                />
                <Button onClick={handleStartChat} className="w-full bg-teal hover:bg-teal-dark text-white rounded-xl">
                  Start Chat
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="h-48 bg-off-white rounded-xl p-3 overflow-y-auto">
                <div className="bg-teal/10 text-charcoal text-sm p-3 rounded-xl max-w-[80%]">
                  Hello {name}! How can we assist you today?
                </div>
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="rounded-xl"
                />
                <Button size="icon" className="bg-teal hover:bg-teal-dark rounded-xl shrink-0">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
