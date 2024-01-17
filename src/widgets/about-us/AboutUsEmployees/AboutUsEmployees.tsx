import "./AboutUsEmployees.scss";
import john from "./assets/john.jpg";
import alex from "./assets/alex.jpg";
import chen from "./assets/chen.jpg";
import Image from "next/image";

const AboutUsEmployees = () => {
  const employees = [
    { id: 1, name: "John Duglas", position: "SEO", image: john },
    {
      id: 2,
      name: "Alex Sikorski",
      position: "Sales Manager",
      image: alex,
    },
    {
      id: 3,
      name: "Kim Andrei",
      position: "Software Engineer",
      image: chen,
    },
    { id: 1, name: "John Duglas", position: "SEO", image: john },
    {
      id: 2,
      name: "Alex Sikorski",
      position: "Sales Manager",
      image: alex,
    },
    {
      id: 3,
      name: "Kim Andrei",
      position: "Software Engineer",
      image: chen,
    },
  ];
  return (
    <div className="about-us-employees">
      <h3>Наша команда</h3>
      <ul className="about-us-employees__list">
        {employees.map((employee) => (
          <li key={employee.id}>
            <Image
              src={employee.image}
              alt="Employee Image"
              placeholder="blur"
            />
            <div className="about-us-employees__text">
              <h4>{employee.name}</h4>
              <p>{employee.position}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutUsEmployees;
