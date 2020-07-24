// Task No 1
function showInformation() {
    let display = document.getElementById("display");

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let li1 = document.createElement('li');
    let li1Text = document.createTextNode(username);
    li1.appendChild(li1Text);

    let li2 = document.createElement('li');
    let li2Text = document.createTextNode(email);
    li2.appendChild(li2Text);

    let li3 = document.createElement('li');
    let li3Text = document.createTextNode(password);
    li3.appendChild(li3Text);

    display.appendChild(li1)
    display.appendChild(li2)
    display.appendChild(li3)
}

// Task No 2
function ShowMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

// Task No 3
students = [
    {
        id: 0,
        name: "Hassan",
        class: "10",
    },
    {
        id: 1,
        name: "Hannan",
        class: "4",
    },
    {
        id: 2,
        name: "Farhat",
        class: "7",
    },
    {
        id: 3,
        name: "Rafay",
        class: "9",
    },
    {
        id: 4,
        name: "Umar",
        class: "5",
    },
    {
        id: 5,
        name: "Basit",
        class: "8",
    },
    {
        id: 6,
        name: "Hussain",
        class: "8",
    },
    {
        id: 7,
        name: "Ammar",
        class: "1",
    }, {
        id: 8,
        name: "Hunain",
        class: "2",
    }, {
        id: 9,
        name: "Usama",
        class: "9",
    },
]

function showStudents() {

    let uid = document.getElementById("id");
    let uName = document.getElementById("uName");
    let uClass = document.getElementById("uClass");

    let parent = document.getElementById("parent2");
    students.map((student) => {

        let tr = document.createElement('tr');
        let td1 = document.createElement("td");
        let td1Text = document.createTextNode(student.id)
        td1.appendChild(td1Text)

        let td2 = document.createElement("td");
        let td2Text = document.createTextNode(student.name)
        td2.appendChild(td2Text)

        let td3 = document.createElement("td");
        let td3Text = document.createTextNode(student.class)
        td3.appendChild(td3Text)

        let td4 = document.createElement("td");
        let btnDelete = document.createElement("button");
        btnDelete.setAttribute("id", "btnDelete");
        let btnText = document.createTextNode("Delete");
        btnDelete.appendChild(btnText);
        td4.appendChild(btnDelete);

        let btnEdit = document.createElement("button");
        btnDelete.setAttribute("id", "btnEdit");
        let btnText2 = document.createTextNode("Edit");
        btnEdit.appendChild(btnText2);
        td4.appendChild(btnEdit);
        
        btnDelete.addEventListener('click', function (e) {
            e.preventDefault();
            console.log("Delete Pressed")
            e.target.parentNode.parentNode.remove()
        })

        btnEdit.addEventListener('click',function(e){
            e.preventDefault();
            console.log("Edit Pressed");
            uid.value = student.id;
            uName.value = student.name;
            uClass.value = student.class;
        })
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4)
        
        parent.appendChild(tr)
    })
}
showStudents()

function updateStudent(){
    window.location = "./TaskNo3.html"

    let uid = document.getElementById("id").value;
    let uName = document.getElementById("uName").value;
    let uClass = document.getElementById("uClass").value;

    students[uid].id = uid;
    students[uid].name = uName;
    students[uid].class = uClass;

    // console.log(students[uid].name = uName);
    showStudents();
}



