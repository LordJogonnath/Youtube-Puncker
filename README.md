This extension:
1. Detects when you are on incognito mode and redirects you to a locally hosted custom funny webpage when you go to youtube.
2. Instead of the home page, the subscriptions page is brought upfront.

You need to run a simple self hosted server for this. To do this, type into the terminal:

1. On Windows: python -m http.server 8000
2. On Linux/macOS: python3 -m http.server 8000

This runs a local server.

Take the files from the main branch into a folder and load this folder in your browser's extensions page. It should work.

PS: I made this for Vivaldi and Edge. It should work on all Chromium based browsers, though. 

Automate the process!
---

You can also write a .bat script for opening the terminal and running the python command on every sign in, into your computer. That way, you don't need to worry about 
activating this extension every time you start your computer. You can work distraction free anytime.

To do that:
1. Place the .bat file into the Windows startup folder.
2. Access the folder by running shell:startup in the Run Window (Win + R)
3. A similar process should be there for Linux, but with a bash script. Once I try it out, I will update this.

---
A fun personal project that I undertook. 

I was getting distracted by youtube. To not ruin my reccommendations,  I would use incognito to search up and watch videos irrelevant to me, for entertainment. 
I decided to prevent myself from going there. I used AI to help write the code for this. Learnt some good stuff along the way.
