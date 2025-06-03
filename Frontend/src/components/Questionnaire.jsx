import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  senior_secondary_questions,
  tenth_grade_questions,
  graduate_questions,
} from "../assets/Questions";

const Questionnaire = () => {
  const [questions, setQuestions] = useState([]);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const education_level = JSON.parse(
      sessionStorage.getItem("education_level")
    );
    let selectedQuestions = [];
    if (education_level.education_level === "9th or 10th") {
      selectedQuestions = tenth_grade_questions;
    } else if (education_level.education_level === "11th or 12th") {
      selectedQuestions = senior_secondary_questions;
    } else {
      selectedQuestions = graduate_questions;
    }
    setQuestions(selectedQuestions);

    setFormData((prev) => {
      const initData = {};
      selectedQuestions.forEach((q) => {
        initData[q.name] = "";
      });
      return { ...prev, ...initData };
    });
  }, []);

  const [user_id, setUserId] = useState(null);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserId(parsedUser.user_id);
    }
  }, []);

  useEffect(() => {
    if (user_id) {
      setFormData((prev) => ({ ...prev, user_id }));
    }
  }, [user_id]);

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
          onClick={async () => {
            const isFormComplete = Object.keys(formData)
              .filter((key) => key !== "user_id")
              .every((key) => formData[key] !== "");

            if (isFormComplete) {
              try {
                const { user_id, ...answers } = formData;

                const response = await fetch(
                  "http://localhost:8000/profile/questionnaire",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      user_id,
                      answers,
                    }),
                  }
                );

                if (response.ok) {
                  sessionStorage.clear();
                  navigate(`/auth/login`);
                } else {
                  alert("Something went wrong submitting your answers.");
                }
              } catch (error) {
                console.error("Submission failed", error);
                alert("An error occurred.");
              }
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
      {options && options.length > 0 ? (
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
      ) : (
        <textarea
          value={selected || ""}
          onChange={(e) => onSelect(e.target.value)}
          rows={4}
          placeholder="Please type your answer here..."
          className="w-full p-3 rounded-lg border border-blue-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
        />
      )}
    </div>
  </div>
);

export default Questionnaire;
