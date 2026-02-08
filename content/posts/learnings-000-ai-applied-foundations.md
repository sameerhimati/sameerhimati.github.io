---
title: "[Learnings] 000 - AI Applied (Foundations)"
date: "2025-12-13"
description: "A practical guide to working with AI models — API basics, tokens, embeddings, and system prompts."
tags: ["AI", "Learnings"]
---

If you follow any course or tutorial on AI almost always people are Theory first, You'll see things like:

"First, let's understand attention mechanisms..." "The transformer architecture consists of..." "Mathematically, we can express this as..."

But in like 5 mins most people just pass the fuck out.

Instead I wanted to make this series of learnings based on application of working with AI models. Using the API. Calling Tools and building functionality. Real stuff.

And I mostly am going to be using Anthropic's Models and context but most of this stuff is company agnostic.

Let's start.

## 1. Types of Models

Usually we think of the best or fastest or latest model as the best for our use case but in reality models come in a spectrum. Think of a one dimensional axis with one end favoring Cost and Speed and the other end skewed towards Intelligence. A model like Haiku will lie on the low cost high speed extreme whereas power models like Opus will hug the new Benchmark breaking Intelligence side and somewhere in the middle will lie a generalist, best for most cases model like Sonnet. So your model choice should really be dictated by the type of task at hand. A smart ass model like Opus is great for stuff like coding or brainstorming but it's honestly a waste if you want to say write something or need help editing an article, thats more of Haiku's deal.

## 2. Building with the API

You want to build an application, let's say a chatbot, Step 1, get an API key. This key allows you to access Claude's models via the Anthropic API.

With an API key you have somewhere to send requests and receive responses from. The problem is most people starting out will bake their application with the API key on the client side. Don't! You want a layer, your server, in between your application and the Anthropic API where you will store your secrets and probably have an Anthropic SDK for a language of choice like python etc, this SDK is basically a bunch of the base functionality that you'd need like calling models etc built out already, kinda like boilerplate.

Okay now you have a chat frontend, a server with the anthropic SDK and are sending your messages like "What is AI?" in a request to the API, but what actually happens to your message when you send it?

## 3. Tokens, Embeddings and Contextualization

So in your request you have a bunch of shit but I'll just focus on the message part: "What is AI?".

### 3.1 Tokenization

When the model receives a string of text like this its first step is to Tokenize the string into tokens. Essentially small chunks of text, that helps the model interpret what each individual word or chunk means. So in our example 1 sentence like "What is AI?" Will be split into 1. "What" 2. "is" 3. "AI" 4."?" 5. (this is a special character denoting we've reached the end of the sentence.).

### 3.2 Embeddings

After we have these individual tokens each token is embedded. Embedding is basically turning a word/token into a vector of numbers models can interpret. There are various Embedding models but in essence a word like "What" may be embedded into something like [0.48, -0.31, ..., 0.99] and this vector lives in a vector space of all the other words or chunks that exist. And these numbers are gibberish to you and me but lets say 2 words that are close in the English language like "Medicine" and "Drug" will have vectors relatively closer compared to say "Medicine" and "Car".

### 3.3 Contextualization

A lot of words in the English language have drastically different meanings based on the context, for example a word like "Drug" can be both helpful or harmful depending on the context of its usage. That's where the model, based on the surrounding words, tweaks the embedding vector to be relevant contextually and correctly capture what is being conveyed by the user.

### 3.4 Generation

A response is created based on the previous steps, and here the model picks words, one by one based on a probabilistic response. For example the model will pick the first word "AI" then "stands" then "for" and so on till it either reaches the max tokens or the EOS token.

## 4. Multi-turn Conversations

One thing to note, models are stateless. They don't have persistent memory or conversation history so it's your job to maintain a list of the messages both sent and in every subsequent future request include that full messages list, hence why long conversations can get expensive very fast!

## 5. System Prompts

Often you'll get generic responses but if you want to shape the model's tone, style or approach to match a specific use case, you'd do so using system prompts. For example, say you are writing the script for a Shakespeare inspired play depicting Kung Fu Panda. You'd formulate a system prompt to something like: "Rewrite this play's script with the style of Shakespearian work"

## 6. Temperature

A powerful parameter you can adjust on models that controls how creative or deterministic you want the model's response to be. This you should control based on the nature of your task. It ranges from 0-1 with 0 being the most deterministic and 1.00 being the most on the creative side. Here is how I'd choose:

1. Low Temperature (0.00-0.30) - Factual responses, Code, Data extraction.
2. Medium Temperature (0.4-0.7) - Summarization, Educational, Problem Solving.
3. High Temperature (0.8-1.0) - Brainstorming, Creative Writing, Marketing Content.

## 7. Response Streaming

When working with a prompt that will output a lot of text lets say instead of waiting for the full output to be generated you can stream the response, this is set with a parameter in the request, stream = True, and it will then chunks of text as Claude generates them (remember in 3.4, the full output isn't returned, its created word by word.)

## 8. Controlling the Model's Output

There are 2 main ways to control a model's output if you want it to be structured or very specific, say JSON code.

### 8.1 Message Pre-filling

A string at the start of the output so the model goes "oh I already said these words, let me continue". An example is say you want a story to begin specifically with "Once upon a time..." you can set in the assistant's previous message a prefilled string "Once upon a time ".

### 8.2 Stop Sequencing

A string you give to specifically end the output of the model on. Say you are generating code, mostly models will wrap them in triple backticks so you can set this as the stop sequence to stop the response there without getting any of the explanation that models typically return after the code.

---

Here I've covered a lot of the basic tips, tricks and ways in which these models work from a practicality perspective and how you can play with them. Of course this isn't enough to get started, the best place is the docs of any of these companies but here is a kind of translated version of the inner workings or the way I understand these concepts.

Next I will go into Prompt Engineering and Evaluation - where you actually start shaping how the model behaves.
