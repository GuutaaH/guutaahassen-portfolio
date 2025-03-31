import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {
    const frontendSkills = [
        "React",
        "Tailwindcss",
        "HTML",
        "CSS", 
        "Javascript"
    ]

    const backendSkills = [
        "Nodejs",
        "REST API",
        
        "SQL",
        "Java",
        "AWS Amplify"
    ]

    const tools = [
    "PostgresSQL",
    "FireBase",
    "AWS"
    ]
    return (
        <section
        id="about"
        className="min-h-screen flex items-center justify-center py-20"
      >

        <RevealOnScroll>
       

        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
<h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
About Me
</h2>

<div className=" rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
    <p className="text grey-300 mb-6">
    Passionate web developer with expertise in building scalable web applications and creating innovative solutions. I also volunteer in my local community, teaching neighborhood kids the fundamentals of web development. 
    When I’m not building web apps, I love playing basketball—it helps me stay active, sharp, and competitive—qualities that also drive my approach to problem-solving in development.

    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
    <h3 className="text-xl font-bold">
Front End
    </h3>
<div className="flex flex-wrap gap-2">
{frontendSkills.map((tech,key) => (
    <span 
    key={key}
    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"> {tech}</span>
))}

</div>
    </div>

    </div>
    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
    <h3 className="text-xl font-bold">
Back End
    </h3>
<div className="flex flex-wrap gap-2">
{backendSkills.map((tech,key) => (
    <span 
    key={key}
    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"> {tech}</span>
))}

</div>
    </div>
    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
    <h3 className="text-xl font-bold">
Addtional Tools
    </h3>
<div className="flex flex-wrap gap-2">
{tools.map((tech,key) => (
    <span 
    key={key}
    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"> {tech}</span>
))}

</div>
    </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
    <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transtion-all">
    <h3 className="text-xl font-bold mb-4">
        Eductation
    </h3>
    <ul className="list-disc list-inside text-grey-300 space-y-2">
        <li> <strong> Diploma in Software Engineering</strong>  Centennial College</li>
        <li> Relevant Coursework: Web development, Cloud Computing, Data Structures</li>

    </ul>
    </div>
    <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transtion-all">
    <h3 className="text-xl font-bold mb-4">
        Work Exprience
    </h3>
    <div
     className="space-y-4 text-grey-300">
<div>
  <h4 className="font-bold">Freelancer Web developer (2023-present)</h4>  
  <p> Designed and developed a fully functional website for a clients, ensuring responsiveness, performance, and user experience. </p>
</div>
    </div>
    </div>
    
</div>
</div>
</RevealOnScroll>
        </section>
    )
}