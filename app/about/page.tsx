export default function AboutPage() {
  return (
    <div>
      <h1 className = "text-2xl font-medium text-blue-300 mb-4" >Hi, I'm Angelina! </h1>
      
      <p className="mb-4"> I'm currently studying business informatics at the University of Duisburg-Essen, Essen. 
        I have practical experience from working as a student data analyst in a SaaS startup, where I supported data analysis, reporting, and system-related decision processes.</p>
       
      <p className="mb-4"> My background is in business informatics, with a strong interest in how digital systems shape human behavior, perception, and decision-making.
        Currently, I explore topics such as data bias, AI ethics, and human–technology interaction through small projects and short essays. I'm especially interested in reflective, human-centered approaches to technology rather than purely technical solutions.</p>
       
       <p className="mb-4"> Alongside this, I maintain a creative practice, using visual work as a way to think, observe, and experiment beyond formal structures.</p>
    

      <h2 className="text-xl font-semibold text-blue-300 mt-8 mb-4">Here are the technologies I worked with:</h2>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 pb-15">
        <ul className="space-y-2">
          <li>Java</li>
          <li>PostgreSQL</li>
          <li>Python</li>
        </ul>
        <ul className="space-y-2">
          <li>JavaScript</li>
          <li>PowerBI</li>
          <li>React.js</li>
        </ul>
      </div>

    <p className="pb-10"> Outside of work, I love spending my time drawing, painting and dancing. 
    </p>


    </div>
  );
}
