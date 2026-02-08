---
title: "[NotesToSelf] Intuition Behind Why ReLU Works So Well"
date: "2025-03-10"
description: "Breaking down why ReLU is the go-to activation function in neural networks."
tags: ["Notes", "Deep Learning"]
---

**Non-linearity:** The key purpose of activation functions is to introduce non-linearity into neural networks. Without non-linearity, a neural network would just be a series of linear transformations, which is equivalent to a single linear transformation - severely limiting what the network can learn.

**Gradient flow:** While ReLU does zero out negative values, it has a crucial property: its derivative is either 0 (for negative inputs) or 1 (for positive inputs). This means for active neurons, gradients flow through unchanged during backpropagation without diminishing (unlike sigmoid or tanh which can cause vanishing gradients).

**Sparse activation:** By setting negative values to zero, ReLU creates sparsity in the network - only some neurons activate for any given input. This is actually beneficial because:

- It makes the network more computationally efficient
- It helps with feature selection (only the most relevant features produce activation)
- It reduces the chance of overfitting

**Feature representation:** Think of each neuron as detecting a specific feature. If that feature isn't present (negative activation), the ReLU says "this feature isn't relevant" by outputting 0. If the feature is present (positive activation), the ReLU passes through how strongly that feature is present.
