// node myFile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

myFile.runContents();

function shouldContinue(){
    // check one: any pending setTimeout, setInterval, setImmediate

    // check two: any pending os tasks? (like server listening on port)

    // check three: any pending long-running operations? (Like fs module)

    return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;
}

// Entire body executes in one 'tick'
while(shouldContinue()) {
    // Node looks at pending timers and sees if any functions are ready to be called

    // Node looks at pendingOSTasks and pendingOperations and calls relevant callbacks

    // Pause execution. Continue when...
    // - a new pendingOSTask is done
    // - a new pendingOperation is done
    // - a timer is about to complete

    // Look at pendingTimers. Call any setImmediate

    // Handle any 'close' events
}


// exit back to terminal