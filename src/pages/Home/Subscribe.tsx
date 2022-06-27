import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "../../components";
import { useCreateSubscriberMutation } from "../../graphql/generated";
import mockupImg from '../../assets/code-mockup.png';


export function Subscribe(): JSX.Element {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();


  async function handleSubscription(event: FormEvent) {
    event.preventDefault();

    if (!name || !email) return;

    await createSubscriber({
      variables: {
        name,
        email,
      }
    });

    navigate("/event");


  }


  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto md:mt-10">
        <div className="max-w-[640px]">
          <Icon />
          <h1 className="mt-8 text-[2.5rem] leading-tight">Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong></h1>
          <p className="leading-relaxed mt-4 text-gray-200">Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.</p>
        </div>
        <div className="p-8 bg-gray-700 border border-gray-500 rounded" >
          <strong className="text-2xl mb-6 block" >Inscreva-se gratuitamente</strong>
          <form action="" className="flex flex-col gap-2 w-full" onSubmit={handleSubscription}>
            <input
              type="text"
              className="bg-gray-900 rounded px-5 h-14"
              placeholder="Seu Nome Completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className="bg-gray-900 rounded px-5 h-14"
              placeholder="Seu E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >Grantir minha vaga</button>
          </form>
        </div>
      </div>
      <img src={mockupImg} className="mt-10 md:mt-1" alt="mockup" />
    </div>
  )
}
