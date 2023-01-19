### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
    facilitates making a client-side router in React

- What is a single page application?
    an application that has all its functionality on a single webpage, with no refreshing, usually uses client-side routing

- What are some differences between client side and server side routing?
    client side, as the name suggests, is done on the client side and never refreshes the page when navigating to different parts of the app,
    server side routing communicates with the server to get the information to render on the next page, refreshes the page 

- What are two ways of handling redirects with React Router? When would you use each?
    build in redirect component, or pushing onto the built in history object in the browser. the redirect component is useful
    for redirecting the user away from an url they shouldn't be going to, and pushing to the history object is useful when you need
    to redirect after a series of operations

- What are two different ways to handle page-not-found user experiences using React Router? 
    including a 404 component at the end of your routes list that will match if the Router can't match with any of the above routes,
    or you could have a redirect to a different page if the Router can't find the url

- How do you grab URL parameters from within a component using React Router?
    the useParams hook, which returns an object with the key and value corresponding to the specified params

- What is context in React? When would you use it?
    context is universal data accessible across the whole application, and accessible across all components

- Describe some differences between class-based components and function
  components in React.
    class-based components extend a single component class, function components originally did not allow you to use state or use any 
    lifecycle methods but they do now thanks to hooks

- What are some of the problems that hooks were designed to solve?
    hooks reduces the amount of code you need to write and they can be reused easily between components