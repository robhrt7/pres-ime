Hello, my name is Robert, I am working as a head of Front-end development at OK.ru, which is a top 10 world social network, with more than 40 mln DAU. During last 2,5 years, along with 10 other front-end devs in my team, besides the main project we’re creating new tool that would suit our development needs. It is called - IME, integrated management environment.

I can see your reaction now, but don’t worry, I have plenty of time to explain what does an IME do.

First, there was a Style Guide, not the designers version, but Style Guide for web.

Last year, at jsconf, Nicole gave a great talk about Living Style Guides for web. Guides for existing styles, that are living within the code and are evolving with your site.

Here’s how basic Living Style Guide looks like. For example, you have a button element, like any web app does, and here’s the way you describe it. One page, with all button states, some description and usage examples.

First of all, Style Guides help you to improve your Front-end code and aid making more thoughtful design choices, considering elements that you already have in your library. Also, as Nicole have mentioned in her talk, good Style Guide helps to improve your app performance, but there is one thing she has not mentioned.

This is where IME comes in to the spotlight. Specialised environment helps us to maximaze the performance of mentioned advantages.

Basically, IME is a Style Guide on Steroids, that accelerates your team performance, and integrates Style Guide usage into your development process much better.

To get Style Guides work more efficiently, it must become a Development Tool. The goal of Front-end IME, is to help you manage and maintain your code blocks library.

As modern Front-end developers, with NodeJS, and ability to write code, that runs in the browser, console or at backend, we can create own IME by our selves. As guys from github created own Text Editor with javascript, we also can make complex tools for development of our own. IME that we are working with is a web app, on top of our Living Style Guides.

Here’s the list of IME features, that I’m going to talk about today.

Lets start from essentials. Every Style Guide must have a convenient navigation both within a single page, and across whole library. In our app, we have also added blocks thumbnails, so any developer that will search through the library would find the necessary block as soon as possible.

Second most important part of Style Guides for web, is the “living” part. We must develop directly inside the style guide, to get it instantly synced with your code base, Without total sync, Style guides perform poorly.

let me show you an example of development process using BEM + living style guides. Probably you have already heard about BEM. It’s a technology stack for creating modern web application in modular way.

As nowadays best practices suggest, the most efficient way to develop Front-end, is to treat it in a modular way. Here’s an example of basic button module, or, so called block. Module has it’s own technologies, like CSS, JS and HTML, ant of course, to test your block, you need to create some examples.

So taking this set of files, as an input, without any additional steps, we could generate a page like this.

We’re already working that way, with our team of about 100 web developers and designers. As I have mentioned, we’re developing an IME, called SourceJS, that of course  is also open sourced. Most of mentioned features today are already developed, and available, and some took an early start. You’re free to fork it or leave some pull requests, and in next few months, after releasing next version, we’ll add some screencasts about SourceJS workflow.

We have already integrated our project structure into Source, and heading straight ahead towards integration with other most popular frameworks.

The main idea behind SourceJS, is to create an Interface between your technologies, and Source Plugins. So that with any technology, through SourceJS api, you could get access to all ecosystem of plugins.

So, talking about plugins, we’re creating our app as modular as possible, and one of those modules we have called and Interactive Style Guides.

As a Front-end superheroes, we could help our colleagues designers, giving them specialised tools, that are also integrated with our app codebase.

For example, here’s a Style guide for text and link colors, that you’re using on your website. None of PDF version Style Guides won’t give you an easy access to colors hash numbers. With this interactive style guide, you could easily search through existing styles, get their CSS class names, and copy information about used colours. This module is also already available at SourceJS home at github.

Next awesome Interactive Style guide is meant to help you manage your graphic files. Imagine that your designers, without knowing VCS or your project structure, could add new images, or update existing ones by drag n dropping them into the browser? Afterwards, all you need is to accept automatically created Pull Reqiest. This part isn’t developеd yet, but soon we’ll definitely show implementation of it to the SourceJS community.

This kind of interactive modules is the future of IME tools, which will make you and your designers much more satisfied.

Next module group is about Collaboration. Using endless possibilities of a web app, we could integrate any tools with our style guides, to stay sync not only with your codebase, but also with your development processes.

One of our plugins gives you a possibility to leave Comments directly on Style Guide page. As you develop in the Style Guide, right in the middle of the process any of your team members can leave feedback about element you’re developing right now. No need to spawn tons of emails, all you need is to open current Style Guide page, and turn on comments mode.

With Style Gudes there are many possibilities for easy testing process of results of your code. As IME replaces the old fashioned index.html with powerful tool, you could use it to improve Front-end testing in lots of new ways.

Out of the box, you have pages with all element states collected, all you need to do is to scroll the Style Guide page after changing your code, and thats it! Open it in different browsers, or check the consistency of newly created elements.

There are also huge possibilities for creating auto tests on top of your Style Guides. For example, you could automatically take screenshots of your pages, and compare its updated version, or make a cross browser tests.

As we already have one place to interact with our team, and test the results of our code changes, we could also output some information from background taksts to the Spec Page. It could be code lints, or performance tests, that runs at background, and all the output could be logically placed right next to the result in the browser.

And at the bonus part of my talk, I will show you our Lego Prototyping tool, that we have made during our last team hackathon. This tool is build on top of Source API, that will be released for 0.4 version on the engine.

As we have logically structured Spec pages, we could parse them to use in our prototyping tools. Our designers wanted to have fast access to all blocks that we have at our library, and here’s how this  tool could help you. All you need to do, is to select appropriate block, and select it’s state.

Another thing, that we made in our working prototype, is an ability to instantly create new pages from existing elements.

As I have mentioned, SourceJS is completely modular, and by default you get only the core functionality, which can be easily enhanced with already developed plugins, or you could write your own.

For real life demos, you could catch me during the conference or after party, I will be glad to share my thoughts and future insights of the tool.

And thats all, you can send me your questions to my twitter account or by email. Thank you!