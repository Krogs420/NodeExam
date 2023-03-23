<script>
    import {Route, Router, Link, useNavigate} from "svelte-navigator";
</script>

<Router primary={false}>
    <nav>
        <Link to="/">HOME</Link>
        <Link to="/">Characters</Link>
        <Link to="/">Contact</Link>
        <Link to="/">Sign In</Link>
    </nav>
</Router>
