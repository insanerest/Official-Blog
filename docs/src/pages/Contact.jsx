import { useState, useEffect } from "react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import Layout from "../../public/Layout";
import { useForm, ValidationError } from "@formspree/react";


export default function Contact() {
  const [formStatus, setFormStatus] = useState("");
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_KEY);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (state.succeeded) {
      setFormStatus("Form Submitted");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else if (
      !state.succeeded && (state.errors || state.result)
    ) {
      setFormStatus("There was a problem. Please try again later");
    }
  }, [state]);
  return (
    <Layout>
      <Card className="max-w-lg mx-auto p-4 shadow-lg">
        <CardContent>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <Input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <ValidationError
              prefix="Subject"
              field="subject"
              errors={state.errors}
            />
            <Textarea
              name="message"
              id="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <Button
              type="submit"
              className="w-full"
              disabled={state.submitting}
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
      <br/>
      <center><p className="message">{formStatus}</p></center>
    </Layout>
  );
}
