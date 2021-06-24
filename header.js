menu_list = [
    {
        Menu: "About Me",
        href: "./About_Me.html",
    },
    {
        Menu: "School",
        href: "./School.html",
    },
    {
        Menu: "Project",
        href: "./Project.html",
    },
]

for (var i in menu_list) {
    var menu = menu_list[i];
    document.getElementById('headerMenu_Box').innerHTML += `
    <div class="headerMenu">
        <a href="${menu.href}">${menu.Menu}</a>
    </div>
    `;
}