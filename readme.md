ok google how to use react native

// Let's put all of our notes at the top so it's easy to read first OK?? Ok.

// Just type npm start to get the expo framework up and press 'i' for ios or 'a' for android simulators

// look inside components and screens folders for all the stuff we need to code

// Also, let's use those issue buttons, they totally show up as activity on our profile =)




    {/* this is an example of how you can make buttons to navigate with a stack navi, it will auto create a back button  */}
    {/* all you have to do is pass a string to props.navigation.navigate() that is defined in App.js in the routes  */}
    <Button
        title="Go to MapScreen"
        onPress={() => props.navigation.navigate('Map')}
    />



