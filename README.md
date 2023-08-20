# coco.tn-server

Une application mobile de covoiturage de colis est une application qui permet aux utilisateurs de mettre en relation les expéditeurs et les transporteurs de colis. Il permet aux expéditeurs de publier des annonces pour des colis à transporter, et aux transporteurs de consulter ces annonces et de proposer leurs services pour le transport des colis.




##


## Environment variables

- PORT=3500
- url_dev="http://localhost:"
- DATABASE_URI=""
- JWT_SECRET=""
- JWT_REFRECH_SECRET=""
- JWT_EXPIRE=""
- JWT_REFRECH_EXPIRE=""
- host= ""
- portFtp= 
- username= ""
- password= ""
- path_Storage=''
- roleAdmin= ""
- roleAnnoncer= ""
- roleTransproter= ""
- roleGuest= ""
- serverKeyFirebase=""
- statutColisDefault=""
- idRoleAnnoncer=""


## Backend

### tecnologies:

- Node.js/ Express
- MongoDB / Mongoose
- Json WTK
- WebSocket.io

### Features:

- Authentication using Json Web Tokens
- multter
- password encryption using bcrypt library
- FCM firebase push notification
- password encryption using bcrypt library
- OOP


### Design patern(MVC):
- Routes
- controlles
- models
- configs
- services
- helpers
- utils
- storage
- upload
- validation

- **request supported** : GET, PUT, POST, DELETE

- **routes:** 
- USERS ,
- PROFIL,
- ANNONCE,
- PROPOSITION ,
- AUTH (Login/SingUp),
- CHAT
- COLIS
- REQUEST UPGRADE ROLE
- REVIEW 

- **MIDDLEWARE:** 
- annouce
- auth
- chat
- firebase
- user

- **modles:** 
- address
- annouce
- colis
- content
- document
- guest 
- image
- message
- notification
- profil 
- proposal
- requestUpgrade 
- review
- role 
- room 
- statusColis
- transporter 
- user


- initial mongoose set up with :  role (admin transporteur annonceur).

