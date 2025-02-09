window.addEventListener("load", (event) => {
  
    init()
});


const init = _ => {
    skills()
    projects()
    aboutMe()

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

const aboutMe = _ => {
    let con = document.querySelector('[data-con="intro"]'),
        html = `

        <p>
            Hello, my name is <span class="hollowed_text" style="--i: 1">Jomar Ongcal</span> 
            known as <span class="hollowed_text" style="--i: 2">'Ahdo'</span> short for Ahdonis. I am a dedicated and 
            <span class="hollowed_text" style="--i: 3">versatile web developer</span> with 
            <span class="hollowed_text" style="--i: 4">two years of experience</span> in the industry. 
            My expertise spans across <span class="hollowed_text" style="--i: 5">full stack programming</span>, 
            <span class="hollowed_text" style="--i: 6">front-end development</span>, 
            and <span class="hollowed_text" style="--i: 7">application specialization</span>. 
            Currently, I <span class="hollowed_text" style="--i: 8">lead a front-end team</span>,
            where I focus on creating seamless and user-friendly web applications.
        </p>
        <p>
            I am based in Calamba, Laguna, <span class="hollowed_text" style="--i: 1">Philippines</span>, 
            and <span class="hollowed_text" style="--i: 2">I am passionate</span> about leveraging my skills to build innovative solutions 
            that <span class="hollowed_text" style="--i: 3">enhance user experiences</span> and 
            <span class="hollowed_text" style="--i: 4">drive business success</span>. I look forward to 
            connecting and exploring opportunities to collaborate.
        </p>

        <div class="button_con">
            <div class="button btn2" onclick=toggleShow("[data-con='about_con']")>Close</div>
            <div class="contact button">Contact</div>
        </div>
        
        `

    con.innerHTML = html




}

const toggleShow = (selector) => {
    const element = document.querySelector(selector);

    if (element) {

        if (selector == `[data-con='about_con']`) {
            element.classList.add('show_key_words');
            setTimeout(_ => {
                element.classList.remove('show_key_words');
            }, 5000)
        }


        element.classList.toggle('show');
    }



    
};