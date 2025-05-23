import { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    title: "Question 1",
    prompt:
      "Which subjects do you feel confident in without needing much help?",
    name: "subject",
    options: [
      "Science",
      "History, Political Science, Geography and all",
      "Math",
      "Accounts, Economics and all",
    ],
  },
  {
    title: "Question 2",
    prompt:
      "What kind of academic tasks do you enjoy or are good at naturally?",
    name: "task",
    options: [
      "Conducting experiments, analyzing data to learn more of Science",
      "Reading about events, laws, and news of Polity and Current affairs",
      "Solving math problems and puzzles",
      "Working on business ideas",
    ],
  },
  {
    title: "Question 3",
    prompt: "How do you prefer to spend your free time?",
    name: "hobby",
    options: [
      "Playing sports",
      "Listening to motivational talks",
      "Learning about tech, math, history, current affairs",
      "Reading about religion",
    ],
  },
  {
    title: "Question 4",
    prompt: "What excites you?",
    name: "excitement",
    options: [
      "Thinking of healthcare",
      "Innovating on a public forum and gain spotlight",
    ],
  },
];

const Questionnaire = () => {
  const [formData, setFormData] = useState({
    subject: "",
    task: "",
    hobby: "",
    excitement: "",
  });

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center py-10 px-4 sm:px-8 font-poppins">
      <div className="mb-8 flex flex-col items-center">
        <img
          src="/logo.jpg"
          alt="TrueYou Careers"
          className="h-[18rem] sm:h-[20rem] mb-2"
        />
      </div>

      <div className="w-full max-w-3xl space-y-6">
        {questions.map(({ title, prompt, options, name }) => (
          <QuestionCard
            key={name}
            title={title}
            prompt={prompt}
            options={options}
            selected={formData[name]}
            onSelect={(value) => handleChange(name, value)}
          />
        ))}
        <button
          className="bg-yellow-500 hover:bg-yellow-600 p-3 rounded-full text-white font-bold text-base transition-transform hover:scale-105 w-full"
          onClick={() => {
            const isFormComplete = Object.values(formData).every(
              (value) => value !== ""
            );
            if (isFormComplete) {
              navigate(`/`);
            } else {
              alert("Please answer all questions before proceeding.");
            }
          }}
        >
          Let's get started!
        </button>
      </div>
    </div>
  );
};

const QuestionCard = ({ title, prompt, options, selected, onSelect }) => (
  <div className="rounded-2xl border border-yellow-100 bg-yellow-100 p-5 shadow">
    <h2 className="text-lg font-semibold text-blue-800 mb-2">{title}</h2>
    <p className="text-gray-800 font-medium mb-4">{prompt}</p>
    <div className="flex flex-wrap gap-3">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onSelect(option)}
          className={`px-4 py-2 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 ${
            selected === option
              ? "bg-blue-600 text-white"
              : "border border-blue-500 text-blue-500 hover:scale-105 hover:border-blue-600 hover:text-blue-600"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  </div>
);

export default Questionnaire;
