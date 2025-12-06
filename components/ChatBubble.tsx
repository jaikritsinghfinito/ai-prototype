type ChatBubbleProps = {
  sender: "user" | "ai";
  text: string;
  isDark?: boolean;
};

export default function ChatBubble({ sender, text, isDark = false }: ChatBubbleProps) {
  const isUser = sender === "user";

  const common = "max-w-[70%] px-5 py-3 text-base leading-relaxed";

  const userClasses = isDark
    ? "bg-gray-100 text-gray-900 rounded-3xl rounded-br-md shadow-md"
    : "bg-gray-900 text-white rounded-3xl rounded-br-md shadow-md";

  const aiClasses = isDark
    ? "bg-transparent text-gray-100"
    : "bg-transparent text-gray-900";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div className={`${common} ${isUser ? userClasses : aiClasses}`}>
        {text}
      </div>
    </div>
  );
}
