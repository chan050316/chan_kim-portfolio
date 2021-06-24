var projects = [
    {
        project_name: "개인주제 프로젝트",
        info_data: [
            {
                project_date: "2020.3분기"
            },
            {
                project_date1: "2020.4분기"
            }
        ]
    },

    {
        project_name: "주제중심 프로젝트",
        info_data: [
            {
                project_date1: "2020.3분기"
            },
            {
                project_date2: "2020.4분기"
            }
        ]
    }
]

for (var i in projects) {
    var project = projects[i]
    console.log('2')
    for (var j in projects[i].info_data) {
        var project_date = project.info_data[j]
        document.getElementById("contents_BBox").innerHTML += `
        <div id="contents_Box1">
            <div class="Btext">${project.project_name}</div>
            <div class="Stext">${project_date.project_date1}</div>
            <div class="Stext">${project_date.project_date2}</div>
        </div>
        `;
    }
}