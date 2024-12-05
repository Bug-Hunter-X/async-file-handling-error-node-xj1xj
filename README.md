# Unhandled File Not Found Error in Node.js Asynchronous File Processing

This example showcases an uncommon error that can occur when dealing with asynchronous file operations in Node.js using promises.  Specifically, it demonstrates how to properly handle `ENOENT` errors (file not found).  Improper error handling can lead to uncaught exceptions that crash your application.

## The Problem

The `processFile` function uses `fs.promises.readFile` to read a file asynchronously. If the file does not exist, the promise will reject with an `ENOENT` error. Without proper error handling, this rejection will result in an unhandled promise rejection, potentially crashing the application.

## The Solution

The solution is to use a `try...catch` block to catch the `ENOENT` error and handle it gracefully. In this case, a user-friendly message is printed to the console. If other errors occur, a more general error message is displayed.

## Running the Code

1.  Make sure you have Node.js installed.
2.  Create a file named `bug.js` and paste the code into it.
3.  Run the file using `node bug.js`. Observe that because the file doesn't exist it prints out 'File not found: ./myFile.txt'
4. Create the file ./myFile.txt and add some text into it.
5. Run the file again, observe it prints out the contents of ./myFile.txt