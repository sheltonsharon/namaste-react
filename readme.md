#Namaste React

#Parcel
- Created dev build
- Local Server
- whenever the file is saved, the page reloads because of `HOT MODULE REPLACEMENT`
- Parcel uses a File Watching Algorithm to do that, which is written in C++
- Each time we build the app, parcel will use `caching` and provide faster builds.
- Parcel also does image optimization for you
- Minifies the files for production build - removed white spaces etc.
- Compress the files
- Code splitting
- Differential bundling - support for older browsers
- Diagnostic - Showing errors will be different and looks pretty
- Better error suggestion
- Gives you a way to host the app on HTTPS as well(currently it is in the localhost which is HTTP)
- Tree Shaking - removes unused code
- Different bundle for dev and production - more optimization for prod build and thus takes more time to build

#browsersList
- It is a property in package.json file
- versions in which our app will definitely work and in other versions that it might or might not work
- While making applications for users who are extremely important and you know that your users will use oldest of the oldest browser versions, they this might be helpful for you to add.
- `Last 2 versions` will support for last 2 versions of all browsers

