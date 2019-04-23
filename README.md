# Frontend Coding Guide

## Introduction
When developing software as an organization, the value of the software produced is directly affected by the quality of the codebase. Consider a project that is developed over many years and handled/seen by many different people. If the project uses a consistent coding convention it is easier for new developers to read, preventing a lot of time/frustration spent figuring out the structure and characteristics of the code. For that purpose, we need to make sure we adhere to the same coding conventions across all of our products. This will not only help new developers, but it will also aid in quickly identifying potential flaws in the code, thereby reducing the brittleness of the code.

## This Application
This application is built how we want our applcations to be build. Browse around and learn how we like to build things. Read the comments throughout the files. They guide you to what the code is doing and why we do it that way.

#### Good Places to Look
* [Search Component](src/pages/search/index.tsx)
* [Search Thunks](src/actions/search/thunks.ts)
* [Search Action Creator Types](src/types/search/action-creators.d.ts)
* [Redux Types](src/types/redux/index.ts)

#### Instructions to Compile Application
1. Clone this repository
2.  `npm install`
3.  `npm start`

## Our Guides
Guides are still a work in progress. This application is complete, use that as your final rule.
* [Typescript Guide](guides/typescript.md)
* [Our Stack](guides/stack.md)
* [How To Guide](guides/howto.md)