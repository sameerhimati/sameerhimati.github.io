---
title: "[PapersSummarized] Very Deep Convolutional Networks For Large-Scale Image Recognition (2015)"
date: "2025-03-24"
description: "K. Simonyan et al. — VGG paper showing deeper is better with smaller filters. Rating: 1/5."
tags: ["Papers", "Computer Vision"]
---

*Rating: 1/5*

A very cool paper that was a followup to the infamous AlexNet Paper we covered earlier. The main motivation of this paper was to take the success of the AlexNet paper and expand it, training deeper, and for longer. The AlexNet paper was dense with various techniques, the researchers instead focused on finding the most important parts of that complexity and worked exclusively with smaller filters (3x3 kernels) and same padding to preserve dimensionality. They also used a 1x1 filter to add additional non-linearity on features.

Another interesting adaptation was that they didn't use a complex training pipeline like the AlexNet paper did taking various crops of images, instead they used one random crop of the image but did use the same RGB SVM and horizontal flipping from the AlexNet paper. Lastly, an interesting feature of having such a deep CNN is that the regularization was implicit via its depth, hence, despite having more parameters, the model converges faster, also helped by how they initialized the weights of the model.

**Recommended Read:** Although its a widely used paper and its amazing to see how they took all the various adjustments AlexNet used and filtered to use the most important ones; I would only recommend it as a read for individuals who want to gain some context for how to deeper Conv Nets made a huge difference, kinda like a historical read, hence a 1 out of 5 rating. It was revolutionary for its time but I don't see a reason to come back unless as there are future papers that built on this.
