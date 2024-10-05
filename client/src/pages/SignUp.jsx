import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <>
      <div className="min-h-screen mt-20">
        <div className="flex flex-col md:flex-row md:items-center p-3 max-w-3xl mx-auto gap-5">
          <div className="flex-1">
            <Link to="/" className="text-4xl font-bold dark:text-white">
              my
              <span className="px-2 py-1 bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-300 rounded-md text-white">
                Blog
              </span>
            </Link>
            <p className="text-sm mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus dolorum dolores illum natus cumque. Laudantium, at eos.
              Deleniti, odio ut?
            </p>
          </div>
          <div className="flex-1">
            <form action="" className="flex flex-col gap-4">
              <div>
                <Label value="username" />
                <TextInput type="text" placeholder="username" id="username" />
              </div>
              <div>
                <Label value="email" />
                <TextInput type="email" placeholder="email" id="email" />
              </div>
              <div>
                <Label value="password" />
                <TextInput
                  type="password"
                  placeholder="password"
                  id="password"
                />
              </div>
              <Button color="blue" type="submit">
                Sign Up
              </Button>
            </form>
            <div className="flex gap-2 text-sm mt-2">
              <span>Have an account?</span>
              <Link to="/sign-in" className="text-blue-500">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
