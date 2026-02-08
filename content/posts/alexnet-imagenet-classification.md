---
title: "[PapersSummarized] ImageNet Classification with Deep Convolutional Neural Networks (2012)"
date: "2025-03-11"
description: "A. Krizhevsky et al. — The paper that lit the deep learning revolution. A must read. Rating: 5/5."
tags: ["Papers", "Computer Vision"]
---

*Rating: 5/5*

Most people in the field of AI/ML will mention the release of this paper as the fire that lit the revolution we are seeing today and up until I read this paper I just saw it as some sort of smoke show hype and never understood how full on ideas and techniques an 8 page publication can be; I never imagined it but its testament to the caliber of its authors. ***A must read for any practitioner not only for how important its concepts are but how easy to understand a lot of the ideas are.***

On the surface one will view this paper's innovations as being one siloed in the world of Computer Vision; but there are ideas that transcend the Vision space into all aspects of how we scale this notion of the perceptron to Neural Networks and into the modern day with the massive sizes of models we are seeing with LLMs.

Amazingly the one concept I never understood about CNNs that was clarified when I read this paper was around Pooling and Padding and the intuition behind why they work. I always thought they were losses in information but it was part of a larger idea of **Downsampling** and the idea behind it is we using filter to encode the spatial presence of some pattern over different "snaps" of the picture and these downsampling techniques are ways of finding the _maximal presence_ of different features in some window of the image.

## Notable Ideas the Paper Covered

### 1. Reducing Overfitting

**i. Data Augmentation (Specifically for CV):** The easiest way to reduce overfitting on image data is to artificially enlarge the dataset by using label-preserving transformations. The authors use 2 main forms of augmentation:

a. **Positional augmentation:** This is done by performing translations and horizontal reflections on the images. Specifically, a 224x224 patch of the original 256x256 image is taken leading to 5 patches, 4 for each corner and a center patch and for all the horizontal reflections are considered. Therefore for each picture you end up with 10 patches, and averaging the predictions on the 10 patches yields the output.

b. **Image coloring augmentation:** The idea behind this is the notion of building a classifier that can learn objects. Specifically by altering the RGB pixel values using PCA. What this does is it captures an important property of natural images; objects identity is invariant to changes in intensity or color of the illumination.

**ii. Dropout:** This is a very common technique in Neural Networks now but it was a novel idea at the time. It essentially worked by reducing the network's over reliance on certain neurons and reduces complex co-adaptations of neurons together as they cannot rely on the presence of particular other neurons anymore. The idea is with a certain probability, in this paper 0.5, you set the output of neurons to 0.

**iii. Use of ReLU activations:** What surprised me the most about this paper was how clearly it explained why ReLU is so powerful and widely used. The notion is simple, the gradient of the ReLU is 1 if the input is positive and 0 if it's negative, kinda like how the neurons in our brain are either active or not. What this does is it significantly speeds up training time compared to saturating activation functions such as the TanH function. ***Essentially, ReLU is sparse, hence less overfitting as the gradients during backprop flow without diminishing (the main reason for the vanishing gradient problem).***

### 2. Building Larger (and faster) Networks

**i. Overall Architectural Decisions:** There are a lot of factors that the paper covers here, the use of Overlapping Pooling layers surprised me the most, I never thought you could set the stride in a way to ensure the layers slightly overlap in each pass over the input dimensions.

**ii. Distributed Training (Training on GPUs):** This idea is standard practice now but using the ability of GPUs to perform multiple computations in parallel was very smartly applied by the authors to leverage GPUs for complex Matrix Multiplications in parallel hence allowing the use of a network of this size to be trained faster and most efficiently.

**iii. Use of Momentum, Initializing Biases to 1 and Weight decay:** This one point caught me the most off guard, by setting the Biases to 1 initially you are accelerating the early stages of training by providing the ReLUs with positive inputs. This coupled with momentum to carry forward the learnings of previous epochs and weight decay to regulate the gradients from exploding all in conjecture is what ensured a smooth training process over 90 epochs on the 1.2 million images.

## My Perspective

As I alluded multiple times, this paper for me at least is a must read just purely due to the wealth of information and techniques it combined to get this level of groundbreaking performance. Yes not all these are required today but in the age of CNNs prior to the Attention mechanism and vision transformers it took this amount of ingenuity whose effects we are seeing through to this day in 2 big ways: **Bigger = Better** and **GPUs go brrrrr**.
