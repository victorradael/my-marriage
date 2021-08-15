import Head from "next/head";

export default function Home() {
  const date = new Date();
  const marryDate = new Date("September 10, 2021 00:00:00");
  var count = ((marryDate - date) / 1000 / 60 / 60 / 24).toFixed(0);

  return (
    <div className="container">
      <Head>
        <title>Carol & Victor</title>
        <link rel="icon" href="/favicon.ico" />

        <link
          href="https://fonts.googleapis.com/css2?family=Parisienne&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main>
        <h1 className="title">Carol & Victor </h1>

        <iframe
          src="https://player.twitch.tv/?channel=astronautvr&parent=localhost&output=embed"
          scrolling="no"
          height="414"
          width="896"
        ></iframe>

        {count == 0 ? (
          <>
            <h1 className="title space">Chegou o Dia!</h1>
            <p>às 16:30 h</p>
          </>
        ) : (
          <h1 className="title space">Faltam {count} Dias</h1>
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
          background: #015abe;
          background: url("https://www.teahub.io/photos/full/247-2474382_abstract-nature-wallpaper-imagem-de-fazenda-papel-de.jpg") -20rem;
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
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
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
