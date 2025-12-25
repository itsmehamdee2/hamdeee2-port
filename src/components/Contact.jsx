import { Github, Instagram, Linkedin, Locate, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-4 text-[#6441a5] relative bg-violet-100 text-"
    >
      <div className="container relative mx-auto max-w-5xl">
        <h2 className="text-5xl uppercase max-md:text-4xl font-bold mb-4 text-center">
          Get in{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-500 to-violet-600">
            Touch
          </span>
        </h2>
        <p className="text-justify text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here is my Contact details bellow if you want to get in touch with me
          personally
          <span className="font-semibold">
            {" "}
            <br></br>
            “Hire an attitude, not just experience and qualification.” – Greg{" "}
          </span>
        </p>
        <div className="grid grid-cols-2 max-sm:grid-cols-1 max-md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-left">Email</h4>
                  <a
                    className="text-muted-foreground  text-sm hover:text-primary transition-colors"
                    href="mailto:itsmehamdee2@gmail.com"
                  >
                    itsmehamdee2@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className=" text-left font-medium">Phone</h4>
                  <a
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    href="tel:0951-887-8105"
                  >
                    0951-887-8105
                  </a>
                </div>
              </div>{" "}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Locate className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className=" text-left font-medium">Location</h4>
                  <a className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    Philippines
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center  justify-center">
            <div className="pb-8 md:flex md:items-center  md:justify-center">
              <h4 className="font-medium mb-10">Connect With Me</h4>
              <div className="flex flex-row items-center  text-violet-500 space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/ahamdeealonto/"
                  target="blank"
                  className="hover:text-primary hover:scale-110"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://www.instagram.com/thefroozch"
                  target="blank"
                  className="hover:text-primary hover:scale-110"
                >
                  <Instagram />
                </a>{" "}
                <a
                  href="https://www.facebook.com"
                  target="blank"
                  className="hover:text-primary hover:scale-110"
                >
                  <Github />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
