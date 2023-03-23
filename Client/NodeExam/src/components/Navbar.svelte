<script>
    import {Route, Router, Link, useNavigate} from "svelte-navigator";
</script>

<main>
    <Router primary={false}>
        <nav>
            <Link to="/">HOME</Link>
            <Link to="/characters">Characters</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/signin">Sign In</Link>
        </nav>
    </Router>
</main>