# Context API
#react

## Purpose 
This react app will use the Pokemon trading card api to demonstrate context api. Other things to note, is how I am creating my fetch fn in a separate file and how I am passing an array and fn which is from my useState. 

## What is Context? 
Similar to `useState` there is another module (?) that you can import into react, it is `createContext` and `useContext`, what these built-in features do is that they allow you to extract data from wherever you need it. So instead of passing info through props, you could possibly create a context and use that method to get data from another component. This would allow the kids of a parent to communicate/share with one another without the need of going through the parent.

The downside of using context, is that any component that is dependent on the context to display some sort of data will be re rendered in the event that that data gets updated/changed. 

## How to use it? 
1. In a separate file, you will import the `createContext` and you will instantiate a variable that will invoke `createContext()`
2. Next, you will create a functional component called {Data}Provider that will instantiate `useState`.

Think of this component similar to what the parent would do if you wanted to pass information through props, you will need to instantiate the `useState` here, in this Pokemon card app, I also imported an async fetch call fn that will grab data from an api and it will set that data to the variable I assigned (in this case, 'facts').

3. This component will return 
```
<{Data}Context.Provider prop={desired_value}>
{props.children}
</{Data}Context.Provider> 
```

Make sure that wrote the export statement for this component

**NOTE** The steps above, you did two things, you created a CONTEXT and a PROVIDER, they work hand in hand to pass the information that you need via states. 

4. In the component, that you wish to import this context will possibly be the parent of the kids that need the data. You will import the PROVIDER and wrap the Provider around the  components that need to share the context. 

Think of it like Parent = Provider

5. In the child component that will actually import this data you will need to import the CONTEXT, you will also need to import `useContext`, you will write a statement very similar to when you are instantiating hooks but instead of doing `useState` you will set the destructured array equal to `useContext({Data}Context)`

You now have access to the state that has the data that you want, you can pass this down via props to whichever child that may need it. 

Think of it like Child = Context