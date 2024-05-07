import React from "react";
import animação1 from "../../Imgs/animação1.png";
import animacao2 from "../../Imgs/animacao2.png";
import animacao3 from "../../Imgs/animacao3.png";
import animacao4 from "../../Imgs/animacao4.png";
import front from "../../Imgs/front.png";
import back from "../../Imgs/back.png";
import outros from "../../Imgs/outros.png";
import { GoLightBulb } from "react-icons/go";

function Home() {
  //TELA INICIAL DA PLATAFORMA
  return (
    <div>
      <div className={"flex items-center justify-center"}>
        <div className={"sm:w-11/12 2xl:w-6/12"}>
          <h1
            className={
              "p-4 mb-2 ml-10 text-4xl font-semibold bg-gradient-to-r from-gradiente2 to-gradiente1 inline-block text-transparent bg-clip-text"
            }
          >
            Plataforma online de Feedback
          </h1>
          <p className={"ml-14 text-base 2xl:text-xl"}>
            O Meinung tem por objetivo melhorar o processo do feedback entre os
            aprendizes e instrutores.
          </p>
          <p className={"ml-14 text-base 2xl:text-xl"}>
            Dessa forma, os dados ficam centralizados contribuindo para o
            funcionamento de maneira mais rápida e fácil para todos os
            envolvidos.
          </p>
        </div>
        <div
          className={"flex justify-end  mr-10 sm:w-96 sm:mt-14 sm:mr-2 md:p-8 "}
        >
          <img src={animação1} alt="" />
        </div>
      </div>
      <div className={"flex justify-center"}>
        <div
          className={`w-11/12 h-48 flex items-center justify-center bg-home rounded-b-3xl rounded-l-full rounded-r-full mt-20`}
        >
          <div className={"flex justify-center items-center p-4"}>
            <div className={"flex flex-col items-center m-14"}>
              <div>
                <GoLightBulb fill="white" size={60} />
              </div>
              <p className={"text-white mt-2"}>IDEIA</p>
            </div>

            <p className={"text-base 2xl:text-xl"}>
              A ideia para o projeto surgiu em uma reunião com o Henrique Dona,
              nosso gestor. Além disso, também percebemos que alguns processos
              do feedback poderiam ser automatizados para ser mais rápido.
            </p>
          </div>
        </div>
      </div>
      <div className={"flex justify-center items-center mt-10"}>
        <p
          className={
            "text-2xl font-bold bg-gradient-to-r from-gradiente4 to-gradiente3 inline-block text-transparent bg-clip-text"
          }
        >
          NOSSOS SERVIÇOS
        </p>
      </div>

      <div className={"flex justify-center"}>
        <div className={`w-11/12 h-48 bg-rosa rounded-r-full mt-20`}>
          <div className={"flex items-center justify-around p-4"}>
            <div className={"2xl:flex gap-20 items-center "}>
              <div className={"sm:text-center 2xl:p-8"}>
                <p
                  className={
                    "text-gradiente1 font-semibold 2xl:text-2xl sm:text-xl "
                  }
                >
                  Auto Avaliação
                </p>
              </div>

              <div className={""}>
                <p className={"text-base sm:p-8 sm:h-32 2xl:text-xl 2xl:mt-9"}>
                  Através de uma página é possível realizar toda a auto
                  avaliação necessária no semestre.
                </p>
              </div>
            </div>
            <div className={""}>
              <img
                src={animacao2}
                alt=""
                className={"w-32 sm:w-28 sm:mr-5 xl:w-28 2xl:w-32 "}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={"flex justify-center"}>
        <div className={`w-11/12 h-48  bg-container rounded-l-full mt-20`}>
          <div className={"flex items-center justify-center mt-4"}>
            <p
              className={"text-dashboard font-semibold 2xl:text-2xl sm:text-xl"}
            >
              Rendimento/Dashboard
            </p>
          </div>
          <div className={"flex items-center justify-evenly"}>
            <div className={""}>
              <img
                src={animacao3}
                alt=""
                className={"w-32 sm:w-24 xl:w-28 2xl:w-32"}
              />
            </div>
            <div className={"xl:mr-20"}>
              <p className={"text-base sm:w-96 2xl:text-xl"}>
                Todas as notas se transformam em dados, para que seja gerado o
                rendimento dos aprendizes em formato de gráfico.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={"flex justify-center"}>
        <div className={`w-11/12 h-48  bg-rosa rounded-r-full mt-20`}>
          <div className={"flex items-center justify-around p-4"}>
            <div className={"2xl:flex gap-20 items-center "}>
              <p
                className={
                  "flex 2xl:mr-64 text-gradiente1 font-semibold 2xl:text-2xl sm:p-5 sm:pb-5 sm:text-center sm:justify-center sm:text-xl"
                }
              >
                Busca de dados
              </p>

              <div className={"flex mr-14"}>
                <p className={"text-base 2xl:text-xl sm:pl-10"}>
                  A plataforma recolhe as notas do SENAI de todos os aprendizes.
                </p>
              </div>
            </div>
            <div className={""}>
              <img
                src={animacao4}
                alt=""
                className={"w-16 sm:w-12 sm:mr-8 pt-6 xl:w-14 2xl:w-16"}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={"flex justify-center items-center mt-10"}>
        <p
          className={
            "text-2xl font-bold bg-gradient-to-r from-gradiente6 to-gradiente5 inline-block text-transparent bg-clip-text"
          }
        >
          FERRAMENTAS
        </p>
      </div>

      <div className={"flex justify-center mt-4"}>
        <div
          className={`w-11/12 h-48  bg-gray-100 flex items-center justify-around `}
        >
          <div className={"w-10/12 flex items-center justify-between "}>
            <div className={"flex flex-col w-32 mt-4 items-center "}>
              <img src={front} alt="" className={"w-28"} />
              <p className={"text-blue-800 font-semibold "}>FrontEnd</p>
            </div>
            <div className={"flex items-center 2xl:w-8/12 sm:ml-16 "}>
              <p className={"text-base sm:text-center "}>
                Utilizamos React JS junto com o Vite para a construção da
                platarfoma e conexão com as APIs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={"flex justify-center mt-4"}>
        <div
          className={`w-11/12 h-48  bg-gray-100 flex items-center justify-around`}
        >
          <div className={"w-10/12 flex justify-between "}>
            <div className={"flex flex-col mt-4 w-32 items-center "}>
              <img src={back} alt="" className={"w-28"} />
              <p className={"text-blue-800 font-semibold"}>BackEnd</p>
            </div>
            <div className={"flex items-center w-8/12 "}>
              <p className={"text-base"}>
                Utilizamos Django para a construção das APIs e o banco de dados
                Sqlite <br />
                para o armazenamento dos dados, que já vem por padrão com o
                Django; <br /> A extração dos dados do PDF foi realizado através
                da biblioteca do Python;
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={"flex justify-center mt-4"}>
        <div
          className={`w-11/12 h-48  bg-gray-100 flex items-center justify-around`}
        >
          <div className={"w-10/12 flex justify-between "}>
            <div className={"flex flex-col mt-4 w-32 items-center "}>
              <img src={outros} alt="" className={"w-28"} />
              <p className={"text-blue-800 font-semibold"}>Outros</p>
            </div>
            <div className={"flex items-center w-8/12"}>
              <p className={"text-base"}>
                Para os gráficos utilizamos o Charts.js integrado com o banco de
                dados; <br />
                Para o protótipo e logo utilizamos o Figma;
                <br /> Para as apresentações e video pitch utlizamos o Canva;
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={"flex justify-center"}>
        <div
          className={
            "w-11/12 h-14 mt-7 mb-6 flex items-center justify-center bg-gray-800"
          }
        >
          <p className={"text-white"}>
            Desenvolvido por: Allana Vieira, Carlos Barbosa, Eduarda Oliveira e
            Julia Guiraldeli
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
