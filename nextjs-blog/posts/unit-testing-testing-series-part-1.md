---
title: '🧪 Unit Testing - Testing Series - Part 1'
date: '2022-06-02'
read: '10 min read'
---

Testing is an important part shipping successful code. Simply put, it helps you instill confidence in your codebase because the chances of bugs and unexpected behaviours are greatly reduced. What’s more is that even after we have worked night and day to ship code that works, a future update to the codebase could very easily have a breaking effect on the existing code — Without a testing framework in place, you’re going to be one sad developer.

Testing comes in a few forms, including, but probably not limited to Unit Testing, End-2-End Testing, Integration Testing and Acceptance testing, Accessibility (a11y) Testing, Regression Testing, Smoke Testing... AHHH 😖

My experience is pretty strictly limited to Unit and Integration testing, so I will focus on just those now and look forward to the day when I am swimming _translates — drowning_ in a sea of test variations!

## A simple test

If you’re writing any sort of JavaScript, whether you realise it or not, you are probably writing many tests. I’ll go out on a whim and say that every `IF` statement is a test because they form conditions out of two or more values tht go on to evaluate to some resulting outcome.

```jsx
if (1 + 1 === 2) return 'Success'; // see, a test!
```

If you’re not writing code, you might be wondering why we need to write tests if the code that we write is already filled with tests? Afterall, that’s what I said, it’s a reasonable question to ask! The simplest answer is that we can make mistakes. The more nuanced answer is that as developer teams and codebases grow, bugs are introduced and things can start to get wacky. Tests by design are intended to be repeatable. They make assersions that can be tested against the codebase without actually modifying the codebase in any way. This is what can be described as a testing framework.

Let’s convert the exact test from above into a framework-style test for illustration.

```jsx
const sum = (a, b) => a - b; // Testing this function logic

const result = sum(1, 1); // calling our function with some values const expected = 2

if (result !== expected) {
  console.log(
    `The result, ${result} is not equal to the expected, ${expected}.`
  );
}
```

So in the above snippet, I’m trying to check my logic in line 1. The value of result on line 3 will evaluate to be whatever the outcome of my function logic is. Next, on line 5, I’ve made an assertion about what I think the outcome will be — In this case, 2. Finally, I write a test case to check the result of my function against the expected outcome. If it fails, a message is printed to the console. The above test fails. Can you see why?

## Testing Frameworks

Testing frameworks help us to package up a bunch of tests and pit them against our code. The aim is to highlight errors, or the inverse, confirm that things are doing what we expect. One other major benefit is that they allow us to understand where any potential issues are in the codebase through the messages that the provide when the test runs. Consider that if we ran the above snippet, it would only tell us that the console log was printed and the line of the log but it wouldn’t give us any more information about the problem so that we could go and fix it. Proper testing frameworks do!

## Jest

Jest is the framework that I have the most experience with and the one that I will show examples for here. It’s made, or at least owned by Facebook, but is open source and entirely free to use. If you want to explore it, you can visit [jest.io](http://jest.io) to get started. I won’t attempt to teach you how to use it, but you should be able to glean tips from this post.

### Expect

In jest, `expect` statements are used to confirm the assertion(s) we make within the test(s) that we are conducting. They are, in effect, the conditions that need to be met in order for our tests to pass.

There are a bunch of ways in which we can use `expect` assertions to write tests. Let’s look under the hood at this simple `toBe` function which is one of the fundamental matchers to compare primative values in Jest. This is much the same as the above example, written in a way that simulates what a framework like Jest is doing.

When you run this code, the expect function is invoked with the result. Within the expect function, we have a `toBe` function which takes the value of expected and performs its comparison. Under the hood, that is how the `toBe` matcher works!

```jsx
const sum = (a, b) => a - b; // Faulty function logic

const result = sum(1, 1); // result

const expected = 2; // Our assertion

function expect(result) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}
```

Testing frameworks perform the above actions and more, in a much cleaner, more informative way that allows us to see what has been tested in the code base, and where any attention needs to be placed if we discover a bug.

This is an example of a failing test amongst many passing tests. We can see that Jest has identified the problem, right down to the line of code where we can investigate and resolve the bug. Something that is very hard to achieve using the manual methods shown above.

## In summary..

Testing frameworks are fantastic and it goes without saying that quality testing goes far beyond what I have covered here. This post is in continous development and I plan to add to it as I build my testing experience.

In part 2 of this post, I’ll look at Test Driven Development and the ‘Happy Path’ paradigm.

I’m currently looking for a permanent development role so if you have an exciting project that I can be a part of, I’m all ears! Get in touch directly via [LinkedIn](https://www.linkedin.com/in/akinfagbohun/)...
