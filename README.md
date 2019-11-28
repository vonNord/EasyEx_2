# A slightly better but still very easy and simple example

This example is built on the example you can find in https://github.com/vonNord/EasyEx

Here I'm only going to explain the differences.

This example only defaults the state to true (it is November in Norway). We shall also transport the state from the checkbox to the state, not just toggle it. To do this we must have the raining state in the LeftComp also.

1.  RightComp is not changed at all, neither is App or Root.
1.  The LeftComp is changed a bit here and there.
    1. If you take a look at it, it has gotten an isItRaining: boolean in the props. This is so that the wrapper can give us the checked state when the system starts.
    1.  The props is set in the mapStateToProps function towards the end. (```isItRaining: store.rain.rainState```)
    1.  The props is used to set the checkbox state ( ```checked={props.isItRaining}``` ). This is mostly usefull in the first render. (You can imagine that it would change if you where to make another component that changed it.)
    1.  handleCheckboxClick have gotten a parameter!
        ```typescript
        const handleCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
		    console.log("LeftComp:handleCheckboxClick", e.currentTarget.checked );
		    props.onCheckboxClick( e.currentTarget.checked );
    	};
        ```
        We use it to get the checked state out of the checkbox, and pass it into the onCheckboxClick function.
    1.  The mapDispatchToProps function is also changed, the toggle rain and the onCheckboxClick functions both have the Boolean state now.

1.  This leads us to the RainingAction file.
    The toggleRain ActionCreator has gotten a Boolean value as a papameter. It is passing this into the isRaining element in the returned structure.
1.  Which in turn leads us to the RainingTypes file.
    The interface which is returned in the action creator function is the IRainingCheckboxClickAction, and as you can see, it has gotten a ```isRaining: boolean``` element.
1.  Lets look at the reducer.
    1.  We have changed the initialRainingState's rainState to be true at the start. This will make the app start in the raining state, which means that the checkbox will be checked.
    1.  Also,  the reducer takes its rainState from the action instead of the state, ```rainState: action.isRaining```. (Previously it just flipped the state ```rainState: !state.rainState ```.)

And that's it.


Except that we are not really done.

I made some more examples (this is number two):
*   https://github.com/vonNord/EasyEx
*   https://github.com/vonNord/EasyEx_2
*   https://github.com/vonNord/EasyEx_3
*   https://github.com/vonNord/EasyEx_4