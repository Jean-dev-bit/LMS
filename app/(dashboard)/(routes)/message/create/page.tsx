import { Button } from "@/components/ui/button.tsx";
import { ProblemsDescriptionForm } from "./_components/problems-description-form.tsx";
import { ProblemsForm } from "./_components/problems-title-form.tsx";


const CreatePage = () => {
  return (
    <div className="space-y-4 p-6">
      <h3 className="text-3xl font-bold mb-8 text-center text-sky-700">
        Une section pour aider les
        utilisateurs à poser leurs questions.
      </h3>
      <p className="text-center text-gray-700 text-2xl dark:text-white">
        Questions fréquemment posées
      </p>
      <div className="font-bold justify-center items-center ml-96 p-4 text-3xl border-2 border-sky-700 w-3/5 rounded-sm">
        Formulaire
        <ProblemsForm  />
        <ProblemsDescriptionForm />
        <div className="flex justify-end mt-4">
        <Button variant="success1">Envoyer</Button>
      </div>
      </div>
    </div>
  );
};

export default CreatePage;
