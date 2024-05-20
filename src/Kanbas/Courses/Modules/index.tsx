export default function Modules() {
  return (
		<div>
			<button id="wd-all-good" onClick={() => alert("Button Clicked")} type="button"> Collapse All</button>
			<button id="wd-all-good" onClick={() => alert("Button Clicked")} type="button"> View Progress</button>
		    <select id="wd-select-one-genre">
		    <option value="COMEDY">Publish All</option>
		    <option value="DRAMA">Publish All</option>
		    <option selected value="SCIFI"> Publish All</option>
		    <option value="FANTASY">Publish All</option>
		    </select>
			<button id="wd-all-good" onClick={() => alert("Button Clicked")} type="button"> + Module</button>
			{/* Collapse All button, View Progress button, etc. */}

			<ul id="wd-modules">
			<li className="wd-module">
			<div className="wd-title">Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</div>
			  <ul className="wd-lessons">
			     <li className="wd-lesson">
			       <span className="wd-title">LEARNING OBJECTIVES</span>
			       <ul className="wd-content">
				  	  <li className="wd-content-item">Introduction to the course</li>
				  	  <li className="wd-content-item">Learn what is Web Development</li>
			       </ul>			       
			     </li>
			     <li className="wd-lesson">
			       <span className="wd-title">READING</span>
			       <ul className="wd-content">
				  	  <li className="wd-content-item">Full Stack Developer - Chapter 1 -Introduction</li>
				  	  <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating User</li>
			       </ul>			       
			     </li>
			     <li className="wd-lesson">
			       <span className="wd-title">SLIDES</span>
			       <ul className="wd-content">
				  	  <li className="wd-content-item">Introduction to Web Development</li>
				  	  <li className="wd-content-item">Creating an HTTP server with Node.js</li>
				  	  <li className="wd-content-item">Creating a React Application</li>
			       </ul>			       
			     </li>
			  </ul>
			</li>

			<li className="wd-module">
			<div className="wd-title">Week 2</div>
			<ul className="wd-lessons">
			<li className="wd-lesson">
			<span className="wd-title">LEARNING OBJECTIVES</span>
			</li>
			</ul>
			</li>
			</ul>
		</div>
	);
}