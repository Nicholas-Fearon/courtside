Courtside

Courtside is a dynamic platform designed for basketball enthusiasts to engage with team rosters, league messages, and player details. The app enables users to view league posts on a central home page or within individual team pages, encouraging interaction and providing a space for fans to stay connected.

Features

    •	Message Posting: Users can post messages on the main league page or on a specific team’s page, allowing for team-centric discussions.
    •	Dynamic Routing: With dynamic routing, users can navigate to individual teams, view their rosters, and select players to see detailed information. Once a message is posted, users are redirected back to the relevant page.
    •	Styling: The app uses Tailwind CSS for responsive, sleek styling and a consistent look across all pages.
    •	Seeding Data: Initial seeded data was created in the Supabase database using PostgreSQL for a structured and reliable data environment.
    •	Favicon: A project-specific favicon has been added for a cohesive branding experience.

User Stories

Core User Stories

    •	🐿️ As a user, I want to view all posts with options to sort them in ascending or descending order so that I can easily find content based on my preferences.
    •	🐿️ As a developer, I want to design a SQL schema that includes a posts table and a comments table, ensuring that comments are correctly associated with the corresponding post ID.
    •	🐿️ As a user, I want to be able to delete posts using a delete button on each post’s page so that I can manage or remove my content from the database.
    •	🐿️ As a user, I want to add comments on individual posts using a user-friendly form.
    •	🐿️ As a user, I want to comment on posts directly on their dedicated pages so that my interactions are contextually tied to the content I view.
    •	🐿️ As a user, I want to be automatically redirected to the posts page after creating a new post so I can immediately see my content in the context of all posts.

Stretch User Stories

    •	🐿️ As a user, I want to categorise my posts during creation so that I can organise my posts and browse other posts by category.
    •	🐿️ As a user, I want to edit my posts on a dedicated route so that I can easily modify my posts.
    •	🐿️ As a user, I want to edit my comments on a dedicated route so that I can revise my feedback.

Requirements

Core Requirements

    •	🎯 Display all posts on the page, with an option to sort them in ascending or descending order.
    •	🎯 Create a SQL schema for a posts table and a comments table, with the comments being connected to the posts table with a foreign key.
    •	🎯 Create a delete button on posts that allows users to delete the post from the database.
    •	🎯 Create a form which saves comments to a dedicated comments table, with the comments being connected to the posts table with a foreign key.
    •	🎯 Allow users to comment on individual posts in their dynamic routes. Comments should be associated with posts, and have a dynamic route (e.g. /posts/:postid).
    •	🎯 Add a redirect when a user creates a post to redirect them to the posts page.

Stretch Requirements

    •	🏹 Implement a select input (or similar mechanism) that allows users to categorise posts during creation, storing them in their own table in the database. Ensure appropriate routing for categories, with endpoints such as /categories and /categories/:id to enable users to browse and interact with posts by category.
    •	🏹 Create an edit functionality accessible via /posts/:id/edit, which pre-fills a form for post data. Create a working PUT route to update the post in the database.
    •	🏹 Develop an edit comment feature accessible via /posts/:id/comments/:id/edit, which pre-fills a form for comment data. Create a working PUT route to update the comment in the database.

Known Limitations

    •	No Delete Button: The project does not currently include a delete button, so users cannot delete posts.
    •	Commenting Feature: Users are unable to add comments to posts.
    •	No Post Categorisation: Users cannot categorise posts into specific categories. However, they do have the flexibility to post on different pages, such as league messages or team-specific messages, which offers a degree of content organisation.
    •	No Post Editing: Posts cannot be edited once created.

Reflection

Building Courtside was both challenging and rewarding. It was the largest project I’ve worked on to date, and there were moments when I got lost and ended up down a rabbit hole. Specifically, I encountered significant issues while trying to implement a delete button and an ascending/descending sorting button. These features led me into debugging an issue with server and client components, which took up a considerable amount of time, and I was still not able to fix the issue. Due to spending so much time on these errors, I was not able to attempt all the stretch goals.

Through this experience, I’ve realised that I need to become more proficient at reading documentation and debugging more efficiently. In future projects, I’ll focus on improving my ability to read through the documentation quickly and thoroughly, and take my time to understand error codes/messages in the terminal. Learning these skills thoroughly during the bootcamp will help me resolve issues faster in the future and better prepare me for a professional setting.

To improve the app, I would focus on what users would need to create a better experience. I believe this includes a more refined user interface (UI), a clear league table with integrated live data for players and standings, and a login section that enables users to delete and edit their messages, post videos, and comment on other users’ posts. These features would enhance the user experience by providing real-time updates, creating a community of fans, and making the app more dynamic and engaging.
