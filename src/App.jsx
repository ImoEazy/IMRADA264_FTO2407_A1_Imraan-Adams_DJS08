/**
 * Challenge:
 * Bootstrap the VanLife project by creating the first 2 routes:
 * Home and About.
 * 
 * Also include the navbar that can link between the two routes.
 * For now, you'll either need to copy/paste the navbar code
 * to both Home and About pages, or you'll need to find a place
 * to put it where it can be shared between the two pages.
 * (Don't overthink this part - just do whatever is easiest for
 * you because we'll learn a better approach very soon)
 * 
 * Review challenge: do all the CSS yourself based on the design
 * linked in the slides.
 */


  /**
   * Challenge: Create the AuthRequired Layout Route to protect
   * all the /host routes.
   * 
   * For now, just use `const authenticated = false`
   * to determine the authenticated status of the user, and
   * either send them to the /login route, or render the Outlet
   */


  export default function App() {

    return (
      <BrowserRouter>
        <header>
          <Link to="/home">#VANLIFE</Link>
          <nav>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : null}> About </NavLink>
            <NavLink to="/vans" className={({ isActive }) => isActive ? "active-link" : null}> Vans For Hire </NavLink>
          </nav>
        </header>
        <Routes> //container for a nested tree of route elements that renders the branch that best matshes the current location
          <Route path="/home" element={<Home />} /> //declares an element that should be rendered at a certain RL path
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetails />} />
        </Routes>
      </BrowserRouter>
    )
  }
  //BrowserRouter provides us with clean URLS, for use in search browsers











