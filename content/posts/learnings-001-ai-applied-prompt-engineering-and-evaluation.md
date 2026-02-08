---
title: "[Learnings] 001 - AI Applied (Prompt Engineering and Evaluation)"
date: "2025-12-17"
description: "The two main ways AI Engineers boost their outputs — Prompt Engineering and Evaluation."
tags: ["AI", "Learnings"]
---

This is typically the part of using AI models that differentiates the power users from regular users.

I'll admit for the longest time I avoided looking at my prompts and was a strong believer that I can brute force repeat my way into an output that works, but that's a waste of time and money (tokens).

Instead there are 2 main ways most AI Engineers really boost their outputs - Prompt Engineering and Evaluation.

So what's the difference?

**Prompt Engineering** - Best Practices for improving prompts

**Prompt Evaluation** - Automated Testing to measure how well your prompts work.

I'll start with Prompt Evaluation and then go into some Prompt Engineering Techniques.

---

## Prompt Evaluation

This typically follows a simple, 5-step cycle of iteration (as most things in computer science do):

### i. Draft a Prompt

Here you can either just create any text you would normally pass in or a prompt based on some of the prompt engineering techniques I will cover soon. This is the prompt you want to improve!

Example:
```
prompt = f"""
Please answer the user's question:

{question}
"""
```

### ii. Create an Evaluation Dataset

An evaluation dataset contains inputs that we'll feed into our prompt. For each combination of prompt and input, we'll run the prompt and analyze the results.

Say our goal is to create a prompt to give us valid code for various AWS specific tasks, now to test our prompt we will need some AWS tasks, here we can create our own by hand to test our prompt or we can make the model create our test dataset as well! Here is an example:

```
{
  {
    "task": "Parse an AWS S3 bucket name from an S3 URI and extract just the bucket name",
  },
  {
    "task": "Write a Python function that validates an AWS IAM role ARN format",
  },
  {
    "task": "Create a JSON CloudFormation template snippet for an S3 bucket with versioning enabled and public access blocked",
  },
}
```

Or to continue our first example with the prompt "Please answer the user's question:", our evaluation dataset may look something like:

- What is 2 + 2?
- How many hours are in the day?
- Who is Buzz Aldrin?

### iii. Feed through AI Model

Now you feed your original prompt (step 1) with the evaluation dataset questions (step 2). So in our example you will send the model something like:

```
Please answer the user's question:
What is 2 + 2?
```

### iv. Feed into a Grader

Here the grader evaluates the quality of the model's output, examining things like response based on the original question.

In our example, the grader might assign:

- Math question: 10 (perfect answer)
- Time question: 4 (needs improvement)
- Buzz Aldrin question: 9 (very good answer)

The average score across all questions gives you an objective measurement: (10 + 4 + 9) / 3 = 7.66

### v. Change Prompt and Repeat

Lastly we may modify our prompt, run it through the same evaluation framework and see if our grader gives it a higher score, for example we may change our prompt to something like:

```
prompt = f"""
Please answer the user's question:

{question}

Answer the question with Ample detail.
"""
```

## Graders

Now that we have looked into the full workflow I want to breakdown the types of graders before we move onto Prompting (Prompt Engineering). There are 3 main types of graders:

**i. Code** - Programmatically evaluate the result. Here we will do things like check output length, Validate Syntax, See how reliable our output would be.

**ii. Model** - Ask a model to assign a score to the output or compare 2 versions. Here we have an AI model check for things like response quality, quality of instruction following and Completeness.

**iii. Human Based** - Ask a human to assign a score. We are judging based on overall general quality, comprehensiveness, depth and overall "vibe".

And typically you will have an evaluation criteria that will combine the use of multiple graders, so like the format and syntax maybe are programmatically checked and then a model grades the task following.

---

## Prompt Engineering

This is the discipline of improving prompts based on a few key methods.

### BE CLEAR

1. Use Simple Language ("Summarize this" not "Provide a comprehensive thematic overview")
2. State what you want explicitly ("Write a 3-paragraph summary" not "Write a summary")
3. Lead your Prompt with a simple statement of the model's task ("You are a copywriter. Write a tagline for...")

### BE DIRECT

4. Use Instructions, not questions ("Write a summary" not "Can you write a summary?")
5. Use direct action verbs ("Write a poem about X" not "I was wondering if you could maybe write...")

### BE SPECIFIC

6. Provide a list of guidelines or steps to direct the model
   - 6.1. List the qualities the output should have ("Make it formal, under 100 words, with a call to action")
   - 6.2. Provide the steps the model should follow ("First analyze the data, then identify trends, finally summarize")

### STRUCTURE YOUR PROMPT

7. Providing structure such as XML tags in your prompt helps serve as delimiters for the model (`<context>...</context>` `<task>...</task>`)

### PROVIDE EXAMPLES

8. Give the model sample input/output pairs
   - 8.1. Useful for capturing corner cases or complex output formats
   - 8.2. "One-shot": Provide one example
   - 8.3. "Multi-shot": Provide multiple examples
