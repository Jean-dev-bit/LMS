import { Faqs } from "@/components/faqs.tsx";

const FaqsPage = () => {
  return (
    <div className="space-y-4 p-6 ">
      <h1 className="text-4xl font-bold mb-8 text-center text-sky-700">
        Foire aux questions
      </h1>
      <p className="text-center text-gray-700 text-2xl dark:text-white">
        Questions fréquemment posées
      </p>
      <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
        <Faqs />
      </div>
    </div>
  );
};

export default FaqsPage;
