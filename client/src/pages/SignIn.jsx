import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return setErrorMessage("Please fill out all fields");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        setLoading(false);
        return setErrorMessage(data.message);
      }

      setLoading(false);

      if (res.ok) {
        navigate("/");
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage(error.message);
    }
  };

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
            <form
              action=""
              className="flex flex-col gap-4"
              onSubmit={handleSubmit}
            >
              <div>
                <Label value="email" />
                <TextInput
                  type="email"
                  placeholder="email"
                  id="email"
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label value="password" />
                <TextInput
                  type="password"
                  placeholder="password"
                  id="password"
                  onChange={handleChange}
                />
              </div>
              <Button color="blue" type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <Spinner size="sm" />
                    <span className="pl-3">Loading...</span>
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>
            <div className="flex gap-2 text-sm mt-2">
              <span>Dont have an account?</span>
              <Link to="/sign-up" className="text-blue-500">
                Sign Up
              </Link>
            </div>
            {errorMessage && (
              <Alert className="mt-5" color="failure">
                {errorMessage}
              </Alert>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
