# Angular Standalone Components and their impact on modularity

This is a the accompanying repository for an article about Standalone Components in Angular and their impact on modularity in applications.

You can find the article on: https://www.rainerhahnekamp.com/en/angular-standalone-components-and-their-impact-on-modularity/

This repository consists of 3 version of the same Angular application.

In the first version, an NgModule is located in the application's folder and encapsulates a Service and a Component. An `OutsideComponent` tries to break the encapsulation and accesses both the service and the component.

The second version uses a library that contains the NgModule. In this case, the `public-api.ts` lists the exposed elements. Nevertheless, it is still possible to break the encapsulation.

The third version uses nx with its linting rules that throw an error if encapsulation is violated.
