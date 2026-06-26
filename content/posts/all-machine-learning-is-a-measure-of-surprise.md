---
title: All (Machine) Learning is just a measure of surprise
date: 2026-06-25
description: Hamming's back-of-envelope math made me realize my own math fundamentals weren't strong enough, so I rebuilt it from the floor (exponentials, logs, surprise) until I got to cross-entropy loss, finally explaining itself from the bottom up.
tags:
  - Learning
  - ML
---

![(37.7724512, -122.4667004) Cool chair at Golden Gate Park](/images/all-machine-learning-is-a-measure-of-surprise.jpg)

I just started reading a new book, The art of science and engineering by Richard Hamming. As of writing this, I'm only into the first chapter where there was an example of how he looked at facts, claims and exposed their validity using these mental models. As he calls it 'back-of-the-envelope calculations', a method used by great scientists to get a good feeling for the truth or falsity of a claim. 

His example was verifying two complementary claims:

* **Claim 1:** "Knowledge doubles every 17 years"
* **Claim 2:** "90% of the scientists who ever lived are now alive"

The model of growth of both knowledge and scientists hence are both claimed to be exponential, with the growth of knowledge being proportional to the number of scientists alive. 

Specifically, the first claim assumes the number of scientists at any time, t:

$$
y(t) = a e^{bt}
$$

and the amount of knowledge produced annually has a constant k of proportionality to the number of scientists alive. Which leads to **claim 1**:

$$
\frac{1}{2} = \frac{\int_{-\infty}^{T-17} k a e^{bt} dt}{\int_{-\infty}^{T} k a e^{bt} dt} = \frac{(ka/b) e^{b(T - 17)}}{(ka/b) e^{bT}} = e^{-17b}
$$

I'm not going to write out the rest of the math. Admittedly, at this point, I was confused. After a few passes the logic makes sense, it's beautiful how he ties and verifies the claims, but it isn't naturally intuitive to me. 

However, he puts this form of thinking not as a gift you are born with but a muscle you train. Personally, despite implementing various models in production, I never *'saw'* a logarithm or a natural exponential the way he just took a simple statement like knowledge doubles every 17 years. 

---

Exponentials and logarithms are everywhere in the AI/ML space: loss curves, probabilities, learning rates. 

I just watched Hamming use them to read the world. So the natural starting point was looking at how things grow. Linear vs exponential growths, a straight line vs exploding ramp. 

Linear functions grow by a fixed amount where the rate of change depends on nothing, and hence the rate of change is constant, it doesn't depend on where you are. Exponential functions however, grow based on their current size, and its rate of change, its slope, equals the current height. 

But why does it equal the height? I can feel that the height is how far off the base we have gotten at that point of time. But if you asked me to derive why, to show you where that comes from, I don't know yet and perhaps this is what I'll be doing next. 

Exponential growth is just repeated multiplication. The simplest case is doubling: 1 => 2 => 4 => 8 => 16 and so on but it can be growth by any factor, 1.1x, 6000x, anything. So if someone says they can double my money every 3 years, I need to think in exponentials with a factor of 2. That runs forward: tell me the number of doublings, I'll tell you the current size, year, age, etc. 

So a natural question was figuring out the reverse: handed a size, how many doublings deep am I? My reflex grabbed a square root. That's incorrect, a square root undoes squaring.
What undoes an exponential is the logarithm.

---

We're taught to think in additive terms, a \$30,000 raise just adds \$30,000 to your name. But the world often moves multiplicatively, and those jumps feel like changing levels: \$30,000 on top of \$30,000 is a new life, the same raise on top of \$150,000 barely registers. Compounding, growth, a founder watching users climb, it's all multiplicative, and it's genuinely hard to translate between the two worlds.

Growth is seen in exponentials. Division is the reverse of a single multiplication. But growth is repeated multiplication, and the reverse of that isn't division or roots, it's the log.

Digging in further what log is doing is turning × into +. So a ×2 becomes a +1 level, a ×8 becomes a +3 level jump (thinking in base 2 here). Those multiplicative jumps, the new 'levels' of progression don't sit on a ruler our brains naturally interpret. That is the translation, log bridges between the two worlds.

At some point in university, I'd been told that log and e are the two most important pieces of math for interpreting the world. I nodded and never understood why until now. Log used to be the black box function I memorized and added where required, but now it's just the bridge between those two worlds. 

---

Now practically speaking, where this × → + translation is common is in the world of probabilities. Probabilities are what all machine learning is based on and all learning is just a measure of how probable outcomes are. 

They measure how likely the occurrence of an event is, this can be how likely is it that this picture is a cat, given that I see features that look like whiskers. Or how likely is the next letter 'e' given that the first two letters are 'th'.

So why do we even need this? A model doesn't *know* anything, it just assigns probabilities to outcomes, and "learning" is nothing more than it getting better at putting high probability on whatever turns out to be true. 

Flip that around: a model that has **learned** (guessed actually) well is one that reality rarely surprises, it expected the cat and it was a cat. A dumb model is one that hasn't learned, i.e. it is constantly blindsided. So if you want a single number for *how well is this thing learning*, you measure how surprised it is by the truth and drive that number down. 

But how do you actually measure surprise? 

The interesting thing about the logarithmic function is that for inputs above 1 it compresses, turning big multiplicative numbers into small additive 'levels' like I showed above. 

But probabilities live between 0 and 1, and there the log becomes negative. log is 0 at p = 1, sliding toward −∞ as p → 0. Every probability becomes a negative number, and the rarer the event, the more negative it gets. Flip the sign and that becomes a positive *surprise* score. 

In the world of chance, the log is better understood as a measure of how *surprising* something is: the more certain the event, the closer to 0; the rarer it is, the higher the surprise. Take three cases:

| event                     | probability                  | surprise = −log₁₀(p) |
| ------------------------- | ---------------------------- | -------------------- |
| the sun rises in the east | ≈ 1 (~100%)                  | **0**                |
| a coin lands on heads     | 0.5 (50%)                    | **0.3**              |
| you win the lottery       | ~3×10⁻⁹ (≈ 1 in 300 million) | **8.5**              |

So what should an honest surprise meter do? Four things:

- A certain event (p = 1) that happens carries **zero** surprise.
- An "impossible" event (p → 0) that happens anyway carries **infinite** surprise.
- Rarer always means more surprising.
- And if two independent unlikely things both happen, the surprises should **add**, struck by lightning *and* winning the lottery on the same day should feel like the sum of both shocks. (Insane if this happens!)

My first guess was 1 − p, just "how unlikely it was." But it fails in one obvious way, its max is 1. So a one-in-a-billion miracle scores 0.999…, barely more than a coin flip's 0.5, when a miracle should be off the charts, not twice a coin. 

The better idea is starting with the conditions, for two independent events the probabilities **multiply**, but surprise has to **add**. See where I'm going with this...

The only function that turns × into + is the log. So surprise has to be a log of the probability, and since that probability sits between 0 and 1 its log is negative, so we flip the sign:

$$
\text{surprise}(p) = -\log(p)
$$

−log is the only function that satisfies all four requirements at once, and it has a name: *information*, measured in bits. 

Later I intend to find the origins of this from what Claude Shannon defined as information theory but that's for a later write up.

---

Now the loss function I'd been using blind all these years seems to make sense. A model outputs a probability for the correct answer, say it's 70% sure the image is a cat, and it *is* a cat. Its surprise is −log(0.7). Do that for every example and average it, and you have cross-entropy:

$$
\text{Cross Entropy} = -\frac{1}{N}\sum_{i=1}^{N} \log\left(p_i\right)
$$

where pᵢ is the probability the model gave the *correct* answer on example i. That's the whole idea: cross-entropy is just the model's average surprise vs reality, and training is the act of driving that surprise down. (The base of the log only rescales everything, so it doesn't change training, ML conventionally uses the natural log.)

The most important of the 4 requirements is dealing with the confident-but-wrong case. That's why −log is so good. 

Picture a model 99.99% sure the image is a cat when it's actually a dog, it handed the truth a probability of 0.0001. Under −log that's a loss of 4; push it to 99.9999% wrong and the loss climbs to 6, and on without limit. Under 1 − p it's stuck at 0.9999 no matter how arrogantly wrong it gets. 

Steep loss means a steep gradient means a hard shove back toward the truth; a flat loss gives the model no reason to move. That's why every classifier on earth trains with −log: it makes confident mistakes the most painful thing a model can do.

---

So that's one function, closed. Or at least cracked open enough that I can 'see' it now instead of just plugging it in where the textbook told me to.

I'm not going to pretend I understand logs fully, I don't. This was a start. But writing it forced me to actually stare at the gaps, and the biggest one is still sitting right there: I kept tripping over e and the natural log, ln, and I still can't tell you what actually makes it 'natural'.

It's everywhere. The exponential Hamming used for knowledge was eᵇᵗ. Cross-entropy is conventionally written with ln (natural log). Earlier I said an exponential's slope equals its own height and admitted I couldn't derive why, and it turns out that's exactly what e is hiding. So why this one number, e = 2.718..., why does it keep showing up across all of math and ML?

That's what I'm curious about now. Not because it's the next box to tick, but because I clearly don't get it yet, and the whole point of this was to stop memorizing and start seeing.
