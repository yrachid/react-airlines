# React Airlines

How the hell React works?

## Dependencies

- Java 8
- Docker
- Node/npm
- Patience

## Running

Start Postgres docker container:

```bash
# Make sure you have Docker
./gradlew dbSetup
```

Run webpack on watch mode:

````bash
./gradlew transpileDev
````

Run application:

```bash
./gradlew bootrun
```

Get help:

````bash
# Look for "Local Development tasks" 
./gradlew tasks
````

## Links

- [Afinal, como é que se começa um projeto em React com Webpack?](https://medium.freecodecamp.org/part-1-react-app-from-scratch-using-webpack-4-562b1d231e75)
- [Webpack with IntelliJ](https://www.jetbrains.com/help/idea/using-webpack.html)
- [React with IntelliJ](https://www.jetbrains.com/help/idea/react.html)
- [React with HTTP](https://www.javascriptstuff.com/react-ajax-best-practices/)
- [You probably don't need derived state](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html)