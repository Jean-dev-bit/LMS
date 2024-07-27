
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faqs() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="dark:text-white">
          C&apos;est quoi LearnSync360 ?
        </AccordionTrigger>
        <AccordionContent className="dark:text-white">
              LearnSync360 est la plateforme de formation en ligne la plus sûre et recommandée par des milliers d’internautes.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="dark:text-white">
          Quand/Comment se déroulera la formation ?
        </AccordionTrigger>
        <AccordionContent className="dark:text-white">
              La formation est immédiatement disponible en format vidéo et vous y aurez automatiquement accès après avoir rejoint. 
        </AccordionContent>
      </AccordionItem>
     <AccordionItem value="item-3">
        <AccordionTrigger className="dark:text-white">
         Quels sont les moyens de paiements acceptés ?
        </AccordionTrigger>
        <AccordionContent className="dark:text-white">
              Mobile money, carte bancaire et Paypal
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="dark:text-white">
         Comment obtenir un remboursement ?
        </AccordionTrigger>
        <AccordionContent className="dark:text-white">
              Si vous changez d’avis après achat de la formation, il suffit de nous contacter par WhatsApp (+229 53564497) ou mail (info@learnsync360.com) pour obtenir un remboursement.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="dark:text-white">
         Puis-je suivre selon ma disponibilité ?
        </AccordionTrigger>
        <AccordionContent className="dark:text-white">
             Oui vous pourrez suivre selon votre disponibilité même dans 02 ans. 
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger className="dark:text-white">
          Un certificat sera-t-il délivré pour chaque cours suivi ?
        </AccordionTrigger>
        <AccordionContent className="dark:text-white">
          Oui — chaque étudiant qui termine un cours recevra un certificat
          d&apos;achèvement attestant de sa compétence. Nous encourageons les
          étudiants à les inclure sur leurs profils LinkedIn et dans leurs
          candidatures !
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger className="dark:text-white">
          Puis-je poser des questions sur un cours ou obtenir de l&apos;aide si
          mon code ne fonctionne pas ?
        </AccordionTrigger>
        <AccordionContent className="dark:text-white">
          Oui, vous pouvez déposer vos problèmes rencontrés, en cliquant sur la
          fonctionnalité Problèmes et vous remplissez le formulaire et vous
          envoyez. Nous essaierons toujours de répondre à votre demande et de
          résoudre tout problème que vous pourriez rencontrer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-8">
        <AccordionTrigger className="dark:text-white">
          Puis-je télécharger des vidéos de cours ?
        </AccordionTrigger>
        <AccordionContent className="dark:text-white">
          Pour des raisons de sécurité, les vidéos de cours ne peuvent pas être
          téléchargées. Cependant, vous avez un accès à vie à chaque cours
          acheté et pouvez les regarder à tout moment et en tout lieu avec votre
          compte.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-9">
        <AccordionTrigger className="dark:text-white">
          Puis-je obtenir le code source de chaque cours de Programmation
          informatique ?
        </AccordionTrigger>
        <AccordionContent className="dark:text-white">
          Oui - Vous obtiendrez le code source de tous les cours lorsque vous
          regarderez la vidéo du cours.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
