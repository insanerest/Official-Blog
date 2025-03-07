import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useMatches, useActionData, useLoaderData, useParams, useRouteError, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement, useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout$1({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout: Layout$1,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const Layout = ({ children }) => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("header", { className: "site-header", role: "banner", children: /* @__PURE__ */ jsxs("div", { className: "wrapper", children: [
      /* @__PURE__ */ jsx("a", { className: "site-title", rel: "author", href: "/", children: "while(true) { blog(); }" }),
      /* @__PURE__ */ jsxs("nav", { className: "site-nav", children: [
        /* @__PURE__ */ jsx("input", { type: "checkbox", id: "nav-trigger", className: "nav-trigger" }),
        /* @__PURE__ */ jsx("label", { htmlFor: "nav-trigger", children: /* @__PURE__ */ jsx("span", { className: "menu-icon", children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 18 15", width: "18px", height: "15px", children: /* @__PURE__ */ jsx("path", { d: "M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484S0.665,0,1.484,0 h15.032C17.335,0,18,0.665,18,1.484Z M18,7.516c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,9,0,8.335,0,7.516s0.665-1.484,1.484-1.484h15.032C17.335,6.031,18,6.696,18,7.516Z M18,13.516c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,15,0,14.335,0,13.516s0.665-1.483,1.484-1.483h15.032C17.335,12.031,18,12.695,18,13.516Z" }) }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "trigger", children: [
          /* @__PURE__ */ jsx("a", { className: "page-link", href: "/about/", children: "About" }),
          /* @__PURE__ */ jsx("a", { className: "page-link", href: "/contact", children: "Contact" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("main", { className: "page-content", "aria-label": "Content", children: /* @__PURE__ */ jsx("div", { className: "wrapper", children }) }),
    /* @__PURE__ */ jsx("footer", { className: "site-footer h-card", children: /* @__PURE__ */ jsxs("div", { className: "wrapper", children: [
      /* @__PURE__ */ jsx("h2", { className: "footer-heading", children: "while(true) { blog(); }" }),
      /* @__PURE__ */ jsxs("div", { className: "footer-col-wrapper", children: [
        /* @__PURE__ */ jsx("div", { className: "footer-col footer-col-1", children: /* @__PURE__ */ jsxs("ul", { className: "contact-list", children: [
          /* @__PURE__ */ jsx("li", { className: "p-name", children: "while(true) { blog(); }" }),
          /* @__PURE__ */ jsx("li", {})
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "footer-col footer-col-2", children: /* @__PURE__ */ jsx("ul", { className: "social-media-list", children: /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "https://github.com/insanerest", children: [
          /* @__PURE__ */ jsx("svg", { className: "svg-icon", children: /* @__PURE__ */ jsx("use", { xlinkHref: "./minima-social-icons.svg#github" }) }),
          /* @__PURE__ */ jsx("span", { className: "username", children: "insanerest" })
        ] }) }) }) }),
        /* @__PURE__ */ jsx("div", { className: "footer-col footer-col-3", children: /* @__PURE__ */ jsxs("p", { children: [
          "Welcome to my blog! This is where I share my thoughts on various programming topics. To suggest a topic, email me or comment in the discussion",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://github.com/insanerest/insanerest.github.io/discussions", children: "Discussions" })
        ] }) })
      ] })
    ] }) })
  ] });
};
function Home() {
  return /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsx("main", { className: "page-content", children: /* @__PURE__ */ jsx("div", { className: "wrapper", children: /* @__PURE__ */ jsxs("div", { className: "home", children: [
    /* @__PURE__ */ jsx("h2", { className: "post-list-heading", children: "Posts" }),
    /* @__PURE__ */ jsx("ul", { className: "post-list", children: /* @__PURE__ */ jsxs("li", { children: [
      /* @__PURE__ */ jsx("span", { className: "post-meta", children: "Mar 4, 2025" }),
      /* @__PURE__ */ jsx("h3", { children: /* @__PURE__ */ jsx("a", { className: "post-link", href: "/welcome-to-the-blog", children: "Welcome to the blog" }) })
    ] }) })
  ] }) }) }) });
}
function meta$3({}) {
  return [{
    title: "New React Router App"
  }, {
    name: "description",
    content: "Welcome to React Router!"
  }];
}
const home_page = withComponentProps(function Home_page() {
  return /* @__PURE__ */ jsx(Home, {});
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home_page,
  meta: meta$3
}, Symbol.toStringTag, { value: "Module" }));
function About() {
  return /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsx("main", { className: "page-content", "aria-label": "Content", children: /* @__PURE__ */ jsx("div", { className: "wrapper", children: /* @__PURE__ */ jsxs("article", { className: "post", children: [
    /* @__PURE__ */ jsx("header", { className: "post-header", children: /* @__PURE__ */ jsx("h1", { className: "post-title", children: "About" }) }),
    /* @__PURE__ */ jsxs("div", { className: "post-content", children: [
      /* @__PURE__ */ jsxs("h1", { children: [
        "About ",
        /* @__PURE__ */ jsx("strong", { children: "while(true) { blog(); }" })
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Welcome to ",
        /* @__PURE__ */ jsx("strong", { children: "while(true) { blog(); }" }),
        "—a blog where coding never stops! 🚀"
      ] }),
      /* @__PURE__ */ jsx("h2", { children: "Why This Blog?" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Coding isn’t just about writing lines of logic—it’s about solving problems, breaking things (sometimes on purpose), and figuring out how to fix them. Here, I share my experiences, insights, and maybe even some",
        " ",
        /* @__PURE__ */ jsx("strong", { children: "epic debugging fails" }),
        " along the way."
      ] }),
      /* @__PURE__ */ jsx("h2", { children: "Who Am I?" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "I’m a developer passionate about",
        " ",
        /* @__PURE__ */ jsx("strong", { children: "Website and Software development" }),
        ", always experimenting with new ideas and pushing projects to the next level. This blog is my way of documenting what I learn and sharing it with the world."
      ] }),
      /* @__PURE__ */ jsx("h2", { children: "What to Expect" }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsxs("li", { children: [
          "🔥 Deep dives into",
          " ",
          /* @__PURE__ */ jsx("strong", { children: "Lots of programming languages" })
        ] }),
        /* @__PURE__ */ jsx("li", { children: "🛠️ Hands-on tutorials & coding experiments" }),
        /* @__PURE__ */ jsx("li", { children: "🎮 Game dev insights & project updates" }),
        /* @__PURE__ */ jsx("li", { children: "🤯 Debugging nightmares (and how to fix them)" }),
        /* @__PURE__ */ jsx("li", { children: "📰 Random tech thoughts & industry news" })
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "So, if you love to",
        " ",
        /* @__PURE__ */ jsx("strong", { children: "code, break things, and learn along the way" }),
        ", stick around!"
      ] }),
      /* @__PURE__ */ jsx("p", { children: "Got questions or ideas? Contact me here:" }),
      /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("a", { href: "/contact", children: "Contact me" }) }),
      /* @__PURE__ */ jsx("p", { children: "Also here is the discussion page:" }),
      /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("a", { href: "https://github.com/insanerest/insanerest.github.io/discussions", children: "Discussions" }) }),
      /* @__PURE__ */ jsx("p", { children: "Happy coding! 😃" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "You can find me at GitHub:",
        " ",
        /* @__PURE__ */ jsx("a", { href: "https://github.com/insanerest", children: "Insanerest" })
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "You can find the source code for this blog at GitHub:",
        " ",
        /* @__PURE__ */ jsx("a", { href: "https://github.com/insanerest/insanerest.github.io", children: "Source Code" })
      ] })
    ] })
  ] }) }) }) });
}
function meta$2({}) {
  return [{
    title: "New React Router App"
  }, {
    name: "description",
    content: "Welcome to React Router!"
  }];
}
const about_page = withComponentProps(function About_page() {
  return /* @__PURE__ */ jsx(About, {});
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: about_page,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
function WelcomeToTheBlog() {
  return /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsx("main", { className: "page-content", "aria-label": "Content", children: /* @__PURE__ */ jsx("div", { className: "wrapper", children: /* @__PURE__ */ jsxs(
    "article",
    {
      className: "post h-entry",
      itemScope: true,
      itemType: "http://schema.org/BlogPosting",
      children: [
        /* @__PURE__ */ jsxs("header", { className: "post-header", children: [
          /* @__PURE__ */ jsx("h1", { className: "post-title p-name", itemProp: "name headline", children: "Welcome to the blog" }),
          /* @__PURE__ */ jsx("p", { className: "post-meta", children: /* @__PURE__ */ jsx(
            "time",
            {
              className: "dt-published",
              dateTime: "2025-03-04T13:09:39-05:00",
              itemProp: "datePublished",
              children: "Mar 4, 2025"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "post-content e-content", itemProp: "articleBody", children: [
          /* @__PURE__ */ jsx("p", { children: "Welcome to My blog —a space where ideas come to life, knowledge is shared, and conversations begin. Whether you’re here to learn something new, explore fresh perspectives, or just enjoy a good read, you’ve come to the right place." }),
          /* @__PURE__ */ jsx("p", { children: "This blog is dedicated to programming and coding thoughts, I might sometimes go a bit off-topic in a post. My goal is to provide insightful, engaging, and valuable content that sparks curiosity and encourages discussion." }),
          /* @__PURE__ */ jsx("p", { children: "I’d love to hear from you! Feel free to share your thoughts, ask questions, or start a conversation in the discussion page. Let’s build a community where we can learn and grow together." }),
          /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("a", { href: "https://github.com/insanerest/insanerest.github.io/discussions", children: "Discussions" }) }),
          /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("strong", { children: "I will be posting on the blog twice a week, every Monday and Friday, so be sure to check in regularly for new content. Stay tuned for updates and exciting posts!" }) }),
          /* @__PURE__ */ jsx("p", { children: "Thanks for stopping by, and I hope you enjoy the journey ahead!" }),
          /* @__PURE__ */ jsx("p", { children: "— Insanerest" })
        ] }),
        /* @__PURE__ */ jsx(
          "a",
          {
            className: "u-url",
            href: "/welcome-to-the-blog.html",
            hidden: true
          }
        )
      ]
    }
  ) }) }) });
}
function meta$1({}) {
  return [{
    title: "New React Router App"
  }, {
    name: "description",
    content: "Welcome to React Router!"
  }];
}
const welcomeToTheBlog_page = withComponentProps(function welcomeToTheBlog_page2() {
  return /* @__PURE__ */ jsx(WelcomeToTheBlog, {});
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: welcomeToTheBlog_page,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
    }
  );
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline: "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}
function Card({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      ),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-6", className),
      ...props
    }
  );
}
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };
  return /* @__PURE__ */ jsx(Card, { className: "max-w-lg mx-auto p-4 shadow-lg", children: /* @__PURE__ */ jsxs(CardContent, { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", children: "Contact Us" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
      /* @__PURE__ */ jsx(
        Input,
        {
          type: "text",
          name: "name",
          placeholder: "Your Name",
          value: formData.name,
          onChange: handleChange,
          required: true
        }
      ),
      /* @__PURE__ */ jsx(
        Input,
        {
          type: "email",
          name: "email",
          placeholder: "Your Email",
          value: formData.email,
          onChange: handleChange,
          required: true
        }
      ),
      /* @__PURE__ */ jsx(
        Input,
        {
          type: "text",
          name: "subject",
          placeholder: "Subject",
          value: formData.subject,
          onChange: handleChange,
          required: true
        }
      ),
      /* @__PURE__ */ jsx(
        Textarea,
        {
          name: "message",
          placeholder: "Your Message",
          value: formData.message,
          onChange: handleChange,
          required: true
        }
      ),
      /* @__PURE__ */ jsx(Button, { type: "submit", className: "w-full", children: "Submit" })
    ] })
  ] }) });
}
function meta({}) {
  return [{
    title: "New React Router App"
  }, {
    name: "description",
    content: "Welcome to React Router!"
  }];
}
const contact_page = withComponentProps(function Contact_page() {
  return /* @__PURE__ */ jsx(Contact, {});
});
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: contact_page,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/Official-Blog/assets/entry.client-BFhZpkrh.js", "imports": ["/Official-Blog/assets/chunk-HA7DTUK3-DItZKCSJ.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/Official-Blog/assets/root-B4YlFIed.js", "imports": ["/Official-Blog/assets/chunk-HA7DTUK3-DItZKCSJ.js", "/Official-Blog/assets/with-props-Db1jVSdq.js"], "css": ["/Official-Blog/assets/root-CzwzSSwt.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home_page": { "id": "routes/home_page", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/Official-Blog/assets/home_page-CkUvhYxY.js", "imports": ["/Official-Blog/assets/with-props-Db1jVSdq.js", "/Official-Blog/assets/chunk-HA7DTUK3-DItZKCSJ.js", "/Official-Blog/assets/Layout-lQFKzjqq.js"], "css": ["/Official-Blog/assets/Layout-DjRljC5C.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "routes/about_page": { "id": "routes/about_page", "parentId": "root", "path": "/about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/Official-Blog/assets/about_page-B7efQpkG.js", "imports": ["/Official-Blog/assets/with-props-Db1jVSdq.js", "/Official-Blog/assets/chunk-HA7DTUK3-DItZKCSJ.js", "/Official-Blog/assets/Layout-lQFKzjqq.js"], "css": ["/Official-Blog/assets/Layout-DjRljC5C.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "routes/post_routes/welcome-to-the-blog_page": { "id": "routes/post_routes/welcome-to-the-blog_page", "parentId": "root", "path": "/welcome-to-the-blog", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/Official-Blog/assets/welcome-to-the-blog_page-CAWQlxpw.js", "imports": ["/Official-Blog/assets/with-props-Db1jVSdq.js", "/Official-Blog/assets/chunk-HA7DTUK3-DItZKCSJ.js", "/Official-Blog/assets/Layout-lQFKzjqq.js"], "css": ["/Official-Blog/assets/Layout-DjRljC5C.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "routes/contact_page": { "id": "routes/contact_page", "parentId": "root", "path": "/contact", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/Official-Blog/assets/contact_page-BRgFtMwd.js", "imports": ["/Official-Blog/assets/with-props-Db1jVSdq.js", "/Official-Blog/assets/chunk-HA7DTUK3-DItZKCSJ.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/Official-Blog/assets/manifest-962afa44.js", "version": "962afa44" };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const publicPath = "/Official-Blog/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home_page": {
    id: "routes/home_page",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/about_page": {
    id: "routes/about_page",
    parentId: "root",
    path: "/about",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/post_routes/welcome-to-the-blog_page": {
    id: "routes/post_routes/welcome-to-the-blog_page",
    parentId: "root",
    path: "/welcome-to-the-blog",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/contact_page": {
    id: "routes/contact_page",
    parentId: "root",
    path: "/contact",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routes,
  ssr
};
