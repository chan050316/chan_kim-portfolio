var projects = [
    {
        project_name: "개인주제 프로젝트",
        info_data: [
            {
                href_1: "./project_info_single1.html",
                project_date1: "2020.3분기",
                project_date2: "2020.4분기",
                project_date3: ""
            }
        ]
    },

    {
        project_name: "주제중심 프로젝트",
        info_data: [
            {
                href_1: "",
                project_date1: "2020_3분기",
                project_date2: "2020_4분기",
                project_date3: ""
            }
        ]
    },

    {
        project_name: "문제정의 프로젝트",
        info_data: [
            {
                href_1: "",
                project_date1: "2020_3분기",
                project_date2: "2020_4분기",
                project_date3: "2021_1분기 ~ 2021_2분기"
            }
        ],
    },

    {
        project_name: "알파랩",
        info_data: [
            {
                href_1: "",
                project_date1: "M_LAB",
                project_date2: "C_LAB",
                project_date3: ""
            }
        ],
    }
]

for (var i in projects) {
    var project = projects[i]
    for (var j in project.info_data) {
        var date = project.info_data[j]
        document.getElementById("project_Box").innerHTML += `
        <div id="contents_Box">
            <div class="Btext">${project.project_name}</div>
            <div class="Stext"><a href="${date.href_1}">${date.project_date1}</a></div>
            <div class="Stext"><a href="${project.href}">${date.project_date2}</a></div>
            <div class="Stext"><a href="${project.href}">${date.project_date3}</a></div>
        </div>
        `;
    }
}