---
title: "[PapersSummarized] Backpropagation Applied to Handwritten Zip Code Recognition (1989)"
date: "2025-03-10"
description: "Y. LeCun et al. — The first successful large-scale commercial application of backpropagation. Rating: 3/5."
tags: ["Papers", "Deep Learning"]
---

*Rating: 3/5*

The author discovered this paper while researching Rumelhart's original backpropagation work, as this represented "that idea's first, successful large-scale commercial application." The paper introduced early convolutional neural networks for multi-class classification and revealed how networks develop understanding through layers -- earlier levels extract low-level information while deeper layers build upon these features for classification.

A key innovation discussed is **Translational Invariance**: the principle that image features can be detected regardless of position. This connects to **weight sharing** -- using identical weights across different image regions. Rather than applying a 16x16 filter to a 16x16 image, the authors used smaller 5x5 filters applied to various image sections. This approach reflects that "a curve detected is a curve detected," whether positioned at image edges or centers. Weight sharing reduces computational parameters significantly while maintaining feature detection capabilities.

## Results & Significance

The research achieved "a error rate of 5% on the test set," despite limitations from character segmentation errors. A crucial insight emerged: "a major reason for the success of back-propagation is due in part to the high redundancy of real data."

## My Perspective

I rate this paper 3 out of 5 for historical context. Initially rating it lower, a second reading revealed weight sharing's importance. The breakthrough moment came understanding why CNN layers progressively shrink -- not through information loss but through abstraction, consolidating lower-level information into higher-level decision-making.

**Takeaway:** Weight sharing emerged from computational necessity and became foundational to modern CNN systems, illustrating how constraints drive innovation.
