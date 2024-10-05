import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsGithub,
  BsTwitterX,
  BsDribbble,
} from "react-icons/bs";

export default function FooterCom() {
  return (
    <>
      <Footer container className="border-t-8 border-blue-600">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid w-full justify-between sm:flex md:grid-cols-1">
            <div className="mt-5">
              <Link
                to="/"
                className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
              >
                my
                <span className="px-2 py-1 bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-300 rounded-md text-white">
                  Blog
                </span>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-8  mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="About" />
                <Footer.LinkGroup col>
                  <Footer.Link
                    href="https://www.google.com"
                    target="_blank"
                    rel="noopenner noferrer"
                  >
                    masdimaseka
                  </Footer.Link>
                  <Footer.Link
                    href="/about"
                    target="_blank"
                    rel="noopenner noferrer"
                  >
                    myBlog
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>

              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow Us" />
                <Footer.LinkGroup col>
                  <Footer.Link
                    href="https://www.github.com/masdimaseka"
                    target="_blank"
                    rel="noopenner noferrer"
                  >
                    Github
                  </Footer.Link>
                  <Footer.Link
                    href="https://instagram.com/dimssseka"
                    target="_blank"
                    rel="noopenner noferrer"
                  >
                    Instagram
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright
              href="#"
              by="myBlog"
              year={new Date().getFullYear()}
            />
            <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitterX} />
              <Footer.Icon href="#" icon={BsGithub} />
              <Footer.Icon href="#" icon={BsDribbble} />
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
}
