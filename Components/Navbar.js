import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <h1>bhouse</h1>
        </Link>
      </div>
      <Link href="/admin">
        <a>Admin</a>
      </Link>
      <Link href="/owner">
        <a>Owner</a>
      </Link>
      <Link href="/tenant">
        <a>Tenant</a>
      </Link>
      <Link href="/login">
        <a>Login</a>
      </Link>
      <Link href="/logout">
        <a>Logout</a>
      </Link>
      <Link href="/register">
        <a>Register</a>
      </Link>
    </nav>
  )
}

export default Navbar
