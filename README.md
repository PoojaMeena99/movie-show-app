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

# IMDb Movie Show App  

## 1. Installation  
   Follow these steps to set up the project:  
   - Clone the repository:  
     [git clone git@github.com:PoojaMeena99/movie-show-app.git](git@github.com:PoojaMeena99/movie-show-app.git)  
   - Navigate into the project directory:  
     `cd imdb-movie-show-app`  
   - Install dependencies:  
     `npm install`  
   - Start the development server:  
     `npm run dev`  

## 2. Project Description  
   This is a movie rating application where you can:  
   - Explore movies and TV shows.  
   - Search for ratings.  
   - Provide your own ratings.  

   The app features pagination to handle multiple data points and is built with Next.js and React.js.  
   Styling is handled using Bootstrap, ensuring a responsive and user-friendly experience.
## 3. Features  
   - **API for Search**  
     [https://www.omdbapi.com/?apikey=7956112a&s=value&page=page&type=type](https://www.omdbapi.com/?apikey=7956112a&s=value&page=page&type=type)  
     *(Replace `value`, `page`, and `type` with the respective search term, page number, and type: movie, series, or episode.)*

   - **API for Title**  
     [https://www.omdbapi.com/?i=tt1099212&apikey=7956112a](https://www.omdbapi.com/?i=tt1099212&apikey=7956112a)  
     *(Replace `tt1099212` with the IMDb ID of the movie or show.)*

   - Browse popular movies and shows.  

   - Search for movies, TV shows, or episodes by title.  
     [https://www.omdbapi.com/?apikey=7956112a&s=Half%20Girlfriend](https://www.omdbapi.com/?apikey=7956112a&s=Half%20Girlfriend)  
     *(Replace `Half%20Girlfriend` with the title you want to search for.)*

   - Pagination for managing large data sets.  
     [https://www.omdbapi.com/?apikey=7956112a&page=page](https://www.omdbapi.com/?apikey=7956112a&page=page)  
     *(Replace `page` with the page number to fetch results for that page.)*

   - View detailed information about movies and shows, including ratings and descriptions.  
     [https://www.omdbapi.com/?t=The%20Pursuit%20of%20Happyness&apikey=7956112a](https://www.omdbapi.com/?t=The%20Pursuit%20of%20Happyness&apikey=7956112a)  
     *(Replace `The%20Pursuit%20of%20Happyness` with the title of the movie or show.)*

   - Fully responsive design for both desktop and mobile users.  

   - Integration with local storage for caching user data.  

## 4. How to Use  
   - The page will open with dummy data displayed.  
   - Use the search bar to find your favorite movies, shows, or episodes.  
     - Select a type (Movies, Episodes, Series) and enter text in the search input.  
     - Click the search button to retrieve relevant data.  
   - If no type is selected, the search will display data for all types.  
   - Click on a movie card to view detailed information.
   - You can give rating.

## 5. Usage Examples  
  
  - **Search API Example**  
    [https://www.omdbapi.com/?apikey=7956112a&s=Inception](https://www.omdbapi.com/?apikey=7956112a&s=Inception)  
    *(Replace `Inception` with the search term, `1` with the page number, and `movie` with the desired type: movie, series, or episode.)*

  - **Detail API Example**  
    [https://www.omdbapi.com/?i=tt1375666&apikey=7956112a](https://www.omdbapi.com/?i=tt1375666&apikey=7956112a)  
    *(Replace `tt1375666` with the IMDb ID of the movie or show to fetch detailed information.)*

  - **Search by Type**  
    - **Search API Example**  
  [`https://www.omdbapi.com/?apikey=7956112a&s=Inception&type=movie`](https://www.omdbapi.com/?apikey=7956112a&s=Inception&type=movie)  
  *(Replace `Inception` with the search term and `movie` with the desired type: movie, series, or episode.)*

   - Movies  
   - Episodes  
   - Series  

- **Pagination Example**  
  [`https://www.omdbapi.com/?apikey=7956112a&s=Inception&page=2`](https://www.omdbapi.com/?apikey=7956112a&s=Inception&page=2)  
  *(Replace `Inception` with the search term and `2` with the desired page number.)*

   -## Detailed Information Example  


## 6. Technologies Used  
   - React.js  
   - Next.js  
   - CSS for styling  
   - Bootstrap for responsive and modern UI  
   - OMDb API for movie and show data  
   - Local storage for data management  
   - Vercel for deployment (optional)

## 7. Repository  `Visit the 
  - [GitHub Repository](https://github.com/PoojaMeena99/movie-show-app) to explore the codebase.

## Live Demo  
Check out the app in action: [Live Demo](https://movie-show-app-sage.vercel.app)
