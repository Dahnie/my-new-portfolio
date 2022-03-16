import React, { Suspense } from "react"
import "./assets/styles/css/App.css"
import Loader from "./components/Loader";
const Home = React.lazy(() => import('./components/Home')); // Lazy-loaded

function App() {
  return (
    // Show a spinner while the profile is loading
    <Suspense fallback={<Loader />}>
      {/* <ProfilePage /> */}
      <Home />
    </Suspense>
  );
}

export default App;
