menu_list = [
    {
        Menu: "About Me",
        href: "",
    },
    {
        Menu: "School",
        href: "",
    },
    {
        Menu: "Project",
        href: "",
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