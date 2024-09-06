# Advice App



### This is a simple App to fetch the advice from Advice API

<br/>

#### In this project used below react topics:

```
    useState - To render the data whenever we click the button
    useEffect - It will load the data, initally before rendering the page
    Components - Created Re usable Component
    Props - To pass the parameters from one component to other component
```

<br />

### API To fetch the data from Advice:


Here, I have used Fetch Method to retrieve the data from API. It is a async method.

```
    const res = await fetch('https://api.adviceslip.com/advice');
```


### How to Run The Application


```

git clone https://github.com/Anilajay12/react-learning.git 

cd advice-app 

npm install 

npm run dev

```

##### npm install 
It will install the required node modules as per package.json file <br />

##### npm run dev
It will start the application in 5173 port by default.  [visit: localhost: 5173 to view the applicaition](http://localhost:5173)

<br /><br/>


[For more details read the api documentation. Click Me ➡️➡️. Happy Coding 🙂🙂](https://api.adviceslip.com/)