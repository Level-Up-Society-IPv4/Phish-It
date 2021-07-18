## Inspiration

91% of data breaches start with a spear phishing attack. Phishing costs American businesses alone half a billion dollars each year. And "Nigerian prince"-type scams still steal over $700,000 from individuals each year. Lots of platforms offer training and guidance about how to identify phishing emails, but since these scams are still so effective, we think it's time for a new approach. Many existing phishing training programs are a drag⁠—you take them once a year as part of your corporate training module, then never think about it again. We decided to create something engaging that would keep you coming back.

## What it does

Phish Me is a gamified phishing training platform that trains you to avoid phishing emails by teaching you to think like a phisher. You construct phishing emails to fake targets. As you construct emails, you get live feedback that teaches you to be a better phisher, and also subtly teaches you the habits and tactics of real phishers. After each email, you get a score based on how well you did, and a fictional outcome for the target of your phish. You also gain coins, proportional to your score, which you can spend to use more advanced phishing techniques.

You can also enter your email address to "sign up" (right now we just send you one email as soon as you sign up) for phishing emails. When you get an email, if you correctly identify it and enter the subject line into our site, you get more coins to spend on your phishing challenges.

## How we built it

We designed our screens in Figma and built our prototype in React. We deployed the site with Netlify and set it to automatically deploy each time we updated the site. To send the emails, we used a serverless function in Netlify.

## Challenges we ran into

Netlify does not have many options for persistent storage. We did not want to spend hours of our time standing up a separate database and connecting Netlify to it, so we decided to forego server-side storage. This meant that all data we stored had to be kept on the front end. This limited us somewhat, as our vision was (and still is) to have user accounts and to allow users to interact with each other. However, it also gave us opportunities to think outside the box about how to communicate our vision using only the front end.

## Accomplishments that we're proud of

We built and deployed a working prototype of the app, and it has more features than we had even imagined initially. The EXP bar, level tracker, and coins all motivate the users. The quiz tells a bit of a story with every option you select, which makes you want to keep playing to find out where it's going next. We made a game that is fun for us to play, and we can't wait for other people to play it too.

Perhaps more importantly than the site, we are proud of the ideas that we developed. We believe that flipping the perspective of the user from the phishee to the phisher will help users retain what they learn, and we are positive that it will be great for marketing. Give a man a phish and he'll be scammed for a day; teach a man to phish and he'll never be scammed again.

## What we learned

For everyone on our team except Mansi, this was our first hackathon. We learned to work on a team of mostly strangers, dividing responsibilities on the fly and trusting our teammates to fulfill their commitments.

We all had the opportunity to learn about gamification and making learning fun. As we worked on the project, we would read an article about gamification, discuss it, and adjust our approach. This is what guided our decision to add coins. We read about giving users tangible rewards, and allowing the game to increase in complexity incrementally. The coins implement both of these ideas---users get coins for the emails they compose, and they will not be able to access the paywalled features until they have practiced composing some phishes. Once we added this, we immediately felt how much more engaging it was. This sort of learning guided our whole design and development process; read something, try it, and learn firsthand why it works.

## What's next for Phish Me

Multiplayer! We want people to sign up with their friends or for companies to sign up their employees. Then, players can send controlled phishing emails to their group members. If someone falls for your phish, or if you correctly report someone's phish, you get points (and coins, which will function similarly to how they do in the solo challenges). Then, we will display a leaderboard that tracks who in your group are the best phishers and the best phish detectives.

Along with the multiplayer mode, we will create an avatar customizer where users can design what their phisher alter egos looks like. They will start with basic options, and then unlock more options using coins. This will further incentivize users to get more coins, and it will uniquely identify them to their friends.

We also plan to add premium enterprise-specific features, such as integrating with Outlook (to ensure our fake phishes are not sent to spam), requiring challenges and tracking whether users complete them, and analytics that show how good employees are at detecting phishes and where the organization's blind spots are. We will sell these features to corporations, which will account for most of our income.
