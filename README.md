# microfrontends
Micro Frontends Architecture using React.js and Webpack

##########

 SetUp will be having Webpack 5 and Module Federation Plugin. 


##########

Micro Frontends have been growing, recently, because of the need to break the Frontend monolith and the success showed in Microservices architecture.

“Good frontend development is hard. Scaling frontend development so that many teams can work simultaneously on a large and complex product is even harder.” Martin Fowler

Webpack 5 has a new feature, Module Federation, which allows multiple webpack builds to work together. One application can dynamically run code from another bundle or build, on the client and the server. This is the foundation of micro frontends.

##

What is a Micro-Frontend?
Micro front-ends are a way to split the monolith front-end codebase into smaller, more manageable pieces. As a result, front-end teams can enjoy similar benefits to those of microservices: maintainable codebases, autonomous teams, independent releases, and incremental upgrades.

 In the Micro-Frontend Architecture, there is a “Host” or a “Container” page that can host one or more Micro-Frontends. The Host/Container page can also share some of its own Micro-Frontend components.

##
Why Micro Frontends?

The Micro-Frontends architecture was introduced to solve multiple issues with the current SPA frontend development.

Here are some of the benefits of Micro-Frontends:
- Team Scalability: Multiple teams can work independently to contribute to multiple systems. This allows us to divide the work and scale it through multiple teams.
- Single responsibility: This Will allow each team to build components with a single responsibility. The hosting team can focus on analytics, performance and each feature team can focus on customers. Both teams can work 100% on their particular areas. The host page team can focus 100% on creating a great host page. Each Micro Frontend team will focus 100% on the functionality of their Micro Frontend.
- Reusability: We will be able to use code in multiple places. One component will be built and deployed and different teams can re-use it.
- Technology agnosticism: Micro Frontends architecture is independent of technology. You can use components from different technology (JavaScript, React, Vue, Angular …). You do not have to worry about deploying or building them.
- Learning Curve: For new engineers joining the teams, it is easier to learn smaller apps than understanding a monolith with thousands of lines of code.


##

## Webpack Module Federation Plugin: 
In short, Module Federation allows JavaScript application to dynamically import code from another application at runtime. The module will build a unique JavaScript entry file which can be downloaded by other applications by setting up the Webpack configuration to do so.
It also tackles the problem of code dependency and increased bundle size by enabling dependency sharing. For example, if you’re downloading a React component, your application won’t import React code twice. The module will smartly use the React source you already have and only import the component code.

Webpack is a well-known framework that is widely used in Frontend for years. Webpack added a new plugin for Micro-Frontends that solved most of the issues with previous frameworks. It does not require added overhead for systems that are already using Webpack. Webpack is an open-source JavaScript module bundler. Simply, Webpack takes modules with dependencies and generates static assets representing those modules that can be stored in a Web-enabled AWS S3 storage to have a website without servers. It can be used with Nginx to route URLs to the appropriate bucket on S3. It is very efficient as it reduces the need for servers and reduces the package size to only needed dependencies. 

In Micro-Frontends architecture, Webpack Module Federation allows JavaScript application to dynamically import code from another application at runtime from different URLs. Webpack provides Build-time and Run-time integrations without the need for a server. It also tackles the problem of code dependency and increased bundle size by enabling dependency sharing. For example, if you’re downloading a React component, your application won’t import React code twice. The module will smartly use the React source you already have and only import the component code. Finally, you can use React.lazy and React.suspense to provide a fallback should the imported code fail for some reason, making sure the user experience won’t be disrupted because of the failing build.



https://webpack.js.org/concepts/module-federation/


The Module Federation includes the following options:
name: Will be used as the entry file name if filename is not set.
library: Will assign the output of the build into the variable app1 .
filename: The name of the specialized entry file.
exposes: Expose the component for consumption by other apps.
shared: This library will be imported if the consumer app doesn’t have it.






##########
Src and Ref:

https://blog.bitsrc.io/how-we-build-micro-front-ends-d3eeeac0acfc
https://blog.bitsrc.io/revolutionizing-micro-frontends-with-webpack-5-module-federation-and-bit-99ff81ceb0
https://levelup.gitconnected.com/micro-frontends-what-why-and-how-bf61f1f0a729
https://blog.bitsrc.io/revolutionizing-micro-frontends-with-webpack-5-module-federation-and-bit-99ff81ceb0
https://betterprogramming.pub/micro-frontends-using-webpack-5-module-federation-3b97ffb22a0d