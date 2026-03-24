import React from 'react'
import Card from './components/Card'

const App = () => {

  const jobs = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMnYPXIDmRTKpj1drsmIRD_0NJJLVIVnMJNA&s",
      title: "Amazon",
      postDate: "5 days ago",
      description: "Senior UI/UX Designer",
      JobType: "Part Time",
      Experience: "Senior Level",
      salary: "$120/hr",
      location: "Mumbai, India"
    },
    {
      img: "https://logo.clearbit.com/google.com",
      title: "Google",
      postDate: "2 days ago",
      description: "Frontend Developer",
      JobType: "Full Time",
      Experience: "Mid Level",
      salary: "$90/hr",
      location: "Bangalore, India"
    },
    {
      img: "https://logo.clearbit.com/microsoft.com",
      title: "Microsoft",
      postDate: "1 week ago",
      description: "Backend Engineer",
      JobType: "Full Time",
      Experience: "Senior Level",
      salary: "$110/hr",
      location: "Hyderabad, India"
    },
    {
      img: "https://logo.clearbit.com/meta.com",
      title: "Meta",
      postDate: "3 days ago",
      description: "React Developer",
      JobType: "Contract",
      Experience: "Mid Level",
      salary: "$100/hr",
      location: "Remote"
    },
    {
      img: "https://logo.clearbit.com/netflix.com",
      title: "Netflix",
      postDate: "6 days ago",
      description: "Full Stack Developer",
      JobType: "Full Time",
      Experience: "Senior Level",
      salary: "$130/hr",
      location: "Delhi, India"
    },
    {
      img: "https://logo.clearbit.com/flipkart.com",
      title: "Flipkart",
      postDate: "4 days ago",
      description: "Software Engineer",
      JobType: "Full Time",
      Experience: "Fresher",
      salary: "$40/hr",
      location: "Bangalore, India"
    },
    {
      img: "https://logo.clearbit.com/adobe.com",
      title: "Adobe",
      postDate: "2 weeks ago",
      description: "UI Developer",
      JobType: "Part Time",
      Experience: "Mid Level",
      salary: "$85/hr",
      location: "Noida, India"
    },
    {
      img: "https://logo.clearbit.com/uber.com",
      title: "Uber",
      postDate: "1 day ago",
      description: "Mobile App Developer",
      JobType: "Full Time",
      Experience: "Senior Level",
      salary: "$115/hr",
      location: "Pune, India"
    },
    {
      img: "https://logo.clearbit.com/paypal.com",
      title: "PayPal",
      postDate: "3 days ago",
      description: "Java Developer",
      JobType: "Contract",
      Experience: "Mid Level",
      salary: "$95/hr",
      location: "Chennai, India"
    },
    {
      img: "https://logo.clearbit.com/tcs.com",
      title: "TCS",
      postDate: "1 week ago",
      description: "System Engineer",
      JobType: "Full Time",
      Experience: "Fresher",
      salary: "$30/hr",
      location: "Kolkata, India"
    }
  ];

  return (
    <div className='parent'>

      {jobs.map((job, index) => (
        <Card key={index} Job={job} />
      ))}
    </div>
  )
}

export default App