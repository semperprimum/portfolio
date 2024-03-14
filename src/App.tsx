import { Footer, GlobalStyles, Header, Hero, Info, Reset } from "./components";

const App = () => {
  return (
    <>
      <Reset />
      <GlobalStyles />

      <header>
        <Header header />
      </header>

      <main>
        <Hero />

        <Info />
      </main>

      <Footer />
    </>
  );
};
export default App;
