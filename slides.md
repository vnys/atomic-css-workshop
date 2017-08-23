---
title: Atomic CSS Workshop @ Knowit
author: Victor Nystad
date: 2017-08-23
patat:
    slideLevel: 1
    theme:
        codeBlock: [onDullBlack]
        syntaxHighlighting:
            float: [vividGreen]
            dataType: [vividMagenta]
            keyword: [vividGreen]
---

> We’re not designing pages, we’re designing systems of components.
> — Stephen Hay

. . .

- Separere design fra markup
    - Redesigne uten å røre html
- Slutt på <font> og usynlige giffer 😀
- Farvel tabell
- CSS Zen Garden

<http://www.csszengarden.com/038/>


Noen år senere...
===============

- Lekkasje
- Spesifisitet 🤔
- Encapsulated Style Modules?
- Finner opp hjulet på nytt
    - 50 shades of gray
- Bloat
    - Nye stiler i slutten av css-filen
    - Semantiske klassenavn
    - Rammeverk

<http://tryg.no>
<https://specificity.keegan.st/>


CSS har et problem
==================

- Preprosessorer
    - Sass
    - Less
    - Stylus
    - Vanilla CSS 👍 (med Postcss)
- OOCSS
- BEM
- ITCSS
- SMACSS
- CSS Modules
- Atomic Design
- Atomic CSS
- Suit CSS
- Etc.


Hvordan skrive CSS som...
=========================

- Er skalerbar
- Er enkel å vedlikeholde
- Er robust og forutsigbar
- Er gøy å jobbe med
- Lett å sette seg inn i

. . .

> In [the monolith] model, you will never stop writing css.
> Refactoring css is hard and time consuming. 
> Deleting unused css is hard and time consuming. 
> And more often than not - it’s not work people are excited to do. 
> So what happens? People keep writing more and more css.

> Adam Morse (tachyons)



Atomic/Immutable/Functional/Utility CSS
=======================================

- Lavnivå klasser
    - Spesifisitet på 0010 (inline har 1000)
    - En klasse, en deklarasjon
    - Responsiv
- Skriv en gang og ALDRI RØR IGJEN
    - Eller la andre skrive (npm)
    - Eller bruk Atomizer
- Komponerbar

```css
.display-none {
    display: none;
}
```
```html
<div class="display-none">Usynlig</div>
```

<https://gist.github.com/mrmrs/786241f0a5fade0324e2>


Back to basics?
===============

```css
.font-size-16px {
    font-size;
}

.color-orange {
    color: orange;
}
```
```html
<div class="font-size-16px color-orange">Party like it's 1999</div>
```


Sengelektyre
============

<http://mrmrs.github.io/writing/2016/03/24/scalable-css/>
<https://www.smashingmagazine.com/2013/10/challenging-css-best-practices-atomic-approach/>


Nok prat!
=========

1. http://codepen.io
2. https://github.com/batfink/atomic-css-workshop

