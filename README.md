This extension:
1. REMOVES Youtube Shorts from your homepage!
2. Detects when you are on incognito mode and redirects you to a custom funny webpage when you go to youtube.
3. Instead of the home page, the subscriptions page is always brought upfront.

How to use this?
---
1. Download the repo as a .zip file
2. Go to the browser's extensions page, and turn on Developer Mode.
3. Click on "Load Unpacked" and select the folder in which you downloaded the .zip file.
4. Enable your extension!

How does it work?
---
1. Short-Remover: A javascript code checks for all the elements corresponding to Shorts and removes them.
2. Incognito-Redirector: The same javascript file checks when incgonito is turned on, and redirects youtube to a custom meme page.
3. Subscription-Redirector: The same javascript file checks when youtube is in the browser's search query and redirects to the subscriptions page.

Loopholes
---
1. Shorts can still be viewed if they are searched for. However, NO shorts will be shown to you by default.

Further Improvements
---
1. Make different branches for different versions: Currently, the same javascript file does all the work. The main branch will be forked into other branches, one for each version, so that anyone can use them independently or make whatever combination they wish. I made this as a highly personalized product, initially for myself, and wanted all these features, that is why all work is done by one file.
2. Homepage-Redirection: Currently, the home page cannot be accessed even if it's icon is clicked on, since youtube reloads to the subscription page anyway. I have learnt that the home page is an important way of learning for some people, so another branch shall be made where the homepage can be accessed.

If you have any ideas then please let me know!

---
A fun personal project that I undertook. 

I was getting distracted by youtube. To not ruin my reccommendations,  I would use incognito to search up and watch videos irrelevant to me, for entertainment. 
I decided to prevent myself from going there. I used AI to help write the code for this. Learnt some good stuff along the way.
