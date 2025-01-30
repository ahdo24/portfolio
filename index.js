window.addEventListener("load", (event) => {
  
    init()
});


const init = _ => {
    skills()
    projects()


    setInterval(_=>{
        alternateSkills()
    },3500)
}

const skills = _ => {
    let skills = [
       'Web Developer', 
       'Full Stack Programmer', 
       'FrontEnd Team Leader',
       'Aplication Specialist',
    ],
    container = document.querySelector('[data-con="skills"]')

    skills.map((skill, i) => {
        let el = document.createElement('span')

        el.append(skill)

        if(i == 0) el.classList.add('show_skill')
         
        container.append(el)
    })
}

const alternateSkills = _ => {
    let current = document.querySelector('[data-con="skills"] .show_skill'),
        nextSibling = document.querySelector('[data-con="skills"] .show_skill + span') ?? document.querySelector('.skills span')

        current.classList.remove('show_skill')
        nextSibling.classList.add('show_skill')
}

const projects = _ => {
    const projects = [
        {
            label: 'Masteer Maintenance',
            image: 'mastermaintenance.png'
        },
        {
            label: 'Purchasing System',
            image: 'purchasing.png'
        },
        {
            label: 'Asset Management',
            image: 'assetmanagement.jpg'
        },
        {
            label: 'Waste Management System',
            image: ''
        },
    ],
    con = document.querySelector('[data-con="projects"]')
    html = ''

    projects.map(({image, label}, ctr) => {
        let i = ctr+1;

        html += `
            <div style="--i: ${i}" >
                <label>${label}</label>
                <div>
                    <img src="assets/${image}" alter="${image}" draggable="false">
                </div>
            </div>
        `

    })

    con.innerHTML = html

}