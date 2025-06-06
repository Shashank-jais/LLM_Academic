import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const ChatArea = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { sender: "user", text: "What is brain tumor segmentation?" },
    {
      sender: "bot",
      text: "Brain tumor segmentation is the process of identifying and labeling tumor regions in brain MRI scans using AI.",
    },
  ]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const newMessage = { sender: "user", text: inputValue.trim() };
      setMessages((prev) => [...prev, newMessage]);
      console.log("Message sent:", inputValue);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: `You said: "${inputValue.trim()}"` },
        ]);
      }, 800);

      setInputValue("");
    }
  };
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-white text-gray-700">
      <div className="flex justify-between items-center p-4 border-b border-gray-700 relative">
        <span className="font-semibold text-lg text-blue-600">TrueYou</span>

        <div className="flex items-center gap-2 p-2">
          <div
            onClick={() => setOpen((prev) => !prev)}
            className="flex justify-center items-center gap-1 hover:cursor-pointer hover:scale-105 transition"
          >
            <img
              src="/public/image.png"
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>

          {open && (
            <div className="absolute right-4 top-16 w-60 bg-gray-800 shadow-2xl rounded-xl z-50 border border-gray-600">
              <ul className="flex flex-col">
                <Link
                  to="/profile"
                  className="px-6 py-3 hover:bg-gray-700 text-white text-base rounded-t-xl transition-all duration-200 flex items-center gap-2"
                >
                  <CgProfile />
                  Profile
                </Link>
                <Link
                  to="/settings"
                  className="px-6 py-3 hover:bg-gray-700 text-white text-base transition-all duration-200 flex items-center gap-2"
                >
                  <IoMdSettings />
                  Settings
                </Link>
                <button
                  onClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("user");
                    localStorage.removeItem("loginTime");
                    navigate("/auth/login");
                  }}
                  className="px-6 py-3 hover:bg-red-600 text-white text-base rounded-b-xl transition-all duration-200 flex items-center gap-2"
                >
                  <CiLogout />
                  Logout
                </button>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto flex flex-col items-center justify-start p-6">
        <div className="w-full max-w-3xl space-y-4">
          <div className="text-center mt-2">
            <h1 className="text-2xl md:text-3xl font-semibold mb-6">
              What can I help with?
            </h1>
          </div>

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-3 rounded-lg max-w-[75%] text-sm ${
                  msg.sender === "user"
                    ? "bg-yellow-200 text-gray-700 rounded-br-none"
                    : "bg-gray-700 text-gray-100 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 border-t border-gray-700">
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="flex items-center bg-yellow-100 rounded-lg p-2">
            {/* <button
              type="button"
              className="flex items-center justify-center h-10 w-10 text-xl bg-yellow-600 hover:bg-yellow-700 rounded-lg text-white"
            >
              <FaPlus size={15} /> */}
            </button>

            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Ask anything..."
              className="flex-1 mx-2 bg-transparent text-gray-700 outline-none text-sm placeholder-gray-400"
            />

            <button
              type="submit"
              disabled={!inputValue.trim()}
              className={`flex items-center justify-center h-10 w-10 rounded-lg ${
                inputValue.trim()
                  ? "bg-green-600 hover:bg-green-500 text-white"
                  : "bg-yellow-600 text-white cursor-not-allowed"
              }`}
            >
              <FiSend />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatArea;
