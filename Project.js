var projects = [
    {
        project_name: "개인주제 프로젝트",
        info_data: [
            {
                href_1: "./project_info_single1.html",
                project_date1: "2020.3분기",
                class_name_1: "Stxt1",
                hover_1: "Stext_hover_1",

                href_2: "./project_info_single2.html",
                project_date2: "2020.4분기",
                class_name_2: "Stxt2",
                hover_2: "Stext_hover_2",

                href_3: "",
                project_date3: "",
                class_name_3: "",
                hover_3: "",
            }
        ]
    },

    {
        project_name: "주제중심 프로젝트",
        info_data: [
            {
                href_1: "./project_info_subject1.html",
                project_date1: "2020_3분기",
                class_name_1: "Stxt3",
                hover_1: "Stext_hover_3",
                
                href_2: "./project_info_subject2.html",
                project_date2: "2020_4분기",
                class_name_2: "Stxt4",
                hover_2: "Stext_hover_4",

                href_3: "",
                project_date3: "",
                class_name_3: "",
                hover_3: "",
            }
        ]
    },

    {
        project_name: "문제정의 프로젝트",
        info_data: [
            {
                href_1: "./project_info_team1.html",
                project_date1: "2020_3분기",
                class_name_1: "Stxt5",
                hover_1: "Stext_hover_5",

                href_2: "./project_info_team2.html",
                project_date2: "2020_4분기",
                class_name_2: "Stxt6",
                hover_2: "Stext_hover_6",

                href_3: "./project_info_team3.html",
                project_date3: "2021_1분기 ~ 2021_2분기",
                class_name_3: "Stxt7",
                hover_3: "Stext_hover_7",
            }
        ],
    },

    {
        project_name: "알파랩",
        info_data: [
            {
                href_1: "./project_info_alpha1.html",
                project_date1: "M_LAB",
                class_name_1: "Stxt8",
                hover_1: "Stext_hover_8",

                href_2: "./project_info_alpha2.html",
                project_date2: "C_LAB",
                class_name_2: "Stxt9",
                hover_2: "Stext_hover_9",

                href_3: "",
                project_date3: "",
                class_name_3: "",
                hover_3: "",
            }
        ],
    }
]

for (var i in projects) {
    var project = projects[i]
    for (var j in project.info_data) {
        var data = project.info_data[j]
        document.getElementById("project_Box").innerHTML += `
        <div class="contents_Box">
            <div class="Btext">${project.project_name}</div>
            <div class="Stext">
                <a href="${data.href_1}" class="${data.class_name_1}" onmouseover="${data.hover_1}()">${data.project_date1}</a>
            </div>
            <div class="Stext">
                <a href="${data.href_2}" class="${data.class_name_2}" onmouseover="${data.hover_2}()">${data.project_date2}</a>
            </div>
            <div class="Stext">
                <a href="${data.href_3}" class="${data.class_name_3}" onmouseover="${data.hover_3}()">${data.project_date3}</a>
            </div>
        </div>
        `;
    }
}


var project_info = [
    {
        id_name: "single_M3",
        project_info_name: "사회적 거리두기로 인한 삼시세끼의 변화",
        img_class_name: "image1",
    },
    {
        id_name: "single_M4",
        project_info_name: "사람들이 스타벅스에 미치는 이유",
        img_class_name: "image2",
    },
    {
        id_name: "subject_M3",
        project_info_name: "천연 공기청정기;이끼",
        img_class_name: "image3",
    },
    {
        id_name: "subject_M4",
        project_info_name: "지속가능한 삶을 위한 학교",
        img_class_name: "image4",
    },
    {
        id_name: "team_M3",
        project_info_name: "우울한 청소년들",
        img_class_name: "image5",
    },
    {
        id_name: "team_M4",
        project_info_name: "전통시장이 활성화되지 않는 것이 문제이다",
        img_class_name: "image6",
    },
    {
        id_name: "team_M1M2",
        project_info_name: "윈썸",
        img_class_name: "image7",
    },
    {
        id_name: "alpha_M",
        project_info_name: "SSAP",
        img_class_name: "image8",
    },
    {
        id_name: "alpha_C",
        project_info_name: "웹페이지 만들기",
        img_class_name: "image9",
    }
]

for (var i in project_info) {
    var info = project_info[i]
    document.getElementById("project_info_Box").innerHTML += `
    <div class="project_info" id="${info.id_name}">
        <div class="project_Name">
            ${info.project_info_name}
        </div>
        <div id="${info.img_class_name}" class="project_info_img">
        </div>
    </div>
    `;
}

var single_M3 = document.getElementById('single_M3')
var single_M4 = document.getElementById('single_M4')
var subject_M3 = document.getElementById('subject_M3')
var subject_M4 = document.getElementById('subject_M4')
var team_M3 = document.getElementById('team_M3')
var team_M4 = document.getElementById('team_M4')
var team_M1M2 = document.getElementById('team_M1M2')
var alpha_M = document.getElementById('alpha_M')
var alpha_C = document.getElementById('alpha_C')


function Stext_hover_1() {
    single_M3.style.display='block'
    single_M4.style.display='none'
    subject_M3.style.display='none'
    subject_M4.style.display='none'
    team_M3.style.display='none'
    team_M4.style.display='none'
    team_M1M2.style.display='none'
    alpha_M.style.display='none'
    alpha_C.style.display='none'
}

function Stext_hover_2() {
    single_M3.style.display='none'
    single_M4.style.display='block'
    subject_M3.style.display='none'
    subject_M4.style.display='none'
    team_M3.style.display='none'
    team_M4.style.display='none'
    team_M1M2.style.display='none'
    alpha_M.style.display='none'
    alpha_C.style.display='none'
}

function Stext_hover_3() {
    single_M3.style.display='none'
    single_M4.style.display='none'
    subject_M3.style.display='block'
    subject_M4.style.display='none'
    team_M3.style.display='none'
    team_M4.style.display='none'
    team_M1M2.style.display='none'
    alpha_M.style.display='none'
    alpha_C.style.display='none'
}

function Stext_hover_4() {
    single_M3.style.display='none'
    single_M4.style.display='none'
    subject_M3.style.display='none'
    subject_M4.style.display='block'
    team_M3.style.display='none'
    team_M4.style.display='none'
    team_M1M2.style.display='none'
    alpha_M.style.display='none'
    alpha_C.style.display='none'
}

function Stext_hover_5() {
    single_M3.style.display='none'
    single_M4.style.display='none'
    subject_M3.style.display='none'
    subject_M4.style.display='none'
    team_M3.style.display='block'
    team_M4.style.display='none'
    team_M1M2.style.display='none'
    alpha_M.style.display='none'
    alpha_C.style.display='none'
}

function Stext_hover_6() {
    single_M3.style.display='none'
    single_M4.style.display='none'
    subject_M3.style.display='none'
    subject_M4.style.display='none'
    team_M3.style.display='none'
    team_M4.style.display='block'
    team_M1M2.style.display='none'
    alpha_M.style.display='none'
    alpha_C.style.display='none'
}

function Stext_hover_7() {
    single_M3.style.display='none'
    single_M4.style.display='none'
    subject_M3.style.display='none'
    subject_M4.style.display='none'
    team_M3.style.display='none'
    team_M4.style.display='none'
    team_M1M2.style.display='block'
    alpha_M.style.display='none'
    alpha_C.style.display='none'
}

function Stext_hover_8() {
    single_M3.style.display='none'
    single_M4.style.display='none'
    subject_M3.style.display='none'
    subject_M4.style.display='none'
    team_M3.style.display='none'
    team_M4.style.display='none'
    team_M1M2.style.display='none'
    alpha_M.style.display='block'
    alpha_C.style.display='none'
}

function Stext_hover_9() {
    single_M3.style.display='none'
    single_M4.style.display='none'
    subject_M3.style.display='none'
    subject_M4.style.display='none'
    team_M3.style.display='none'
    team_M4.style.display='none'
    team_M1M2.style.display='none'
    alpha_M.style.display='none'
    alpha_C.style.display='block'
}