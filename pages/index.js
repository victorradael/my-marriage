import Head from "next/head";
import { useState } from "react";
import { MdScreenRotation } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const date = new Date();
  const marryDate = new Date("September 10, 2021 00:00:00");
  var count = ((marryDate - date) / 1000 / 60 / 60 / 24).toFixed(0);

  const urlParent = "carolevictor.vercel.app";
  const urlLocal = "localhost";

  const openWhatsappChat = () => {
    window.open(
      "http://wa.me/5522998956544?text=Olá, gostaria de presentear o casal, como posso fazer isso?",
      "_system",
      "location=yes"
    );
  };

  return (
    <div className="container">
      <Head>
        <title>Carol & Victor</title>
        <link rel="icon" href="/favicon.ico" />

        <link
          href="https://fonts.googleapis.com/css2?family=Parisienne&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main>
        <h1 className="title">Carol & Victor </h1>
        {!modalOpen ? (
          <iframe
            src={`https://player.twitch.tv/?channel=astronautvr&parent=${urlParent}&output=embed`}
            scrolling="no"
          ></iframe>
        ) : (
          <div className="modal">
            Presentear o casal é uma das tradições mais antigas quando falamos
            de casamento, e conosco não iria ser diferente... Pelo menos nem
            tanto...
            <br /> Não faremos, como de costume, uma lista com utensílios
            domésticos. Nós decidimos criar uma "poupança do casal" pois estamos
            planejando viajar assim que a situação mundial melhorar e também
            para podermos escolher onde melhor aplicar o dinheiro e de que
            maneira. <br /> Sendo assim, você pode contribuir com nossa poupança
            da maneira que desejar ! Temos algumas opções para você: <br />
            1) Chave Pix: <br />
            CPF: 12619341728 <br />
            Dados: Carolina M B Legg (Noiva) <br />
            2) Transferências bancárias Opções:
            <br />
            Banco do Brasil, Itaú, Bradesco, Santander, Nubank e Inter. <br />
            Caso deseje fazer transferência bancaria para um dos bancos citados
            acima, entre em contato pelo WhatsApp ou ligue para o telefone:{" "}
            <br />
            (22)9-9895-6544
          </div>
        )}

        {!modalOpen && (
          <div className="icon">
            <MdScreenRotation size="8rem" />
            <p>Gire o aparelho</p>
          </div>
        )}

        <div className="bottom">
          {count == 0 ? (
            <>
              <h1 className="footer space">Chegou o Dia!</h1>
              <p>às 16:30 h</p>
            </>
          ) : (
            <h1 className="footer space">Faltam {count} Dias</h1>
          )}

          {!modalOpen ? (
            <div
              className="contactCard whatsIcon"
              href="/#"
              // onClick={() => openWhatsappChat()}
              onClick={() => setModalOpen(true)}
              target="blank"
            >
              <p className="contact">Gostaria de nos presentear?</p>
              <p className="contact">Clique aqui!</p>
            </div>
          ) : (
            <div
              className="contactCard whatsIcon"
              href="/#"
              onClick={() => setModalOpen(false)}
              target="blank"
            >
              <p className="contact">Voltar</p>
            </div>
          )}
        </div>
        {modalOpen && (
          <div className="whatsIconButton" onClick={() => openWhatsappChat()}>
            <FaWhatsapp size="2rem" color="#fff" />
          </div>
        )}
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          overflow: hidden;
          background: url("https://www.teahub.io/photos/full/247-2474382_abstract-nature-wallpaper-imagem-de-fazenda-papel-de.jpg") -20rem;
        }

        iframe {
          height: 70vh;
          width: 80vw;
        }

        .contact {
          font-size: 1.3rem;
        }

        .modal {
          display: flex;
          flex-direction: column;
          width: 100vw;
          height: 80vh;
          font-family: "Roboto", sans-serif !important;
          font-weight: bold;
          color: #fff;
          padding: 2rem;
          text-align: justify;
          font-size: 1.3rem;
          line-height: 1.9rem;

          background: rgba(23, 22, 22, 0.35);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          backdrop-filter: blur(9px);
          -webkit-backdrop-filter: blur(9px);
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.18);
        }

        .bottom {
          margin: 1rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          box-sizing: border-box;
        }

        .contactCard {
          cursor: pointer;
          box-sizing: border-box;
          display: flex;
          margin-left: 2rem;
          flex-direction: column;
          padding: 1rem;
          align-items: center;
          justify-content: center;

          background: rgba(23, 22, 22, 0.35);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          backdrop-filter: blur(9px);
          -webkit-backdrop-filter: blur(9px);
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.18);
        }

        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          font-family: "Parisienne", cursive;
          color: #fff;
          text-align: center;
        }

        .footer {
          margin: 0;
          line-height: 1.15;
          font-size: 3rem;
          font-family: "Parisienne", cursive;
          color: #fff;
          text-align: center;
        }

        .whatsIconButton {
          position: absolute;
          bottom: 10rem;
          right: 1rem;
          cursor: pointer;
        }

        p {
          margin: 0;
          line-height: 1.15;
          font-size: 2rem;
          font-family: "Parisienne", cursive;
          color: #fff;
          text-align: center;
          font-weight: bold;
        }

        .space {
          padding: 1rem 0 0 0;
          box-sizing: border-box;
        }

        .icon {
          color: #fff;
          display: none;
          flex: 1;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        .whatsIcon {
          color: #fff;
        }

        @media (max-width: 375px) {
          .title {
            font-size: 2rem;
          }

          .footer {
            font-size: 1.6rem;
          }

          iframe {
            display: none;
          }

          .icon {
            display: flex;
          }

          .modal {
            font-size: 0.7rem;
            line-height: 1.3rem;
          }
        }

        @media (max-width: 414px) {
          .title {
            font-size: 2.3rem;
          }

          .footer {
            font-size: 1.8rem;
          }

          iframe {
            display: none;
          }

          .icon {
            display: flex;
          }

          .modal {
            font-size: 0.8rem;
            line-height: 1.3rem;
          }
        }

        @media (max-width: 684px) {
          .title {
            font-size: 2.6rem;
            padding-top: 1rem;
          }

          .footer {
            font-size: 2rem;
          }

          iframe {
            height: 70vh;
            width: 80vw;
          }

          .modal {
            font-size: 0.7rem;
            line-height: 1.3rem;
            padding: 1rem;
          }
        }

        @media (max-width: 768px) {
          .title {
            font-size: 2.9rem;
            padding-top: 1rem;
          }

          .footer {
            font-size: 2.4rem;
          }

          iframe {
            height: 70vh;
            width: 80vw;
          }

          .modal {
            font-size: 0.7rem;
            line-height: 1.3rem;
            padding: 1rem;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          border: 0;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
