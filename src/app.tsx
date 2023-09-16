import "./app.scss";

import Footer from "./components/Footer/footer.tsx";
import Header from "./components/header.tsx";

//  Routing
import { Route } from "wouter";

//  Pages ( Lazy Loading )
import { type JSX, Suspense, lazy } from "preact/compat";
import ThreeDotsWave from "./components/Loading/three-dots-wave.tsx";
const Home = lazy(async () => await import("./Pages/Home/home.tsx"));
const Works = lazy(async () => await import("./Pages/Works/works.tsx"));

function App(): JSX.Element {
  return (
    <div>
      <Header />
      <Suspense
        fallback={
          <>
            <ThreeDotsWave />
          </>
        }
      >
        <Route path="/" component={Home} />
        <Route path="/works/" component={Works} />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
