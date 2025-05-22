const Result = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start bg-white pt-12 md:pt-24 pb-12 font-poppins px-5 sm:px-8 lg:px-16">
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 max-w-md md:max-w-3xl w-full mx-auto">
        <div className="flex flex-col items-center mb-10">
          <img
            src="/public/logo.jpg"
            alt="TrueYou logo"
            className="h-48 sm:h-56 md:h-64 object-contain"
          />
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-600 mb-10 tracking-wide text-center">
          Final Results
        </h1>

        <div className="space-y-8 mb-12">
          <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-300 hover:shadow-lg transition-shadow duration-300 cursor-default">
            <p className="text-gray-900 text-lg sm:text-xl font-semibold">
              Your current subjects:{" "}
              <span className="font-bold text-yellow-600">Science, Math</span>
            </p>
          </div>

          <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-300 hover:shadow-lg transition-shadow duration-300 cursor-default">
            <p className="text-gray-900 text-lg sm:text-xl font-semibold">
              You are naturally inclined to pursue this career:{" "}
              <span className="font-bold text-yellow-600">
                Research Scientist
              </span>
            </p>
          </div>

          <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-300 hover:shadow-lg transition-shadow duration-300 cursor-default">
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
              While Science isn't a barrier, you may consider re-evaluating your
              optional subjects or integrating skill-building in
              Humanities-related areas to realign with your aspiration.
            </p>
          </div>
        </div>

        <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-center">
          If you need any further assistance, feel free to talk to our{" "}
          <span className="font-semibold text-yellow-600">career expert!</span>
        </p>
      </div>
    </div>
  );
};

export default Result;
