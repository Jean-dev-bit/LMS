import { Button } from "@/components/ui/button";
import Link from "next/link";
const MessagePage = () => {
  return (
    <div className="space-y-4 p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-sky-700">
        &lt; Problèmes / &gt;
      </h1>
      <div className="flex justify-center items-center">
        <p className="text-justify text-gray-700 text-sm dark:text-white">
          Vous rencontrez des difficultés avec un cours ou avez un code qui ne
          fonctionne pas comme prévu ? <br /> C&apos;est ici que vous pouvez
          poser toutes vos questions ! Que ce soit pour obtenir des explications
          <br />
          supplémentaires sur un concept ou pour résoudre des problèmes
          techniques, cette section
          <br /> est dédiée à vous fournir le soutien nécessaire pour réussir.
          N&apos;hésitez pas à partager vos préoccupations
          <br /> et à bénéficier de l&apos;aide de notre communauté et de nos
          experts.
        </p>
      </div>
      <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-12">
        <Link href="/message/create">
          <Button variant="success1">Poser un problème</Button>
        </Link>
      </div>
    </div>
  );
};

export default MessagePage;
