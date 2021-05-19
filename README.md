# Shiitake Posts Server API (after adding s3 Uploading)

This is my posting platform api with the added ability for user's to upload their own images. For a more thorough description of the base posting platform scroll to the bottom. For the cover image, a user can either select to upload their own image or use an image url. I thought that both features had their use cases so I kept both. There is a checkbox you have to click to use image uploading. The image preview shows the current cover Url image if editting a post and then changes accordingly if you upload an image. It defaults to a stock image of some mountains if creating a new post.

[deployed url for client](https://unruffled-nightingale-6ea4fb.netlify.app/)

[deployed url for api](https://shiitakeposts.herokuapp.com/)

## What Worked Well

- Since I previously made my post and new post component into one, the process of adding uploading to both was really simple.

- The design of editting a post/creating a new post looks better with the added image preview. 

## What Didn't

- I am just noticing now that the initial time my site loads it takes a good 30 seconds for the posts feed to load. After that, it works fine. I am not sure if its something I did wrong in the setup or maybe its my internet connection. This does not happen in my local environment. 

- The assignment page was not updated for Amazon's new site layout. Navigating their site was surprisingly difficult because of how many things/menus there are. 

- Besides that, the assignment seemed pretty straight forward. 

## Extra Credit

- maybe the feature to switch between cover image url input and uploading an image from your computer?

# Shiitake Posts Server API (after adding user authentication, SA7)

This is my posting platform with an added layer of user authentication. For a more thorough description of the base posting platform scroll to the bottom. For the user authentication, I implemented it as specified in the short assignment. For displaying authors, I had quite a few old posts that I did not want to delete so I made it so that any post without an author will have "anonymous" as an author. The author appears in the bottom-right corner of a post when viewing the main posts page and appears near the top of a post in a post's full view mode. I made it so that you cannot sign up with a repeat user name and you have to fill out all fields in the sign in/up. If you did not fill out all fields you will get a small message at the bottom telling you to do so and if you entered bad credentials you will be shown an error page. 

[deployed url for client](https://unruffled-nightingale-6ea4fb.netlify.app/)

[deployed url for api](https://shiitakeposts.herokuapp.com/)

## What Worked Well

- I was able to reuse a few of the smaller features I implemented before like page animations, button designs, error pop ups, making sure that all fields are filled out, etc. in my sign in/sign up pages. 

- With the added Sign in and up links in my nav bar and the simplication of my Create a Post button, I was able to create a better looking iteration of my nav bar.

## What Didn't

- I could not figure out how to show the type of authenification error failure (e.g. if a failure was due to a bad email address or a bad username). The current error message just shows error codes that are not particularly useful to the average user. If you get an error it might be hard to tell what you did wrong. I cleared out any test users except for myself: username: Jacob, email: f003frq@dartmouth.edu, so you shoudn't need to worry about repeats. Every email and username besides these should work. 

## Extra Credit

none :(

# Shiitake Posts Server API (before adding user authentication)

This is the api of the Shiitake Posts platform. The api is pretty standard, I just followed the directions in the lab assignment. 

[deployed url for api](https://shiitakeposts.herokuapp.com/)

[deployed url for client](https://unruffled-nightingale-6ea4fb.netlify.app/)

## What Worked Well

- Finding and calling the mongoose commands, they seemed pretty straight forward. 

- Getting this hooked up to my blog frontend.

## What Didn't

- I would have liked to spend some time on extra credit, but unfortunately I did not have enough time.

- Nothing didn't work well. Everything in the assignment seems to work well. Hopefully, I didn't miss a bug or anything. 

## Extra Credit

- none :(

