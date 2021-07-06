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
    document.getElementsByClassName('headerMenu_Box')[0].innerHTML += `
    <div class="headerMenu">
        <a href="${menu.href}" class="menus">${menu.Menu}</a>
    </div>
    `;
}

function menu_open() {
    var menu = document.getElementsByClassName('headerMenu_Box')[0];

    menu.classList.toggle('hidden')
}