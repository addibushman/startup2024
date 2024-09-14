# As If Wardrobe
## Elevator Pitch
Growing up, every girl dreamed of having Cher’s closet from the 1995 chick flick, Clueless. Not only her wardrobe but her closet app as well. As If Outfits brings this pretend 90’s application to life in a modern way. Staying through to the 90’s theme depicted in the film, this web service allows one to plan outfits seamlessly without sorting through a wardrobe manually, being able to plan out outfits throughout the week, with assistance in knowing what would look good together. Not only this, but As If Outfits also allows you to send your outfits to friends so you can get help deciding what outfit to wear for that special occasion.

## Design
![alt text](./assests/AsIfWardrobeLoginPageDrawing.jpeg)
![alt text](./assests/AsIfWardrobeDemoDrawing.jpeg)

### Key features

- Secure login over HTTPS
- Display of outfit choices
- Ability to select, change and scroll through inventory
- Capability to upload wardrobe onto website
- Ability to save chosen outfit and send to others

### Technologies

I am going to use the required technologies for this project in the following ways.

- **HTML** - Uses HTML structure for creating 2 HTML pages. One for a login page, and the other for choosing ones outfit.

- **CSS** - Uses CSS to style website like a '90s throwback, inspired by the movie Clueless. It'll handle layouts, colors, and making sure everything looks good on different devices.

- **React** - Provides secure login, outfit display, photo upload interface, display other users reactions, and routing components.

- **Service** - Provides a backend with endpoints to support various functionalities:
    - secure login
    - upload wardrobe items
    - ability to send outfits
    - retrieve outfits

- **DB/Login** - stores user information and wardrobe items in database. User credentials are stored securely, only authenticated users can access and modify their wardrobe and outfits. The database also supports features like user registration, login, and tracking of shared outfits.

- **WebSocket** - Enables real-time communication between users, allowing them to see updates and interactions from others immediately.
