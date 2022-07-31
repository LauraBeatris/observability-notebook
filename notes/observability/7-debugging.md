# Debugging

> In the field of engineering as a whole, when we talk about going back to first principles, what we mean is to throw out everything that you know. Let's start by understanding the system from the laws of physics, or the laws of mathematics, instead of trying to “read the manual” to see what this machine says it does 

If you use observability, you're actually doing a **debugging from first principles**

When we have a really well-functioning core analysis loop, where you're able to rapidly form hypotheses and test them, you no longer need to make this kind of leaps of intuition to the one magically right hypothesis

Instead, you can test a lot of different hypotheses and kind of narrow down your search space

In the previous way of debugging, it used to be that you would kind of have this one person who knew the system really well on their read, who could immediately jump to knowing what the right answer was

> "I start by looking at the flow of execution of one request, to try to understand what does, for instance, a normal request look like, and what does an abnormal request look like. Where do they differ? What services are they passing through? Where are they spending their time? Finding examples of traces that exemplify both the slow path and the fast path and then that will bring to mind hypotheses and ideas about why might these two things be different so that I can start testing them”

Anyone on your team who has learned how to do first principles debugging, is able to step into any unfamiliar situation and to figure it out in a predictable amount of time

The goal should be on to not rely on experts of the codebase, but to make it so that in a worst-case scenario of someone who's inexperienced but knows first principles debugging, the issue will take 10 minutes of 30 minutes at most to debug rather than many hours
