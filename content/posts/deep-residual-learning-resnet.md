---
title: "[PapersSummarized] Deep Residual Learning for Image Recognition (2015)"
date: "2025-04-03"
description: "K. He et al. — How residual connections solved the degradation problem in deep networks. Rating: 3/5."
tags: ["Papers", "Computer Vision"]
---

*Rating: 3/5*

A hallmark paper expanded the ideas from AlexNet and VGG. The main motivation of this paper was to take the success of the AlexNet with regards to parallel computing and the effectiveness of CNNs and the depth that the VGG paper showed in how larger = better and took those concepts further, only catch is they found a change in the architecture that would be key to the success of scaling these models, the **residual connection**.

Specifically, the main problem of larger/deeper models is the problem of vanish/exploding gradients which significantly slow down convergence. Now this problem was largely addressed with the introduction of normalization of both initial weights and intermediate layers. However, a knockoff affect of this is the _degradation_ problem where deeper networks saturate accuracy and degrade in performance, the fix the paper introduces is by proposing an architectural change of adding residual connections across layers of the network which work like "shortcuts" between layers. The result is a deep network that is much easier to optimize and does not face the affects of degradation which gives accuracy gains from greatly increased depth.

The residual connections that were introduced in this paper remains as one of most influential implementations of a new network architecture to CNNs that are still used to this date. This paper gives readers an idea as to how the researchers got to the modification, how it sped up training and shows how with different depths they found the optimal depth of layers for a CNN. Overall, a really good insight was gained regarding how this modification to the vanilla architecture was derived and was an enjoyable read hence the 3 star rating. It doesn't have some of the relevance to be a frequent read but for someone interested in going deeper in the vision space it's an essential read.
