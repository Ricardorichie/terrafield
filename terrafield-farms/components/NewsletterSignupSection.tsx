const NewsletterSignupSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto max-w-2xl px-4 text-center">
        <h2 className="mb-8 text-3xl font-bold text-green-800">Get Fresh Updates from the Field</h2>
        <form className="flex flex-col items-center gap-4 sm:flex-row sm:gap-2">
          <input
            type="email"
            placeholder="your.email@example.com"
            className="w-full flex-grow rounded-md border border-gray-300 px-4 py-3 focus:border-green-500 focus:ring-green-500 sm:w-auto"
            required
          />
          <button
            type="submit"
            className="w-full rounded-md bg-green-600 px-6 py-3 text-white hover:bg-green-700 sm:w-auto"
          >
            Subscribe
          </button>
        </form>
        <div className="mt-6 flex items-center justify-center">
          <input type="checkbox" id="interestCheckbox" className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500" />
          <label htmlFor="interestCheckbox" className="ml-2 text-sm text-gray-700">
            I'm interested in (select one): Local Sales / Exports / Investment opportunities.
          </label>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignupSection;
