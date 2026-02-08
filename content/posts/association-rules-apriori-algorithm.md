---
title: "[PapersApplied] Mining Association Rules between Sets of Items in Large Databases (1993)"
date: "2025-02-21"
description: "R. Agrawal et al. — The Apriori Algorithm for finding item relationships in transaction data."
tags: ["Papers", "Machine Learning"]
---

**One line Summary:** This seminal paper that laid the foundation for the association rule learning algorithm - Apriori Algorithm is a must read to learn how ML was applied in the early days in business applications, particularly in the e-commerce space, to learning how certain items can boost the likelihood of other items being bought.

## Definitions

- **Itemset:** A group of items. Example: {Bread, Milk, Eggs}
- **Cardinality:** Number of items in the itemset. So {Bread, Milk, Eggs} has Cardinality of 3.
- **Consequent:** Items that are sold more as a result of other items/itemsets.
- **Antecedent:** Items/itemsets that cause other items/itemsets being bought.
- **Support:** How frequently an itemset appears in the dataset, given by count(itemset)/m where m is the total number of transactions.

## Explain it to a 5 year old

Imagine you wanted to figure out how different toys in your favorite toy store are related. How does you buying a new lego set cause you to want to buy Pokemon cards? This paper gives a technique of finding all the "high likelihood" item combinations.

## Explain it to a MLE

For a given dataset there are various possible combinations of items that are bought, the paper proposes an algorithm of building itemsets and to find relationships between all combinations of items. However, the naive approach would be very expensive computationally; specifically there are a total of 2^m potential itemsets that need to be explored for a database of m items.

The paper explores ways of optimization to reduce the average case runtime. The main powerful insight is the **Downward closure property** that states if an itemset is frequent, all its subsets must be frequent. Conversely, if an itemset is infrequent, all of its supersets/extensions are going to be infrequent.

This property is used for 3 main ideas:

1. **The Estimation Procedure:** Before doing the expensive work of counting exact support for itemsets, we make educated guesses about which combinations are likely to be frequent.

2. **Memory Management:** Once we know for certain that an itemset is infrequent, we can free up the memory used by transactions that only contain these proven-infrequent combinations.

3. **Pruning:** When we know an itemset is infrequent, we immediately "prune" away all potential larger itemsets that contain it. **This is sort of like a BFS that only explores frequent branches.**

## Final Thoughts

Although this paper was a harder read than expected the intuition behind the concept of the paper and its application made it easier to understand. I think its a great way to understand the creative ways researchers came up with solutions to the memory and computational constraints of systems and given the ever growing size of data these concepts can be applied to modern day technologies.
