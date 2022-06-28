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
      <div className="md:w-full md:max-w-[1100px] md:flex md:items-center md:justify-between md:mt-10 md:mx-auto">
        <div className="mt-[40px] md:mt-0 flex flex-col items-center md:items-start md:max-w-[640px]">
          <Icon />
          <h1 className="text-center text-4xl mt-8 md:text-left md:text-[2.5rem] leading-tight">Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong></h1>
          <p className="text-center md:text-left leading-relaxed mt-4 text-gray-200">Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.</p>
        </div>
        <div className="mt-8 md:mt-0 p-8 bg-gray-700 border border-gray-500 rounded" >
          <strong className="md:text-2xl mb-6 block" >Inscreva-se gratuitamente</strong>
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
