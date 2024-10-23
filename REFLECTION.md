# Reflections

I deployed the application on vercel and setup the project schema into a supabase project.

I added the generateMetadata function to the posts page to provide a dynamic page title based
upon the post that is being visited; I added an error.js to the site to capture the error, however,
have not spent time on styling this, The site already handled the situation of multiple upvotes, however,
I decided to fix the constraint to ensure that this couldn't happen inside of the database.

I also implemented the tiptap editor onto the website, this was was generally a bit more tedious, I did implement
a super simple set of theming in order to make it 'appear' on the page
