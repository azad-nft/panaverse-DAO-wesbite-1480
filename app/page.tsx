import Image from "next/image"
import logo from '@/public/red-p-logo-text.png'
import zia from '@/public/ziakhan.jpg'
import daniyal from '@/public/daniyalnagori.jpg'
import hero from '@/public/hero-img.jpg'
import github from '@/public/icons8-github(1).svg'
import facebook from '@/public/icon-facebook.svg'
import twitter from '@/public/icon-twitter.svg'
import instagram from '@/public/icon-instagram.svg'
import youtube from '@/public/icon-youtube.svg'
export default function Home() {
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className="relative container mx-auto p-2 ">
        {/* <!-- flex container --> */}
        <div className="flex items-center justify-between ">
          {/* <!-- logo --> */}
          <div className="pt-2 ">
            <Image src={logo} width={150} height={150} alt="" />
          </div>
          {/* <!-- menu items --> */}
          <div className="hidden md:flex space-x-6 ">
            <a href="#" className="hover:text-buttons">Home</a>
            <a href="#" className="hover:text-buttons">Courses</a>
            <a href="#" className="hover:text-buttons">About Us</a>
            <a href="#" className="hover:text-buttons">Community</a>
          </div>
          {/* <!-- Button --> */}
          <div className="flex flex-row space-x-1">
          <a href="#"
            className="hidden p-3 px-6 pt-2 text-white bg-buttons rounded-lg baseline hover:bg-transparent hover:border-solid hover:border hover:border-black hover:text-black  md:block">Log in 
          </a>
          <a href="#"
            className="hidden p-3 px-6 pt-2 text-white bg-buttons rounded-lg baseline hover:bg-buttonsLight  md:block">Register
          </a>
          </div>
        </div>
      </nav>

      {/* <!-- Hero Section --> */}
      <section id="hero">
        {/* <!-- flex container --> */}
        <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-o md:space-y-0">
          {/* <!-- left section --> */}
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">Combining forces to transform Pakistan</h1>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Join the forefront of the next major technological breakthrough in the digital world.
            </p>

            <div className="flex justify-center md:justify-start">
              <a href="#"
                className="p-2 px-6 pt-2 text-white bg-buttons rounded-lg  baseline hover:bg-buttonsLight">Enroll Now</a>

            </div>
          </div>
          {/* <!-- right section --> */}
          <div className="md:w-1/2 lg:w-1/2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={hero.src}
              alt="Virtual Reality"
              className="w-full xl:min-w-[600px]"
            />
          </div>
        </div>
      </section>

      <section  id="program review">
       {/* <!-- flex container --> */}
          <div className="container flex flex-col items-center space-y-6 py-12 justify-between px-6   mx-auto md:flex-row space-y-0 py-12 ">
                 {/* <!-- what's Different --> */}
           <div className="flex flex-col space-y-12 md:w-auto ">
            <h2 className="max-w-auto text-4xl font-bold text-center ">
            <span className="text-buttons">Panaverse</span>: A Deeper Dive</h2>
            <p className="max-w-auto text-center text-darkGrayishBlue ">
            In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program's beginning. It resembles a cross between a corporate venture and an educational project.

            
            </p>

          </div>
                </div>

      </section>
      <section id="courses">
        {/* <!-- flex container --> */}
        <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row lg:px-12">
          
          {/* <!-- numbered list --> */}
          <div className="flex flex-col space-y-8 md:w-1/2">
            {/* <!-- list item 1 --> */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* <!-- heading  --> */}
              <div className="rounded-l-full  md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-buttons">
                    01
                  </div>
                  <h3 className="text-base font-bold md:hidden md:mb-4">
                  Web 3.0 (Blockchain) and Metaverse Specialization
                  </h3>
                </div>
              </div>
              <div>

                <h3 className="hidden mb-4 text-lg font-bold md:block">
                Web 3.0 (Blockchain) and Metaverse Specialization
                </h3>
                <p className="text-darkGrayishBlue max-w-md">
                This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.
                </p>
              </div>
            </div>


            {/* <!-- list item 2 --> */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* <!-- heading  --> */}
              <div className="rounded-l-full  md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-buttons">
                    02
                  </div>
                  <h3 className="text-base font-bold md:hidden md:mb-4">
                  Artificial Intelligence (AI) and Deep Learning Specialization
                  </h3>
                </div>
              </div>
              <div>

                <h3 className="hidden mb-4 text-lg font-bold md:block">
                Artificial Intelligence (AI) and Deep Learning Specialization
                </h3>
                <p className="text-darkGrayishBlue max-w-md">
                The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.

                </p>
              </div>
            </div>



            {/* <!-- list item 3 --> */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* <!-- heading  --> */}
              <div className="rounded-l-full  md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-buttons">
                    03
                  </div>
                  <h3 className="text-base font-bold md:hidden md:mb-4">
                  Cloud-Native Computing Specialization
                  </h3>
                </div>
              </div>
              <div>

                <h3 className="hidden mb-4 text-lg font-bold md:block">
                Cloud-Native Computing Specialization
                </h3>
                <p className="text-darkGrayishBlue max-w-md">
                The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.
                </p>
              </div>
            </div>
          </div>


          {/* <!-- numbered list --> */}
          <div className="flex flex-col space-y-8 md:w-1/2">
            {/* <!-- list item 4--> */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* <!-- heading  --> */}
              <div className="rounded-l-full  md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-buttons">
                    04
                  </div>
                  <h3 className="text-base font-bold md:hidden md:mb-4">
                  Ambient Computing and IoT Specialization
                  </h3>
                </div>
              </div>
              <div>

                <h3 className="hidden mb-4 text-lg font-bold md:block">
                Ambient Computing and IoT Specialization
                </h3>
                <p className="text-darkGrayishBlue max-w-md">
                The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter, and Embedded Devices.
                </p>
              </div>
            </div>


            {/* <!-- list item 5 --> */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* <!-- heading  --> */}
              <div className="rounded-l-full  md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-buttons">
                    05
                  </div>
                  <h3 className="text-base font-bold md:hidden md:mb-4">
                  Genomics and Bioinformatics Specialization                  </h3>
                </div>
              </div>
              <div>

                <h3 className="hidden mb-4 text-lg font-bold md:block">
                Genomics and Bioinformatics Specialization                </h3>
                <p className="text-darkGrayishBlue max-w-md">
                Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focus on performing complex bioinformatics analysis using the most essential Python libraries and applications.
                </p>
              </div>
            </div>



            {/* <!-- list item 6 --> */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* <!-- heading  --> */}
              <div className="rounded-l-full  md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-buttons">
                    06
                  </div>
                  <h3 className="text-base font-bold md:hidden md:mb-4">
                  Network Programmability and Automation Specialization                  </h3>
                </div>
              </div>
              <div>

                <h3 className="hidden mb-4 text-lg font-bold md:block">
                Network Programmability and Automation Specialization                </h3>
                <p className="text-darkGrayishBlue max-w-md">
                More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- testimonials --> */}
      <section id="testimonials">
        {/* <!-- container to heading and testm block --> */}
        <div className="max-w-6xl mt-32 mx-auto px-5  text-center">
          {/* <!-- heading --> */}
          <h2 className="text-4xl font-bold text-center">
            Board of Governors
          </h2>
          <div className="flex flex-col mt-24 items-center  justify-center md:flex-row md:space-x-6">
            {/* <!-- testimonial 1 --> */}
            <div className="flex flex-col items-center justify-between p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <Image src={zia} width={16} height={16} className="w-16 -mt-14" alt="zia khan" />

              <h5 className="text-lg font-bold">Zia Khan</h5>

              <p className="text-darkGrayishBlue text-sm">
              CEO of Panacloud,      Volunteer COO of PIAIC    ,Mentor and software developer with 20+ years of expertise in cloud and serverless computing, software design, project management, and API and App development.     </p>

            </div>


            {/* <!-- testimonial 3 --> */}
            <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
              <Image src={daniyal} width={16} height={16} className="w-16 -mt-14" alt="" />

              <h5 className="text-lg font-bold">Daniyal Nagori</h5>

              <p className="text-darkGrayishBlue text-sm">
              COO of PIAIC,Team lead at Panacloud,Certified Kubernetes Application Developer,
AWS Certified Developer,
Coursera React Native Nano Degree.
              </p>

            </div>


            {/* <!-- testimonial 3 --> */}
            {/* <div className=" hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
              <Image src="" className="w-16 -mt-14" alt="" />

              <h5 className="text-lg font-bold">Richard Watts</h5>

              <p className="text-darkGrayishBlue text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error necessitatibus nam voluptates. Quasi, eligendi perspiciatis. Eveniet, ad nam.
              </p>

            </div> */}

          </div>

          {/* <div className="my-16">

            <a href="#"
              className=" p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight ">Get
              Started
            </a>
          </div> */}

        </div>



      </section>
      {/* <!-- CTA secction --> */}
      <section id="cta" className="bg-buttons">
        {/* <!-- flex container  --> */}
        <div className="container flex flex-col items-center space-y-6 py-24 justify-between px-6   mx-auto md:flex-row space-y-0 py-12">
          {/* <!-- heading  --> */}
          <h2 className="text-3xl font-bold leading-tight text-center text-white md:text-left md:text-2xl md:max-w-xl">
          Do you want to take your programming abilities to the next level?          </h2>

          <div className="pt-6">

            <a href="#"
              className=" p-3 px-6 pt-2 text-buttons bg-white rounded-lg baseline hover:bg-gray-300 ">Get
              Started
            </a>
          </div>
        </div>


      </section>
      {/* <!-- Footer  --> */}
      <footer className="bg-veryDarkBlue">
        {/* <!-- flex container  --> */}
        <div className="container flex flex-col-reverse justify-between px-6 py-10 space-y-8 mx-auto md:flex-row space-y-0">
          {/* <!-- logo ans social icons  --> */}
          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div className="mx-auto my-6 text-center text-white md:hidden">
              Copyright &copy; 2023, All Rights Reserved
            </div>

            {/* <!-- logo  --> */}
           
            <div className="pt-2 ">
            <Image src={logo} width={200} height={200} alt="" />
          </div>
            
            {/* <!-- social links container  --> */}
            <div className="flex justify-between space-x-4">
              {/* <!-- link 1  --> */}
              <a href="">
              <Image src={facebook} width={30} height={30} alt="" />

              </a>
              {/* <!-- link 2  --> */}
              <a href="">
              <Image src={youtube} width={30} height={30} alt="" />

              </a>
              {/* <!-- link 3  --> */}
              <a href="">

              <Image src={twitter} width={30} height={30} alt="" />

              </a>
              {/* <!-- link 4  --> */}
              <a href="">
              <Image src={instagram} width={30} height={30} alt="" />

              </a>
              {/* <!-- link 5  --> */}
              <a  className="rounded-full" href="">
              <Image className="rounded-full" src={github} width={30} height={30} alt="" />
              </a>
            </div>

          </div>
          {/* <!-- list container  --> */}
          <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-buttons">Home</a>
              <a href="#" className="hover:text-buttons">Courses</a>
              <a href="#" className="hover:text-buttons">About Us</a>
              <a href="#" className="hover:text-buttons">Contact Us</a>
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-buttons">Strategic Partners</a>
              <a href="#" className="hover:text-buttons">Pana Cloud </a>
              <a href="#" className="hover:text-buttons">Saylani Welfare Trust </a>
            </div>
          </div>
          {/* <!-- input container  --> */}
          <div className="flex flex-col justify-between">
            <form action="">
              <div className="flex space-x-3">
                <input type="text" className="flex-1 px-4 rounded-lg focus:outline-none" placeholder="Email "/>

                  <button className="px-6 py-2 text-white rounded-lg bg-buttons hover:buttons focus:outline-none">Go</button>
              </div>
            </form>
            <div className="hidden text-white md:block">
              Copyright &copy; 2023, All Rights Reserved
            </div>
          </div>

        </div>
      </footer>

    </>
  )
}
