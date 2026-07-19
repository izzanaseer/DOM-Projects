# Unlimited Colors

A simple JavaScript project that continuously changes the webpage's background color to a random hexadecimal color every second using `setInterval()`.

## Overview

This project demonstrates how to start and stop a repeating action using JavaScript timer functions.

- **Start** → Begins changing the background color every second.
- **Stop** → Stops the color changes.

## Concepts Practiced

- `setInterval()`
- `clearInterval()`
- DOM Manipulation
- Event Listeners
- Random Number Generation
- Generating Random Hex Colors
- Variable Scope
- Preventing Multiple Intervals

## How It Works

1. Clicking the **Start** button creates an interval (if one isn't already running).
2. Every second, a random hexadecimal color is generated.
3. The generated color is applied to the page's background.
4. Clicking the **Stop** button clears the interval and stops the color changes.

## Project Structure

```text
unlimitedColors/
│── index.html
│── colorsScript.js
└── README.md
```

## ▶How to Run

1. Clone this repository.

```bash
git clone https://github.com/izzanaseer/unlimitedColors.git
```

2. Open the project folder.

3. Open `index.html` in your browser.

4. Click **Start** to begin changing the background color.

5. Click **Stop** to stop the color changes.

## 📚 Learning Goals

This project was built to strengthen my understanding of:

- JavaScript timer functions
- Working with intervals
- Dynamic DOM updates
- Random color generation
- Writing cleaner event-driven code

## 💡 Sample Generated Colors

```text
#4F8AE1
#C92F7A
#17D3B6
#FFAA00
#8B45FF
```
