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
const Blog = lazy(async () => await import("./Pages/Blog/blog.tsx"));

function App(): JSX.Element {
  return (
    <div>
      <Header />

      <div>
        <Suspense
          fallback={
            <>
              <ThreeDotsWave />
            </>
          }
        >
          <div className="app-area">
            <Route path="/" component={Home} />
            <Route path="/works/" component={Works} />
            <Route path="/blog/" component={Blog} />
          </div>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
