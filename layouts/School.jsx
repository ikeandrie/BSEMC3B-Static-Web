import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
// import goods from "/At2xNCZZ.jpg";

function School() {
  const navBar = [
    {
      Link: "About",
      Route: "/homeschool/about",
    },
    {
      Link: "Contact",
      Route: "/homeschool/contact",
    },
    {
      Link: "Setting",
      Route: "/homeschool/setting",
    },
  ];

  const [currentPage, setCurrentPage] = useState("onHome");

  const renderPage = () => {
    switch (currentPage) {
      case "onOutlet":
        return <Outlet />;
      default:
        return (
          <main className="container-util">
            <section>
              <h2 className=" text-2xl font-bold">Home Page</h2>
              <p>
                You are currently in home page. Navigate from the navigation
                above.
              </p>
            </section>
          </main>
        );
    }
  };

  function pageLink(route, page, state, index) {
    return (
      <li key={index} className="mr-4 inline">
        <Link to={route} onClick={() => setCurrentPage(state)}>
          {page}
        </Link>
      </li>
    );
  }

  return (
    <>
      <header className="container-util mb-4 h-[5.7rem] bg-slate-600 p-4 text-white">
        <h1 className="text-3xl font-bold">Welcome to My Website</h1>
        <nav>
          <ul>
            <Link to="/" className="mr-4">
              Root
            </Link>
            {pageLink("/homeschool", "Home", "onHome")}
            {navBar.map((page, index) => {
              return pageLink(page.Route, page.Link, "onOutlet", index);
            })}
          </ul>
        </nav>
      </header>

      {renderPage()}
      {/* <div className="flex h-[70vh] w-[100%] flex-col items-center justify-center gap-2">
        <img className="size-[15rem]" src={goods} alt="goods na finnaly" />
        <p>monthly exam na mas-advance pa sakaniya.</p>
      </div> */}

      <footer className=" container-util fixed bottom-0 bg-red-600 p-1 text-center text-white">
        <p>&copy;2024 Simple Website. All rights reserved.</p>
      </footer>
    </>
  );
}

export default School;
