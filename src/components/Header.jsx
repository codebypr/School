import React from 'react'

function Header() {
  return (
    <>
    <nav class="navbar  pt-5">
  <div class="container-fluid">
    <a class="navbar-brand">GOVT.SR.SEC. SCHOOL</a>
    <form class="d-flex" role="search">
      <a className={`nav-link active me-2`}  href="#">Student Login</a>
      <a className={`nav-link active me-2`}  href="#">Staff Login</a>
      
    </form>
  </div>
</nav>
    </>
  )
}

export default Header;