This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.




<!-- INFORMATION RELATED TO THE PROJECT -->
1. # Installation  
    - Clone the repository:  
      [git clone git@github.com:PoojaMeena99/movie-show-app.git](git@github.com:PoojaMeena99/movie-show-app.git)
    - Navigate into the project directory:  
      `cd imdb-movie-show-app`  
    - Install dependencies:  
      `npm install`  
    - Start the development server:  
      `npm run dev`  

2. # Project Title  
    - IMDb Movie Show App  

3. # How to Use  
    - The page will open with dummy data displayed.  
    - When the user selects a type, enters text in the search input, and clicks the search button, the relevant data will be displayed.  
    - If no type is selected, data for all types will be displayed based on the search input.  


4. # Project Description  
    This is a movie rating project where you can explore movies, search for ratings, and even give your own ratings. Pagination handles multiple data.  
    Built using Next.js and React, along with the Bootstrap library for styling.  
    The app is fully responsive and provides a user-friendly and smooth experience.

5. # Features  
    - **API for Search**  
      [`https://www.omdbapi.com/?apikey=7956112a&s=${value}&page=${page}&type=${type}`](https://www.omdbapi.com/?apikey=7956112a&s=${value}&page=${page}&type=${type})  
    - **API for Title**  
      [`https://www.omdbapi.com/?i=${Id}&apikey=7956112a`](https://www.omdbapi.com/?i=${Id}&apikey=7956112a)  
    - Browse popular movies and shows.  
    - Search for movies by title.  
      [`https://www.omdbapi.com/?apikey=7956112a&s=${value}`](https://www.omdbapi.com/?apikey=7956112a&s=${value})  
    - Pagination for handling more data.  
      [`https://www.omdbapi.com/?apikey=7956112a&page=${page}`](https://www.omdbapi.com/?apikey=7956112a&page=${page})  
    - View detailed information about each movie, including ratings and descriptions.  
      [`https://www.omdbapi.com/?i=${Id}&apikey=7956112a`](https://www.omdbapi.com/?i=${Id}&apikey=7956112a)  
    - Responsive design for desktop and mobile users.

6. # Usage  
    1. Use the search bar to find your favorite movies.  
       [`https://www.omdbapi.com/?apikey=7956112a&type=${type}`](https://www.omdbapi.com/?apikey=7956112a&type=${type})  
        - Movies  
        - Episodes  
        - Series  
    2. Click on a movie card to view detailed information.

7. # Technologies Used  
    - React.js  
    - Next.js  
    - CSS for styling  
    - Bootstrap for responsive and modern styling  
    - OMDb API for data  
    - Vercel for deployment (optional)
