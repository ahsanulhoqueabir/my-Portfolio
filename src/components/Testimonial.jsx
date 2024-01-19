import Marquee from "react-fast-marquee";
import Title from "./Title";
const testimonials = [
  {
    image:
      "https://i.ibb.co/h22xFhW/png-transparent-avatar-people-person-business-user-man-character-set-icon-portrait.png",
    testimonial:
      "Ahsanul Hoque is truly exceptional. His dedication and expertise have been instrumental in the success of our projects at Tech Solutions Inc. Ahsanul's remarkable problem-solving skills and efficiency consistently surpass expectations. As the CTO, I highly recommend Ahsanul Hoque for any organization seeking a top-tier developer.",
    authorName: "John Doe",
    authorTitle: "Chief Technology Officer",
    authorCompany: "Tech Solutions Inc.",
  },
  {
    image:
      "https://i.ibb.co/h22xFhW/png-transparent-avatar-people-person-business-user-man-character-set-icon-portrait.png",
    testimonial:
      "We are immensely pleased with the contributions of Ahsanul Hoque, a highly professional developer at InnovateTech. His expertise in coding and acute attention to detail have significantly contributed to the success of our projects. Ahsanul is truly a standout developer, and as the CEO, I highly recommend his services.",
    authorName: "Jane Smith",
    authorTitle: "Chief Executive Officer",
    authorCompany: "InnovateTech",
  },
  {
    image:
      "https://i.ibb.co/h22xFhW/png-transparent-avatar-people-person-business-user-man-character-set-icon-portrait.png",
    testimonial:
      "Ahsanul Hoque consistently delivers high-quality work at Digital Innovations Ltd. His versatility in programming languages and proactive approach make him a valuable asset to our team. Ahsanul's commitment to excellence has greatly enhanced our development processes. As the Lead Developer, I highly recommend Ahsanul Hoque.",
    authorName: "Bob Johnson",
    authorTitle: "Lead Developer",
    authorCompany: "Digital Innovations Ltd.",
  },
  {
    image:
      "https://i.ibb.co/h22xFhW/png-transparent-avatar-people-person-business-user-man-character-set-icon-portrait.png",
    testimonial:
      "Ahsanul Hoque is a top-tier developer at FutureTech Solutions. His passion for coding and professionalism shine through in every project. Ahsanul's technical prowess and dedication make him an invaluable asset to our team. As the VP of Engineering, I highly recommend Ahsanul Hoque for any development project.",
    authorName: "Alice Thompson",
    authorTitle: "Vice President of Engineering",
    authorCompany: "FutureTech Solutions",
  },
  {
    image:
      "https://i.ibb.co/h22xFhW/png-transparent-avatar-people-person-business-user-man-character-set-icon-portrait.png",
    testimonial:
      "We extend our heartfelt appreciation to Ahsanul Hoque for his exceptional contributions at Advanced Systems Ltd. His deep understanding of technical concepts and excellent communication skills make him a standout developer. Ahsanul is truly an asset to our team, and as the Software Architect, I highly recommend his services.",
    authorName: "Charlie Brown",
    authorTitle: "Software Architect",
    authorCompany: "Advanced Systems Ltd.",
  },
  {
    image:
      "https://i.ibb.co/h22xFhW/png-transparent-avatar-people-person-business-user-man-character-set-icon-portrait.png",
    testimonial:
      "We are thoroughly impressed with Ahsanul Hoque at Tech Innovations Corp. His innovative solutions and unwavering commitment to deadlines have significantly enhanced our development processes. Ahsanul is a highly reliable and skilled developer. As the Project Manager, I highly recommend Ahsanul Hoque for any development project.",
    authorName: "Eva Green",
    authorTitle: "Project Manager",
    authorCompany: "Tech Innovations Corp.",
  },
  {
    image:
      "https://i.ibb.co/h22xFhW/png-transparent-avatar-people-person-business-user-man-character-set-icon-portrait.png",
    testimonial:
      "Ahsanul Hoque is an invaluable asset at InnoSoft Solutions. His problem-solving skills and dedication to high-quality work make him a go-to developer for any project. As the Lead Engineer, I highly recommend Ahsanul Hoque for his exceptional talent and professionalism.",
    authorName: "Mike Wilson",
    authorTitle: "Lead Engineer",
    authorCompany: "InnoSoft Solutions",
  },
  {
    image:
      "https://i.ibb.co/h22xFhW/png-transparent-avatar-people-person-business-user-man-character-set-icon-portrait.png",
    testimonial:
      "Highly recommend Ahsanul Hoque at Tech Wizards Inc. His technical prowess and outstanding teamwork skills played a key role in the success of our projects. Ahsanul is a reliable and talented developer. As the Development Manager, I highly recommend Ahsanul Hoque for any development project.",
    authorName: "Linda Carter",
    authorTitle: "Development Manager",
    authorCompany: "Tech Wizards Inc.",
  },
  {
    image:
      "https://i.ibb.co/h22xFhW/png-transparent-avatar-people-person-business-user-man-character-set-icon-portrait.png",
    testimonial:
      "Ahsanul Hoque consistently exceeds expectations at InnoTech Solutions. His proactive approach, attention to detail, and excellent communication skills make him an exceptional developer. As the Chief Innovation Officer, I highly recommend Ahsanul Hoque for his outstanding contributions.",
    authorName: "Samuel Reed",
    authorTitle: "Chief Innovation Officer",
    authorCompany: "InnoTech Solutions",
  },
  {
    image:
      "https://i.ibb.co/h22xFhW/png-transparent-avatar-people-person-business-user-man-character-set-icon-portrait.png",
    testimonial:
      "Exceptional work by Ahsanul Hoque at Future Systems Ltd. His passion for coding and unmatched professionalism make him an outstanding developer. We look forward to future collaborations with Ahsanul. As the Director of Technology, I highly recommend his services.",
    authorName: "Grace Turner",
    authorTitle: "Director of Technology",
    authorCompany: "Future Systems Ltd.",
  },
];
const Testimonial = () => {
  return (
    <div className="pb-10">
      <Title>Testimonials</Title>
      <h2 className="text-lg  text-center py-5">
        Nice things people have said about me:
      </h2>
      <Marquee pauseOnHover={true} >
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center gap-5 h-96 w-[350px] px-2 bg-blue-100 mx-5 text-black rounded shadow-lg shadow-green-300 text-center space-y-2"
          >
            <img
              className="rounded-full h-[100px] w-[100px] object-cover"
              src={testimonial.image}
              alt={testimonial.authorName}
            />
            <div>
              <p className="text-sm">{testimonial.testimonial}</p>
              <p className="text-lg font-semibold">{testimonial.authorName}</p>
              <p className="text-lg">{testimonial.authorTitle}</p>
              <p className="text-lg">{testimonial.authorCompany}</p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Testimonial;
