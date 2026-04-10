// src/components/Chatbot.tsx
import { useState } from "react";

type Message = {
  sender: "bot" | "user";
  text: string;
};

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const businessInfo = {
    name: "SuperClean Home Services Inc",
    phone: "(929) 261-0266",
    address: "360 Jericho Tpke, Floral Park, NY 11001",
    hours: "Closed right now. Opens at 10 AM.",
    areas: "Nassau County and nearby areas",
  };

  const getResponse = (text: string) => {
    const msg = text.toLowerCase();

    if (msg.includes("hours") || msg.includes("open") || msg.includes("time")) {
      return `Our hours info: ${businessInfo.hours}`;
    }

    if (
      msg.includes("location") ||
      msg.includes("address") ||
      msg.includes("where") ||
      msg.includes("directions")
    ) {
      return `We are located at ${businessInfo.address}.`;
    }

    if (msg.includes("phone") || msg.includes("call") || msg.includes("number")) {
      return `You can call us at ${businessInfo.phone}.`;
    }

    if (
      msg.includes("service") ||
      msg.includes("services") ||
      msg.includes("area") ||
      msg.includes("areas") ||
      msg.includes("serve")
    ) {
      return `We serve ${businessInfo.areas}.`;
    }

    if (
      msg.includes("review") ||
      msg.includes("reviews") ||
      msg.includes("rating")
    ) {
      return `We currently have 930 Google reviews.`;
    }

    if (
      msg.includes("name") ||
      msg.includes("business") ||
      msg.includes("company")
    ) {
      return `This is ${businessInfo.name}.`;
    }

    return `Please call us at ${businessInfo.phone} for more information.`;
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = { sender: "user", text: input };
    const botMessage: Message = { sender: "bot", text: getResponse(input) };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  const quickReply = (text: string) => {
    const userMessage: Message = { sender: "user", text };
    const botMessage: Message = { sender: "bot", text: getResponse(text) };

    setMessages((prev) => [...prev, userMessage, botMessage]);
  };

  return (
    <>
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Open chat"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "64px",
          height: "64px",
          borderRadius: "9999px",
          border: "none",
          backgroundColor: "#111111",
          color: "#ffffff",
          fontSize: "28px",
          cursor: "pointer",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          zIndex: 9999,
        }}
      >
        💬
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "96px",
            right: "20px",
            width: "340px",
            height: "460px",
            backgroundColor: "#ffffff",
            borderRadius: "18px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.18)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            zIndex: 9999,
            border: "1px solid #e5e7eb",
          }}
        >
          <div
            style={{
              backgroundColor: "#111111",
              color: "#ffffff",
              padding: "14px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ fontWeight: 700, fontSize: "14px" }}>
                SuperClean Assistant
              </div>
              <div style={{ fontSize: "12px", opacity: 0.8 }}>
                Kind and professional support
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                color: "#ffffff",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              ×
            </button>
          </div>

          <div
            style={{
              flex: 1,
              padding: "14px",
              overflowY: "auto",
              backgroundColor: "#f9fafb",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent:
                    msg.sender === "user" ? "flex-end" : "flex-start",
                  marginBottom: "10px",
                }}
              >
                <div
                  style={{
                    maxWidth: "80%",
                    padding: "10px 12px",
                    borderRadius: "14px",
                    backgroundColor: msg.sender === "user" ? "#111111" : "#ffffff",
                    color: msg.sender === "user" ? "#ffffff" : "#111111",
                    border: msg.sender === "user" ? "none" : "1px solid #e5e7eb",
                    fontSize: "14px",
                    lineHeight: 1.4,
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              padding: "10px 12px",
              borderTop: "1px solid #e5e7eb",
              backgroundColor: "#ffffff",
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => quickReply("hours")}
              style={{
                padding: "8px 12px",
                borderRadius: "9999px",
                border: "1px solid #d1d5db",
                backgroundColor: "#ffffff",
                cursor: "pointer",
                fontSize: "13px",
              }}
            >
              Hours
            </button>

            <button
              onClick={() => quickReply("location")}
              style={{
                padding: "8px 12px",
                borderRadius: "9999px",
                border: "1px solid #d1d5db",
                backgroundColor: "#ffffff",
                cursor: "pointer",
                fontSize: "13px",
              }}
            >
              Location
            </button>

            <button
              onClick={() => quickReply("call")}
              style={{
                padding: "8px 12px",
                borderRadius: "9999px",
                border: "1px solid #d1d5db",
                backgroundColor: "#ffffff",
                cursor: "pointer",
                fontSize: "13px",
              }}
            >
              Call
            </button>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px",
              borderTop: "1px solid #e5e7eb",
              backgroundColor: "#ffffff",
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              placeholder="Type a message..."
              style={{
                flex: 1,
                padding: "12px",
                borderRadius: "12px",
                border: "1px solid #d1d5db",
                outline: "none",
                fontSize: "14px",
              }}
            />

            <button
              onClick={sendMessage}
              style={{
                padding: "12px 14px",
                borderRadius: "12px",
                border: "none",
                backgroundColor: "#111111",
                color: "#ffffff",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;