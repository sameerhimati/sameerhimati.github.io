---
title: "[PapersApplied] Induction of Decision Trees (1986)"
date: "2025-02-14"
description: "J. R. Quinlan — The precursor to C4.5 and C5 algorithms for creating decision trees."
tags: ["Papers", "Machine Learning"]
---

**One line Summary:** Pretty good for understanding the early work and intuition behind decision trees and is the precursor to the C4.5 and C5 algorithms for creating decision trees. Lays the groundwork for how we think about picking the correct discriminators at each level of the tree with an easy to understand and follow example.

## Explain it to a 5 year old

Imagine you wanted to decide whether or not the weather is good to play outside with your friends but there are so many factors at play, like the wind, how hot it is, whether or not its going to rain, etc. Well we can use something called decision tree to help you decide if you should go or not based on these factors. This paper introduces a way to create one of these decision trees.

## Explain it to a MLE

For a given dataset there are various possible correct decision trees, some more elaborate and others simple. How do you pick the correct one to use to correctly perform well on unseen data? The paper, in the end of section 3, explains why usually its the simplest, most elegant explanation thats closest to the truth (Occam's Razor). Now you may ask, okay but how do we get that simple, elegant decision tree...that's what the paper seeks to find and does an inductive proof of a method called ID3 that does so in most cases.

## Paper Implementation

I ran this implementation from a dataset I created and uploaded on Kaggle. The code for this can be found on my [GitHub repository](https://github.com/sameerhimati) implementing this algorithm from scratch. To test if the algorithm works I created 2 datasets. One with randomly generated noisy data, where the expected output Decision Tree will be large, and another clean where the data isn't clean similar to the example in the paper and its Decision Tree is a simple, smaller but more accurate representation.

As we know for noisy datasets where there is no set pattern, we are going to find large, unorganized trees with unnecessary complexity. The simple tree based on non-noisy data produces a clean, small but accurate representation.
