document.addEventListener("DOMContentLoaded", function() {
    var navbar = `
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                
                <li><a href="gamejams.html">Game Jams</a></li>
                <li><a href="https://discord.gg/6bjyHrGZn8">Discord</a></li>
                <li><a href="https://www.meetup.com/game-dev-palmy/">Meetup</a></li>
            </ul>
        </nav>
    `;
    document.getElementById("navbar").innerHTML = navbar;
});
